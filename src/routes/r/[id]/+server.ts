import { getDealById } from '$lib/utils/deals';
import { error, redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ params, url }) => {
  const deal = getDealById(params.id);
  
  if (!deal) {
    throw error(404, 'Deal not found');
  }
  
  // Add UTM parameters to the affiliate link
  const affiliateUrl = new URL(deal.affiliateLink);
  affiliateUrl.searchParams.set('utm_source', 'kcevadaily');
  affiliateUrl.searchParams.set('utm_medium', 'affiliate');
  affiliateUrl.searchParams.set('utm_campaign', deal.id);
  
  // Log click (in production, you'd send this to analytics)
  // For now, just console log
  console.log(`[Affiliate Click] Deal: ${deal.id}, Title: ${deal.title}, Timestamp: ${new Date().toISOString()}`);
  
  // Redirect to affiliate link
  throw redirect(302, affiliateUrl.toString());
};
