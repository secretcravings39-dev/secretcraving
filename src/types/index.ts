export type CategoryId =
  | "wellness"
  | "women"
  | "men"
  | "kids"
  | "shoes"
  | "accessories"
  | "belts"
  | "caps"
  | "bags"
  | "fragrance";

export interface Category {
  id: CategoryId;
  name: string;
  slug: string;
  description?: string;
  parent?: "women" | "men" | "kids"; // for sub-categories
  image?: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  compareAtPrice?: number;
  categoryId: CategoryId;
  subcategory?: string;
  color: string;
  image: string;
  images?: string[];
  description?: string;
  featured?: boolean;
  new?: boolean;
  /** “15 sold in last 4 hours” style social proof (illustrative). */
  soldLast?: { count: number; hours: number };
  /** “46 people looking at this product” style urgency (illustrative). */
  viewersLooking?: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
  size?: string;
}
