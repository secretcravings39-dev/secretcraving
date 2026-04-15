"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  alt: string;
  images: string[];
};

export function ProductGallery({ alt, images }: Props) {
  const [selected, setSelected] = useState(0);
  const current = images[selected] ?? images[0];

  return (
    <div>
      <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[var(--cream)]">
        <Image
          src={current}
          alt={alt}
          fill
          className="object-contain object-center"
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      {images.length > 1 && (
        <div className="mt-4 grid grid-cols-4 sm:grid-cols-5 gap-2">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setSelected(i)}
              className={`relative aspect-[3/4] rounded-lg overflow-hidden bg-[var(--cream)] ring-2 transition ${
                i === selected
                  ? "ring-[var(--foreground)]"
                  : "ring-transparent opacity-80 hover:opacity-100"
              }`}
              aria-label={`View image ${i + 1}`}
            >
              <Image
                src={src}
                alt=""
                fill
                className="object-contain object-center"
                sizes="80px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
