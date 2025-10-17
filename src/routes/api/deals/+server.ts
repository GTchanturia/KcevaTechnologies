import { json } from '@sveltejs/kit';
import { getAllDeals } from '$lib/utils/deals';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url }) => {
  const deals = getAllDeals();
  
  // Optional filtering
  const category = url.searchParams.get('category');
  const limit = url.searchParams.get('limit');
  
  let filteredDeals = deals;
  
  if (category) {
    filteredDeals = filteredDeals.filter(deal => deal.category === category);
  }
  
  if (limit) {
    const limitNum = parseInt(limit, 10);
    if (!isNaN(limitNum)) {
      filteredDeals = filteredDeals.slice(0, limitNum);
    }
  }
  
  return json(filteredDeals);
};
