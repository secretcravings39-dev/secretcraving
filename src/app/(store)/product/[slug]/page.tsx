import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  getProductBySlug,
  getRelatedProducts,
  products,
} from "@/data/products";
import { categories } from "@/data/categories";
import { AddToCartButton } from "./AddToCartButton";
import { ProductGallery } from "./ProductGallery";

type Props = { params: Promise<{ slug: string }> };

function formatPrice(price: number) {
  return `Rs.${price.toLocaleString("en-PK", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function formatPricePlain(price: number) {
  return `Rs. ${price.toLocaleString()}`;
}

function deliveryEstimateText(): string {
  const start = new Date();
  start.setDate(start.getDate() + 3);
  const end = new Date();
  end.setDate(end.getDate() + 6);
  const fmt = (d: Date) =>
    d.toLocaleDateString("en-GB", {
      weekday: "long",
      day: "numeric",
      month: "long",
    });
  return `Estimated delivery between ${fmt(start)} and ${fmt(end)}.`;
}

function savingsLine(price: number, compare?: number): string | null {
  if (compare == null || compare <= price) return null;
  const save = compare - price;
  const pct = Math.round((save / compare) * 100);
  return `Save Rs.${save.toLocaleString("en-PK", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} (${pct}% off)`;
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const galleryImages = [product.image, ...(product.images ?? [])];
  const related = getRelatedProducts(product, 8);
  const categoryLabel =
    categories.find((c) => c.id === product.categoryId)?.name ??
    product.categoryId;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      <nav className="text-sm text-[var(--muted)] mb-6">
        <Link href="/" className="hover:text-[var(--accent)]">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link
          href={`/${product.categoryId}`}
          className="hover:text-[var(--accent)]"
        >
          {categoryLabel}
        </Link>
        <span className="mx-2">/</span>
        <span>{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
        <div className="relative">
          <ProductGallery alt={product.name} images={galleryImages} />
          {product.compareAtPrice != null &&
            product.compareAtPrice > product.price && (
              <span className="absolute top-4 left-4 z-10 px-3 py-1 text-sm font-medium bg-[var(--accent)] text-[var(--foreground)] rounded pointer-events-none">
                Sale
              </span>
            )}
          {product.new &&
            !(
              product.compareAtPrice != null &&
              product.compareAtPrice > product.price
            ) && (
              <span className="absolute top-4 left-4 z-10 px-3 py-1 text-sm font-medium bg-[var(--foreground)] text-[var(--cream)] rounded pointer-events-none">
                New
              </span>
            )}
        </div>

        <div>
          <div className="flex flex-wrap items-center gap-2 gap-y-1 text-sm">
            <span className="text-emerald-700 dark:text-emerald-400 font-medium">
              In stock
            </span>
            {product.soldLast && (
              <span className="text-[var(--muted)]">
                · {product.soldLast.count} sold in last {product.soldLast.hours}{" "}
                hours
              </span>
            )}
          </div>
          <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold mt-3 leading-tight">
            {product.name}
          </h1>
          <p className="text-[var(--muted)] text-sm mt-2 uppercase tracking-wider">
            {product.color}
          </p>

          <div className="mt-6 space-y-1">
            <p className="text-xs uppercase tracking-wider text-[var(--muted)]">
              Regular price
            </p>
            <div className="flex flex-wrap items-baseline gap-3">
              <span className="text-2xl font-semibold tabular-nums">
                {formatPrice(product.price)}
              </span>
              {product.compareAtPrice != null &&
                product.compareAtPrice > product.price && (
                  <>
                    <span className="text-lg text-[var(--muted)] line-through tabular-nums">
                      {formatPrice(product.compareAtPrice)}
                    </span>
                    {savingsLine(product.price, product.compareAtPrice) && (
                      <span className="text-sm text-emerald-700 dark:text-emerald-400">
                        | {savingsLine(product.price, product.compareAtPrice)}
                      </span>
                    )}
                  </>
                )}
            </div>
          </div>

          {product.viewersLooking != null && (
            <p className="mt-4 text-sm font-medium text-[var(--foreground)]">
              {product.viewersLooking} people looking for this product
            </p>
          )}

          <div className="mt-8">
            <AddToCartButton product={product} label="Buy it now" />
          </div>
          <p className="mt-3 text-sm text-[var(--muted)] uppercase tracking-wide">
            {deliveryEstimateText()}
          </p>
          <p className="mt-4 text-sm text-[var(--muted)]">
            Free shipping on orders above Rs. 4,999. Easy returns.
          </p>

          <div className="mt-10 pt-8 border-t border-[var(--border)]">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--foreground)]">
              Product details
            </h2>
            {product.description ? (
              <p className="mt-3 text-[var(--muted)] leading-relaxed">
                {product.description}
              </p>
            ) : (
              <p className="mt-3 text-sm text-[var(--muted)]">
                Full specifications are printed on the retail packaging we ship.
              </p>
            )}
            <h2 className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--foreground)]">
              Reviews
            </h2>
            <p className="mt-3 text-sm text-[var(--muted)]">
              Reviews will appear here once customers leave feedback.
            </p>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-20 pt-16 border-t border-[var(--border)]">
          <h2 className="font-serif text-2xl font-semibold mb-2">
            Recommended products
          </h2>
          <p className="text-sm text-[var(--muted)] mb-8">
            Check Amazing Items for yours Needs Below !!! 💖💖💖
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-6">
            {related.map((p) => (
              <Link
                key={p.id}
                href={`/product/${p.slug}`}
                className="group block"
              >
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-[var(--cream)]">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-contain object-center group-hover:opacity-95 transition"
                    sizes="25vw"
                  />
                </div>
                <p className="mt-2 text-sm text-[var(--muted)]">{p.color}</p>
                <p className="font-medium line-clamp-2 group-hover:text-[var(--accent)]">
                  {p.name}
                </p>
                <p className="text-sm font-medium">
                  {formatPricePlain(p.price)}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}
