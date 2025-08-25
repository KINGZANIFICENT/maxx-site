import React from "react";

export default function Page() {
  const faqs = [
    { q: "What does MAXX Energy do?", a: "We deliver reliable, data-driven clean energy solutions across solar, wind, and hydrogen." },
    { q: "Where can I view performance data?", a: "Visit the Data page for dashboards, metrics, and monthly reports." },
    { q: "How can I contact the team?", a: "See the Contact section on the About page for email and phone." }
  ];
  return (
    <main>
      <section className="border-b border-[var(--brand-blue-dark)] bg-[var(--brand-blue)] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">FAQ</h1>
          <p className="mt-3 text-white/90">Quick answers to common questions.</p>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid gap-4">
          {faqs.map(({q,a}) => (
            <details key={q} className="rounded-xl ring-1 ring-gray-200 p-5 group">
              <summary className="cursor-pointer font-semibold text-[var(--brand-blue)]">{q}</summary>
              <p className="mt-2 text-gray-700">{a}</p>
            </details>
          ))}
        </div>
      </section>
      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-gray-600 flex items-center justify-between">
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
