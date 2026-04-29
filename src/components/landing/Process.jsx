import { motion } from "framer-motion";
import { Search, Layers, Code2, Rocket } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Deep-dive into your business DNA. We analyze systems, map workflows, and identify the precise intersection where AI can amplify human capability.",
    icon: Search,
  },
  {
    number: "02",
    title: "Architect",
    description:
      "Blueprint the solution with surgical precision. Every component is designed for scalability, every integration point mapped for seamless data flow.",
    icon: Layers,
  },
  {
    number: "03",
    title: "Engineer",
    description:
      "Agile sprints powered by AI-augmented development. Continuous integration, real-time testing, and transparent progress tracking throughout.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Launch",
    description:
      "Deployment with zero downtime. Post-launch optimization cycles ensure your solution evolves with your business and the technology landscape.",
    icon: Rocket,
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative py-24 lg:py-36 border-t border-border/30"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 lg:mb-24">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-4">
                How We Work
              </div>
              <h2 className="font-inter text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                The
                <br />
                Protocol<span className="text-primary">.</span>
              </h2>
            </div>
            <p className="font-inter text-base text-muted-foreground max-w-md mt-6 lg:mt-0 leading-relaxed font-light">
              A battle-tested methodology refined across 200+ enterprise
              engagements.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 0.15}>
              <motion.div
                className="group relative p-8 lg:p-10 border border-border/30 rounded-sm hover:border-primary/30 transition-colors duration-500"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-sm bg-primary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-xs tracking-widest text-muted-foreground">
                      {step.number}
                    </span>
                    <step.icon className="w-5 h-5 text-primary opacity-60 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="font-inter text-2xl font-semibold text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="font-inter text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Bottom accent */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-px bg-primary"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4 }}
                  style={{ transformOrigin: "left" }}
                />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
