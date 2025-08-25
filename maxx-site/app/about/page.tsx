import React from "react";
import { Mail, Phone, Play, Linkedin, Twitter, Facebook } from "lucide-react";

export default function Page() {
  return (
    <main>
      <section id="about" className="border-b border-[var(--brand-blue-dark)] bg-[var(--brand-blue)] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">About Us</h1>
            <p className="mt-6 text-lg leading-relaxed text-white/90">
              At <span className="font-semibold text-white">MAXX Energy</span>, we believe in building a sustainable future with
              reliable, data-driven energy solutions. Since our founding, we’ve focused on innovation,
              accountability, and partnerships that empower communities and businesses worldwide.
            </p>
            <p className="mt-4 text-white/90">
              Our teams of engineers, scientists, and operators work every day to deliver clean energy with
              transparency and measurable impact.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#mission" className="rounded-xl bg-white text-[var(--brand-blue)] hover:bg-gray-100 px-4 py-2 font-medium">Our Mission</a>
              <a href="#team" className="rounded-xl bg-[var(--brand-gold)] text-[#0e1116] hover:brightness-95 px-4 py-2 font-semibold">Meet the Team</a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[16/9] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-black/20">
              <img
                src="https://images.unsplash.com/photo-1604335399105-3c22a7b96c3a?q=80&w=1600&auto=format&fit=crop"
                alt="Clean energy tanks"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-4 right-4 rounded-xl bg-[#0e1116]/70 px-4 py-2 text-sm text-white">
                <div className="font-semibold">H2 Storage</div>
                <div className="text-white/70">Realtime monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="mission" className="bg-[var(--brand-blue)] text-white border-y border-[var(--brand-blue-dark)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <h2 className="text-3xl md:text-4xl font-bold">Our Mission</h2>
          <p className="mt-4 max-w-3xl text-white/90">
            Accelerate the transition to clean energy through innovation, operational excellence, and
            responsible practices. We combine advanced analytics with field expertise to reduce emissions,
            optimize performance, and create resilient energy systems for the next generation.
          </p>
        </div>
      </section>

      <section className="border-b border-gray-200 bg-white text-[#0e1116]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16 grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-[var(--brand-blue)]">Our History</h3>
            <p className="mt-3 text-gray-700">
              Founded in 2012, MAXX Energy started as a small engineering collective exploring
              grid-scale storage. Over the years, we expanded into solar, wind, hydrogen, and analytics—
              partnering with public and private sectors to deliver measurable results.
            </p>
            <ul className="mt-5 space-y-3 text-gray-700">
              <li>• 2014 — First utility-scale solar deployment</li>
              <li>• 2018 — Launch of our real-time energy analytics platform</li>
              <li>• 2022 — Hydrogen storage facilities reach commercial operation</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white/10 text-white p-6 ring-1 ring-white/20 md:bg-[var(--brand-blue)] md:text-white md:ring-[var(--brand-blue-dark)]">
            <h4 className="font-semibold">At a Glance</h4>
            <dl className="mt-3 space-y-2 text-white/90">
              <div className="flex justify-between"><dt>Sites</dt><dd>40+</dd></div>
              <div className="flex justify-between"><dt>Countries</dt><dd>8</dd></div>
              <div className="flex justify-between"><dt>Employees</dt><dd>500+</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section id="team" className="border-b border-[var(--brand-blue-dark)] bg-[var(--brand-blue)] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <h3 className="text-2xl md:text-3xl font-bold">Meet Our Team</h3>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Jane Doe", role: "Chief Executive Officer", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop" },
              { name: "John Smith", role: "Chief Technology Officer", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop" },
              { name: "Maria Lopez", role: "Head of Sustainability", img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=800&auto=format&fit=crop" },
            ].map((m) => (
              <article key={m.name} className="rounded-2xl overflow-hidden bg-white/10 ring-1 ring-white/20">
                <img src={m.img} alt={m.name} className="h-56 w-full object-cover" />
                <div className="p-5">
                  <h4 className="font-semibold text-lg text-white">{m.name}</h4>
                  <p className="text-white/80">{m.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="media" className="border-b border-gray-200 bg-white text-[#0e1116]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <h3 className="text-2xl md:text-3xl font-bold text-[var(--brand-blue)]">Inside MAXX Energy</h3>
          <p className="mt-2 text-gray-700">Watch our short film on how we build, monitor, and scale clean energy projects.</p>
          <div className="mt-6">
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl ring-1 ring-gray-200 bg-black/5">
              <video className="h-full w-full" poster="https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1600&auto=format&fit=crop" controls>
                <source src="" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[var(--brand-blue)] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16 grid lg:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold">Contact Us</h3>
            <p className="mt-3">We’d love to hear from you. Reach us through any of the channels below.</p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-center gap-3"><Mail className="h-5 w-5 text-white" /> <a href="mailto:info@maxxenergy.com" className="hover:underline">info@maxxenergy.com</a></li>
              <li className="flex items-center gap-3"><Phone className="h-5 w-5 text-white" /> <span>+1 (800) 555-ENERGY</span></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Follow us</h4>
            <div className="mt-4 flex gap-3">
              <a aria-label="LinkedIn" href="#" className="rounded-xl bg-white text-[var(--brand-blue)] p-3 hover:bg-gray-100"><Linkedin /></a>
              <a aria-label="Twitter" href="#" className="rounded-xl bg-white text-[var(--brand-blue)] p-3 hover:bg-gray-100"><Twitter /></a>
              <a aria-label="Facebook" href="#" className="rounded-xl bg-white text-[var(--brand-blue)] p-3 hover:bg-gray-100"><Facebook /></a>
            </div>
            <div className="mt-6 rounded-2xl bg-white text-[#0e1116] p-5 ring-1 ring-gray-200">
              <h5 className="font-semibold text-[var(--brand-blue)]">Headquarters</h5>
              <p className="mt-1">1200 Gridline Ave, Suite 400<br/>Austin, TX 73301</p>
            </div>
          </div>
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
