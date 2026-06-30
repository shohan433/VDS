import Link from 'next/link';

export default function TermsOfService() {
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
            Terms & <span className="text-cyan-300">Conditions</span>
          </h1>
          <p className="mt-4 text-slate-400">Effective Date: June 28, 2026 | Last Updated: June 28, 2026</p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-slate-950/60 backdrop-blur-xl p-8 sm:p-12 shadow-2xl">
          <div className="prose prose-invert prose-slate max-w-none prose-headings:text-cyan-300 prose-headings:font-semibold prose-a:text-cyan-400 hover:prose-a:text-cyan-300">
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              Welcome to Virtual Digital Solution (VDS). These Terms & Conditions ("Terms") govern your access to and use of our website and services. By accessing our website or engaging our services, you agree to be bound by these Terms. If you do not agree with any part of these Terms, please do not use our website or services.
            </p>

            <h3 className="text-2xl mt-8 mb-4">1. About Us</h3>
            <p>Virtual Digital Solution (VDS) is a digital marketing and technology agency providing services including, but not limited to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-8 text-slate-400">
              <li>Digital Marketing</li>
              <li>Search Engine Optimization (SEO)</li>
              <li>Search Engine Marketing (SEM)</li>
              <li>Social Media Marketing</li>
              <li>Google, Facebook, YouTube, TikTok & LinkedIn Advertising</li>
              <li>Website Design & Development</li>
              <li>UI/UX Design</li>
              <li>Branding & Graphic Design</li>
              <li>Content Creation</li>
              <li>Photography & Videography</li>
              <li>Video Editing</li>
              <li>CRM & Marketing Automation</li>
              <li>Software Solutions</li>
              <li>Business Consulting</li>
            </ul>

            <h3 className="text-2xl mt-8 mb-4">2. Website Use</h3>
            <p>You agree to use this website only for lawful purposes. You must not:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4 text-slate-400">
              <li>Violate any applicable laws or regulations.</li>
              <li>Attempt to gain unauthorized access to our systems or data.</li>
              <li>Upload or distribute malicious software or harmful code.</li>
              <li>Interfere with the operation or security of the website.</li>
              <li>Use our website for fraudulent, misleading, or illegal activities.</li>
            </ul>
            <p className="mb-8">We reserve the right to restrict or terminate access if these Terms are violated.</p>

            <h3 className="text-2xl mt-8 mb-4">3. Service Agreements</h3>
            <p className="mb-8 text-slate-400">Project-specific services are governed by separate proposals, quotations, contracts, or service agreements. Those documents take precedence over these Terms where applicable.</p>

            <h3 className="text-2xl mt-8 mb-4">4. Quotations and Pricing</h3>
            <p className="mb-8 text-slate-400">All quotations are valid only for the period stated in the quotation unless otherwise specified. Prices may change without prior notice until a quotation is formally accepted.</p>

            <h3 className="text-2xl mt-8 mb-4">5. Payments</h3>
            <p>Payment terms will be specified in the quotation, invoice, or service agreement. Unless otherwise agreed:</p>
            <ul className="list-disc pl-6 space-y-2 mb-8 text-slate-400">
              <li>Payments must be made according to the agreed schedule.</li>
              <li>Delayed payments may result in project delays or suspension of services.</li>
              <li>Outstanding invoices remain payable even if a project is paused by the client.</li>
            </ul>

            <h3 className="text-2xl mt-8 mb-4">6. Client Responsibilities</h3>
            <p>Clients agree to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4 text-slate-400">
              <li>Provide accurate information.</li>
              <li>Supply required content, images, branding assets, and approvals on time.</li>
              <li>Review deliverables promptly.</li>
              <li>Obtain any necessary rights or permissions for materials they provide.</li>
            </ul>
            <p className="mb-8 text-slate-400">Delays in client responses may affect project timelines.</p>

            <h3 className="text-2xl mt-8 mb-4">7. Intellectual Property</h3>
            <p>Unless otherwise agreed in writing:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4 text-slate-400">
              <li>VDS retains ownership of its proprietary methods, templates, frameworks, software, and internal processes.</li>
              <li>Clients retain ownership of content and materials they provide.</li>
              <li>Ownership of final deliverables transfers according to the terms of the applicable service agreement and after full payment, where applicable.</li>
            </ul>
            <p className="mb-8 text-slate-400">VDS may display completed work in its portfolio unless a written confidentiality agreement states otherwise.</p>

            <h3 className="text-2xl mt-8 mb-4">8. Third-Party Platforms</h3>
            <p>Many of our services involve third-party platforms such as Google, Meta, LinkedIn, TikTok, WordPress, Shopify, and others. We are not responsible for:</p>
            <ul className="list-disc pl-6 space-y-2 mb-8 text-slate-400">
              <li>Changes to third-party platform policies.</li>
              <li>Platform outages.</li>
              <li>Account suspensions.</li>
              <li>Advertising account restrictions.</li>
              <li>Algorithm updates affecting rankings or campaign performance.</li>
            </ul>

            <h3 className="text-2xl mt-8 mb-4">9. SEO and Marketing Results</h3>
            <p>Digital marketing outcomes depend on numerous factors beyond our control. Accordingly, VDS does not guarantee:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4 text-slate-400">
              <li>Specific Google rankings.</li>
              <li>A particular number of leads or sales.</li>
              <li>Advertising approval by third-party platforms.</li>
              <li>Exact return on investment (ROI).</li>
            </ul>
            <p className="mb-8 text-slate-400">We use industry best practices to pursue the agreed objectives but cannot guarantee specific results.</p>

            <h3 className="text-2xl mt-8 mb-4">10. Limitation of Liability</h3>
            <p className="mb-4 text-slate-400">To the fullest extent permitted by applicable law, VDS shall not be liable for any indirect, incidental, consequential, special, or punitive damages arising from the use of our website or services.</p>
            <p className="mb-8 text-slate-400">Our total liability relating to any claim shall not exceed the amount paid by the client for the specific service giving rise to the claim.</p>

            <h3 className="text-2xl mt-8 mb-4">11. Confidentiality</h3>
            <p>We treat client information as confidential and will not disclose confidential business information except:</p>
            <ul className="list-disc pl-6 space-y-2 mb-8 text-slate-400">
              <li>With the client's permission;</li>
              <li>As required by law; or</li>
              <li>To trusted service providers involved in delivering agreed services under appropriate confidentiality obligations.</li>
            </ul>

            <h3 className="text-2xl mt-8 mb-4">12. Website Content</h3>
            <p className="mb-8 text-slate-400">All content on this website, including text, graphics, logos, branding, designs, and original materials, is the property of Virtual Digital Solution (VDS) unless otherwise stated. No material may be copied, reproduced, or distributed without prior written permission.</p>

            <h3 className="text-2xl mt-8 mb-4">13. External Links</h3>
            <p className="mb-8 text-slate-400">Our website may contain links to third-party websites for informational purposes. We do not control or endorse the content, policies, or practices of external websites and are not responsible for them.</p>

            <h3 className="text-2xl mt-8 mb-4">14. Privacy</h3>
            <p className="mb-8 text-slate-400">Your use of our website is also governed by our Privacy Policy, which explains how we collect, use, and protect personal information.</p>

            <h3 className="text-2xl mt-8 mb-4">15. Termination</h3>
            <p className="mb-8 text-slate-400">We reserve the right to suspend or terminate website access or services if these Terms are violated, payment obligations are not met, or continued service would expose us to legal, security, or operational risks.</p>

            <h3 className="text-2xl mt-8 mb-4">16. Changes to These Terms</h3>
            <p className="mb-8 text-slate-400">We may update these Terms & Conditions from time to time. Changes become effective once published on this page. Continued use of our website or services constitutes acceptance of the revised Terms.</p>

            <h3 className="text-2xl mt-8 mb-4">17. Governing Law</h3>
            <p className="mb-8 text-slate-400">These Terms shall be governed by and interpreted in accordance with the laws of the People's Republic of Bangladesh. Any disputes arising from these Terms shall be subject to the jurisdiction of the competent courts of Bangladesh unless otherwise agreed in writing.</p>

            <h3 className="text-2xl mt-8 mb-4">18. Contact Information</h3>
            <div className="text-slate-400 bg-white/5 p-6 rounded-2xl border border-white/10">
              <p className="font-semibold text-white mb-2">Virtual Digital Solution (VDS)</p>
              <p>Website: <a href="https://virtualdigitalsolution.com" target="_blank" rel="noopener noreferrer">https://virtualdigitalsolution.com</a></p>
              <p>Email: <a href="mailto:info@virtualdogotalsolution.com">info@virtualdogotalsolution.com</a></p>
              <p>Phone: +880 130-0433387</p>
              <p className="mt-4 text-sm">If you have any questions regarding these Terms & Conditions, please contact us using the details above.</p>
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
