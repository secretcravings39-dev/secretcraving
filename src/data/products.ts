import type { Product } from "@/types";
import type { CategoryId } from "@/types";

const K = "/kairo";
const path = (f: string) => `${K}/${f}`;

type Row = {
  id: string;
  name: string;
  slug: string;
  price: number;
  compareAtPrice?: number;
  categoryId: CategoryId;
  subcategory?: string;
  color: string;
  files: string[];
  description: string;
  featured?: boolean;
  new?: boolean;
  soldLast?: { count: number; hours: number };
  viewersLooking?: number;
};

const foot =
  " Shipped in plain outer packaging. Adults 18+ only — read and follow the manufacturer label.";
const GLOBAL_PRODUCT_WRITEUP =
  "Sex Toys Dildo Realistic Silicone Dildo, Safety Material for Clitoral Vagina and Anal Stimulation with Strong Suction Cups, Sex Adult Toys for Women and Couple.";

/** Store-wide bump on top of raw `rows` prices (change here to adjust all products at once). */
const LIST_PRICE_MULTIPLIER = 1.25;

function applyListPriceMultiplier(value: number): number {
  return Math.max(1, Math.round(value * LIST_PRICE_MULTIPLIER));
}

/**
 * Extra multiplier on raw `rows` prices for specific SKUs (shown in recent storefront screenshots).
 * Stacks with {@link LIST_PRICE_MULTIPLIER}. Tune {@link HIGHLIGHT_PRICE_MULTIPLIER} as needed.
 */
const HIGHLIGHT_PRICE_MULTIPLIER = 1.3;
const HIGHLIGHT_PRODUCT_IDS = new Set<string>([
  "crystal-silicone-sleeve-set",
  "hygiene-wash-duo",
  "lovera-glide-collection",
  "studio-line-trio",
  "pump-bottle-glide",
  "vitamin-e-blend",
  "aloe-soothing-gel",
  "hyaluronic-glide",
  "compact-bullet-vibe",
  "deadly-shark-48000-spray",
  "deadly-shark-25000-spray",
]);

function rowHighlightFactor(productId: string): number {
  return HIGHLIGHT_PRODUCT_IDS.has(productId)
    ? HIGHLIGHT_PRICE_MULTIPLIER
    : 1;
}

const rows: Row[] = [
  {
    id: "crystal-silicone-sleeve-set",
    name: "Washable Reusable Silicon Crystal Spike Condom with Bubble and Durex Condom",
    slug: "washable-silicone-textured-sleeve-3-views",
    price: 3385,
    compareAtPrice: 2450,
    categoryId: "wellness",
    subcategory: "Protection",
    color: "Clear silicone",
    files: [
      "NewShapeWashableReusableSiliconCrystalSpikeTheBestCrystalCondomVarietyinPakistan1_1800x1800_1800x1800_fc32ba1e-41c2-4e4c-b040-d677f2edd71e_1300x.webp",
      "NewShapeWashableReusableSiliconCrystalSpikeTheBestCrystalCondomVarietyinPakistan_800x_1800x1800_117584d5-b751-4109-8fb4-d49a22137324_1800x1800.webp",
      "NewShapeWashableReusableSiliconCrystalSpikeTheBestCrystalCondomVarietyinPakistan2_1800x1800_1800x1800_4ab1b0af-fcb3-4d6c-876a-8fe50fd14ff8_1300x.webp",
    ],
    description:
      "Washable reusable silicone crystal texture with bubble design; listing may include branded condoms as shown on the retail card. Wash before and after use; air dry. Adults 18+ only — follow the manufacturer label. Cash on delivery available; discreet packaging." +
      foot,
    featured: true,
    new: true,
    soldLast: { count: 7, hours: 9 },
    viewersLooking: 30,
  },
  {
    id: "adjustable-strap-harness-set",
    name: "10 INCH Sex Toys Strap on Dildo Wearable Sex Toys for Lesbian and Couple, Anal G spot Stimulator Adult Sex Toy, Adjustable Size Sex Toy for Women",
    slug: "realistic-strap-on-adjustable-harness",
    price: 11800,
    compareAtPrice: 15200,
    categoryId: "accessories",
    subcategory: "Massage",
    color: "Flesh tone / black harness",
    files: [
      "newbelt.png",
      "61WNcB0UacL._AC_SL1500_1800x1800.webp",
      "strap-on-harness-composite.png",
    ],
    description:
      "Wearable strap-on with flesh-tone shaft and black woven harness. Gallery matches supplier art: waist/hip about 45–140 cm (17.7–55 in) adjustment range; two rubber O-rings included (about 4 cm and 6 cm) for different attachments; side and back views on card. Adults 18+ only; discreet shipping." +
      foot,
    featured: true,
    new: true,
    soldLast: { count: 10, hours: 15 },
    viewersLooking: 56,
  },
  {
    id: "hygiene-wash-duo",
    name: "Intimate cleansing foam — twin Amazon listing",
    slug: "ph-balanced-intimate-wash-duo-pack",
    price: 2190,
    categoryId: "wellness",
    subcategory: "Care",
    color: "White bottle",
    files: [
      "61a8nFBu1gL._AC_SX679_1800x1800.webp",
      "61a8nFBu1gL._AC_SX679__1_1800x1800.webp",
    ],
    description:
      "Manufacturer photos for a pump foam intimate wash: front and back of pack so you can read ingredients, pH claim, and barcode. Use only on external genitals unless the label says otherwise; rinse thoroughly." +
      foot,
  },
  {
    id: "lovera-glide-collection",
    name: "Lovera personal lubricant — three bottle sizes",
    slug: "lovera-glide-collection-3-variants",
    price: 2790,
    categoryId: "wellness",
    subcategory: "Care",
    color: "Assorted bottles",
    files: [
      "lovera_1_19_1800x1800_1000x_60f2bad0-a8df-43c1-8fff-d82156fe026b_1800x1800.webp",
      "lovera1_12_1800x1800_1800x1800_91b12709-408b-4325-8926-e6453c114d9d_1800x1800.webp",
      "lovera_1_13_1800x1800_1_1800x1800_66fe0933-100a-416d-aecd-fc087abdd060_1300x.webp",
    ],
    description:
      "Three Lovera-branded lubricant SKUs we carry: compare net weight and cap type in the gallery. Base (water/silicone/hybrid) and condom compatibility are printed on each bottle—follow that text." +
      foot,
    featured: true,
    new: true,
  },
  {
    id: "studio-line-trio",
    name: "Extendable condom",
    slug: "private-room-studio-line-3-piece-set",
    price: 3490,
    categoryId: "wellness",
    subcategory: "Care",
    color: "Mixed retail",
    files: [
      "IMG-20250314-WA0038_1800x1800_da189d88-e64d-4e79-8cd2-c4f666d4ee23_1800x1800.webp",
      "IMG-20250314-WA0036_1_1800x1800_9e100974-f75e-4129-9219-a555f747f964_1800x1800.webp",
      "IMG-20250314-WA0037_1800x1800_2a3ed0bd-9bab-4668-b528-5856e990ae1e_1800x1800.webp",
    ],
    description:
      "Three products photographed 14 Mar 2025 for our shelf (WhatsApp image set). Each item ships as its own labelled stock; this bundle price is for the three pictured—ingredients and expiry on individual packs." +
      foot,
  },
  {
    id: "silky-base-oil",
    name: "Silky glide & massage oil (clear)",
    slug: "silky-base-massage-oil",
    price: 1650,
    categoryId: "fragrance",
    subcategory: "Oils",
    color: "Clear",
    files: ["0d413f44b865cf5e0afe41336a823a63_1800x1800.webp"],
    description:
      "Multi-use oil for body massage and intimate glide. Ingredients and any scent are on the bottle; do a patch test 24 h before full use. May degrade latex—check the leaflet if you use condoms." +
      foot,
  },
  {
    id: "long-timing-intimate-oil",
    name: "Long Timing Intimate Oil",
    slug: "long-timing-intimate-oil",
    price: 2890,
    compareAtPrice: 3890,
    categoryId: "fragrance",
    subcategory: "Oils",
    color: "In stock",
    files: ["Untitleddesign_22_1800x1800.webp"],
    description:
      "Intimate massage oil selected for users looking to support longer-lasting performance. Use a small amount, patch test before first use, and check label guidance for condom compatibility." +
      foot,
    new: true,
    soldLast: { count: 8, hours: 14 },
    viewersLooking: 18,
  },
  {
    id: "size-boost-massage-oil",
    name: "Size Boost Massage Oil",
    slug: "size-boost-massage-oil",
    price: 3190,
    compareAtPrice: 4290,
    categoryId: "fragrance",
    subcategory: "Oils",
    color: "In stock",
    files: ["Untitleddesign_23_1300x.webp"],
    description:
      "Topical massage oil for customers who want a fuller-feel routine during intimate massage. External use only; patch test first and follow the usage directions on the bottle you receive." +
      foot,
    new: true,
    soldLast: { count: 6, hours: 19 },
    viewersLooking: 15,
  },
  {
    id: "pump-bottle-glide",
    name: "Sex Toys Dildo Realistic Silicone Dildo, Safety Material for Clitoral Vagina and Anal Stimulation with Strong Suction Cups, Sex Adult Toys for Women and Couple",
    slug: "pump-bottle-personal-glide",
    price: 8357,
    compareAtPrice: 13377,
    categoryId: "wellness",
    subcategory: "Care",
    color: "In Stock",
    files: [
      "51BXL0OZwXL._AC_SL1500_1800x1800_6a945bb2-1041-4d86-8464-226d5313c529_1800x1800.webp",
      "81ii8gXUBkL._AC_SL1500_1800x1800.webp",
      "71V7156FnnL._AC_SL1500_1800x1800.webp",
      "71UXUyINVAL._AC_SL1500_1800x1800.webp",
    ],
    description:
      "Sex Toys Dildo Realistic Silicone Dildo, Safety Material for Clitoral Vagina and Anal Stimulation with Strong Suction Cups, Sex Adult Toys for Women and Couple." +
      foot,
    new: true,
    soldLast: { count: 11, hours: 3 },
    viewersLooking: 6,
  },
  {
    id: "vitamin-e-blend",
    name: "Sex Toys Dildo Realistic Silicone Dildo, Safety Material for Clitoral Vagina and Anal Stimulation with Strong Suction Cups, Sex Adult Toys for Women and Couple",
    slug: "vitamin-e-enriched-glide",
    price: 8357,
    compareAtPrice: 13377,
    categoryId: "wellness",
    subcategory: "Care",
    color: "In Stock",
    files: [
      "51DPh0Zk7RL._AC_SL1500_1800x1800.webp",
      "81ii8gXUBkL._AC_SL1500_1800x1800.webp",
      "71V7156FnnL._AC_SL1500_1800x1800.webp",
      "71UXUyINVAL._AC_SL1500_1800x1800.webp",
    ],
    description:
      "Sex Toys Dildo Realistic Silicone Dildo, Safety Material for Clitoral Vagina and Anal Stimulation with Strong Suction Cups, Sex Adult Toys for Women and Couple." +
      foot,
    new: true,
    soldLast: { count: 11, hours: 3 },
    viewersLooking: 6,
  },
  {
    id: "classic-glide-large",
    name: "Threaded mace Condom Male Condom Adult Lock fine Ring Crystal Sleeve",
    slug: "classic-glide-large-format",
    price: 7391,
    categoryId: "wellness",
    subcategory: "Care",
    color: "In Stock",
    files: [
      "51wcIsrC6LL._AC_SL1000_1800x1800.webp",
      "419VkAEeQeL._AC_SL1000_1800x1800.webp",
      "61bd38536ac64688f484b6fd5a14dad4_1800x1800.webp",
      "31Fz328S-xL._AC_1800x1800.webp",
    ],
    description:
      "Threaded mace Condom Male Condom Adult Lock fine Ring Crystal Sleeve." +
      foot,
    soldLast: { count: 15, hours: 20 },
  },
  {
    id: "aloe-soothing-gel",
    name: "10 INCH Sex Toys Strap on Dildo Wearable Sex Toys for Lesbian and Couple, Anal G spot Stimulator Adult Sex Toy, Adjustable Size Sex Toy for Women",
    slug: "aloe-soothing-intimate-gel",
    price: 10702,
    compareAtPrice: 13378,
    categoryId: "wellness",
    subcategory: "Care",
    color: "In Stock",
    files: [
      "61F3oKsqLmL._AC_SL1500_1800x1800_960fa890-5c48-4f7e-ba07-316dec307eac_1800x1800.webp",
      "strap-on-harness-composite.png",
      "IMG-20250314-WA0036_1_1800x1800_9e100974-f75e-4129-9219-a555f747f964_1800x1800.webp",
      "71J0RbziSAL._AC_SL1500_1800x1800_c3e67545-65b9-4766-9b79-660e6e481750_1800x1800.webp",
    ],
    description:
      "10 INCH Sex Toys Strap on Dildo Wearable Sex Toys for Lesbian and Couple, Anal G spot Stimulator Adult Sex Toy, Adjustable Size Sex Toy for Women." +
      foot,
    soldLast: { count: 4, hours: 21 },
  },
  {
    id: "hyaluronic-glide",
    name: "Hyaluronic acid personal lubricant",
    slug: "hyaluronic-glide-serum",
    price: 10190,
    compareAtPrice: 21738,
    categoryId: "wellness",
    subcategory: "Care",
    color: "In Stock",
    files: ["61FywUNtPVL._AC_SL1500_1800x1800.webp"],
    description:
      "Sex Toys Dildo Realistic Silicone Dildo, Safety Material for Clitoral Vagina and Anal Stimulation with Strong Suction Cups, Sex Adult Toys for Women and Couple\n\nIn Stock\n\nRegular price\n\nRs.13,580.00\nRs.21,738.00\n| Save Rs.8,158.00 (38% off)\n6 people looking for this product\n\nBuy it now\nEstimated delivery between Saturday 18 April and Tuesday 21 April.\n\nFree shipping on orders above Rs. 4,999. Easy returns.\n\nProduct details\nSex Toys Dildo Realistic Silicone Dildo, Safety Material for Clitoral Vagina and Anal Stimulation with Strong Suction Cups, Sex Adult Toys for Women and Couple. Shipped in plain outer packaging. Adults 18+ only — read and follow the manufacturer label." +
      foot,
    viewersLooking: 6,
  },
  {
    id: "warming-jelly",
    name: "Warming jelly lubricant",
    slug: "warming-effect-jelly",
    price: 9850,
    compareAtPrice: 21738,
    categoryId: "wellness",
    subcategory: "Care",
    color: "In Stock",
    files: [
      "61HFsb7DWxL._AC_SL1500_1000x_6cea5932-7bd9-4900-9645-ce82da078326_1800x1800.webp",
    ],
    description:
      "Sex Toys Dildo Realistic Silicone Dildo, Safety Material for Clitoral Vagina and Anal Stimulation with Strong Suction Cups, Sex Adult Toys for Women and Couple\n\nIn Stock\n\nRegular price\n\nRs.13,580.00\nRs.21,738.00\n| Save Rs.8,158.00 (38% off)\n6 people looking for this product\n\nBuy it now\nEstimated delivery between Saturday 18 April and Tuesday 21 April.\n\nFree shipping on orders above Rs. 4,999. Easy returns.\n\nProduct details\nSex Toys Dildo Realistic Silicone Dildo, Safety Material for Clitoral Vagina and Anal Stimulation with Strong Suction Cups, Sex Adult Toys for Women and Couple. Shipped in plain outer packaging. Adults 18+ only — read and follow the manufacturer label." +
      foot,
    viewersLooking: 6,
  },
  {
    id: "sampler-tube-set",
    name: "Multi-tube lubricant sampler card",
    slug: "sampler-tube-set",
    price: 9450,
    compareAtPrice: 21738,
    categoryId: "wellness",
    subcategory: "Care",
    color: "In Stock",
    files: ["61RJnB6MS0L._AC_SX679_1800x1800.webp"],
    description:
      "Sex Toys Dildo Realistic Silicone Dildo, Safety Material for Clitoral Vagina and Anal Stimulation with Strong Suction Cups, Sex Adult Toys for Women and Couple\n\nIn Stock\n\nRegular price\n\nRs.13,580.00\nRs.21,738.00\n| Save Rs.8,158.00 (38% off)\n6 people looking for this product\n\nBuy it now\nEstimated delivery between Saturday 18 April and Tuesday 21 April.\n\nFree shipping on orders above Rs. 4,999. Easy returns.\n\nProduct details\nSex Toys Dildo Realistic Silicone Dildo, Safety Material for Clitoral Vagina and Anal Stimulation with Strong Suction Cups, Sex Adult Toys for Women and Couple. Shipped in plain outer packaging. Adults 18+ only — read and follow the manufacturer label." +
      foot,
    viewersLooking: 6,
  },
  {
    id: "daily-comfort-lotion",
    name: "Daily intimate moisturising lotion",
    slug: "daily-comfort-lotion",
    price: 9590,
    compareAtPrice: 21738,
    categoryId: "wellness",
    subcategory: "Care",
    color: "In Stock",
    files: ["61WNcB0UacL._AC_SL1500_1800x1800.webp"],
    description:
      "Sex Toys Dildo Realistic Silicone Dildo, Safety Material for Clitoral Vagina and Anal Stimulation with Strong Suction Cups, Sex Adult Toys for Women and Couple\n\nIn Stock\n\nRegular price\n\nRs.13,580.00\nRs.21,738.00\n| Save Rs.8,158.00 (38% off)\n6 people looking for this product\n\nBuy it now\nEstimated delivery between Saturday 18 April and Tuesday 21 April.\n\nFree shipping on orders above Rs. 4,999. Easy returns.\n\nProduct details\nSex Toys Dildo Realistic Silicone Dildo, Safety Material for Clitoral Vagina and Anal Stimulation with Strong Suction Cups, Sex Adult Toys for Women and Couple. Shipped in plain outer packaging. Adults 18+ only — read and follow the manufacturer label." +
      foot,
    viewersLooking: 6,
  },
  {
    id: "extra-delay-condoms-box",
    name: "DO- Pack Of 6 Extra Delay Condoms 18s ( Fresh Stock )",
    slug: "extra-delay-condoms-full-box",
    price: 1840,
    compareAtPrice: 2399,
    categoryId: "wellness",
    subcategory: "Protection",
    color: "Fresh stock — retail box",
    files: [
      "Do-Extra-Delay-Condoms-Full-Box-CondomsOutletPk_1800x1800_1800x1800_a0d0e8e4-7408-4a17-ab18-eab60686da75_1800x1800.webp",
    ],
    description:
      "Pack of 6 Extra Delay condoms (18 foils total) — fresh stock as labelled. Natural rubber latex; check nominal width and expiry on each foil. Never use after expiry." +
      foot,
    featured: true,
    soldLast: { count: 14, hours: 16 },
    viewersLooking: 55,
  },
  {
    id: "enhancement-care-cream",
    name: "Penis Extender Sleeve Extra Tightness with Long Lasting",
    slug: "topical-performance-care-cream",
    price: 2989,
    compareAtPrice: 5069,
    categoryId: "wellness",
    subcategory: "Care",
    color: "In stock",
    files: ["penis-extender-sleeve-extra-tightness-long-lasting.png"],
    description:
      "washable tight partner happy. Shipped in plain outer packaging. Adults 18+ only — read and follow the manufacturer label.",
    soldLast: { count: 1, hours: 2 },
    viewersLooking: 16,
  },
  {
    id: "womens-libido-drops",
    name: "Spanische Fliege Drops for Women’s Libido",
    slug: "herbal-wellness-drops-women",
    price: 2490,
    categoryId: "fragrance",
    subcategory: "Supplements",
    color: "Amber glass",
    files: ["Spanische-Fliege-Drops-for-Womens-Libido-3_1800x1800.webp"],
    description:
      "Herbal dietary drops marketed under the historic “Spanische Fliege” name; serving size, alcohol content, and warnings are on the bottle we ship. Food supplement rules apply — not for pregnancy/breastfeeding unless approved by your doctor." +
      foot,
    featured: true,
  },
  {
    id: "dual-wand-massager",
    name: "10-band Retractable Vibrating AV Wand Luxurious Shape Soft Touch G-spot Vibrator 100% Waterproof Clitoral Vibrator",
    slug: "dual-ended-wand-massager",
    price: 13999,
    compareAtPrice: 17999,
    categoryId: "accessories",
    subcategory: "Massage",
    color: "Purple silicone",
    files: [
      "Double-Ended-2-in-1-Wand-Vibrator-8-768x768_1800x1800_1800x1800_1800x1800_558c5f24-f1da-427d-a6ab-232b821c171f_1800x1800.webp",
    ],
    description:
      "Retractable vibrating wand with multiple patterns, soft-touch silicone, and waterproof build for bath or shower use (per box marking). USB rechargeable where included. Use water-based lubricant; clean and dry before storage." +
      foot,
    featured: true,
    new: true,
    soldLast: { count: 17, hours: 18 },
    viewersLooking: 19,
  },
  {
    id: "pleasure-campaign-poster",
    name: "Poster — “Double the pleasure, double the power” campaign",
    slug: "double-pleasure-campaign-art",
    price: 450,
    categoryId: "wellness",
    subcategory: "Care",
    color: "Print on paper",
    files: [
      "Doublethepleasure_doublethepower_yourbodydeservesboth_1_1800x1800.webp",
    ],
    description:
      "In-store marketing poster with slogan “Double the pleasure, double the power / your body deserves both.” Decorative only; dimensions match the file we print from." +
      foot,
  },
  {
    id: "rrr-wellness-visual",
    name: "Washable Reusable Silicon Crystal Spike Condom with Bubble and Durex Condom",
    slug: "rrr-capsule-visual-poster",
    price: 3385,
    compareAtPrice: 2450,
    categoryId: "wellness",
    subcategory: "Protection",
    color: "Clear silicone",
    files: [
      "RRR_1800x1800_1800x1800_3ab9cd5d-a11b-4a61-b280-b94efd936023_1800x1800.webp",
    ],
    description:
      "Washable reusable silicone crystal texture with bubble design; listing may include branded condoms as shown on the retail card. Wash before and after use; air dry. Adults 18+ only — follow the manufacturer label. Cash on delivery available; discreet packaging." +
      foot,
    featured: true,
    new: true,
    soldLast: { count: 7, hours: 9 },
    viewersLooking: 30,
  },
  {
    id: "untitled-lifestyle-15",
    name: "Brand photo print — warm neutral palette (No. 15)",
    slug: "lifestyle-visual-study-15",
    price: 499,
    categoryId: "wellness",
    subcategory: "Care",
    color: "Warm beige",
    files: ["Untitleddesign_15_1800x1800.webp"],
    description:
      "Lifestyle photograph from our Untitled Design set #15 — warm tones for salon-style displays. Matte or gloss per stock." +
      foot,
  },
  {
    id: "untitled-lifestyle-35",
    name: "Brand photo print — cool sage palette (No. 35)",
    slug: "lifestyle-visual-study-35",
    price: 499,
    categoryId: "wellness",
    subcategory: "Care",
    color: "Cool sage",
    files: ["Untitleddesign_35_1800x1800.webp"],
    description:
      "Matching series to #15 with cooler sage and grey balance; use as secondary poster in changing rooms or consultation area." +
      foot,
  },
  {
    id: "61bd-massage-accessory",
    name: "Penis Extender Sleeve for bigger size 8",
    slug: "contour-massage-accessory",
    price: 7500,
    compareAtPrice: 9999,
    categoryId: "accessories",
    subcategory: "Massage",
    color: "In stock",
    files: ["61bd38536ac64688f484b6fd5a14dad4_1800x1800.webp"],
    description:
      "Penis extender sleeve sized for bigger fit (size 8 line). In stock. Delays ejaculation: may help prolong intercourse by reducing sensitivity. Partner satisfaction: textured designs can enhance pleasure for both partners. Enhanced size: provides immediate increase in length and girth during use. Follow the size chart on the pack you receive. Use with water-based lubricant; stop if numbness or pain. Adults 18+ only." +
      foot,
    soldLast: { count: 17, hours: 24 },
    viewersLooking: 29,
  },
  {
    id: "compact-bullet-vibe",
    name: "Pink rabbit vibrator — ribbed shaft & finger ring",
    slug: "compact-bullet-vibe",
    price: 2490,
    categoryId: "accessories",
    subcategory: "Massage",
    color: "Hot pink silicone",
    files: ["61wvxZmdHVL._AC_SX679_1300x.webp"],
    description:
      "Listing art shows a bright pink rabbit-style toy: ribbed insertable shaft, flexible bunny-ear stimulator, and chrome-lined finger ring at the base for grip. Controls and power (battery vs USB) are printed on the unit you receive. Splash-proof only unless the box states waterproof." +
      foot,
  },
  {
    id: "curved-silicone-massager",
    name: "Pink rabbit vibrator — retail support graphic card",
    slug: "curved-silicone-massager",
    price: 4590,
    categoryId: "accessories",
    subcategory: "Massage",
    color: "Hot pink silicone / magenta graphics",
    files: ["71-voz2ROnL._AC_SX679_1300x.jpg"],
    description:
      "Photo matches supplier card: same rabbit shape with ribbed shaft, external tickler, and metal-accent ring handle on a pink marketing background; card text highlights after-sales support topics. Charging type and speeds are on the retail box—follow that for your unit." +
      foot,
  },
  {
    id: "wand-lite-edition",
    name: "Mini wand massager (cordless)",
    slug: "wand-massager-lite-edition",
    price: 6490,
    categoryId: "accessories",
    subcategory: "Massage",
    color: "White / pink",
    files: ["7119Juk_S8L._AC_SX679_1800x1800.webp"],
    description:
      "Smaller wand head than full-size Hitachi-style; good for travel. Auto shut-off and charge LED described in leaflet." +
      foot,
  },
  {
    id: "rabbit-dual-stimulator",
    name: "small rabbit",
    slug: "dual-stimulator-rabbit-style",
    price: 11999,
    compareAtPrice: 15999,
    categoryId: "accessories",
    subcategory: "Massage",
    color: "Pink jelly / silicone",
    files: ["71DogKBjqjL._AC_SL1500_1800x1800.webp"],
    description:
      "Rabbit-style vibrator with internal shaft and external arm. Multiple speeds as on retail packaging. USB or battery per unit — see box. Cash on delivery; urgent delivery options where available." +
      foot,
    soldLast: { count: 18, hours: 9 },
    viewersLooking: 49,
  },
  {
    id: "satin-touch-massager",
    name: "Satin-finish silicone personal massager",
    slug: "satin-touch-personal-massager",
    price: 5290,
    categoryId: "accessories",
    subcategory: "Massage",
    color: "Mauve",
    files: [
      "71J0RbziSAL._AC_SL1500_1800x1800_c3e67545-65b9-4766-9b79-660e6e481750_1800x1800.webp",
    ],
    description:
      "Coated ABS/silicone hybrid with satin sheen; quiet motor class. Includes storage pouch when supplier provides it." +
      foot,
  },
  {
    id: "travel-bullet-kit",
    name: "Bullet vibrator kit with sleeves",
    slug: "travel-bullet-kit",
    price: 10890,
    compareAtPrice: 21738,
    categoryId: "accessories",
    subcategory: "Massage",
    color: "In Stock",
    files: ["71JEb-DU-LL._AC_SL1500_1300x.webp"],
    description:
      "Sex Toys Dildo Realistic Silicone Dildo, Safety Material for Clitoral Vagina and Anal Stimulation with Strong Suction Cups, Sex Adult Toys for Women and Couple\n\nIn Stock\n\nRegular price\n\nRs.13,580.00\nRs.21,738.00\n| Save Rs.8,158.00 (38% off)\n6 people looking for this product\n\nBuy it now\nEstimated delivery between Saturday 18 April and Tuesday 21 April.\n\nFree shipping on orders above Rs. 4,999. Easy returns.\n\nProduct details\nSex Toys Dildo Realistic Silicone Dildo, Safety Material for Clitoral Vagina and Anal Stimulation with Strong Suction Cups, Sex Adult Toys for Women and Couple. Shipped in plain outer packaging. Adults 18+ only — read and follow the manufacturer label." +
      foot,
    viewersLooking: 6,
  },
  {
    id: "ergonomic-wand-curve",
    name: "Rabbit vibrator — 10 + 10 vibration modes & 5 thrusting speeds",
    slug: "ergonomic-wand-curved-handle",
    price: 7290,
    categoryId: "accessories",
    subcategory: "Massage",
    color: "Pink silicone / rose-gold ring",
    files: ["71KcjwscaEL._AC_SX679_1800x1800.jpg"],
    description:
      "Packaging art shows a pink rabbit massager with separate pattern charts for the shaft and clitoral arm, plus five thrusting modes (arrows on card). Cutaway graphic illustrates internal motor; USB charge and run time are on the box. Use water-based lubricant; clean per manual." +
      foot,
  },
  {
    id: "palm-pressure-massager",
    name: "Palm-sized air-pulse / suction toy",
    slug: "palm-pressure-massager",
    price: 5590,
    categoryId: "accessories",
    subcategory: "Massage",
    color: "Lilac",
    files: [
      "71QPDGNV1aL._AC_UF10001000_QL80_FMwebp_1800x1800_6657571b-1290-47b6-b8a8-f589bc3d1ece_1800x1800.webp",
    ],
    description:
      "Fits the palm; uses pulsing air or suction (per packaging). IPX7 only if stated—dry charging port before plugging in." +
      foot,
  },
  {
    id: "flex-neck-wand",
    name: "Flexible neck mini wand massager",
    slug: "flex-neck-mini-wand",
    price: 4990,
    categoryId: "accessories",
    subcategory: "Massage",
    color: "Mint green",
    files: ["71SpbSsxAxL._AC_SL1500_1300x.webp"],
    description:
      "Bendable neck for precise placement; do not twist past 45° to avoid wire fatigue." +
      foot,
  },
  {
    id: "gspot-silicone-massager",
    name: "Sex Toys Dildo Realistic Silicone Dildo, Safety Material for Clitoral Vagina and Anal Stimulation with Strong Suction Cups, Sex Adult Toys for Women and Couple",
    slug: "g-spot-silicone-massager",
    price: 14399,
    compareAtPrice: 22999,
    categoryId: "accessories",
    subcategory: "Massage",
    color: "Body-safe silicone — as shown",
    files: ["71UXUyINVAL._AC_SL1500_1800x1800.webp"],
    description:
      "Realistic silicone dildo with strong suction cup for stable placement on smooth surfaces. Suitable for external and internal use per packaging — use water-based lubricant only on silicone." +
      foot,
    soldLast: { count: 4, hours: 17 },
    viewersLooking: 38,
    featured: true,
  },
  {
    id: "air-pulse-stimulator",
    name: "Clitoral air-pulse stimulator (pressure wave)",
    slug: "air-pulse-stimulator",
    price: 8490,
    categoryId: "accessories",
    subcategory: "Massage",
    color: "Champagne gold",
    files: ["71V7156FnnL._AC_SL1500_1800x1800.webp"],
    description:
      "Nozzle delivers rhythmic pressure waves; remove silicone cap for cleaning. Charge time ~90 min typical." +
      foot,
    featured: true,
  },
  {
    id: "couples-ring-set",
    name: "Vibrating cock ring set (stretch silicone)",
    slug: "couples-ring-set",
    price: 3290,
    categoryId: "accessories",
    subcategory: "Massage",
    color: "Black",
    files: [
      "71pMhX_iGPL._AC_SL1500_1800x1800_01761fb1-2f01-4529-a0b0-4b051f0492fb_1800x1800.webp",
    ],
    description:
      "Stretchy rings with removable bullet; max wear 20–30 minutes. Stop if numbness, pain, or cold skin." +
      foot,
  },
  {
    id: "mini-silicone-plug",
    name: "6.3 Inch Realistic Thin Dildo for Beginners, Soft Skinny Dildo Mini Anal Dildo with Balls & Strong Suction Cup",
    slug: "mini-silicone-plug-beginner",
    price: 13500,
    compareAtPrice: 19999,
    categoryId: "accessories",
    subcategory: "Massage",
    color: "Black / flesh (as shown)",
    files: [
      "81PflH52G-L._AC_UF350350_QL80_FMwebp_1_1800x1800_31b54a5c-6c4c-42ed-b5c0-369c871432f6_800x.webp",
    ],
    description:
      "Slim realistic profile with balls detail and suction cup for stable placement. Ideal for beginners — use water-based lubricant and go slowly. Adults 18+ only." +
      foot,
    soldLast: { count: 7, hours: 10 },
    viewersLooking: 21,
  },
  {
    id: "glass-wand-dilator",
    name: "9 Inch Realistic Dildo – Lifelike Veins & Skin Texture, Thick Silicone with Strong Suction Cup, Adult Toy for Men & Women Pleasure",
    slug: "tempered-glass-wand",
    price: 15999,
    categoryId: "accessories",
    subcategory: "Massage",
    color: "As shown — retail unit",
    files: ["81ii8gXUBkL._AC_SL1500_1800x1800.webp"],
    description:
      "Realistic shape with veined texture and strong suction base for hands-free use on smooth surfaces. Use water-based lubricant; clean before and after use. Adults 18+ only." +
      foot,
    soldLast: { count: 10, hours: 17 },
    viewersLooking: 47,
  },
  {
    id: "h26-suction-massager",
    name: "Suction + vibration rabbit massager (H-series)",
    slug: "h26-suction-massager",
    price: 6790,
    categoryId: "accessories",
    subcategory: "Massage",
    color: "Blush pink",
    files: [
      "H2685491592494974acbdf1b1c4b787b3E_9ec01eec-e029-4c54-85e5-94a02b2ef293_1800x1800.webp",
    ],
    description:
      "Combined internal vibration with clitoral suction cup; begin on lowest suction step to avoid bruising. USB rechargeable." +
      foot,
  },
  {
    id: "h35-pulse-wand",
    name: "Large wand massager — deep pulse motor (H35)",
    slug: "h35-pulse-wand",
    price: 7490,
    categoryId: "accessories",
    subcategory: "Massage",
    color: "Berry silicone",
    files: ["H35d5656e017e41fb8a7a59d8fe177a53r_1800x1800.webp"],
    description:
      "Heavy rumbly motor for muscle or intimate use; louder than pocket bullets. Silicone head removable on this model." +
      foot,
  },
  {
    id: "h51-luxe-massager",
    name: "Premium silicone vibrator with travel lock (H51)",
    slug: "h51-luxe-silicone-massager",
    price: 9290,
    categoryId: "accessories",
    subcategory: "Massage",
    color: "Wine red",
    files: [
      "H5186bd7d36cc4c33a5a6255eb9ed6327k_1800x1800_47666351-39ce-424a-a791-44934fa060bc_1800x1800.webp",
    ],
    description:
      "Soft-touch silicone body; hold power button 3 s to unlock before first use so it does not turn on in luggage." +
      foot,
  },
  {
    id: "haa7-pocket-massager",
    name: "Pocket rocket vibrator — ribbed sleeve",
    slug: "pocket-wave-massager",
    price: 3890,
    categoryId: "accessories",
    subcategory: "Massage",
    color: "Lavender",
    files: ["Haa7a0bdb15784f76b91191f089483cd7X_1800x1800.webp"],
    description:
      "Battery-powered pocket vibe with textured cap; includes cell in blister where shown. External use primarily." +
      foot,
  },
  {
    id: "hf-soft-touch",
    name: "Lay-on silicone massager (peach soft-touch)",
    slug: "soft-touch-external-pad",
    price: 3190,
    categoryId: "accessories",
    subcategory: "Massage",
    color: "Peach",
    files: ["Hfaae3a4e33f9466e9274281bb727f844r_1800x1800.webp"],
    description:
      "Curved pad meant to straddle or press; multiple ridges for diffuse stimulation. USB charge." +
      foot,
  },
  {
    id: "hfe-rhythm-massager",
    name: "Rhythm-pattern silicone vibrator (memory mode)",
    slug: "rhythm-pattern-massager",
    price: 6990,
    categoryId: "accessories",
    subcategory: "Massage",
    color: "Indigo",
    files: [
      "Hfe8c8ddcf5cf4edf9cb8a783a8fd8e09G_2b81494c-d72c-4cca-9dd2-f87f0e5750a8_1800x1800_1_1800x1800.webp",
    ],
    description:
      "Multiple preset patterns; long-press “M” to store favourite pattern (per manufacturer quick guide)." +
      foot,
  },
  {
    id: "soft-sleeve-extender-6in",
    name: "New Soft 6 inches Sleeve Extender Sheath for Men Male Enhancement Extension Sleeve",
    slug: "soft-6-inch-sleeve-extender-sheath",
    price: 6299,
    compareAtPrice: 9799,
    categoryId: "wellness",
    subcategory: "Protection",
    color: "Soft skin-tone silicone",
    files: [
      "71F4hE4fqL._AC_UF10001000_QL80_FMwebp_1800x1800_1_1800x1800.webp",
      "71F4hE4fqL._AC_UF10001000_QL80_FMwebp_1800x1800_ad6b52de-10be-46ff-94f2-0dd0aff50e49_1800x1800.webp",
    ],
    description:
      "Soft sleeve extender for added length and sensation — stretch material as per retail listing. Wash before and after use; air dry. Adults 18+ only." +
      foot,
    featured: true,
    soldLast: { count: 15, hours: 4 },
    viewersLooking: 46,
  },
  {
    id: "strap-harness-nine-inch",
    name: "9 inch Strap on Dildo with Harness, Wearable Realistic Silicone Dildo Adult Sex Toy for Female Masturbation Women Gay, Flesh",
    slug: "nine-inch-strap-on-with-harness-flesh",
    price: 13500,
    compareAtPrice: 21500,
    categoryId: "accessories",
    subcategory: "Massage",
    color: "Flesh / black harness",
    files: [
      "61WNcB0UacL._AC_SL1500_1800x1800.webp",
      "newbelt.png",
      "strap-on-harness-composite.png",
    ],
    description:
      "Nine-inch wearable strap-on with flesh-tone shaft and black harness. Harness card shows adjustable straps (about 45–140 cm fit range), two rubber O-rings (~4 cm / ~6 cm), and mannequin side/back angles. Discreet parcel; adults 18+ only." +
      foot,
    soldLast: { count: 13, hours: 12 },
    viewersLooking: 56,
  },
  {
    id: "hollow-strap-extender-prolong",
    name: "Strap-on Hollow Extender Prolong",
    slug: "strap-on-hollow-extender-prolong",
    price: 11999,
    compareAtPrice: 18999,
    categoryId: "accessories",
    subcategory: "Massage",
    color: "Hollow sleeve + harness",
    files: ["strap-on-harness-composite.png", "newbelt.png"],
    description:
      "Retail composite shows a hollow flesh-tone extender sleeve with lifelike veins, fixed to a black harness with snaps and O-ring, plus inset of retail clamshell and fit diagram. Marketing overlays may show 18+ icons — adults only. Adjust harness per leaflet; see gallery for strap and packaging details." +
      foot,
    soldLast: { count: 12, hours: 24 },
    viewersLooking: 41,
  },
  {
    id: "silicone-skin-condom-imported",
    name: "Silicone Skin Condom imported",
    slug: "silicone-skin-condom-imported",
    price: 5500,
    compareAtPrice: 9999,
    categoryId: "wellness",
    subcategory: "Protection",
    color: "In stock",
    files: [
      "NewShapeWashableReusableSiliconCrystalSpikeTheBestCrystalCondomVarietyinPakistan1_1800x1800_1800x1800_fc32ba1e-41c2-4e4c-b040-d677f2edd71e_1300x.webp",
      "NewShapeWashableReusableSiliconCrystalSpikeTheBestCrystalCondomVarietyinPakistan_800x_1800x1800_117584d5-b751-4109-8fb4-d49a22137324_1800x1800.webp",
    ],
    description:
      "Imported silicone skin-style reusable sleeve — crystal / textured finish as in gallery photos. In stock. Delays ejaculation: may help prolong intercourse by reducing sensitivity. Partner satisfaction: textured designs can enhance pleasure for both partners. Enhanced size: provides immediate increase in length and girth during use. Not a medical device; clean and dry between uses. Adults 18+ only." +
      foot,
    soldLast: { count: 17, hours: 7 },
    viewersLooking: 22,
  },
  {
    id: "deadly-shark-48000-spray",
    name: "Penis Extender Sleeve Extra Tightness with Long Lasting",
    slug: "deadly-shark-power-48000-spray-45ml",
    price: 5231,
    compareAtPrice: 3899,
    categoryId: "wellness",
    subcategory: "Care",
    color: "washable tight partner happy",
    files: [
      "419VkAEeQeL._AC_SL1000_1800x1800.webp",
      "31Fz328S-xL._AC_1800x1800.webp",
      "penisextender.webp",
      "penisextender1.webp",
    ],
    description:
      "washable tight partner happy." +
      foot,
    featured: true,
    new: true,
    soldLast: { count: 16, hours: 2 },
    viewersLooking: 16,
  },
  {
    id: "penis-sleeve-sex-toy-pakistan",
    name: "Penis Sleeve Sex Toy in Pakistan",
    slug: "penis-sleeve-sex-toy-pakistan",
    price: 9199,
    compareAtPrice: 17299,
    categoryId: "wellness",
    subcategory: "Protection",
    color: "Soft stretch sleeve",
    files: [
      "71F4hE4fqL._AC_UF10001000_QL80_FMwebp_1800x1800_1_1800x1800.webp",
      "71F4hE4fqL._AC_UF10001000_QL80_FMwebp_1800x1800_ad6b52de-10be-46ff-94f2-0dd0aff50e49_1800x1800.webp",
      "NewShapeWashableReusableSiliconCrystalSpikeTheBestCrystalCondomVarietyinPakistan2_1800x1800_1800x1800_4ab1b0af-fcb3-4d6c-876a-8fe50fd14ff8_1300x.webp",
    ],
    description:
      "Penis sleeve / extender style toy — stretch fit as per retail photos. Wash before and after use; air dry. Adults 18+ only; discreet packaging." +
      foot,
    featured: true,
    soldLast: { count: 15, hours: 15 },
    viewersLooking: 14,
  },
  {
    id: "sexbay-heating-vibration-dildo",
    name: "Sexbay Heating Vibration Electric Dildos Remote Control Penis Vibrators Telescopic Dildo Anal Sex Toy Realistic Dildo for Women",
    slug: "sexbay-heating-vibration-electric-dildo-remote",
    price: 22999,
    categoryId: "accessories",
    subcategory: "Massage",
    color: "Pink — multi-mode + thrusting (see card)",
    files: [
      "71KcjwscaEL._AC_SX679_1800x1800.jpg",
      "Hfe8c8ddcf5cf4edf9cb8a783a8fd8e09G_2b81494c-d72c-4cca-9dd2-f87f0e5750a8_1800x1800_1_1800x1800.webp",
    ],
    description:
      "First image shows the same retail card as our thrusting rabbit listing: dual vibration pattern grids for shaft and ears, five thrusting modes, and USB charging icons. Second image adds alternate angle or feature callouts from the supplier. Heating, remote, and telescopic claims are only as printed on the box we ship—verify before use. Water-based lubricant; IP rating on pack." +
      foot,
    featured: true,
    new: true,
    soldLast: { count: 13, hours: 11 },
    viewersLooking: 43,
  },
];

function rowToProduct(r: Row): Product {
  const imgs = r.files.map(path);
  const hf = rowHighlightFactor(r.id);
  const basePrice = Math.round(r.price * hf);
  const baseCompare =
    r.compareAtPrice != null
      ? Math.round(r.compareAtPrice * hf)
      : undefined;
  const price = applyListPriceMultiplier(basePrice);
  let compareAtPrice: number | undefined =
    baseCompare != null ? applyListPriceMultiplier(baseCompare) : undefined;
  if (compareAtPrice != null && compareAtPrice <= price) {
    compareAtPrice = undefined;
  }
  return {
    id: r.id,
    name: r.name,
    slug: r.slug,
    price,
    compareAtPrice,
    categoryId: r.categoryId,
    subcategory: r.subcategory,
    color: r.color,
    image: imgs[0],
    images: imgs.length > 1 ? imgs.slice(1) : undefined,
    description: `${GLOBAL_PRODUCT_WRITEUP}${foot}`,
    featured: r.featured,
    new: r.new,
    soldLast: r.soldLast,
    viewersLooking: r.viewersLooking,
  };
}

export const products: Product[] = rows.map(rowToProduct);

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter((p) => p.categoryId === categoryId);
}

const subcategorySlugToLabel: Record<string, Record<string, string>> = {
  women: {
    tops: "Tops",
    dresses: "Dresses",
    tshirts: "T-Shirts",
    bottoms: "Bottoms",
    blazers: "Blazers",
    sweaters: "Sweaters",
    jackets: "Jackets",
  },
  men: {
    shirts: "Shirts",
    tshirts: "T-Shirts",
    polo: "Polo",
    bottoms: "Bottoms",
    blazers: "Blazers",
    sweaters: "Sweaters",
    jackets: "Jackets",
  },
  kids: {
    tops: "Tops",
    bottoms: "Bottoms",
    dresses: "Dresses",
  },
  wellness: {
    protection: "Protection",
    care: "Care",
  },
};

export function getProductsByCategoryAndSubcategory(
  categoryId: string,
  subcategorySlug: string
): Product[] {
  const base = products.filter((p) => p.categoryId === categoryId);
  if (categoryId === "shoes") {
    return base;
  }
  if (categoryId === "accessories" && subcategorySlug.toLowerCase() === "eyewear") {
    return [];
  }
  const map = subcategorySlugToLabel[categoryId];
  if (!map) return base;
  const label = map[subcategorySlug.toLowerCase()];
  if (!label) return base;
  return base.filter(
    (p) => p.subcategory?.toLowerCase() === label.toLowerCase()
  );
}

export function getProductsByCategoryNew(categoryId: string): Product[] {
  return products.filter((p) => p.categoryId === categoryId && p.new);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getNewProducts(): Product[] {
  return products.filter((p) => p.new);
}

/** Home “New Arrivals”: all `new` products, then pump & vitamin E glide at the end. */
const HOME_NEW_ARRIVALS_TAIL_SLUGS = [
  "pump-bottle-personal-glide",
  "vitamin-e-enriched-glide",
] as const;

export function getHomeNewArrivalsProducts(): Product[] {
  const tail = HOME_NEW_ARRIVALS_TAIL_SLUGS.map((slug) =>
    products.find((p) => p.slug === slug)
  ).filter((p): p is Product => p != null);
  const tailIds = new Set(tail.map((p) => p.id));
  const head = getNewProducts().filter((p) => !tailIds.has(p.id));
  return [...head, ...tail];
}

/** Related products for detail pages (same category, excludes current). */
export function getRelatedProducts(
  product: Product,
  limit = 8
): Product[] {
  return products
    .filter((p) => p.categoryId === product.categoryId && p.id !== product.id)
    .slice(0, limit);
}
