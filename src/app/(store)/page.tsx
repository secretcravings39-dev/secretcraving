import Link from "next/link";
import Image from "next/image";
import { ProductCard } from "@/components/ProductCard";
import {
  getHomeNewArrivalsProducts,
  getProductsByCategory,
} from "@/data/products";
import { navCategories } from "@/data/categories";
import { assets } from "@/data/assets";

const HOME_NEW_LIMIT = 10;
const HOME_CATEGORY_LIMIT = 12;

export default function HomePage() {
  const newProducts = getHomeNewArrivalsProducts();
  const wellnessPicks = getProductsByCategory("wellness").slice(
    0,
    HOME_CATEGORY_LIMIT
  );
  const devicePicks = getProductsByCategory("accessories").slice(
    0,
    HOME_CATEGORY_LIMIT
  );

  return (
    <div className="grain-overlay">
      {/* Hero — cozy split: warm copy panel + soft lifestyle image */}
      <section className="relative px-3 pt-3 pb-0 sm:px-4 sm:pt-4 md:px-5 md:pt-5 lg:px-6 lg:pt-6">
        <div className="relative grid min-h-[min(100dvh,960px)] grid-cols-1 overflow-hidden rounded-[1.5rem] bg-[#2a2623] shadow-[0_28px_90px_-28px_rgba(44,40,37,0.45),0_0_0_1px_rgba(255,255,255,0.06)] ring-1 ring-white/[0.06] lg:grid-cols-2 lg:min-h-[min(88vh,900px)] lg:rounded-[2rem]">
          <div className="relative z-10 order-1 flex min-h-[50vh] flex-col border-b border-white/[0.07] px-6 py-12 sm:px-10 sm:py-16 lg:min-h-0 lg:border-b-0 lg:border-r lg:border-white/[0.08] lg:px-11 lg:py-0 xl:px-14">
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#4a3f38]/35 via-transparent to-[#1a1816]/80"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_110%_85%_at_15%_25%,rgba(201,168,130,0.18)_0%,transparent_55%)]"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_90%_100%,rgba(166,124,82,0.08)_0%,transparent_45%)]"
              aria-hidden
            />

            <div className="relative z-10 flex flex-1 flex-col justify-center py-4 lg:min-h-[min(88vh,900px)] lg:py-14">
              <div className="max-w-xl">
                <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--accent-soft)]/25 bg-[var(--cream)]/[0.09] px-5 py-2.5 text-[11px] uppercase tracking-[0.32em] text-[#f5f0e8]/95 shadow-sm backdrop-blur-sm animate-fade-down sm:text-xs md:mb-8">
                  <span className="h-1 w-1 rounded-full bg-[var(--accent-soft)] shadow-[0_0_12px_rgba(201,168,130,0.55)]" aria-hidden />
                  Private Room · 2026
                  <span className="h-1 w-1 rounded-full bg-[var(--accent-soft)] shadow-[0_0_12px_rgba(201,168,130,0.55)]" aria-hidden />
                </p>
                <h1 className="section-heading animate-fade-up text-4xl leading-[1.06] text-[#faf6f0] sm:text-5xl md:text-6xl xl:text-7xl xl:tracking-tight [text-shadow:0_2px_28px_rgba(0,0,0,0.25)]">
                  Wellness, discreetly
                </h1>
                <div className="mt-6 flex animate-fade-up animation-delay-200 md:mt-8">
                  <div className="h-px w-14 bg-gradient-to-r from-[var(--accent-soft)] to-[var(--accent-soft)]/25 md:w-20" aria-hidden />
                </div>
                <p className="mt-6 max-w-md text-base leading-[1.75] text-[#ebe4d9]/92 md:mt-8 md:text-lg animate-fade-up animation-delay-200">
                  Carefully chosen intimate wellness, oils, and body-safe accessories — shipped with privacy in mind.
                </p>
                <div className="mt-10 flex flex-wrap gap-3.5 animate-fade-up animation-delay-400 md:mt-12 md:gap-4">
                  <Link
                    href="/wellness"
                    className="group relative inline-flex rounded-full bg-gradient-to-b from-[#faf8f5] to-[#ebe4d9] px-9 py-3.5 text-sm font-semibold text-[var(--foreground)] shadow-[0_10px_36px_-8px_rgba(201,168,130,0.45),inset_0_1px_0_rgba(255,255,255,0.95)] transition-all duration-300 hover:-translate-y-0.5 hover:from-white hover:to-[#f5f0e8] hover:shadow-[0_14px_44px_-6px_rgba(201,168,130,0.5)] md:text-[0.9375rem]"
                  >
                    <span className="relative z-10">Shop wellness</span>
                  </Link>
                  <Link
                    href="/accessories"
                    className="inline-flex rounded-full border border-[var(--cream)]/35 bg-white/[0.04] px-9 py-3.5 text-sm font-semibold text-[#f5f0e8]/95 backdrop-blur-[2px] transition-all duration-300 hover:border-[var(--accent-soft)]/50 hover:bg-[var(--cream)]/[0.09] md:text-[0.9375rem]"
                  >
                    Massage & devices
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative z-10 flex items-center gap-2 pb-2 pt-8 text-[10px] uppercase tracking-[0.32em] text-[#d4c4b4]/55 lg:pb-5">
              <span>Scroll</span>
              <svg className="h-5 w-5 text-[#c9a882]/50 animate-float" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>

          <div className="relative order-2 min-h-[46vh] w-full overflow-hidden lg:min-h-0 lg:rounded-l-[clamp(1rem,2.5vw,1.75rem)]">
            <Image
              src={assets.hero}
              alt="Oils and massage glide — warm, discreet product photography."
              fill
              priority
              quality={95}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-l from-amber-950/[0.06] via-amber-100/[0.03] to-transparent mix-blend-soft-light"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-l from-transparent via-[#2c2825]/10 to-[#2c2825]/45 lg:to-[#2c2825]/55"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_95%_90%_at_70%_45%,transparent_35%,rgba(44,40,37,0.18)_100%)]"
              aria-hidden
            />
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="flex items-end justify-between mb-10 animate-fade-up">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--accent)] font-medium mb-2">Just Dropped</p>
            <h2 className="section-heading text-3xl md:text-4xl font-semibold">New Arrivals</h2>
          </div>
          <Link
            href="/wellness?filter=new"
            className="text-sm font-medium text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors duration-200 flex items-center gap-1 group"
          >
            View all
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5 md:gap-7">
          {newProducts.slice(0, HOME_NEW_LIMIT).map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </section>

      {/* Feature strip - brand values */}
      <section className="bg-[var(--cream)] border-y border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 text-center animate-fade-up">
            {[
              { icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4", label: "Free Shipping", sub: "Above Rs. 4,999" },
              { icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15", label: "Easy Returns", sub: "14-day policy" },
              { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", label: "Secure Payment", sub: "100% protected" },
              { icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z", label: "Discreet packing", sub: "Plain outer box" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[var(--background)] flex items-center justify-center">
                  <svg className="w-5 h-5 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-sm text-[var(--foreground)]">{item.label}</p>
                  <p className="text-xs text-[var(--muted)] mt-0.5">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wellness picks */}
      <section className="bg-warm-radial py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-10 animate-fade-up">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[var(--accent)] font-medium mb-2">Care & comfort</p>
              <h2 className="section-heading text-3xl md:text-4xl font-semibold">Wellness</h2>
            </div>
            <Link
              href="/wellness"
              className="text-sm font-medium text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors duration-200 flex items-center gap-1 group"
            >
              View all
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5 md:gap-7">
            {wellnessPicks.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* End of Season Sale */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="text-center mb-12 animate-fade-up">
          <p className="text-sm uppercase tracking-[0.2em] text-[var(--accent)] font-medium mb-2">Limited Time</p>
          <h2 className="section-heading text-3xl md:text-4xl font-semibold">Featured picks</h2>
          <p className="text-[var(--muted)] mt-3 max-w-md mx-auto">Lubricants, oils, and devices we recommend this month — same discreet packaging on every order.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <Link
            href="/wellness"
            className="relative block aspect-[3/4] md:aspect-[2/3] rounded-2xl overflow-hidden bg-[var(--cream)] group animate-fade-up animation-delay-100"
          >
            <Image
              src={assets.saleBanner1}
              alt="Wellness essentials"
              fill
              className="object-cover transition-all duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--foreground)]/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-sm uppercase tracking-[0.15em] text-[var(--cream)]/80 mb-1">Protection & care</p>
              <span className="inline-block py-2.5 px-6 bg-[var(--cream)] text-[var(--foreground)] font-medium rounded-full text-sm transition-all duration-300 group-hover:bg-white group-hover:shadow-lg">
                Shop wellness
              </span>
            </div>
          </Link>
          <Link
            href="/fragrance"
            className="relative block aspect-[3/4] md:aspect-[2/3] rounded-2xl overflow-hidden bg-[var(--cream)] group animate-fade-up animation-delay-200"
          >
            <Image
              src={assets.saleBanner2}
              alt="Oils and supplements"
              fill
              className="object-cover transition-all duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--foreground)]/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-sm uppercase tracking-[0.15em] text-[var(--cream)]/80 mb-1">Oils & supplements</p>
              <span className="inline-block py-2.5 px-6 bg-[var(--cream)] text-[var(--foreground)] font-medium rounded-full text-sm transition-all duration-300 group-hover:bg-white group-hover:shadow-lg">
                Shop oils
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Categories strip */}
      <section className="py-14 bg-[var(--cream)] border-y border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-center text-sm uppercase tracking-[0.2em] text-[var(--muted)] mb-8 animate-fade-up">Browse by Category</p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 animate-fade-up animation-delay-100">
            {navCategories.map((cat) => (
              <Link
                key={cat.id}
                href={`/${cat.slug}`}
                className="px-6 py-2.5 rounded-full border border-[var(--border)] bg-[var(--card)] text-sm font-medium text-[var(--foreground)] hover:border-[var(--accent)] hover:text-[var(--accent)] hover:shadow-sm transition-all duration-200"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Devices */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="flex items-end justify-between mb-10 animate-fade-up">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--accent)] font-medium mb-2">Body-safe</p>
            <h2 className="section-heading text-3xl md:text-4xl font-semibold">Massage & devices</h2>
          </div>
          <Link
            href="/accessories"
            className="text-sm font-medium text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors duration-200 flex items-center gap-1 group"
          >
            View all
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5 md:gap-7">
          {devicePicks.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </section>

      {/* Brand story — text left, full artwork right (object-contain, never cropped) */}
      <section className="relative py-16 md:py-24 px-4 sm:px-6 overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#fff1f7] via-[#fce7f3] to-[#fbcfe8]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute top-1/2 right-0 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#ec4899]/20 blur-[100px]"
          aria-hidden
        />

        <div className="relative max-w-6xl mx-auto animate-fade-up">
          <div className="rounded-[1.75rem] bg-gradient-to-br from-[#9d174d] via-[#be185d] to-[#be185d] p-6 sm:p-8 md:p-10 lg:p-12 shadow-[0_24px_80px_-12px_rgba(157,23,77,0.45)] ring-1 ring-white/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-14 items-center">
              <div className="flex flex-col justify-center space-y-5 md:space-y-6 text-white">
                <p className="text-[11px] sm:text-xs uppercase tracking-[0.4em] text-white/75 font-semibold">
                  The Private Room Way
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold leading-[1.15] tracking-tight text-white drop-shadow-sm">
                  Your space, your rules
                </h2>
                <p className="text-sm sm:text-base text-white/85 leading-relaxed max-w-md">
                  Discreet delivery, plain packaging, and products described exactly as we stock them — so you always know what you&apos;re ordering.
                </p>
                <Link
                  href="/about"
                  className="group inline-flex w-fit items-center gap-2 text-sm font-semibold text-white border-b border-white/35 pb-0.5 hover:border-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#be185d] rounded-sm"
                >
                  Our story
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              <div className="relative w-full min-h-[240px] sm:min-h-[300px] md:min-h-[min(52vh,440px)] rounded-2xl bg-black/10 ring-1 ring-white/15">
                <Image
                  src={assets.storyBanner}
                  alt="Private Room — brand artwork."
                  fill
                  className="object-contain object-center p-3 sm:p-4 md:p-6"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={false}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-[var(--foreground)] text-[var(--cream)] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[var(--accent)] blur-[128px]" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-[var(--accent-soft)] blur-[100px]" />
        </div>
        <div className="relative max-w-xl mx-auto px-4 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-[var(--accent-soft)] mb-3 animate-fade-up">Join the Family</p>
          <h2 className="section-heading text-3xl md:text-4xl font-semibold animate-fade-up animation-delay-100">
            Sign up & save 10%
          </h2>
          <p className="mt-3 text-[var(--muted)] animate-fade-up animation-delay-200">
            Get restock alerts, private offers, and new arrivals on lubricants, devices, and oils.
          </p>
          <form className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto animate-fade-up animation-delay-300">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-5 py-3.5 rounded-full bg-white/10 border border-white/15 text-[var(--cream)] placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-soft)] focus:border-transparent transition-all duration-200 text-sm"
            />
            <button
              type="submit"
              className="px-7 py-3.5 bg-[var(--accent)] text-white font-medium rounded-full hover:bg-[var(--accent-hover)] transition-all duration-200 hover:shadow-lg text-sm whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-4 text-xs text-[var(--muted)]/70 animate-fade-up animation-delay-400">No spam, unsubscribe anytime.</p>
        </div>
      </section>
    </div>
  );
}
