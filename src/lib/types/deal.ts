export interface Deal {
  id: string;
  title: string;
  slug: string;
  description: string;
  excerpt: string;
  price: number;
  oldPrice: number | null;
  currency: string;
  affiliateLink: string;
  image: string;
  category: string;
  tags: string[];
  region: string[];
  publishedAt: string;
  expiresAt: string | null;
}

export interface CountryTag {
  code: string;
  name: string;
  currency: string;
  enabled: boolean;
}

export interface CountryTagsConfig {
  version: string;
  lastUpdated: string;
  countries: CountryTag[];
}
