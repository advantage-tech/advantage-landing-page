import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const cases = [
  {
    client: "Ivory Suites Hotels",
    industry: "Hospitality",
    service: "Brand Identity",
    metric: "+40%",
    metricLabel: "Booking Increase Post-Rebrand",
    description:
      "Full brand overhaul and digital experience redesign for a 5-star hotel group operating across 4 major cities.",
  },
  {
    client: "ClearFund",
    industry: "FinTech",
    service: "SaaS Platform",
    metric: "14 Wks",
    metricLabel: "MVP to Production Launch",
    description:
      "Built a fully compliant consumer lending platform architected for hypergrowth, from zero to 500k users.",
  },
  {
    client: "PrimeMedia Group",
    industry: "Media & Broadcasting",
    service: "AI Marketing",
    metric: "3× ROAS",
    metricLabel: "Return on Ad Spend",
    description:
      "Deployed an AI campaign engine for a national media network, outperforming their legacy agency within 60 days.",
  },
  {
    client: "Studio FORM",
    industry: "Interior Design",
    service: "Brand + ERP",
    metric: "20 hrs",
    metricLabel: "Saved Per Week via ERP",
    description:
      "Dual engagement: premium brand identity for GCC market entry, plus custom ERP for end-to-end project management.",
  },
];

export default function CaseStudies() {
  return (
    <section
      id="cases"
      className="relative py-24 lg:py-36 border-t border-border/30"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-16 lg:mb-24">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-4">
              Proven Impact
            </div>
            <h2 className="font-inter text-4xl lg:text-6xl font-bold text-foreground leading-tight">
              Results That
              <br />
              Speak<span className="text-primary">.</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="space-y-0">
          {cases.map((caseItem, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <motion.div
                className="group grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 py-10 lg:py-14 border-b border-border/30 cursor-pointer"
                whileHover={{ x: 8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="lg:col-span-3 flex lg:flex-col gap-4 lg:gap-2">
                  <span className="font-inter text-xl lg:text-2xl font-semibold text-foreground">
                    {caseItem.client}
                  </span>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      {caseItem.industry}
                    </span>
                    <span className="text-muted-foreground/30">•</span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-primary">
                      {caseItem.service}
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-3 flex flex-col justify-center">
                  <span className="font-inter text-4xl lg:text-5xl font-bold text-foreground">
                    {caseItem.metric}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-1">
                    {caseItem.metricLabel}
                  </span>
                </div>

                <div className="lg:col-span-5 flex items-center">
                  <p className="font-inter text-sm lg:text-base text-muted-foreground leading-relaxed">
                    {caseItem.description}
                  </p>
                </div>

                <div className="lg:col-span-1 flex items-center justify-end">
                  <div className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 text-foreground" />
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
