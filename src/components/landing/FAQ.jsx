import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const faqs = [
  {
    category: "Getting Started",
    question: "What industries does Advantage work with?",
    answer:
      "We work across virtually every major industry — including hospitality, FinTech, interior design, media and broadcasting, retail, real estate, logistics, and enterprise manufacturing. Our team brings sector-specific knowledge to every engagement, so we're not starting from zero when it comes to understanding your market.",
  },
  {
    category: "Getting Started",
    question:
      "How do I know if my business is ready for an Advantage engagement?",
    answer:
      "If you're experiencing operational friction, outgrowing your current systems, preparing for a growth inflection (fundraise, market expansion, rebrand, product launch), or simply losing ground to more tech-forward competitors — you're ready. Our discovery process is designed to meet you exactly where you are, whether you're a 5-person studio or a 500-person regional group.",
  },
  {
    category: "Services",
    question: "What's included in your branding service? Is it just a logo?",
    answer:
      "Not even close. Our branding engagements produce a complete Brand Intelligence System — visual identity (logo, colour, typography, iconography), brand voice and messaging frameworks, application across print and digital, motion guidelines, and a living brand document your team can grow with. For hospitality and interior design clients, we also handle environmental branding and physical touchpoint design.",
  },
  {
    category: "Services",
    question:
      "What's the difference between a custom ERP and using an off-the-shelf tool like SAP or QuickBooks?",
    answer:
      "Off-the-shelf tools are built for the average business — and they make you bend your workflows to fit their software. A custom ERP is built around how you actually operate. For a hotel group, that means managing reservations, staff rosters, procurement, and guest experience in one system. For an interior design studio, it means proposals, contractor management, and client portals all integrated. On average, custom ERP clients save 40–60% in long-term costs compared to enterprise licensing.",
  },
  {
    category: "Services",
    question:
      "Can you build a SaaS product from scratch if we only have an idea?",
    answer:
      "Absolutely — this is one of our most common engagements. We take you from concept to a production-ready product. The process covers market validation, product architecture, UX design, development, infrastructure setup, and launch. We've done this for FinTech platforms, media tools, booking systems, and B2B SaaS products. Our structured sprint model means you have something real to look at every two weeks.",
  },
  {
    category: "Process",
    question: "How long does a typical engagement take?",
    answer:
      "Brand identity: 6–10 weeks. SaaS MVP: 12–20 weeks. Custom ERP: 16–36 weeks depending on complexity and number of integrations. AI marketing systems: 4–8 weeks for initial deployment. All timelines are scoped transparently in your proposal — and we operate in two-week sprints with weekly stakeholder reviews throughout.",
  },
  {
    category: "Pricing",
    question: "How is pricing structured?",
    answer:
      "Brand and design engagements are fixed-scope, fixed-fee — no surprises. Product and ERP development is structured in milestone-based phases with a transparent budget ceiling. We don't do open-ended retainers. Every proposal includes a detailed scope, deliverable list, and payment schedule before any work begins. We believe pricing clarity is part of the client experience.",
  },
  {
    category: "Pricing",
    question: "What is the minimum project size you work with?",
    answer:
      "Our minimum engagement is $15,000 USD (or equivalent local currency). This ensures we can deploy a dedicated team and deliver meaningful outcomes. For earlier-stage businesses or solo founders, we offer a focused 4-week Accelerator Sprint — maximum impact, defined scope, fixed budget.",
  },
];

function FAQItem({ item, index }) {
  const [open, setOpen] = useState(false);

  return (
    <ScrollReveal delay={index * 0.05}>
      <div className="border-b border-border/30">
        <button
          className="w-full flex items-start justify-between gap-4 py-6 text-left group"
          onClick={() => setOpen(!open)}
        >
          <div className="flex items-start gap-4 flex-1">
            <span className="font-mono text-[9px] uppercase tracking-widest text-primary mt-1 shrink-0 hidden sm:block w-24">
              {item.category}
            </span>
            <span className="font-inter text-base lg:text-lg font-medium text-foreground group-hover:text-foreground/80 transition-colors leading-snug">
              {item.question}
            </span>
          </div>
          <div className="w-8 h-8 shrink-0 rounded-full border border-border/50 flex items-center justify-center group-hover:border-primary/50 transition-colors mt-0.5">
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.div
                  key="minus"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Minus className="w-3.5 h-3.5 text-primary" />
                </motion.div>
              ) : (
                <motion.div
                  key="plus"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Plus className="w-3.5 h-3.5 text-muted-foreground group-hover:text-foreground transition-colors" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="overflow-hidden"
            >
              <div className="pb-6 sm:pl-28">
                <p className="font-inter text-sm lg:text-base text-muted-foreground leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ScrollReveal>
  );
}

export default function FAQ() {
  return (
    <section
      id="faq"
      className="relative py-24 lg:py-36 border-t border-border/30"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 lg:mb-24">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-4">
                Clarity
              </div>
              <h2 className="font-inter text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Common
                <br />
                Questions<span className="text-primary">.</span>
              </h2>
            </div>
            <p className="font-inter text-base text-muted-foreground max-w-sm mt-6 lg:mt-0 leading-relaxed font-light">
              Everything you need to make a confident decision.{" "}
              <a
                href="#contact"
                className="text-primary hover:underline underline-offset-2"
              >
                Can't find your answer? Ask us.
              </a>
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl">
          {faqs.map((faq, i) => (
            <FAQItem key={i} item={faq} index={i} />
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <div className="mt-16 lg:mt-20 flex flex-col sm:flex-row items-start sm:items-center gap-6 p-8 lg:p-10 border border-border/30 rounded-sm bg-card">
            <div className="flex-1">
              <div className="font-mono text-[10px] uppercase tracking-widest text-primary mb-2">
                Still unsure?
              </div>
              <h3 className="font-inter text-xl lg:text-2xl font-semibold text-foreground">
                Talk to a Solution Architect
              </h3>
              <p className="font-inter text-sm text-muted-foreground mt-1">
                60 minutes. No obligation. No sales pitch.
              </p>
            </div>
            <a
              href="#contact"
              className="font-mono text-xs uppercase tracking-widest px-8 py-4 bg-primary text-primary-foreground rounded-sm hover:bg-primary/90 transition-all duration-300 whitespace-nowrap"
            >
              Book a Call
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
