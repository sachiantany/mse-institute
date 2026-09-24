"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const links = [
  { label: "About", href: "#about" },
  { label: "Subjects", href: "#subjects" },
  { label: "Why MSE", href: "#why-mse" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "nav-blur bg-[var(--background)]/80 shadow-[0_0_0_1px_var(--card-border)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between h-14">
        <a href="#" className="flex items-center gap-2.5">
          <Image
            src="/images/logo.jpg"
            alt="MSE"
            width={32}
            height={32}
            className="rounded-md"
          />
          <span className="text-sm font-semibold tracking-tight">MSE</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-xs font-medium bg-[var(--brand)] text-white px-4 py-1.5 rounded-full hover:bg-[var(--brand-dark)] transition-colors"
          >
            Enroll Now
          </a>
        </div>

        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden nav-blur bg-[var(--background)]/95 border-t border-[var(--card-border)] px-6 py-4 space-y-3">
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
            Enroll Now
          </a>
        </div>
      )}
    </nav>
  );
}
