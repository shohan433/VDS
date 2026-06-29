'use client';

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function AboutPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const values = [
    {
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
      title: "Quality First",
      description: "We obsess over every pixel and every line of code, delivering nothing short of excellence.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v4l3 3" />
        </svg>
      ),
      title: "On-Time Delivery",
      description: "We respect your timelines and treat every deadline as a commitment, not a suggestion.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: "Client-Centered",
      description: "Your goals are our goals. We build long-term partnerships built on trust and transparency.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      ),
      title: "Innovation-Driven",
      description: "We stay ahead of trends, bringing cutting-edge solutions that keep our clients competitive.",
    },
  ];



  return (
    <div className="min-h-screen bg-[#050b16] text-slate-50">
      {/* ── Navbar ── */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#050b16]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-6 py-4 sm:px-8 lg:px-12">
          <Link href="/" className="inline-flex items-center gap-3 text-white">
            <img src="/images/vds logo.png" alt="VDS Logo" className="h-10 w-auto rounded-full object-contain" />
            <span className="sr-only">VDS</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-10 text-sm text-slate-300 lg:flex">
            <Link className="transition hover:text-white" href="/">Home</Link>
            <Link className="transition hover:text-white" href="/#services">Services</Link>
            <Link className="transition hover:text-white" href="/#portfolio">Portfolio</Link>
            <Link className="transition hover:text-white" href="/team">Our Team</Link>
            <Link className="text-cyan-300 font-medium" href="/about">About</Link>
            <Link className="transition hover:text-white" href="/contact">Contact</Link>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link href="/contact" className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-slate-100 transition hover:border-white/30 hover:bg-white/10">
              Book a Call
            </Link>
            <Link href="/contact#proposal-form" className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
              Get Proposal
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center p-2.5 rounded-full border border-white/15 bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 transition lg:hidden"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile dropdown */}
        <div className={`transition-all duration-300 ease-in-out lg:hidden overflow-hidden ${mobileMenuOpen ? 'max-h-[400px] opacity-100 border-t border-white/10' : 'max-h-0 opacity-0 pointer-events-none'}`}>
          <nav className="flex flex-col gap-4 px-6 py-4 text-sm text-slate-300 font-medium">
            <Link className="py-2 hover:text-cyan-300 transition" href="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link className="py-2 hover:text-cyan-300 transition" href="/#services" onClick={() => setMobileMenuOpen(false)}>Services</Link>
            <Link className="py-2 hover:text-cyan-300 transition" href="/#portfolio" onClick={() => setMobileMenuOpen(false)}>Portfolio</Link>
            <Link className="py-2 hover:text-cyan-300 transition" href="/team" onClick={() => setMobileMenuOpen(false)}>Our Team</Link>
            <Link className="py-2 text-cyan-300 font-semibold" href="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link className="py-2 hover:text-cyan-300 transition" href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          </nav>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden py-28 px-6 sm:px-8 lg:px-12">
        <div className="pointer-events-none absolute left-0 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-cyan-500/10 blur-[130px]" />
        <div className="pointer-events-none absolute right-0 top-1/2 h-[400px] w-[400px] translate-x-1/3 -translate-y-1/2 rounded-full bg-violet-500/8 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-[1440px] text-center">
          <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-cyan-200">
            Who We Are
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
            Built on{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-200 bg-clip-text text-transparent">
              Passion
            </span>
            ,<br className="hidden sm:inline" /> Driven by{" "}
            <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-violet-200 bg-clip-text text-transparent">
              Purpose
            </span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-400">
            VDS — Virtual Digital Solution — is a Dhaka-based platform that help startups, businesses, and enterprises
            craft extraordinary digital products.
          </p>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="relative px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            {/* Left text */}
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-300 mb-4">Our Story</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
                From a One-Person Studio to a Full-Solution Provider
              </h2>
              <div className="space-y-4 text-slate-400 leading-relaxed text-base">
                <p>
                  Every great brand starts with a belief.
                  VDS was built on one simple idea: Businesses don't just need marketing. They need direction, identity, and long-term growth
                </p>
                <p>
                  We noticed that many businesses invested in ads, logos, and social media, yet struggled to build a brand people genuinely remembered. Marketing without strategy creates temporary results. Branding without execution stays only an idea.
                  That's why we created VDS.
                </p>
                <p>
                  Not as another digital marketing agency, but as a growth partner that combines strategy, creativity, technology, and execution under one roof.
                  Today, VDS helps businesses build brands that people trust, create marketing systems that generate consistent growth, produce content that connects with audiences, and develop digital experiences through modern websites.
                  We believe every business has a unique story.
                  Our job is to make sure the world sees it.
                  This is only the beginning.
                </p>
              </div>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-cyan-400 px-7 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Work With Us
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Right — decorative card grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Content & Production", icon: "✦", color: "from-cyan-500/20 to-sky-500/10" },
                { label: "Web Development", icon: "⬡", color: "from-violet-500/20 to-purple-500/10" },
                { label: "Business Operation", icon: "◈", color: "from-amber-500/20 to-orange-500/10" },
                { label: "Digital Marketing", icon: "⬢", color: "from-emerald-500/20 to-teal-500/10" },
              ].map((card) => (
                <div
                  key={card.label}
                  className={`rounded-2xl border border-white/8 bg-gradient-to-br ${card.color} p-6 flex flex-col gap-3 hover:scale-[1.03] transition duration-300`}
                  style={{ borderColor: 'rgba(255,255,255,0.07)' }}
                >
                  <span className="text-2xl text-white/50">{card.icon}</span>
                  <p className="text-sm font-medium text-slate-200">{card.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="relative py-20 px-6 sm:px-8 lg:px-12 overflow-hidden">
        {/* Decorative background glows */}
        <div className="pointer-events-none absolute left-1/4 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/[0.06] blur-[120px]" />
        <div className="pointer-events-none absolute right-1/4 bottom-0 h-[400px] w-[400px] translate-x-1/2 rounded-full bg-violet-500/[0.06] blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-[1200px]">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-300 mb-3">Our Purpose</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Mission & Vision</h2>
            <p className="mt-4 text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
              The principles that guide every decision we make and every solution we deliver.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Mission Card */}
            <div className="group relative rounded-2xl border border-white/[0.07] bg-white/[0.02] p-8 sm:p-10 transition duration-300 hover:border-cyan-500/30 hover:bg-white/[0.04]">
              {/* Gradient accent line at top */}
              <div className="absolute top-0 left-8 right-8 h-[2px] rounded-full bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10 text-cyan-400 transition group-hover:border-cyan-400/40 group-hover:bg-cyan-500/15 group-hover:scale-110 duration-300">
                <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                To empower businesses with end-to-end digital solutions — from branding and marketing strategy to web development and content production — enabling them to build authentic identities, connect with their audiences, and achieve sustainable, measurable growth.
              </p>
            </div>

            {/* Vision Card */}
            <div className="group relative rounded-2xl border border-white/[0.07] bg-white/[0.02] p-8 sm:p-10 transition duration-300 hover:border-violet-500/30 hover:bg-white/[0.04]">
              {/* Gradient accent line at top */}
              <div className="absolute top-0 left-8 right-8 h-[2px] rounded-full bg-gradient-to-r from-transparent via-violet-400/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-violet-500/20 bg-violet-500/10 text-violet-400 transition group-hover:border-violet-400/40 group-hover:bg-violet-500/15 group-hover:scale-110 duration-300">
                <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                To become the most trusted digital growth partner for businesses worldwide — a company known not just for delivering exceptional results, but for genuinely caring about every client&apos;s success and helping them leave a lasting impact in their industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Values ── */}
      <section className="relative py-16 px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-300 mb-3">What Drives Us</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Our Core Values</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="group rounded-2xl border border-white/[0.07] bg-white/[0.03] p-6 transition duration-300 hover:border-cyan-500/30 hover:bg-white/5"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10 text-cyan-400 transition group-hover:border-cyan-400/40 group-hover:bg-cyan-500/15">
                  {v.icon}
                </div>
                <h3 className="mb-2 text-base font-semibold text-white">{v.title}</h3>
                <p className="text-sm leading-relaxed text-slate-500 group-hover:text-slate-400 transition">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>





      {/* ── Footer strip ── */}
      <footer className="border-t border-white/5 px-6 py-8 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-4 text-sm text-slate-500 sm:flex-row">
          <p>© 2026 VDS · Virtual Digital Solution</p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link href="/privacy" className="transition hover:text-slate-300">Privacy Policy</Link>
            <Link href="/terms" className="transition hover:text-slate-300">Terms of Service</Link>
            <Link href="/" className="transition hover:text-slate-300">← Back to Home</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}


