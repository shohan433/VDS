'use client';

import Link from "next/link";
import { useState } from "react";

export default function CaseStudiesPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050b16] text-slate-50 flex flex-col">
      {/* ── Navbar ── */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#050b16]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-6 py-4 sm:px-8 lg:px-12">
          <Link href="/" className="inline-flex items-center gap-3 text-white">
            <img src="/images/vds logo.png" alt="VDS Logo" className="h-10 w-auto rounded-full object-contain" />
            <span className="sr-only">VDS</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-10 text-sm text-slate-300 lg:flex">
            <Link className="transition hover:text-white" href="/#services">Services</Link>
            <Link className="transition hover:text-white" href="/#portfolio">Portfolio</Link>
            <Link className="text-cyan-300 font-medium" href="/case-studies">Case Studies</Link>
            <Link className="transition hover:text-white" href="/about">About</Link>
            <Link className="transition hover:text-white" href="/contact">Contact</Link>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <button className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-slate-100 transition hover:border-white/30 hover:bg-white/10">
              Book a Call
            </button>
            <Link href="/contact" className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
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
            <Link className="py-2 hover:text-cyan-300 transition" href="/#services" onClick={() => setMobileMenuOpen(false)}>Services</Link>
            <Link className="py-2 hover:text-cyan-300 transition" href="/#portfolio" onClick={() => setMobileMenuOpen(false)}>Portfolio</Link>
            <Link className="py-2 text-cyan-300 font-semibold" href="/case-studies" onClick={() => setMobileMenuOpen(false)}>Case Studies</Link>
            <Link className="py-2 hover:text-cyan-300 transition" href="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link className="py-2 hover:text-cyan-300 transition" href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          </nav>
        </div>
      </header>

      {/* ── Main Content ── */}
      <main className="flex-1 flex flex-col items-center justify-center py-20 px-6 sm:px-8 lg:px-12">
        <div className="w-full max-w-[800px] mx-auto text-center flex flex-col items-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight mb-12">
            Case Studies
          </h1>

          <div className="relative w-full max-w-[600px] rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(34,211,238,0.1)]">
            <img
              src="/images/constuct.webp"
              alt="Error - Under Construction"
              className="object-contain w-full h-auto bg-slate-900"
            />
          </div>

          <p className="mt-8 text-lg text-slate-400">
            We're currently updating our case studies. Please check back soon!
          </p>
          <div className="mt-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm text-slate-200 transition hover:border-cyan-400/40 hover:text-cyan-300"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>

      {/* ── Footer strip ── */}
      <footer className="border-t border-white/5 px-6 py-8 sm:px-8 lg:px-12 mt-auto">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-4 text-sm text-slate-500 sm:flex-row">
          <p>© 2026 VDS · Virtual Digital Solution</p>
        </div>
      </footer>
    </div>
  );
}
