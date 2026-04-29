import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";
import PulseLines from "../components/landing/PulseLines";

const sections = [
  {
    title: "1. Who We Are",
    content: `Advantage is a technology and business solutions company providing strategic branding, enterprise ERP development, SaaS platform engineering, and AI-powered marketing services. Our registered business address and primary point of contact for privacy matters is hello@advantage.ai.

When we refer to "Advantage," "we," "us," or "our" in this policy, we mean the Advantage entity responsible for processing your personal data.`,
  },
  {
    title: "2. What Data We Collect",
    content: `We collect information in the following ways:

Information you provide directly: When you submit a contact form, request a consultation, or communicate with us via email or phone, we collect your name, email address, phone number, company name, job title, and any other details you choose to share.

Information collected automatically: When you visit our website, we may automatically collect your IP address, browser type, device information, pages visited, time spent on pages, and referring URLs through cookies and analytics tools.

Information from third parties: We may receive information about you from advertising platforms, referral partners, or publicly available sources such as LinkedIn, in the context of business development.`,
  },
  {
    title: "3. How We Use Your Data",
    content: `We use the information we collect for the following purposes:

— To respond to your enquiries and provide the services you request
— To send you information about our services, case studies, and updates (where you have consented)
— To improve and personalise your experience on our website
— To analyse website traffic and usage patterns
— To comply with our legal obligations
— To protect the security and integrity of our website and business

We will never sell your personal data to third parties. We do not use your data for automated decision-making that produces legal or similarly significant effects.`,
  },
  {
    title: "4. Legal Basis for Processing",
    content: `Where applicable under data protection law (including GDPR), we process your personal data on the following legal bases:

Contractual necessity: Processing required to enter into or perform a contract with you.
Legitimate interests: Processing for our legitimate business interests, such as improving our services and conducting direct marketing to existing or prospective clients, where these interests are not overridden by your rights.
Consent: Where you have given us clear consent to process your data for a specific purpose, such as receiving marketing communications.
Legal obligation: Where processing is necessary to comply with a legal obligation.`,
  },
  {
    title: "5. Cookies",
    content: `Our website uses cookies — small text files stored on your device — to enhance your experience and analyse usage. We use:

Essential cookies: Required for the website to function correctly. These cannot be disabled.
Analytics cookies: Used to understand how visitors interact with our website (e.g., Google Analytics). These are only set with your consent.
Marketing cookies: Used to deliver relevant advertisements. These are only set with your consent.

You can manage your cookie preferences at any time through the cookie consent banner on our website, or by adjusting your browser settings. Please note that disabling certain cookies may affect the functionality of our website.`,
  },
  {
    title: "6. Data Sharing",
    content: `We may share your personal data with:

Service providers: Third-party companies that assist us in operating our website and delivering our services (e.g., hosting providers, email platforms, analytics tools). These parties process data on our behalf and are bound by appropriate data processing agreements.
Professional advisors: Lawyers, accountants, and auditors where necessary.
Regulatory authorities: Where required by law or legal process.

We require all third parties to respect the security of your personal data and to treat it in accordance with applicable law.`,
  },
  {
    title: "7. International Transfers",
    content: `We operate globally, and your data may be transferred to and processed in countries outside your country of residence, including countries that may not have the same level of data protection as your home jurisdiction. Where such transfers occur, we implement appropriate safeguards (such as standard contractual clauses) to protect your data.`,
  },
  {
    title: "8. Data Retention",
    content: `We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements. Typically, contact and enquiry data is retained for up to 3 years after our last interaction. Marketing consent records are retained for as long as we hold your data for marketing purposes.`,
  },
  {
    title: "9. Your Rights",
    content: `Depending on your location, you may have the following rights regarding your personal data:

— Right of access: Request a copy of the data we hold about you
— Right to rectification: Request correction of inaccurate data
— Right to erasure: Request deletion of your data in certain circumstances
— Right to restrict processing: Request we limit how we use your data
— Right to data portability: Receive your data in a structured, machine-readable format
— Right to object: Object to processing based on legitimate interests or for direct marketing
— Right to withdraw consent: Where processing is based on consent, withdraw it at any time

To exercise any of these rights, contact us at hello@advantage.ai. We will respond within 30 days.`,
  },
  {
    title: "10. Security",
    content: `We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.`,
  },
  {
    title: "11. Changes to This Policy",
    content: `We may update this Privacy Policy from time to time. When we do, we will revise the "Last Updated" date at the top of this page. We encourage you to review this policy periodically. Continued use of our website following any changes constitutes your acceptance of the updated policy.`,
  },
  {
    title: "12. Contact Us",
    content: `If you have any questions about this Privacy Policy or our data practices, please contact our team at:

Email: hello@advantage.ai
Subject line: Privacy Enquiry

We take privacy seriously and will respond promptly to any concerns.`,
  },
];

export default function PrivacyPolicy() {
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
            Privacy Policy<span className="text-primary">.</span>
          </h1>
          <p className="font-mono text-xs text-muted-foreground mb-16">
            Last Updated: April 2026
          </p>

          <p className="font-inter text-base text-muted-foreground leading-relaxed mb-16 max-w-2xl">
            At Advantage, we respect your privacy and are committed to
            protecting your personal data. This policy explains how we collect,
            use, and safeguard your information when you visit our website or
            engage with our services.
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
