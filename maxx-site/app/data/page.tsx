"use client";

import React, { useMemo, useState } from "react";
import { SlidersHorizontal, ChevronLeft, ChevronRight, BarChart2 } from "lucide-react";

export default function Page() {
  const months = useMemo(
    () => [
      "Jan 2024","Feb 2024","Mar 2024","Apr 2024","May 2024","Jun 2024",
      "Jul 2024","Aug 2024","Sep 2024","Oct 2024","Nov 2024","Dec 2024"
    ],
    []
  );
  const [page, setPage] = useState(2);

  const prev = () => setPage((p) => Math.max(0, p - 1));
  const next = () => setPage((p) => Math.min(months.length - 1, p + 1));

  return (
    <main>
      <section className="border-b border-[var(--brand-blue-dark)] bg-[var(--brand-blue)] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">Data</h1>
            <p className="mt-6 text-lg leading-relaxed text-white/90">
              At MAXX Energy, we believe in data-driven solutions. This page is your gateway to vital reports,
              energy analytics, and performance metrics that reflect our commitment to sustainable growth and
              accountability. Whether you're a researcher, partner, or curious mind, our data empowers you to
              better understand the energy we produce—and the future we're building.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-[16/9] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-black/20 bg-gradient-to-br from-[#99c2ff] to-[#e6f0ff]">
              <img
                src="https://images.unsplash.com/photo-1604335399105-3c22a7b96c3a?q=80&w=1600&auto=format&fit=crop"
                alt="Hydrogen tanks"
                className="h-full w-full object-cover opacity-90"
              />
              <div className="absolute bottom-4 right-4 rounded-xl bg-[#0e1116]/70 px-4 py-2 text-sm">
                <div className="font-semibold">H2 Storage</div>
                <div className="text-white/70">Realtime monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center py-4">
          <a
            href="#solar-dashboard"
            className="rounded-full bg-[var(--brand-blue)] text-white hover:bg-[#24466c] px-6 py-3 text-sm font-semibold tracking-wide inline-flex items-center gap-2"
          >
            <BarChart2 className="h-4 w-4" /> SOLAR ENERGY DASHBOARD
          </a>
        </div>
      </div>

      <section className="border-t border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <button className="inline-flex items-center gap-2 rounded-xl bg-white text-[var(--brand-blue)] ring-1 ring-gray-200 px-4 py-2 hover:bg-gray-50">
            <SlidersHorizontal className="h-4 w-4" /> Filter
          </button>

          <div className="text-sm font-medium text-[var(--brand-blue)]">
            All Months | Jan 2024 - Dec 2024
          </div>

          <div className="flex items-center gap-2 select-none">
            <button onClick={prev} className="inline-flex items-center gap-1 rounded-lg ring-1 ring-gray-200 px-3 py-2 hover:bg-gray-50">
              <ChevronLeft className="h-4 w-4" /> previous
            </button>
            <div className="hidden sm:flex items-center gap-1">
              {months.map((m, i) => (
                <button
                  key={m}
                  onClick={() => setPage(i)}
                  className={
                    "h-8 w-8 rounded-md text-xs ring-1 ring-gray-200 hover:bg-gray-50 " +
                    (i === page ? "bg-[var(--brand-gold)] text-[#0e1116] font-semibold" : "bg-white text-gray-700")
                  }
                  aria-label={`Go to ${m}`}
                  title={m}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            <button onClick={next} className="inline-flex items-center gap-1 rounded-lg ring-1 ring-gray-200 px-3 py-2 hover:bg-gray-50">
              next <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      <section id="solar-dashboard" className="bg-[#f8fafc]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1,2,3,4,5,6].map((n) => (
            <article key={n} className="rounded-2xl bg-white ring-1 ring-gray-200 p-5">
              <h4 className="font-semibold text-[var(--brand-blue)]">Dataset {n}</h4>
              <p className="mt-2 text-sm text-gray-600">KPI snapshots, downloads, and quick insights for {months[page]}.</p>
              <div className="mt-4 flex gap-2">
                <a className="rounded-lg bg-[var(--brand-blue)] text-white px-3 py-1.5 text-xs font-semibold hover:bg-[#24466c]" href="#">
                  Open
                </a>
                <a className="rounded-lg bg-white ring-1 ring-gray-200 text-[var(--brand-blue)] px-3 py-1.5 text-xs font-semibold hover:bg-gray-50" href="#">
                  Download
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} MAXX Energy. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:underline">Privacy</a>
            <a href="#terms" className="hover:underline">Terms</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
