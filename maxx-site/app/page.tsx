import React from "react";
import { ArrowRight, BarChart2, ShieldCheck, Leaf } from "lucide-react";

export default function Page() {
  return (
    <main>
      {/* Hero */}
      <section className="border-b border-[var(--brand-blue-dark)] bg-[var(--brand-blue)] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">Powering a Cleaner Tomorrow</h1>
            <p className="mt-6 text-lg leading-relaxed text-white/90">
              MAXX Energy delivers reliable, data-driven clean energy solutions. Explore our mission, meet the team,
              and dive into transparent analytics that track real-world impact.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/data" className="inline-flex items-center gap-2 rounded-xl bg-white text-[var(--brand-blue)] hover:bg-gray-100 px-5 py-3 font-semibold">
                Explore Data <BarChart2 className="h-4 w-4" />
              </a>
              <a href="/about" className="inline-flex items-center gap-2 rounded-xl bg-[var(--brand-gold)] text-[#0e1116] hover:brightness-95 px-5 py-3 font-semibold">
                About Us <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[16/9] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-black/20">
              <img
                src="https://images.unsplash.com/photo-1542662565-7e4b66bae529?q=80&w=1600&auto=format&fit=crop"
                alt="Solar field"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-4 right-4 rounded-xl bg-[#0e1116]/70 px-4 py-2 text-sm text-white">
                <div className="font-semibold">Solar • Wind • H2</div>
                <div className="text-white/80">Live performance insights</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl ring-1 ring-gray-200 p-6">
            <ShieldCheck className="h-8 w-8 text-[var(--brand-blue)]" />
            <h3 className="mt-3 font-semibold text-[var(--brand-blue)]">Proven Reliability</h3>
            <p className="mt-1 text-gray-600 text-sm">Utility-grade systems designed for safety, resilience, and uptime.</p>
          </div>
          <div className="rounded-2xl ring-1 ring-gray-200 p-6">
            <BarChart2 className="h-8 w-8 text-[var(--brand-blue)]" />
            <h3 className="mt-3 font-semibold text-[var(--brand-blue)]">Transparent Analytics</h3>
            <p className="mt-1 text-gray-600 text-sm">Open KPIs and dashboards to track performance and impact.</p>
          </div>
          <div className="rounded-2xl ring-1 ring-gray-200 p-6">
            <Leaf className="h-8 w-8 text-[var(--brand-blue)]" />
            <h3 className="mt-3 font-semibold text-[var(--brand-blue)]">Sustainable by Design</h3>
            <p className="mt-1 text-gray-600 text-sm">From siting to operation, we prioritize long-term stewardship.</p>
          </div>
        </div>
      </section>

      {/* Featured dashboards */}
      <section className="bg-[#f8fafc] border-y border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--brand-blue)]">Featured Dashboards</h2>
            <a href="/data" className="text-sm font-semibold text-[var(--brand-blue)] hover:underline">View all</a>
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {["Solar Performance","Wind Capacity","Hydrogen Storage"].map((t, i) => (
              <article key={t} className="rounded-2xl bg-white ring-1 ring-gray-200 overflow-hidden">
                <img
                  src={[
                    "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1400&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1581092580502-7c74b6c04254?q=80&w=1400&auto=format&fit=crop",
                  ][i]}
                  alt={t}
                  className="h-40 w-full object-cover"
                />
                <div className="p-5">
                  <h4 className="font-semibold text-[var(--brand-blue)]">{t}</h4>
                  <p className="mt-1 text-sm text-gray-600">Explore live KPIs and export monthly reports.</p>
                  <div className="mt-4">
                    <a href="/data" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-blue)] hover:underline">
                      Open dashboard <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--brand-blue)]">Our Story</h2>
            <p className="mt-3 text-gray-700">
              From a small engineering collective to a multi-site operator, MAXX Energy has stayed focused on
              measurable impact and transparent reporting.
            </p>
            <div className="mt-6">
              <a href="/about" className="inline-flex items-center gap-2 rounded-xl bg-[var(--brand-blue)] text-white px-5 py-3 font-semibold hover:bg-[#24466c]">
                Learn more <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl ring-1 ring-gray-200 bg-black/5">
              <img
                src="https://images.unsplash.com/photo-1523861751938-12104b0c9c62?q=80&w=1600&auto=format&fit=crop"
                alt="Operations"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--brand-blue)] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold">Ready to explore the numbers?</h3>
            <p className="text-white/90">Jump into our dashboards to see exactly how we perform across sites and months.</p>
          </div>
          <a href="/data" className="inline-flex items-center gap-2 rounded-xl bg-white text-[var(--brand-blue)] px-5 py-3 font-semibold hover:bg-gray-100">
            Open Data <BarChart2 className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Footer */}
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
