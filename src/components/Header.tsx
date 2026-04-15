"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { headerNavCategories } from "@/data/categories";
import { assets } from "@/data/assets";
import { useState } from "react";

export function Header() {
  const { itemCount, openCart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openNavId, setOpenNavId] = useState<string | null>(null);
  const [openMobileSubId, setOpenMobileSubId] = useState<string | null>(null);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 transition-all duration-300">
      <div
        className="h-[3px] bg-gradient-to-r from-[var(--accent)]/15 via-[var(--accent)]/55 to-[var(--accent)]/15 shadow-[0_1px_12px_rgba(166,124,82,0.35)]"
        aria-hidden
      />
      <div className="border-b border-[var(--border)]/40 bg-gradient-to-b from-[var(--cream)]/25 via-[var(--background)]/95 to-[var(--background)]/90 backdrop-blur-2xl backdrop-saturate-[1.35] shadow-[0_8px_32px_-12px_rgba(44,40,37,0.14),inset_0_1px_0_0_rgba(255,255,255,0.72)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center h-[64px] md:h-[72px] w-full gap-2 md:gap-5 animate-fade-down animation-delay-100">
          {/* Left: mobile menu + desktop nav */}
          <div className="flex items-center min-w-0 flex-1">
            <button
              type="button"
              className="md:hidden p-2.5 -ml-1 rounded-full border border-transparent hover:border-[var(--border)]/80 hover:bg-[var(--cream)]/90 hover:shadow-sm transition-all duration-200 shrink-0"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Menu"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            <nav className="hidden md:flex items-center gap-1 min-w-0">
              {headerNavCategories.map((cat) => (
                <div
                  key={cat.id}
                  className="relative"
                  onMouseEnter={() => setOpenNavId(cat.id)}
                  onMouseLeave={() => setOpenNavId(null)}
                >
                  <Link
                    href={`/${cat.slug}`}
                    className="nav-link-luxury relative px-3.5 py-2 text-[13px] font-semibold tracking-[0.04em] text-[var(--foreground)]/92 hover:text-[var(--accent-hover)] rounded-full bg-transparent hover:bg-gradient-to-b hover:from-[var(--cream)] hover:to-[var(--cream-dark)]/35 hover:shadow-sm transition-all duration-200 whitespace-nowrap"
                  >
                    {cat.name}
                  </Link>
                  {openNavId === cat.id && (
                    <div className="absolute left-0 top-full pt-2.5 animate-scale-in z-30">
                      <div className="overflow-hidden rounded-2xl border border-[var(--border)]/80 bg-[var(--card)]/98 py-2 shadow-2xl shadow-[var(--shadow-warm-md)] ring-1 ring-[var(--accent)]/10 backdrop-blur-xl min-w-[210px]">
                        {cat.children.map((child) => (
                          <Link
                            key={child.slug}
                            href={`/${child.slug}`}
                            className="flex items-center px-4 py-2.5 text-sm text-[var(--foreground)]/95 hover:bg-gradient-to-r hover:from-[var(--cream)] hover:to-[var(--cream)]/70 hover:text-[var(--accent)] transition-colors rounded-xl mx-1.5"
                            onClick={() => setOpenNavId(null)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Center: logo (no absolute positioning — avoids overlap) */}
          <Link
            href="/"
            className="shrink-0 flex items-center justify-center rounded-2xl bg-gradient-to-br from-white via-[var(--card)] to-[var(--cream)]/80 p-2 ring-1 ring-[var(--accent-soft)]/25 shadow-[0_10px_36px_-12px_rgba(166,124,82,0.35),inset_0_1px_0_0_rgba(255,255,255,0.9)]"
            aria-label="Private Room home"
          >
            <Image
              src={assets.logo}
              alt="Private Room"
              width={140}
              height={48}
              className="h-7 w-auto md:h-[2.35rem] object-contain max-w-[min(44vw,168px)] drop-shadow-[0_1px_2px_rgba(44,40,37,0.08)]"
              priority
              unoptimized
            />
          </Link>

          {/* Right: actions */}
          <div className="hidden md:flex items-center justify-end gap-2.5 flex-1 min-w-0">
            <Link
              href="/login"
              className="px-5 py-2.5 text-sm font-semibold text-[var(--foreground)] rounded-full border border-[var(--border)]/70 bg-gradient-to-b from-[var(--card)] to-[var(--cream)]/40 hover:border-[var(--accent)]/45 hover:from-[var(--cream)] hover:to-[var(--cream-dark)]/25 hover:text-[var(--accent)] hover:shadow-md transition-all duration-200 shadow-sm"
            >
              Login
            </Link>
            <div className="flex items-center gap-0.5 rounded-full border border-[var(--border)]/55 bg-gradient-to-b from-white to-[var(--cream)]/70 p-1 pl-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_4px_14px_-4px_rgba(44,40,37,0.12)]">
              <Link
                href="/search"
                className="p-2.5 rounded-full text-[var(--foreground)]/88 hover:bg-[var(--card)] hover:text-[var(--accent)] hover:shadow-sm transition-all duration-200"
                aria-label="Search"
              >
                <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </Link>
              <button
                type="button"
                className="relative p-2.5 rounded-full text-[var(--foreground)]/88 hover:bg-[var(--card)] hover:text-[var(--accent)] hover:shadow-sm transition-all duration-200"
                onClick={openCart}
                aria-label="Cart"
              >
                <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                {itemCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-0.5 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-hover)] text-white text-[10px] font-bold flex items-center justify-center ring-2 ring-white shadow-md">
                    {itemCount > 99 ? "99+" : itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          <div className="relative md:hidden flex-1 flex justify-end">
            <button
              type="button"
              onClick={() => setProfileOpen((o) => !o)}
              className="p-2 rounded-lg hover:bg-[var(--cream)] transition-colors duration-200"
              aria-label="Account"
              aria-expanded={profileOpen}
              aria-haspopup="true"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
            {profileOpen && (
              <>
                <div className="fixed inset-0 z-40" aria-hidden onClick={() => setProfileOpen(false)} />
                <div className="absolute right-0 top-full mt-2 z-50 w-52 py-2 bg-[var(--card)] border border-[var(--border)] rounded-xl shadow-lg shadow-[var(--shadow-warm)] animate-scale-in">
                  <Link
                    href="/login"
                    className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-[var(--foreground)] hover:bg-[var(--cream)] hover:text-[var(--accent)] rounded-lg mx-1 transition-colors"
                    onClick={() => setProfileOpen(false)}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                    </svg>
                    Login
                  </Link>
                  <Link
                    href="/signup"
                    className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-[var(--foreground)] hover:bg-[var(--cream)] hover:text-[var(--accent)] rounded-lg mx-1 transition-colors"
                    onClick={() => setProfileOpen(false)}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    </svg>
                    Sign up
                  </Link>
                  <div className="my-1 mx-3 border-t border-[var(--border)]" />
                  <Link
                    href="/"
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-[var(--muted)] hover:bg-[var(--cream)] rounded-lg mx-1 transition-colors"
                    onClick={() => setProfileOpen(false)}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    Logout
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <>
            <div
              className="fixed inset-0 top-[64px] sm:top-[104px] bg-black/35 backdrop-blur-sm z-40 md:hidden"
              aria-hidden
              onClick={() => setMenuOpen(false)}
            />
            <div className="fixed top-[64px] sm:top-[104px] left-0 right-0 z-50 md:hidden max-h-[70vh] overflow-y-auto bg-[var(--card)] border-b border-[var(--border)] shadow-xl shadow-[var(--shadow-warm-md)] animate-fade-down rounded-b-2xl ring-1 ring-[var(--border)]/30">
              <nav className="py-3 px-4 space-y-0.5">
                {headerNavCategories.map((cat) => {
                  const isSubOpen = openMobileSubId === cat.id;
                  const hasChildren = cat.children.length > 0;
                  return (
                    <div key={cat.id}>
                      {hasChildren ? (
                        <>
                          <button
                            type="button"
                            onClick={() => setOpenMobileSubId((id) => (id === cat.id ? null : cat.id))}
                            className="flex items-center justify-between w-full py-3 px-2 font-medium text-left rounded-lg hover:bg-[var(--cream)] transition-colors"
                            aria-expanded={isSubOpen}
                          >
                            {cat.name}
                            <svg
                              className={`w-4 h-4 text-[var(--muted)] transition-transform duration-200 ${isSubOpen ? "rotate-180" : ""}`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                          <div className={`grid transition-[grid-template-rows] duration-200 ease-out ${isSubOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                            <div className="overflow-hidden">
                              <div className="pl-4 space-y-0.5 pt-1 pb-2">
                                {cat.children.map((child) => (
                                  <Link
                                    key={child.slug}
                                    href={`/${child.slug}`}
                                    className="block py-2 px-3 text-sm text-[var(--muted)] hover:text-[var(--accent)] hover:bg-[var(--cream)] rounded-lg transition-colors"
                                    onClick={() => setMenuOpen(false)}
                                  >
                                    {child.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        </>
                      ) : (
                        <Link
                          href={`/${cat.slug}`}
                          className="block py-3 px-2 font-medium rounded-lg hover:bg-[var(--cream)] transition-colors"
                          onClick={() => setMenuOpen(false)}
                        >
                          {cat.name}
                        </Link>
                      )}
                    </div>
                  );
                })}
              </nav>
            </div>
          </>
        )}
        </div>
      </div>
    </header>
  );
}
