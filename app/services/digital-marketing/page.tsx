import Link from 'next/link';

export default function DigitalMarketing() {
  return (
    <div className="min-h-screen bg-[#050b16] text-slate-50 overflow-hidden relative">
      {/* Background gradients */}
      <div className="pointer-events-none absolute left-0 top-24 h-72 w-72 rounded-full bg-pink-400/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-24 h-80 w-80 rounded-full bg-rose-500/10 blur-3xl" />

      <header className="relative z-10 mx-auto max-w-[1440px] flex items-center justify-between gap-4 px-6 py-6 sm:px-8 lg:px-12">
        <Link href="/" className="inline-flex items-center gap-3 text-white hover:opacity-80 transition">
          <img src="/images/vds logo.png" alt="VDS Logo" className="h-10 w-auto rounded-full object-contain" />
          <span className="sr-only">VDS</span>
        </Link>
        <nav className="hidden items-center gap-10 text-sm text-slate-300 lg:flex">
          <Link className="transition hover:text-white" href="/">
            Home
          </Link>
          <Link className="transition hover:text-white" href="/#services">
            Services
          </Link>
          <a className="transition hover:text-white" href="/#portfolio">
            Portfolio
          </a>
          <Link className="transition hover:text-white" href="/team">
            Our Team
          </Link>
          <Link className="transition hover:text-white" href="/about">
            About
          </Link>
          <Link className="transition hover:text-white" href="/contact">
            Contact
          </Link>
        </nav>
        <div className="flex flex-wrap items-center gap-3">
          <Link href="/contact" className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-slate-100 transition hover:border-white/30 hover:bg-white/10">
            Book a Call
          </Link>
          <Link href="/contact#proposal-form" className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
            Get Proposal
          </Link>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-[1440px] px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">

          <div className="flex-1 space-y-8 lg:pr-10">
            <div>
              <span className="inline-flex rounded-full border border-pink-500/20 bg-pink-500/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-pink-200 mb-6 font-medium">
                VDS Marketing Department
              </span>
              <h1 className="text-4xl font-semibold text-white sm:text-5xl lg:text-7xl leading-[1.1] tracking-tight">
                Digital <br /> <span className="text-pink-400">Marketing</span>
              </h1>
              <p className="mt-8 text-lg sm:text-xl text-slate-400 max-w-xl leading-relaxed">
                Data-driven strategies to grow your digital presence, enhance brand visibility, and maximize ROI across all channels.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row pt-4">
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-pink-500 px-8 py-4 text-base font-semibold text-white transition hover:bg-pink-400 hover:scale-105 duration-300">
                Start a Campaign
              </Link>
              <Link href="/#portfolio" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-4 text-base text-slate-100 transition hover:border-pink-400 hover:bg-white/10 hover:scale-105 duration-300">
                View Our Results
              </Link>
            </div>
          </div>

          <div className="flex-1 w-full max-w-xl relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/30 to-rose-600/30 blur-[100px] rounded-3xl transform -rotate-6 scale-105"></div>
            <div className="relative rounded-3xl border border-white/10 bg-slate-950/60 backdrop-blur-2xl p-8 sm:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">

              <div className="space-y-8">
                <h3 className="font-semibold text-white text-2xl tracking-tight">Our Services</h3>
                <div className="space-y-6">
                  {[
                    { title: "Paid advertising", desc: "Targeted ad campaigns designed to maximize ROI and reach." },
                    { title: "Lead generation", desc: "Strategies to attract and convert high-quality prospects." },
                    { title: "Sales funnel development", desc: "Optimized pathways that turn visitors into loyal customers." },
                    { title: "Brand growth strategy", desc: "Comprehensive plans to scale your brand presence and market share." },
                    { title: "Client acquisition", desc: "Proven methods to consistently bring in new clients and business." },
                    { title: "Market research", desc: "In-depth analysis to understand your audience and outperform competitors." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 group">
                      <div className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-pink-500/10 text-pink-400 border border-pink-500/20 transition-all duration-300 group-hover:bg-pink-500 group-hover:text-white group-hover:scale-110 shadow-[0_0_10px_rgba(236,72,153,0.1)] group-hover:shadow-[0_0_15px_rgba(244,114,182,0.5)] mt-1">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-slate-200 text-lg font-medium group-hover:text-white transition-colors">{item.title}</h4>
                        <p className="text-sm text-slate-400 mt-1 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
