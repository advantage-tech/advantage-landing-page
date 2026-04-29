import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";
import PulseLines from "../components/landing/PulseLines";

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: `By accessing and using the Advantage website (the "Site") or engaging our services, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the Site or our services.

These Terms constitute a legally binding agreement between you and Advantage. We reserve the right to update these Terms at any time. Continued use of the Site following any changes constitutes acceptance of the revised Terms.`,
  },
  {
    title: "2. Services",
    content: `Advantage provides strategic branding, enterprise ERP development, SaaS platform engineering, and AI-powered marketing services to businesses. The specific terms, scope, deliverables, timelines, and pricing for any engagement are set out in a separate Statement of Work (SOW) or Project Agreement executed between Advantage and the client.

These Terms govern general use of our website and provide the foundational legal framework applicable to all engagements unless otherwise specified in a signed agreement.`,
  },
  {
    title: "3. Intellectual Property",
    content: `All content on this Site — including text, graphics, logos, images, and software — is the property of Advantage or its content suppliers and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from any content on this Site without our express written permission.

For client engagements: Unless otherwise agreed in writing, upon receipt of full payment, ownership of deliverables (final designs, code, documentation) transfers to the client. Advantage retains the right to display the work in its portfolio. Underlying frameworks, tools, and proprietary methodologies remain the intellectual property of Advantage.`,
  },
  {
    title: "4. Client Obligations",
    content: `When engaging Advantage for services, clients agree to:

— Provide accurate, complete, and timely information required for project delivery
— Designate a responsible point of contact for the engagement
— Provide timely feedback and approvals within agreed timeframes (delays may impact project timelines and incur additional costs)
— Not use our deliverables for any unlawful purpose
— Maintain the confidentiality of any access credentials or proprietary information shared during the engagement`,
  },
  {
    title: "5. Payment Terms",
    content: `Unless otherwise specified in a signed agreement:

— Projects are invoiced in milestones as defined in the Statement of Work
— Payment is due within 14 days of invoice date
— Late payments may incur interest at 2% per month on the outstanding balance
— Advantage reserves the right to pause work on any project where payment is overdue by more than 14 days
— All fees are exclusive of applicable taxes (VAT, GST, etc.) which will be added where required by law`,
  },
  {
    title: "6. Confidentiality",
    content: `Both parties agree to keep confidential any proprietary or sensitive information shared during the course of an engagement. This includes business strategies, technical architectures, client data, pricing, and any information marked as confidential.

Advantage will not disclose your confidential information to any third party without your consent, except as required by law or to our service providers who operate under equivalent confidentiality obligations.`,
  },
  {
    title: "7. Limitation of Liability",
    content: `To the maximum extent permitted by law, Advantage's total liability arising out of or in connection with any engagement shall not exceed the total fees paid by the client in the three months preceding the claim.

Advantage shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, loss of data, business interruption, or loss of goodwill, even if advised of the possibility of such damages.

This limitation does not apply to liability for death or personal injury caused by negligence, fraudulent misrepresentation, or any other liability that cannot be excluded by law.`,
  },
  {
    title: "8. Warranties and Disclaimers",
    content: `Advantage warrants that services will be performed with reasonable skill and care. The Site and its content are provided "as is" without warranties of any kind, express or implied, including warranties of merchantability, fitness for a particular purpose, or non-infringement.

We do not warrant that the Site will be uninterrupted, error-free, or free of viruses or other harmful components. We reserve the right to modify or discontinue any aspect of the Site at any time without notice.`,
  },
  {
    title: "9. Third-Party Links",
    content: `Our Site may contain links to third-party websites. These links are provided for convenience only. Advantage does not endorse, control, or take responsibility for the content, privacy practices, or terms of any third-party sites. Your use of third-party sites is at your own risk.`,
  },
  {
    title: "10. Termination",
    content: `Either party may terminate an engagement with 30 days' written notice. Upon termination, the client is responsible for payment of all work completed up to the termination date. Advantage will deliver all completed work product upon receipt of outstanding payment.

Advantage reserves the right to terminate an engagement immediately in the event of material breach, non-payment, or if continuing the engagement would violate applicable law.`,
  },
  {
    title: "11. Governing Law",
    content: `These Terms are governed by and construed in accordance with applicable law. Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of the applicable territory, as specified in any signed project agreement.

For clients where no jurisdiction is specified, disputes shall be resolved through binding arbitration administered by a mutually agreed arbitration body, with proceedings conducted in English.`,
  },
  {
    title: "12. Contact",
    content: `For any questions regarding these Terms of Service, please contact us at:

Email: hello@advantage.ai
Subject: Terms Enquiry

We are committed to resolving any concerns promptly and in good faith.`,
  },
];

export default function Terms() {
  return (
    <div className="relative bg-background min-h-screen overflow-x-hidden">
      <PulseLines />
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors mb-10"
          >
            <ArrowLeft className="w-3 h-3" /> Back to Home
          </Link>

          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-4">
            Legal
          </div>
          <h1 className="font-inter text-4xl lg:text-6xl font-bold text-foreground mb-3">
            Terms of Service<span className="text-primary">.</span>
          </h1>
          <p className="font-mono text-xs text-muted-foreground mb-16">
            Last Updated: April 2026
          </p>

          <p className="font-inter text-base text-muted-foreground leading-relaxed mb-16 max-w-2xl">
            Please read these Terms of Service carefully before using the
            Advantage website or engaging our services. These Terms govern your
            use of our platform and the conditions under which we deliver our
            services.
          </p>

          <div className="space-y-12">
            {sections.map((section) => (
              <div
                key={section.title}
                className="border-b border-border/30 pb-12"
              >
                <h2 className="font-inter text-xl font-semibold text-foreground mb-4">
                  {section.title}
                </h2>
                <p className="font-inter text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
