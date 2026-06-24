'use client';

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Services() {
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const [visibleSections, setVisibleSections] = useState({
    services: false,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setVisibleSections((prev) => ({
              ...prev,
              [id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    if (servicesRef.current) observer.observe(servicesRef.current);

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: "Development",
      description: "Fast, scalable, and secure web applications built with modern frameworks.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 3v18h18" />
          <path d="M18 17V9M12 17V5M6 17v-3" />
        </svg>
      ),
      title: "Digital Marketing",
      description: "Data-driven strategies to grow your digital presence and ROI.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      ),
      title: "Content Creation",
      description: "Engaging content that resonates with your target audience.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 21v-7l10-10 7 7-10 10H4z" />
        </svg>
      ),
      title: "UI/UX Design",
      description: "User-centric interfaces that blend aesthetics with high conversion logic.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <path d="M12 18h.01" />
        </svg>
      ),
      title: "App Development",
      description: "Native and cross-platform mobile solutions for seamless user mobility.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="1" />
          <circle cx="19" cy="12" r="1" />
          <circle cx="5" cy="12" r="1" />
          <circle cx="12" cy="5" r="1" />
          <circle cx="12" cy="19" r="1" />
        </svg>
      ),
      title: "Branding",
      description: "Comprehensive brand systems that resonate with your target audience.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2v20M2 12h20" />
          <path d="M4.5 4.5h15v15h-15z" />
        </svg>
      ),
      title: "Web Architecture",
      description: "Deep-technical planning for complex enterprise software ecosystems.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
          <polyline points="14 2 14 8 20 8" />
        </svg>
      ),
      title: "Graphic Design",
      description: "High-fidelity visual content that defines your creative edge.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#050b16] text-slate-50">
      {/* Header */}
      <header className="mx-auto max-w-[1440px] flex items-center justify-between gap-4 px-6 py-6 sm:px-8 lg:px-12">
        <Link href="/" className="inline-flex items-center gap-3 text-white hover:opacity-80 transition">
          <img src="/images/vds logo.png" alt="VDS Logo" className="h-10 w-auto rounded-full object-contain" />
          <span className="sr-only">VDS</span>
        </Link>

        <nav className="hidden items-center gap-10 text-sm text-slate-300 lg:flex">
          <Link className="transition hover:text-white" href="/#services">
            Services
          </Link>
          <a className="transition hover:text-white" href="#portfolio">
            Portfolio
          </a>
          <a className="transition hover:text-white" href="#case-studies">
            Case Studies
          </a>
          <a className="transition hover:text-white" href="#about">
            About
          </a>
          <a className="transition hover:text-white" href="#contact">
            Contact
          </a>
        </nav>

        <div className="flex flex-wrap items-center gap-3">
          <button className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-slate-100 transition hover:border-white/30 hover:bg-white/10">
            Book a Call
          </button>
          <button className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
            Get Proposal
          </button>
        </div>
      </header>

      {/* Services Section */}
      <section
        id="services"
        ref={servicesRef}
        className={`relative overflow-hidden ${visibleSections.services ? "animate-slide-in-right" : "opacity-0"}`}
      >
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 pb-16 pt-16 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Our Digital Solutions</p>
            <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
              Precision-crafted services to scale your business in the digital era.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={index}
                className="rounded-3xl border border-white/10 bg-slate-950/50 p-6 transition duration-300 hover:scale-105 hover:border-cyan-400/30 hover:bg-slate-950/70"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300">
                  {service.icon}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-sm text-slate-400">{service.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link href="/">
              <button className="rounded-full border border-white/15 bg-white/5 px-8 py-3 text-base font-semibold text-slate-100 transition hover:border-cyan-300 hover:bg-white/10">
                Back to Home
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
