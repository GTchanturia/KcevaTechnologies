import { getDealBySlug, getAllDeals } from '$lib/utils/deals';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
  const deal = getDealBySlug(params.slug);
  
  if (!deal) {
    throw error(404, 'Deal not found');
  }
  
  // Get related deals (same category, different deal)
  const relatedDeals = getAllDeals()
    .filter(d => d.category === deal.category && d.id !== deal.id)
    .slice(0, 3);
  
  return {
    deal,
    relatedDeals
  };
};
