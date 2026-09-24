"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme, useLanguage } from "@/lib/providers";
import { languageLabels, type Language } from "@/lib/translations";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: t.navAbout, href: "#about" },
    { label: t.navSubjects, href: "#subjects" },
    { label: t.navTeachers, href: "#teachers" },
    { label: t.navGallery, href: "#gallery" },
    { label: t.navContact, href: "#contact" },
  ];

  const langs: Language[] = ["en", "si", "ta"];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "nav-blur bg-[var(--nav-bg)] shadow-[0_0_0_1px_var(--card-border)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between h-14">
        <a href="#" className="flex items-center gap-2.5">
          <Image
            src="/images/logo.jpg"
            alt="MSE"
            width={30}
            height={30}
            className="rounded-md"
          />
          <span className="text-sm font-semibold tracking-tight">MSE</span>
        </a>

        <div className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            >
              {l.label}
            </a>
          ))}

          {/* Language switcher */}
          <div className="flex items-center rounded-full border border-[var(--card-border)] overflow-hidden">
            {langs.map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`text-[11px] px-2.5 py-1 transition-colors ${
                  lang === l
                    ? "bg-[var(--brand)] text-white"
                    : "text-[var(--muted)] hover:text-[var(--foreground)]"
                }`}
              >
                {languageLabels[l]}
              </button>
            ))}
          </div>

          {/* Theme toggle */}
          <button
            onClick={toggle}
            className="p-1.5 rounded-full text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
              </svg>
            )}
          </button>

          <a
            href="#contact"
            className="text-xs font-medium bg-[var(--brand)] text-white px-4 py-1.5 rounded-full hover:bg-[var(--brand-dark)] transition-colors"
          >
            {t.navEnroll}
          </a>
        </div>

        {/* Mobile controls */}
        <div className="lg:hidden flex items-center gap-2">
          <div className="flex items-center rounded-full border border-[var(--card-border)] overflow-hidden">
            {langs.map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`text-[10px] px-2 py-0.5 transition-colors ${
                  lang === l
                    ? "bg-[var(--brand)] text-white"
                    : "text-[var(--muted)]"
                }`}
              >
                {languageLabels[l]}
              </button>
            ))}
          </div>

          <button
            onClick={toggle}
            className="p-1.5 text-[var(--muted)]"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
              </svg>
            )}
          </button>

          <button
            className="p-1.5 -mr-1.5"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden nav-blur bg-[var(--nav-bg)] border-t border-[var(--card-border)] px-6 py-4 space-y-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block text-sm text-[var(--muted)] hover:text-[var(--foreground)]"
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="block text-center text-sm font-medium bg-[var(--brand)] text-white px-4 py-2 rounded-full"
            onClick={() => setMobileOpen(false)}
          >
            {t.navEnroll}
          </a>
        </div>
      )}
    </nav>
  );
}
