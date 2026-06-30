import Link from 'next/link';

export default function DevelopmentSolution() {
  return (
    <div className="min-h-screen bg-[#050b16] text-slate-50 overflow-hidden relative">
      {/* Background gradients */}
      <div className="pointer-events-none absolute left-0 top-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-24 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />

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
              <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-cyan-200 mb-6 font-medium">
                VDS IT Department
              </span>
              <h1 className="text-4xl font-semibold text-white sm:text-5xl lg:text-7xl leading-[1.1] tracking-tight">
                Development <br /> <span className="text-cyan-300">Solutions</span>
              </h1>
              <p className="mt-8 text-lg sm:text-xl text-slate-400 max-w-xl leading-relaxed">
                Fast, scalable, and secure web applications built with modern frameworks to drive your business forward in the digital era.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row pt-4">
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-8 py-4 text-base font-semibold text-slate-950 transition hover:bg-cyan-300 hover:scale-105 duration-300">
                Start a Project
              </Link>
              <Link href="/#portfolio" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-4 text-base text-slate-100 transition hover:border-cyan-300 hover:bg-white/10 hover:scale-105 duration-300">
                View Our Work
              </Link>
            </div>
          </div>

          <div className="flex-1 w-full max-w-xl relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/30 to-blue-600/30 blur-[100px] rounded-3xl transform -rotate-6 scale-105"></div>
            <div className="relative rounded-3xl border border-white/10 bg-slate-950/60 backdrop-blur-2xl p-8 sm:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">

              <div className="space-y-8">
                <h3 className="font-semibold text-white text-2xl tracking-tight">Our Services</h3>
                <div className="space-y-6">
                  {[
                    { title: "Website development", desc: "Custom, responsive websites tailored to elevate your brand identity." },
                    { title: "Software development", desc: "Scalable and secure custom software solutions for your unique needs." },
                    { title: "UI/UX coordination", desc: "Intuitive and engaging user experiences designed for conversion." },
                    { title: "Technical infrastructure", desc: "Robust architecture ensuring optimal performance and reliability." },
                    { title: "Hosting & maintenance", desc: "Secure hosting and ongoing support to keep your systems running smoothly." },
                    { title: "Automation systems", desc: "Streamlining operations with intelligent and efficient automation." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 group">
                      <div className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 transition-all duration-300 group-hover:bg-cyan-400 group-hover:text-slate-900 group-hover:scale-110 shadow-[0_0_10px_rgba(6,182,212,0.1)] group-hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] mt-1">
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

        {/* Technology Stack Section */}
        <section className="relative overflow-hidden pt-24 pb-8">
          <div className="relative z-10 mx-auto max-w-[1440px] text-center">
            <h3 className="text-[10px] sm:text-xs uppercase tracking-[0.4em] text-slate-400 font-semibold mb-10">
              Our Technology Stack
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 text-xl sm:text-2xl font-normal text-slate-400/80">
              <span className="hover:text-white transition duration-300 cursor-default">Figma</span>
              <span className="hover:text-white transition duration-300 cursor-default">React</span>
              <span className="hover:text-white transition duration-300 cursor-default">Next.js</span>
              <span className="hover:text-white transition duration-300 cursor-default">Tailwind</span>
              <span className="hover:text-white transition duration-300 cursor-default">Framer</span>
              <span className="hover:text-white transition duration-300 cursor-default">Node.js</span>
              <span className="hover:text-white transition duration-300 cursor-default">MongoDB</span>
              <span className="hover:text-white transition duration-300 cursor-default">Express.js</span>
              <span className="hover:text-white transition duration-300 cursor-default">MERN Stack</span>
              <span className="hover:text-white transition duration-300 cursor-default">Full Stack</span>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
