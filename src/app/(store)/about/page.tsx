import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us – Private Room",
  description:
    "Private Room is a Pakistan-based intimate wellness shop: lubricants, protection, oils, supplements, and body-safe devices with discreet delivery.",
};

export default function AboutPage() {
  return (
    <div className="bg-warm-radial">
      {/* Hero banner */}
      <section className="relative overflow-hidden bg-[var(--cream)] py-20 md:py-28">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[var(--accent)]" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-[var(--accent)] font-medium mb-4 animate-fade-down">Our Story</p>
          <h1 className="section-heading text-4xl md:text-5xl font-semibold animate-fade-up">
            About Secret Cravings
          </h1>
            <p className="mt-5 text-lg text-[var(--muted)] max-w-xl mx-auto leading-relaxed animate-fade-up animation-delay-100">
            Built around privacy and care: wellness products you can shop
            without compromise, delivered with respect.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 md:py-20">
        {/* Mission cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 animate-fade-up animation-delay-200">
          <div className="card-warm p-8">
            <div className="w-12 h-12 rounded-full bg-[var(--cream)] flex items-center justify-center mb-5">
              <svg className="w-5 h-5 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="font-serif text-xl font-semibold mb-3">Our Mission</h3>
            <p className="text-[var(--muted)] leading-relaxed text-sm">
              We curate oils, protection, and body-safe devices with clear
              information and discreet shipping so you can choose confidently.
            </p>
          </div>
          <div className="card-warm p-8">
            <div className="w-12 h-12 rounded-full bg-[var(--cream)] flex items-center justify-center mb-5">
              <svg className="w-5 h-5 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
            </div>
            <h3 className="font-serif text-xl font-semibold mb-3">Our Promise</h3>
            <p className="text-[var(--muted)] leading-relaxed text-sm">
              Orders over Rs. 4,999 ship free nationwide. If something arrives
              damaged or not as described, contact us within 14 days so we can
              sort a return or replacement.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center animate-fade-up">
          <p className="text-[var(--muted)] mb-6">
            Thank you for being here. We&apos;d love to hear from you.
          </p>
          <Link href="/contact" className="btn-primary">
            Contact Us
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
