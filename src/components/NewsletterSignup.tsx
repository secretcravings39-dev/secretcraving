"use client";

import { useState } from "react";
import { sitePromo } from "@/data/site";

export function NewsletterSignup() {
  const [done, setDone] = useState(false);

  return (
    <form
      className="mt-4 space-y-3"
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
    >
      <p className="text-xs text-[var(--cream)]/60 leading-relaxed max-w-sm">
        {sitePromo.newsletterBlurb}
      </p>
      <div className="flex flex-col sm:flex-row gap-2">
        <label htmlFor="footer-newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="footer-newsletter-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="Email address"
          className="flex-1 min-w-0 rounded-lg border border-white/15 bg-white/5 px-3 py-2.5 text-sm text-[var(--cream)] placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-soft)]/50"
        />
        <button
          type="submit"
          className="shrink-0 rounded-lg bg-[var(--accent)]/90 px-4 py-2.5 text-sm font-medium text-[var(--foreground)] hover:bg-[var(--accent)] transition-colors"
        >
          {done ? "Thanks" : "Subscribe"}
        </button>
      </div>
    </form>
  );
}
