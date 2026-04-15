/**
 * Images served from public/kairo. Only filenames that exist on disk are referenced.
 */
const K = "/kairo";

const asset = (file: string) => `${K}/${file}`;

export const assets = {
  logo: asset("logo.png"),
  favicon: asset("favicon.png"),
  // Marketing — home split hero: 1800×1800 brand artwork (high quality webp)
  hero: asset("Untitleddesign_35_1800x1800.webp"),
  /** Alternate hero / marketing still (body oils scene) */
  heroAlt: asset("0d413f44b865cf5e0afe41336a823a63_1800x1800.webp"),
  saleBanner1: asset("Untitleddesign_22_1800x1800.webp"),
  saleBanner2: asset("Untitleddesign_23_1300x.webp"),
  fashion: asset("RRR_1800x1800_1800x1800_3ab9cd5d-a11b-4a61-b280-b94efd936023_1800x1800.webp"),
  /** Home brand story column — right column, object-contain */
  storyBanner: asset("Untitleddesign_15_1800x1800.webp"),
  paris: asset("0d413f44b865cf5e0afe41336a823a63_1800x1800.webp"),
} as const;
