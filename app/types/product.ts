export interface Product {
  id: number;
  name: string;
  sku?: string;
  category?: string;
  price?: number;
  currency?: string;
  description?: string;
  specs?: string;
  image_url?: string;
  stock?: number;
  tags?: string[];
  usage_instructions?: string;
}
