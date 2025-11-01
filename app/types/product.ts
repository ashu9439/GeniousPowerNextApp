export type Product = {
  id: number;
  name: string;
  price?: string;
  currency?: string;
  description?: string;
  image_url?: string;
  category?: string;
  tags?: string[];
  specs?: string;
  stock?: number;
  usage_instructions?: string;
  sku?: string;
};