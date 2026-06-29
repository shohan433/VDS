'use client';

import Link from "next/link";
import Script from "next/script";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const vantaRef = useRef<HTMLDivElement | null>(null);
  const vantaEffect = useRef<any>(null);
  const [vantaLoaded, setVantaLoaded] = useState(false);

  useEffect(() => {
    // If returning via client side routing, the script is already loaded
    if (typeof window !== 'undefined' && (window as any).VANTA) {
      setVantaLoaded(true);
    }
  }, []);
  const bannerRef = useRef<HTMLDivElement | null>(null);
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const portfolioRef = useRef<HTMLDivElement | null>(null);
  const statsRef = useRef<HTMLDivElement | null>(null);
  const [visibleSections, setVisibleSections] = useState({
    banner: false,
    services: false,
    portfolio: false,
    stats: false,
  });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const testimonials = [
    {
      text: "VDS transformed our vision into a stunning product. Their attention to detail and UI/UX expertise is unmatched in the agency space.",
      name: "Sarah Chen",
      title: "CEO at Nexus Tech",
      bgColor: "bg-cyan-400"
    },
    {
      text: "The best digital partner we've worked with. Professional, fast, and creative. They helped us scale our user base by 40% through better design.",
      name: "Marcus Thorne",
      title: "Founder of Peak AI",
      bgColor: "bg-cyan-400"
    },
    {
      text: "Extraordinary results dashboard system with flawless architecture.",
      name: "Elena Rodrig",
      title: "CTO at FinSph",
      bgColor: "bg-slate-400"
    }
  ];

  useEffect(() => {
    if (!vantaLoaded || typeof window === "undefined") return;

    const vantaGlobal = (window as any).VANTA;
    if (!vantaRef.current || !vantaGlobal?.NET) return;
    if (vantaEffect.current) return;

    vantaEffect.current = vantaGlobal.NET({
      el: vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x5f3fff,
      backgroundColor: 0x0,
      points: 20.0,
      maxDistance: 25.0,
      spacing: 14.0,
    });

    return () => {
      if (vantaEffect.current?.destroy) {
        vantaEffect.current.destroy();
      }
      vantaEffect.current = null;
    };
  }, [vantaLoaded]);

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

    if (bannerRef.current) observer.observe(bannerRef.current);
    if (servicesRef.current) observer.observe(servicesRef.current);
    if (portfolioRef.current) observer.observe(portfolioRef.current);
    if (statsRef.current) observer.observe(statsRef.current);

    return () => observer.disconnect();
  }, []);

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js"
        strategy="afterInteractive"
        onReady={() => setVantaLoaded(true)}
      />
      <div className="relative min-h-screen overflow-hidden bg-[#050b16] text-slate-50">
        <section
          id="banner"
          ref={bannerRef}
          className="relative min-h-screen overflow-hidden"
          style={{ backgroundColor: '#121222' }}
        >
          <div ref={vantaRef} className="absolute inset-0 z-0 bg-[#121222]">
            <canvas
              className="vanta-canvas absolute inset-0"
              style={{ display: 'block', position: 'absolute', zIndex: 0, top: 0, left: 0, width: '100%', height: '100%' }}
            />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_15%),radial-gradient(circle_at_25%_15%,rgba(59,130,246,0.12),transparent_18%),radial-gradient(circle_at_80%_10%,rgba(14,165,233,0.10),transparent_18%)] mix-blend-screen" />
          <div className="pointer-events-none absolute left-0 top-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="pointer-events-none absolute right-0 bottom-24 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#050b16] via-[#050b16]/50 to-transparent blur-3xl" />

          <div className="relative z-10 mx-auto flex min-h-screen max-w-[1440px] flex-col px-6 py-6 sm:px-8 lg:px-12">
            <header className="relative py-4 z-50">
              <div className="flex items-center justify-between gap-4">
                <Link href="/" className="inline-flex items-center gap-3 text-white">
                  <img src="/images/vds logo.png" alt="VDS Logo" className="h-10 w-auto rounded-full object-contain" />
                  <span className="sr-only">VDS</span>
                </Link>

                <nav className="hidden items-center gap-2 text-sm text-slate-300 lg:flex">
                  <Link className="px-4 py-2 rounded-full border border-transparent transition hover:border-white/15 hover:bg-white/5 hover:text-white" href="/">
                    Home
                  </Link>
                  <a className="px-4 py-2 rounded-full border border-transparent transition hover:border-white/15 hover:bg-white/5 hover:text-white" href="#services">
                    Services
                  </a>
                  <a className="px-4 py-2 rounded-full border border-transparent transition hover:border-white/15 hover:bg-white/5 hover:text-white" href="#portfolio">
                    Portfolio
                  </a>
                  <Link className="px-4 py-2 rounded-full border border-transparent transition hover:border-white/15 hover:bg-white/5 hover:text-white" href="/team">
                    Our Team
                  </Link>
                  <Link className="px-4 py-2 rounded-full border border-transparent transition hover:border-white/15 hover:bg-white/5 hover:text-white" href="/about">
                    About
                  </Link>
                  <Link className="px-4 py-2 rounded-full border border-transparent transition hover:border-white/15 hover:bg-white/5 hover:text-white" href="/contact">
                    Contact
                  </Link>
                </nav>

                <div className="hidden items-center gap-3 lg:flex">
                  <Link href="/contact" className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-slate-100 transition hover:border-white/30 hover:bg-white/10 hover:cursor-pointer">
                    Book a Call
                  </Link>
                  <Link href="/contact#proposal-form" className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 hover:cursor-pointer" >
                    Get Proposal
                  </Link>
                </div>

                {/* Mobile Hamburger (3-bar) Button */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  type="button"
                  className="inline-flex items-center justify-center p-2.5 rounded-full border border-white/15 bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 transition lg:hidden"
                  aria-expanded={mobileMenuOpen}
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

              {/* Inline Dropdown Navigation for Mobile/Tablet */}
              <div
                className={`transition-all duration-300 ease-in-out lg:hidden overflow-hidden ${mobileMenuOpen ? 'max-h-[500px] opacity-100 mt-4 border-t border-white/10 pt-4' : 'max-h-0 opacity-0 pointer-events-none'
                  }`}
              >
                <nav className="flex flex-col gap-4 text-sm text-slate-300 font-medium pb-4">
                  <Link className="transition py-2 hover:text-cyan-300" href="/" onClick={() => setMobileMenuOpen(false)}>
                    Home
                  </Link>
                  <a className="transition py-2 hover:text-cyan-300" href="#services" onClick={() => setMobileMenuOpen(false)}>
                    Services
                  </a>
                  <a className="transition py-2 hover:text-cyan-300" href="#portfolio" onClick={() => setMobileMenuOpen(false)}>
                    Portfolio
                  </a>
                  <Link className="transition py-2 hover:text-cyan-300" href="/team" onClick={() => setMobileMenuOpen(false)}>
                    Our Team
                  </Link>
                  <Link className="transition py-2 hover:text-cyan-300" href="/about" onClick={() => setMobileMenuOpen(false)}>
                    About
                  </Link>
                  <Link className="transition py-2 hover:text-cyan-300" href="/contact" onClick={() => setMobileMenuOpen(false)}>
                    Contact
                  </Link>
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <Link href="/contact" className="flex-1 text-center rounded-full border border-white/15 bg-white/5 py-3 text-slate-100 transition hover:border-white/30 hover:bg-white/10">
                      Book a Call
                    </Link>
                    <Link href="/contact#proposal-form" className="flex-1 text-center rounded-full bg-cyan-400 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300">
                      Get Proposal
                    </Link>
                  </div>
                </nav>
              </div>
            </header>

            <main className="grid flex-1 items-center gap-12 pb-8 pt-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
              <div className="max-w-2xl">
                <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-cyan-200">
                  VIRTUAL DIGITAL SOLUTION
                </span>
                <h1 className="mt-8 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight tracking-[-0.05em] text-white">
                  VDS Provide Solutions<span className="text-cyan-300"> to Business Growth</span>
                </h1>
                <p className="mt-6 max-w-xl text-base sm:text-lg leading-7 sm:leading-8 text-slate-300">
                  We give solutions to build startup, business, & other enterprise into digital world
                </p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-7 py-4 text-base font-semibold text-slate-950 transition hover:bg-cyan-300">
                    Start a Project
                  </Link>
                  <Link href="/#portfolio" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 text-base text-slate-100 transition hover:border-cyan-300 hover:bg-white/10">
                    View Portfolio
                  </Link>
                </div>
              </div>

              {/* <div className="relative hidden overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/50 lg:flex">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.12),transparent_40%)]" />
                <div className="absolute -left-10 top-14 h-8 w-8 rounded-full bg-cyan-300/20 blur-2xl" />
                <div className="absolute right-10 top-24 h-6 w-6 rounded-full bg-sky-300/20 blur-2xl" />
                <div className="absolute bottom-16 left-16 h-6 w-6 rounded-full bg-slate-200/10 blur-2xl" />
                <div className="relative h-[520px] w-full p-8">
                  <div className="absolute left-1/2 top-1/2 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/20 shadow-[0_0_80px_rgba(56,189,248,0.18)]" />
                  <div className="absolute left-1/2 top-1/2 h-[18rem] w-[18rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-300/10" />
                  <div className="absolute left-1/2 top-1/2 h-[12rem] w-[12rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/10" />
                  <div className="absolute left-1/2 top-1/2 h-[2px] w-full -translate-x-1/2 -translate-y-1/2 bg-slate-200/10" />
                  <div className="absolute left-1/2 top-1/2 h-full w-[2px] -translate-x-1/2 -translate-y-1/2 bg-slate-200/10" />
                  <div className="absolute left-1/4 top-12 h-[1px] w-40 bg-slate-200/10" />
                  <div className="absolute right-16 top-24 h-[1px] w-32 bg-cyan-300/15" />
                  <div className="absolute left-20 bottom-24 h-[1px] w-44 bg-sky-300/15" />
                  <div className="absolute right-24 bottom-12 h-[1px] w-28 bg-slate-200/10" />
                  <div className="absolute left-24 top-36 h-4 w-4 rounded-full bg-cyan-300/60" />
                  <div className="absolute right-24 top-32 h-3 w-3 rounded-full bg-sky-300/60" />
                  <div className="absolute left-32 bottom-28 h-3 w-3 rounded-full bg-white/50" />
                  <div className="absolute right-28 bottom-20 h-4 w-4 rounded-full bg-cyan-300/50" />
                </div>
              </div> */}
            </main>
          </div>
        </section>

        <section
          id="services"
          ref={servicesRef}
          className={`relative overflow-hidden ${visibleSections.services ? 'animate-slide-in-right' : 'opacity-0'}`}
        >
          <div className="relative z-10 mx-auto max-w-[1440px] px-6 pb-16 pt-16 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Our Digital Solutions</p>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-white">
                Precision-crafted services to scale your business in the digital era.
              </h2>
            </div>

            <div className="mt-12 flex justify-center">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl">
                {/* <article className="rounded-3xl border border-white/10 bg-slate-950/50 p-6 transition duration-300 hover:scale-105 hover:border-cyan-400/30 hover:bg-slate-950/70">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 21v-7l10-10 7 7-10 10H4z" />
                  </svg>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">Development</h3>
                <p className="mt-3 text-sm text-slate-400">User-centric interfaces that blend aesthetics with high conversion logic.</p>
              </article> */}

                <Link href="/services/development-solution" className="block">
                  <article className="rounded-3xl border border-white/10 bg-slate-950/50 p-6 transition duration-300 hover:scale-105 hover:border-cyan-400/30 hover:bg-slate-950/70 h-full">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300">
                      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-white">Development Solutions</h3>
                    <p className="mt-3 text-sm text-slate-400">Fast, scalable, and secure web applications built with modern frameworks.</p>
                  </article>
                </Link>

                {/* <article className="rounded-3xl border border-white/10 bg-slate-950/50 p-6 transition duration-300 hover:scale-105 hover:border-cyan-400/30 hover:bg-slate-950/70">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                    <path d="M12 18h.01" />
                  </svg>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">App Development</h3>
                <p className="mt-3 text-sm text-slate-400">Native and cross-platform mobile solutions for seamless user mobility.</p>
              </article> */}

                {/* <article className="rounded-3xl border border-white/10 bg-slate-950/50 p-6 transition duration-300 hover:scale-105 hover:border-cyan-400/30 hover:bg-slate-950/70">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="19" cy="12" r="1" />
                    <circle cx="5" cy="12" r="1" />
                    <circle cx="12" cy="5" r="1" />
                    <circle cx="12" cy="19" r="1" />
                  </svg>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">Digital Marketing</h3>
                <p className="mt-3 text-sm text-slate-400">Comprehensive brand systems that resonate with your target audience.</p>
              </article> */}

                {/* <article className="rounded-3xl border border-white/10 bg-slate-950/50 p-6 transition duration-300 hover:scale-105 hover:border-cyan-400/30 hover:bg-slate-950/70">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2v20M2 12h20" />
                    <path d="M4.5 4.5h15v15h-15z" />
                  </svg>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">Web Architecture</h3>
                <p className="mt-3 text-sm text-slate-400">Deep-technical planning for complex enterprise software ecosystems.</p>
              </article> */}

                <Link href="/services/digital-marketing" className="block">
                  <article className="rounded-3xl border border-white/10 bg-slate-950/50 p-6 transition duration-300 hover:scale-105 hover:border-cyan-400/30 hover:bg-slate-950/70 h-full">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300">
                      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 3v18h18" />
                        <path d="M18 17V9M12 17V5M6 17v-3" />
                      </svg>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-white">Digital Marketing</h3>
                    <p className="mt-3 text-sm text-slate-400">Data-driven strategies to grow your digital presence and ROI.</p>
                  </article>
                </Link>

                <Link href="/services/content-creation" className="block">
                  <article className="rounded-3xl border border-white/10 bg-slate-950/50 p-6 transition duration-300 hover:scale-105 hover:border-cyan-400/30 hover:bg-slate-950/70 h-full">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300">
                      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-white">Content Creation</h3>
                    <p className="mt-3 text-sm text-slate-400">Engaging content that resonates with your target audience.</p>
                  </article>
                </Link>

                {/* <article className="rounded-3xl border border-white/10 bg-slate-950/50 p-6 transition duration-300 hover:scale-105 hover:border-cyan-400/30 hover:bg-slate-950/70">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">Graphic Design</h3>
                <p className="mt-3 text-sm text-slate-400">High-fidelity visual content that defines your creative edge.</p>
              </article> */}
              </div>
            </div>


          </div>
        </section>

        <section
          id="portfolio"
          ref={portfolioRef}
          className="relative overflow-hidden py-16"
        >
          <div className="relative z-10 mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-12">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Our Portfolio</p>
                <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-white">
                  Featured Work
                </h2>
                <p className="mt-3 text-slate-400 text-sm sm:text-base">
                  Selected projects that define our commitment to excellence.
                </p>
              </div>
              <Link href="/case-studies" className="w-full md:w-auto">
                <button type="button" className="w-full md:w-auto rounded-full border border-cyan-300/30 bg-cyan-400/10 px-6 py-3 text-sm font-semibold text-cyan-300 transition hover:border-cyan-300 hover:bg-cyan-400/20">
                  View All Case Studies
                </button>
              </Link>
            </div>

            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {/* NeoBank Banking App */}
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/50 transition hover:border-cyan-400/30 hover:bg-slate-950/70">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="/images/futu-1.png"
                    alt="Digital Marketing Campaign"
                    className="h-full w-full object-cover transition group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  {/* <span className="absolute top-4 right-4 inline-flex rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-semibold text-cyan-300 border border-cyan-500/30">
                    Fintech
                  </span> */}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white">Digital Marketing Campaign</h3>
                  <p className="mt-2 text-sm text-slate-400">Complete mobile banking redesign for the next generation of digital natives.</p>
                </div>
              </div>

              {/* Flux Analytics Dashboard */}
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/50 transition hover:border-cyan-400/30 hover:bg-slate-950/70">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="/images/it.jpg"
                    alt="IT Solutions Platform"
                    className="h-full w-full object-cover transition group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  {/* <span className="absolute top-4 right-4 inline-flex rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-semibold text-cyan-300 border border-cyan-500/30">
                    SaaS
                  </span> */}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white">IT Solutions Platform</h3>
                  <p className="mt-2 text-sm text-slate-400">Comprehensive IT services and solutions for modern businesses.</p>
                </div>
              </div>

              {/* Ether Crypto Wallet */}
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/50 transition hover:border-cyan-400/30 hover:bg-slate-950/70">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="/images/content.webp"
                    alt="Content Creation Platform"
                    className="h-full w-full object-cover transition group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  {/* <span className="absolute top-4 right-4 inline-flex rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-semibold text-cyan-300 border border-cyan-500/30">
                    Content
                  </span> */}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white">Content Creation Platform</h3>
                  <p className="mt-2 text-sm text-slate-400">Empower creators with intuitive tools for producing engaging digital content.</p>
                </div>
              </div>

              {/* Moda Luxury E-com */}
              {/* <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/50 transition hover:border-cyan-400/30 hover:bg-slate-950/70">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="/images/business.png"
                    alt="Business Solutions Platform"
                    className="h-full w-full object-cover transition group-hover:scale-105" */}
              {/* /> */}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" /> */}
              {/* <span className="absolute top-4 right-4 inline-flex rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-semibold text-cyan-300 border border-cyan-500/30">
                    E-commerce
                  </span> */}
              {/* </div> */}
              {/* <div className="p-6">
                  <h3 className="text-xl font-semibold text-white">Business Solutions Platform</h3>
                  <p className="mt-2 text-sm text-slate-400">Comprehensive business solutions for modern enterprises.</p>
                </div> */}
              {/* </div> */}

              {/* Horizon Real Estate */}
              {/* <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/50 transition hover:border-cyan-400/30 hover:bg-slate-950/70">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src="/images/horizon.jpg" 
                    alt="Horizon Real Estate" 
                    className="h-full w-full object-cover transition group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute top-4 right-4 inline-flex rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-semibold text-cyan-300 border border-cyan-500/30">
                    Real Estate
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white">Horizon Real Estate</h3>
                  <p className="mt-2 text-sm text-slate-400">Modern property marketplace connecting buyers with dream homes.</p>
                </div>
              </div> */}
            </div>
          </div>
        </section>

        <section id="our-story" className="relative overflow-hidden py-16 lg:py-24">
          <div className="relative z-10 mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12">



            {/* Our Work Process */}
            <div>
              <div className="text-center mb-16">
                <h3 className="text-3xl sm:text-4xl font-semibold text-white">
                  Our <span className="text-cyan-300">Work Process</span>
                </h3>
                <p className="mt-4 text-base text-slate-400">
                  A streamlined methodology for extraordinary results.
                </p>
              </div>
              <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8 md:gap-4 lg:gap-8 flex-wrap">
                {[
                  { step: "01", title: "Listen", desc: "Understanding your goals, challenges, and vision through deep conversations." },
                  { step: "02", title: "Research", desc: "Analyzing your market, competitors, and audience to uncover key insights." },
                  { step: "03", title: "Finding Problems", desc: "Identifying gaps, bottlenecks, and opportunities holding your brand back." },
                  { step: "04", title: "Execution", desc: "Bringing strategy to life with precision design, development, and marketing." },
                  { step: "05", title: "Solution", desc: "Delivering measurable results and scalable systems for long-term growth." }
                ].map((item, i) => (
                  <div key={i} className="group flex flex-col items-center text-center max-w-[12rem] cursor-default">
                    <div className={`flex h-20 w-20 items-center justify-center rounded-full border-2 bg-slate-950/50 mb-6 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] ${i === 0 ? 'border-cyan-400' : 'border-slate-500 group-hover:border-cyan-400'}`}>
                      <span className={`text-2xl font-semibold transition-colors duration-300 ${i === 0 ? 'text-cyan-300' : 'text-slate-400 group-hover:text-cyan-300'}`}>{item.step}</span>
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2 transition-colors duration-300 group-hover:text-cyan-300">{item.title}</h4>
                    <p className="text-sm text-slate-400 transition-colors duration-300 group-hover:text-slate-300">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Trusted by Innovators Section */}
        <section
          id="testimonials"
          className="relative overflow-hidden py-16"
        >
          <div className="relative z-10 mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-white">
                Trusted by <span className="text-cyan-300">Innovators</span>
              </h2>
            </div>

            {/* Testimonials Carousel */}
            <div className="relative overflow-hidden">
              <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className={`rounded-2xl border border-white/10 bg-slate-950/50 p-8 hover:border-cyan-400/30 transition ${index === currentTestimonial ? 'animate-slide-testimonial col-span-1 md:col-span-3' : 'hidden'
                      }`}
                  >
                    <p className="text-slate-300 italic mb-6">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className={`h-12 w-12 rounded-full ${testimonial.bgColor}`} />
                      <div>
                        <p className="font-semibold text-white">{testimonial.name}</p>
                        <p className="text-sm text-slate-400">{testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Carousel Indicators */}
              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    type="button"
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`h-2 rounded-full transition ${index === currentTestimonial
                      ? 'bg-cyan-400 w-8'
                      : 'bg-slate-600 w-2 hover:bg-slate-400'
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          ref={statsRef}
          id="stats"
          className={`mx-auto max-w-[1440px] px-6 pb-16 pt-10 sm:px-8 lg:px-12 ${visibleSections.stats ? 'animate-slide-in-left' : 'opacity-0'}`}
        >
          <div className="grid gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.18)] sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl bg-slate-950/70 px-6 py-6">
              <p className="text-3xl font-semibold text-white">35+</p>
              <p className="mt-3 text-sm uppercase tracking-[0.24em] text-slate-400">Projects Delivered</p>
            </div>
            <div className="rounded-3xl bg-slate-950/70 px-6 py-6">
              <p className="text-3xl font-semibold text-white">21+</p>
              <p className="mt-3 text-sm uppercase tracking-[0.24em] text-slate-400">Global Clients</p>
            </div>
            <div className="rounded-3xl bg-slate-950/70 px-6 py-6">
              <p className="text-3xl font-semibold text-white">2+</p>
              <p className="mt-3 text-sm uppercase tracking-[0.24em] text-slate-400">Years Experience</p>
            </div>
            <div className="rounded-3xl bg-slate-950/70 px-6 py-6">
              <p className="text-3xl font-semibold text-white">7+</p>
              <p className="mt-3 text-sm uppercase tracking-[0.24em] text-slate-400">Startup Collabs</p>
            </div>
          </div>
        </section>



        {/* CTA Card Section */}
        <section className="relative overflow-hidden py-16 px-6 sm:px-8 lg:px-12">
          <div className="relative z-10 mx-auto max-w-[1200px]">
            {/* Ambient backdrop glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[350px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[100px]" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/40 p-6 sm:p-12 md:p-20 text-center backdrop-blur-xl shadow-2xl">
              {/* Radial gradient inside card */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.08),transparent_70%)]" />

              <div className="relative z-10 flex flex-col items-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white max-w-4xl">
                  Let's Build Something <br className="hidden sm:inline" />
                  <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-200 bg-clip-text text-transparent">
                    Extraordinary
                  </span>
                </h2>

                <p className="mx-auto mt-6 max-w-xl text-sm sm:text-base md:text-lg leading-relaxed text-slate-400">
                  Have an idea? Let's discuss how we can bring it to life with world-class design and development.
                </p>

                <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-10">
                  {/* Email contact */}
                  <a
                    href="mailto:hello@vds.com"
                    className="inline-flex items-center gap-3 text-sm font-medium text-slate-300 transition hover:text-white"
                  >
                    <svg viewBox="0 0 24 24" className="h-5 w-5 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    info@virtualdigitalsolution.com
                  </a>

                  {/* Get Started Now Button */}
                  <button type="button" className="inline-flex items-center justify-center rounded-xl bg-cyan-400 px-8 py-3.5 text-sm font-semibold text-slate-950 transition duration-300 hover:bg-cyan-300 hover:scale-[1.02] shadow-[0_4px_25px_rgba(34,211,238,0.15)]">
                    Get Started Now
                  </button>

                  {/* Phone contact */}
                  <a
                    href="tel:+8801300433387"
                    className="inline-flex items-center gap-3 text-sm font-medium text-slate-300 transition hover:text-white"
                  >
                    <svg viewBox="0 0 24 24" className="h-5 w-5 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    +8801300433387
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="relative z-10 bg-[#050b16] py-20 px-6 sm:px-8 lg:px-12 border-t border-white/5">
          <div className="mx-auto max-w-[1200px]">
            <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
              {/* Brand Col */}
              <div className="sm:col-span-2 space-y-6">
                <img src="/images/vds logo.png" alt="VDS Logo" className="h-10 w-auto rounded-full object-contain" />
                {/* <span className="text-xl font-bold tracking-wider text-white uppercase"><img src="/images/vds logo.png" alt="VDS Logo" className="h-10 w-auto rounded-full object-contain" /></span> */}
                <p className="max-w-xs text-sm text-slate-400 leading-relaxed">
                  Crafting high-end digital experiences for the world's most ambitious brands.
                </p>
                <p className="text-sm text-slate-500 pt-4">
                  © 2026 VDS . Virtual Digital Solution.
                </p>
              </div>

              {/* Spacer for spacing alignment */}
              <div className="hidden lg:block"></div>

              {/* Navigation Col */}
              <div>
                <h4 className="text-sm font-semibold tracking-wider text-white mb-6">
                  Navigation
                </h4>
                <ul className="space-y-4 text-sm text-slate-400">
                  <li>
                    <a href="#banner" className="hover:text-white transition duration-200">Home</a>
                  </li>
                  <li>
                    <a href="#services" className="hover:text-white transition duration-200">Services</a>
                  </li>
                  <li>
                    <a href="#portfolio" className="hover:text-white transition duration-200">Portfolio</a>
                  </li>
                  <li>
                    <Link href="/case-studies" className="hover:text-white transition duration-200">Case Studies</Link>
                  </li>
                </ul>
              </div>

              {/* Connect Col */}
              <div>
                <h4 className="text-sm font-semibold tracking-wider text-white mb-6 text-center">
                  Connect
                </h4>
                <ul className="grid grid-cols-2 gap-x-6 gap-y-4 text-sm text-slate-400 whitespace-nowrap">
                  <li>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-200">Facebook</a>
                  </li>
                  <li>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-200">Instagram</a>
                  </li>
                  <li>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-200">YouTube</a>
                  </li>
                  <li>
                    <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-200">TikTok</a>
                  </li>
                  <li>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-200">GitHub</a>
                  </li>
                  <li>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-200">LinkedIn</a>
                  </li>
                  <li>
                    <Link href="/privacy" className="hover:text-white transition duration-200">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/terms" className="hover:text-white transition duration-200">Terms of Service</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          type="button"
          className={`fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-cyan-500/30 bg-slate-950/60 text-cyan-400 backdrop-blur-md transition-all duration-300 hover:border-cyan-400 hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:scale-110 active:scale-95 ${showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
            }`}
          aria-label="Back to Top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </button>
      </div>
    </>
  );
}
