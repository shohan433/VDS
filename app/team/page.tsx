'use client';

import Link from "next/link";
import { useState } from "react";

export default function TeamPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const team = [
    {
      name: "SAYED SHIBLEE SADIK",
      role: "Head of Digital Marketing",
      initials: "S",
      image: "/images/team2.jpeg",
      color: "from-cyan-400 to-blue-600",
      bio: "Marketing expert who transforms complex problems into beautiful, intuitive interfaces.",
    },
    {
      name: "ARAFAT AMIN",
      role: "Head of Content & Production",
      initials: "AA",
      image: "/images/team1.jpeg",
      color: "from-fuchsia-400 to-purple-600",
      bio: "Content expert who transforms complex problems into beautiful, intuitive interfaces.",
    },
    {
      name: "MD. BARKATULLAH CHOWDHURY",
      role: "Head of Web Development",
      initials: "BC",
      image: "/images/team3.jpg",
      color: "from-emerald-400 to-teal-600",
      bio: "Architecting scalable web solutions with a passion for clean code and peak performance.",
    },
    {
      name: "TANVIR AMZAD",
      role: "Head of Business Operation",
      initials: "TA",
      image: "/images/team4.jpeg",
      color: "from-amber-400 to-orange-600",
      bio: "Business operation expert who transforms complex problems into beautiful, intuitive interfaces.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#050b16] text-slate-50 flex flex-col overflow-hidden relative">
      {/* Background gradients */}
      <div className="pointer-events-none absolute left-0 top-0 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />
      <div className="pointer-events-none absolute right-0 top-1/2 h-[600px] w-[600px] translate-x-1/3 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[150px]" />
      <div className="pointer-events-none absolute left-1/2 bottom-0 h-[500px] w-[500px] -translate-x-1/2 translate-y-1/2 rounded-full bg-blue-500/10 blur-[150px]" />

      {/* Navbar */}
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
            <Link className="text-cyan-300 font-medium" href="/team">Our Team</Link>
            <Link className="transition hover:text-white" href="/about">About</Link>
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
            <Link className="py-2 text-cyan-300 font-semibold" href="/team" onClick={() => setMobileMenuOpen(false)}>Our Team</Link>
            <Link className="py-2 hover:text-cyan-300 transition" href="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link className="py-2 hover:text-cyan-300 transition" href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 relative z-10 mx-auto max-w-[1440px] px-6 py-20 sm:px-8 lg:px-12 w-full">
        <div className="text-center mb-20">
          <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-cyan-200 mb-6">
            The Visionaries
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            Meet the <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-200 bg-clip-text text-transparent">Minds</span><br />
            Behind VDS
          </h1>
          <p className="mt-6 text-slate-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            We are a collective of driven designers, engineers, and strategists. Together, we bring bold ideas to life with precision and creativity.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-[1200px] mx-auto">
          {team.map((member, i) => (
            <div
              key={member.name}
              className="group relative flex flex-col h-full overflow-hidden rounded-[2rem] bg-white/[0.02] border border-white/[0.05] p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.04] hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Dynamic Glow */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br ${member.color}`} />

              <div className="relative z-10 flex-1 flex flex-col items-center">
                <div className="relative mb-8">
                  {/* Outer spinning ring */}
                  <div className={`absolute -inset-2 rounded-full border-2 border-transparent bg-gradient-to-br ${member.color} opacity-20 blur-sm group-hover:opacity-50 transition duration-500`} style={{ maskImage: 'linear-gradient(white, transparent)' }} />

                  {/* Avatar */}
                  <div className={`relative flex h-32 w-32 mx-auto overflow-hidden items-center justify-center rounded-full bg-gradient-to-br ${member.color} text-2xl font-bold text-white shadow-xl transition-transform duration-500 group-hover:scale-110`}>
                    {member.image ? (
                      <img src={member.image} alt={member.name} className="h-full w-full object-cover object-top" />
                    ) : (
                      member.initials
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-sm font-semibold tracking-wide uppercase text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-slate-500 mb-6 group-hover:from-cyan-300 group-hover:to-cyan-100 transition-colors duration-300">
                  {member.role}
                </p>

                <div className="mt-auto w-full pt-6 border-t border-white/[0.05]">
                  <p className="text-sm leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                    "{member.bio}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="mt-32 max-w-4xl mx-auto text-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent blur-2xl" />
          <div className="relative rounded-3xl border border-white/[0.05] bg-white/[0.02] p-12 backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-white mb-4">Want to join the team?</h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
              We're always looking for talented individuals who share our passion for creating exceptional digital experiences.
            </p>
            <Link href="/contact" className="inline-flex rounded-full bg-white text-slate-950 px-8 py-4 font-semibold hover:bg-slate-200 transition-colors">
              Get in Touch
            </Link>
          </div>
        </div>
      </main>

      {/* Footer strip */}
      <footer className="relative z-10 border-t border-white/5 px-6 py-8 sm:px-8 lg:px-12 mt-auto">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-4 text-sm text-slate-500 sm:flex-row">
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
