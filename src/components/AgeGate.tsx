"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "privateroom_age_verified";

export function AgeGate() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      setOpen(localStorage.getItem(STORAGE_KEY) !== "1");
    } catch {
      setOpen(true);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mounted, open]);

  if (!mounted || !open) return null;

  const confirm = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore quota / private mode */
    }
    setOpen(false);
  };

  const leave = () => {
    window.location.href = "https://www.google.com";
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="age-gate-title"
      aria-describedby="age-gate-desc"
    >
      <div
        className="absolute inset-0 bg-[var(--foreground)]/75 backdrop-blur-sm"
        aria-hidden
      />
      <div className="relative w-full max-w-md rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 sm:p-8 shadow-2xl shadow-[var(--shadow-warm-md)] animate-fade-up">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)] mb-2">
          Age restriction
        </p>
        <h2
          id="age-gate-title"
          className="font-serif text-2xl sm:text-3xl font-semibold text-center text-[var(--foreground)] mb-3"
        >
          Adults 18+ only
        </h2>
        <p
          id="age-gate-desc"
          className="text-sm text-[var(--muted)] text-center leading-relaxed mb-8"
        >
          This site offers age-restricted products and information. By entering, you confirm that you
          are at least 18 years of age (or the age of majority where you live) and that you accept
          responsibility for viewing this content.
        </p>
        <div className="flex flex-col gap-3">
          <button
            type="button"
            onClick={confirm}
            className="w-full py-3.5 rounded-xl bg-[var(--foreground)] text-[var(--cream)] text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            I am 18 or older — enter site
          </button>
          <button
            type="button"
            onClick={leave}
            className="w-full py-3 rounded-xl border border-[var(--border)] text-sm font-medium text-[var(--muted)] hover:bg-[var(--cream)] transition-colors"
          >
            I am under 18 — leave
          </button>
        </div>
      </div>
    </div>
  );
}
