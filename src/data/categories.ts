import type { Category } from "@/types";

export const categories: Category[] = [
  {
    id: "wellness",
    name: "Wellness",
    slug: "wellness",
    description:
      "Lubricants, intimate washes, delay condoms, and personal care items we stock and ship nationwide.",
  },
  {
    id: "accessories",
    name: "Massage & devices",
    slug: "accessories",
    description:
      "Vibrators, sleeves, rings, and other adult novelty devices from brands and listings shown on each product page.",
  },
  {
    id: "fragrance",
    name: "Oils & supplements",
    slug: "fragrance",
    description:
      "Massage and body oils plus oral drops and supplements (e.g. Spanische Fliege) sold as labeled.",
  },
  {
    id: "women",
    name: "Woman",
    slug: "women",
    description: "Reserved for future fashion drops — browse Wellness for current stock.",
  },
  {
    id: "men",
    name: "Man",
    slug: "men",
    description: "Reserved for future fashion drops — browse Wellness for current stock.",
  },
  {
    id: "kids",
    name: "Kids",
    slug: "kids",
    description: "Reserved for future kids’ lines — not part of the adult wellness catalogue.",
  },
  {
    id: "shoes",
    name: "Shoes",
    slug: "shoes",
    description: "Reserved category — no footwear listed at this time.",
  },
  {
    id: "belts",
    name: "Belts",
    slug: "belts",
    description: "Reserved category — no belts listed at this time.",
  },
  {
    id: "caps",
    name: "Caps & Headwear",
    slug: "caps",
    description: "Reserved category — no caps listed at this time.",
  },
  {
    id: "bags",
    name: "Bags",
    slug: "bags",
    description: "Reserved category — no bags listed at this time.",
  },
];

/** Primary links in the site header only — keep this short so the logo does not overlap. */
export const headerNavCategories = [
  {
    id: "wellness",
    name: "Wellness",
    slug: "wellness",
    children: [
      { name: "New In", slug: "wellness?filter=new" },
      { name: "All wellness", slug: "wellness" },
    ],
  },
  {
    id: "accessories",
    name: "Devices",
    slug: "accessories",
    children: [
      { name: "New In", slug: "accessories?filter=new" },
      { name: "All devices", slug: "accessories" },
    ],
  },
  {
    id: "fragrance",
    name: "Oils",
    slug: "fragrance",
    children: [
      { name: "New In", slug: "fragrance?filter=new" },
      { name: "All oils & supplements", slug: "fragrance" },
    ],
  },
] as const;

export const navCategories = [
  {
    id: "wellness",
    name: "Wellness",
    slug: "wellness",
    children: [
      { name: "New In", slug: "wellness?filter=new" },
      { name: "All wellness", slug: "wellness" },
    ],
  },
  {
    id: "accessories",
    name: "Massage & devices",
    slug: "accessories",
    children: [
      { name: "New In", slug: "accessories?filter=new" },
      { name: "All devices", slug: "accessories" },
    ],
  },
  {
    id: "fragrance",
    name: "Oils & supplements",
    slug: "fragrance",
    children: [
      { name: "New In", slug: "fragrance?filter=new" },
      { name: "All", slug: "fragrance" },
    ],
  },
  {
    id: "women",
    name: "Woman",
    slug: "women",
    children: [
      { name: "New In", slug: "women?filter=new" },
      { name: "Tops & Blouses", slug: "women/tops" },
      { name: "Dresses & Jumpsuits", slug: "women/dresses" },
      { name: "T-Shirts", slug: "women/tshirts" },
      { name: "Bottoms", slug: "women/bottoms" },
      { name: "Blazers", slug: "women/blazers" },
      { name: "Sweaters & Cardigans", slug: "women/sweaters" },
      { name: "Jackets & Coats", slug: "women/jackets" },
      { name: "Shoes", slug: "shoes/women" },
    ],
  },
  {
    id: "men",
    name: "Man",
    slug: "men",
    children: [
      { name: "New In", slug: "men?filter=new" },
      { name: "Shirts", slug: "men/shirts" },
      { name: "T-Shirts", slug: "men/tshirts" },
      { name: "Polo", slug: "men/polo" },
      { name: "Bottoms", slug: "men/bottoms" },
      { name: "Blazers", slug: "men/blazers" },
      { name: "Sweaters & Cardigans", slug: "men/sweaters" },
      { name: "Jackets & Coats", slug: "men/jackets" },
      { name: "Shoes", slug: "shoes/men" },
    ],
  },
  {
    id: "kids",
    name: "Kids",
    slug: "kids",
    children: [
      { name: "New In", slug: "kids?filter=new" },
      { name: "Tops", slug: "kids/tops" },
      { name: "Bottoms", slug: "kids/bottoms" },
      { name: "Dresses", slug: "kids/dresses" },
      { name: "Shoes", slug: "shoes/kids" },
    ],
  },
  {
    id: "shoes",
    name: "Shoes",
    slug: "shoes",
    children: [
      { name: "Woman", slug: "shoes/women" },
      { name: "Man", slug: "shoes/men" },
      { name: "Kids", slug: "shoes/kids" },
    ],
  },
];
