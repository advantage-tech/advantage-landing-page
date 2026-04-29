import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const logos = [
  "IVORY SUITES",
  "CLEARFUND",
  "STUDIO FORM",
  "PRIMEMEDIA GROUP",
  "ARCLINE HOMES",
  "VERTEXIO",
  "MERIDIAN GROUP",
  "NOVALUX RETAIL",
];

export default function LogoMarquee() {
  return (
    <section className="relative py-16 lg:py-20 border-t border-border/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-8">
        <ScrollReveal>
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground/50 text-center">
            Trusted across hospitality, FinTech, media, interior design & more
          </div>
        </ScrollReveal>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

        <motion.div
          className="flex items-center gap-16 whitespace-nowrap"
          animate={{ x: [0, -1200] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {[...logos, ...logos].map((logo, i) => (
            <span
              key={i}
              className="font-inter text-lg lg:text-xl font-semibold text-muted-foreground/20 tracking-widest select-none"
            >
              {logo}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
