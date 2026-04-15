"use client";

import { useCart } from "@/context/CartContext";
import type { Product } from "@/types";

export function AddToCartButton({
  product,
  label = "Buy it now",
}: {
  product: Product;
  label?: string;
}) {
  const { addToCart } = useCart();

  return (
    <button
      type="button"
      onClick={() => addToCart(product)}
      className="w-full md:w-auto px-10 py-4 bg-[var(--foreground)] text-[var(--cream)] font-medium rounded-lg hover:opacity-90 transition"
    >
      {label}
    </button>
  );
}
