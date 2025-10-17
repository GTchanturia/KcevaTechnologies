import type { Deal } from '$lib/types/deal';
import dealsData from '../../../data/deals.json';

export function getAllDeals(): Deal[] {
  return dealsData as Deal[];
}

export function getDealBySlug(slug: string): Deal | undefined {
  return getAllDeals().find(deal => deal.slug === slug);
}

export function getDealById(id: string): Deal | undefined {
  return getAllDeals().find(deal => deal.id === id);
}

export function getDealsByCategory(category: string): Deal[] {
  return getAllDeals().filter(deal => deal.category === category);
}

export function getFeaturedDeals(limit: number = 6): Deal[] {
  return getAllDeals()
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
}

export function getCategories(): string[] {
  const categories = new Set<string>();
  getAllDeals().forEach(deal => categories.add(deal.category));
  return Array.from(categories).sort();
}

export function calculateSavings(deal: Deal): number | null {
  if (!deal.oldPrice) return null;
  return deal.oldPrice - deal.price;
}

export function calculateSavingsPercentage(deal: Deal): number | null {
  if (!deal.oldPrice) return null;
  return Math.round(((deal.oldPrice - deal.price) / deal.oldPrice) * 100);
}

export function isExpired(deal: Deal): boolean {
  if (!deal.expiresAt) return false;
  return new Date(deal.expiresAt) < new Date();
}

export function formatPrice(price: number, currency: string): string {
  const symbols: Record<string, string> = {
    USD: '$',
    EUR: '€',
    GBP: '£',
    CAD: 'CA$',
    AUD: 'A$'
  };

  const symbol = symbols[currency] || currency;
  
  if (price === 0) return 'Free';
  
  return `${symbol}${price}`;
}
