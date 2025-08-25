"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white backdrop-blur border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center">
            <Image
              src="/MAXX-Energy-Logo-1B.png"
              alt="MAXX Energy Logo"
              width={140}
              height={40}
              priority
              className="h-9 w-auto"
            />
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-[var(--brand-blue)]">
          <Link className="hover:underline" href="/">HOME</Link>
          <Link className="hover:underline" href="/about">ABOUT US</Link>
          <Link className="hover:underline" href="/data">DATA</Link>
          <Link className="hover:underline" href="/faq">FAQ</Link>
        </nav>
        <button className="inline-flex items-center gap-2 rounded-xl bg-[var(--brand-gold)] px-4 py-2 text-[#0e1116] font-semibold shadow hover:brightness-95">
          Login
        </button>
      </div>
    </header>
  );
}
