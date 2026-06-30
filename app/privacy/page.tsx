import Link from 'next/link';

export default function PrivacyPolicy() {
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

      <main className="relative z-10 mx-auto max-w-4xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-semibold text-white sm:text-5xl lg:text-6xl tracking-tight">
            Privacy & <span className="text-cyan-300">Cookie Policy</span>
          </h1>
          <p className="mt-4 text-slate-400">Effective Date: June 28, 2026 | Last Updated: June 28, 2026</p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-slate-950/60 backdrop-blur-xl p-8 sm:p-12 shadow-2xl">
          <div className="prose prose-invert prose-slate max-w-none prose-headings:text-cyan-300 prose-headings:font-semibold prose-a:text-cyan-400 hover:prose-a:text-cyan-300">
            
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              This Cookie Policy explains how Virtual Digital Solution (VDS) uses cookies and similar technologies when you visit our website. By continuing to use our website, you agree to the use of cookies as described in this policy, unless you disable them through your browser or our cookie preferences (where available).
            </p>

            <h3 className="text-2xl mt-8 mb-4">1. What Are Cookies?</h3>
            <p className="mb-4 text-slate-400">
              Cookies are small text files stored on your computer, smartphone, or other device when you visit a website. They help websites function properly, remember your preferences, improve user experience, and provide insights into website performance.
            </p>
            <p className="mb-8 text-slate-400">
              Cookies do not typically contain information that directly identifies you, but they may be linked with other information we hold about you.
            </p>

            <h3 className="text-2xl mt-8 mb-4">2. Why We Use Cookies</h3>
            <p>We use cookies to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-8 text-slate-400">
              <li>Ensure our website functions correctly.</li>
              <li>Improve website speed and performance.</li>
              <li>Remember your preferences and settings.</li>
              <li>Analyze website traffic and visitor behavior.</li>
              <li>Measure the effectiveness of marketing campaigns.</li>
              <li>Enhance website security.</li>
              <li>Improve user experience.</li>
            </ul>

            <h3 className="text-2xl mt-8 mb-4">3. Types of Cookies We Use</h3>
            
            <h4 className="text-xl mt-6 mb-3 text-white">Essential Cookies</h4>
            <p className="mb-6 text-slate-400">
              These cookies are necessary for the operation of our website. They enable core functionality such as page navigation, security, and access to certain features. Without these cookies, parts of the website may not function properly.
            </p>

            <h4 className="text-xl mt-6 mb-3 text-white">Analytics Cookies</h4>
            <p>Analytics cookies help us understand how visitors interact with our website. They collect anonymous information such as:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4 text-slate-400">
              <li>Number of visitors</li>
              <li>Pages visited</li>
              <li>Time spent on pages</li>
              <li>Traffic sources</li>
              <li>Device and browser information</li>
            </ul>
            <p className="mb-6 text-slate-400">This information helps us improve our website and services.</p>

            <h4 className="text-xl mt-6 mb-3 text-white">Performance Cookies</h4>
            <p className="mb-6 text-slate-400">
              These cookies help us monitor website performance and identify technical issues so we can improve loading speed, usability, and reliability.
            </p>

            <h4 className="text-xl mt-6 mb-3 text-white">Marketing and Advertising Cookies</h4>
            <p>Marketing cookies help us measure the effectiveness of advertising campaigns and deliver more relevant advertisements. These cookies may be used for:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6 text-slate-400">
              <li>Google Ads conversion tracking</li>
              <li>Meta (Facebook) Pixel</li>
              <li>Remarketing campaigns</li>
              <li>Audience measurement</li>
              <li>Campaign optimization</li>
            </ul>

            <h4 className="text-xl mt-6 mb-3 text-white">Functional Cookies</h4>
            <p className="mb-8 text-slate-400">
              Functional cookies remember choices you make, such as language preferences or other website settings, to provide a more personalized browsing experience.
            </p>

            <h3 className="text-2xl mt-8 mb-4">4. Third-Party Cookies</h3>
            <p>Our website may use trusted third-party services that place cookies on your device, including but not limited to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4 text-slate-400">
              <li>Google Analytics</li>
              <li>Google Tag Manager</li>
              <li>Google Ads</li>
              <li>Meta Pixel (Facebook)</li>
              <li>YouTube</li>
              <li>LinkedIn</li>
              <li>TikTok</li>
              <li>CRM and marketing automation platforms</li>
              <li>Live chat or customer support tools (if implemented)</li>
            </ul>
            <p className="mb-8 text-slate-400">
              These third-party providers have their own privacy and cookie policies governing how they collect and process data.
            </p>

            <h3 className="text-2xl mt-8 mb-4">5. Managing Cookies</h3>
            <p>Most web browsers allow you to control or disable cookies through their settings. You can generally:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4 text-slate-400">
              <li>View stored cookies</li>
              <li>Delete cookies</li>
              <li>Block all cookies</li>
              <li>Block cookies from specific websites</li>
              <li>Receive notifications before cookies are stored</li>
            </ul>
            <p className="mb-8 text-slate-400">
              Please note that disabling certain cookies may affect the functionality and performance of our website.
            </p>

            <h3 className="text-2xl mt-8 mb-4">6. Changes to This Cookie Policy</h3>
            <p className="mb-4 text-slate-400">
              We may update this Cookie Policy from time to time to reflect changes in technology, legal requirements, or our business practices.
            </p>
            <p className="mb-8 text-slate-400">
              Any updates will be published on this page with a revised "Last Updated" date.
            </p>

            <h3 className="text-2xl mt-8 mb-4">7. Contact Us</h3>
            <div className="text-slate-400 bg-white/5 p-6 rounded-2xl border border-white/10">
              <p className="font-semibold text-white mb-2">Virtual Digital Solution (VDS)</p>
              <p>Website: <a href="https://virtualdigitalsolution.com" target="_blank" rel="noopener noreferrer">https://virtualdigitalsolution.com</a></p>
              <p>Email: <a href="mailto:info@virtualdigitalsolution.com">info@virtualdigitalsolution.com</a></p>
              <p>Phone: +880 130-0433387</p>
              <p className="mt-4 text-sm">If you have any questions regarding this Cookie Policy or how we use cookies, please contact us.</p>
            </div>

          </div>
        </div>
      </main>

      {/* Footer strip */}
      <footer className="border-t border-white/5 px-6 py-8 sm:px-8 lg:px-12 bg-slate-950/50">
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
