/**
 * Fetch and Transform Deals Script
 * 
 * This script fetches deals from external sources (RSS feeds, APIs, Airtable)
 * and transforms them into the deals.json format.
 * 
 * Configuration:
 * - Set AIRTABLE_API_KEY and AIRTABLE_BASE_ID in environment variables
 * - Or configure RSS feed URLs below
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const DEALS_FILE = path.join(__dirname, '..', 'data', 'deals.json');

/**
 * Fetch deals from Airtable
 * Requires: AIRTABLE_API_KEY and AIRTABLE_BASE_ID environment variables
 */
async function fetchFromAirtable() {
  const apiKey = process.env.AIRTABLE_API_KEY;
  const baseId = process.env.AIRTABLE_BASE_ID;
  
  if (!apiKey || !baseId) {
    console.log('Airtable credentials not configured. Skipping...');
    return [];
  }
  
  try {
    const response = await fetch(
      `https://api.airtable.com/v0/${baseId}/Deals`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`
        }
      }
    );
    
    if (!response.ok) {
      throw new Error(`Airtable API error: ${response.statusText}`);
    }
    
    const data = await response.json();
    
    // Transform Airtable records to deals format
    return data.records.map(record => ({
      id: record.fields.id || record.id,
      title: record.fields.Title,
      slug: record.fields.Slug || generateSlug(record.fields.Title),
      description: record.fields.Description,
      excerpt: record.fields.Excerpt || record.fields.Description,
      price: record.fields.Price || 0,
      oldPrice: record.fields.OldPrice || null,
      currency: record.fields.Currency || 'USD',
      affiliateLink: record.fields.AffiliateLink,
      image: record.fields.Image || '/images/placeholder.jpg',
      category: record.fields.Category,
      tags: record.fields.Tags || [],
      region: record.fields.Region || ['GLOBAL'],
      publishedAt: record.fields.PublishedAt || new Date().toISOString(),
      expiresAt: record.fields.ExpiresAt || null
    }));
  } catch (error) {
    console.error('Error fetching from Airtable:', error);
    return [];
  }
}

/**
 * Fetch deals from RSS feeds
 * Configure your RSS feed URLs here
 */
async function fetchFromRSS() {
  // Example RSS feed URLs - replace with your actual sources
  const RSS_FEEDS = [
    // 'https://example.com/deals.rss',
  ];
  
  if (RSS_FEEDS.length === 0) {
    console.log('No RSS feeds configured. Skipping...');
    return [];
  }
  
  // Implement RSS parsing here
  // You can use libraries like 'rss-parser'
  return [];
}

/**
 * Generate a URL-friendly slug from a title
 */
function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Merge new deals with existing deals
 */
function mergeDeals(existingDeals, newDeals) {
  const dealsMap = new Map();
  
  // Add existing deals
  existingDeals.forEach(deal => dealsMap.set(deal.id, deal));
  
  // Update with new deals
  newDeals.forEach(deal => dealsMap.set(deal.id, deal));
  
  return Array.from(dealsMap.values())
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

/**
 * Main execution
 */
async function main() {
  console.log('Fetching deals...');
  
  // Load existing deals
  let existingDeals = [];
  if (fs.existsSync(DEALS_FILE)) {
    existingDeals = JSON.parse(fs.readFileSync(DEALS_FILE, 'utf-8'));
    console.log(`Loaded ${existingDeals.length} existing deals`);
  }
  
  // Fetch from various sources
  const airtableDeals = await fetchFromAirtable();
  const rssDeals = await fetchFromRSS();
  
  // Combine all deals
  const newDeals = [...airtableDeals, ...rssDeals];
  console.log(`Fetched ${newDeals.length} new deals`);
  
  if (newDeals.length === 0) {
    console.log('No new deals to process. Using existing deals.');
    return;
  }
  
  // Merge and save
  const mergedDeals = mergeDeals(existingDeals, newDeals);
  fs.writeFileSync(DEALS_FILE, JSON.stringify(mergedDeals, null, 2));
  console.log(`Saved ${mergedDeals.length} deals to ${DEALS_FILE}`);
}

main().catch(console.error);
