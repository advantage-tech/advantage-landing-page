import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    quote:
      "Advantage completely transformed how our luxury brand is perceived. From the visual identity to the digital experience, every touchpoint now tells a cohesive, premium story. Our bookings increased 40% in the first quarter after launch.",
    author: "Amara Osei",
    title: "Managing Director, Ivory Suites Hotels",
    company: "IVORY SUITES",
    industry: "Hospitality",
  },
  {
    quote:
      "We needed a fintech platform built fast, with serious compliance and scale in mind. Advantage delivered a production-ready SaaS product in 14 weeks. The architecture has handled 10× our initial projections without breaking a sweat.",
    author: "Kwame Asante",
    title: "CEO, ClearFund",
    company: "CLEARFUND",
    industry: "FinTech",
  },
  {
    quote:
      "Our interior design firm was drowning in project management chaos. The custom ERP Advantage built for us now handles client proposals, contractor scheduling, and inventory in one place. We've saved over 20 hours a week.",
    author: "Fatima Al-Rashid",
    title: "Founder, Studio FORM",
    company: "STUDIO FORM",
    industry: "Interior Design",
  },
  {
    quote:
      "The AI marketing system Advantage deployed for our media network is unlike anything we've used. Campaign performance is tracked in real-time, and the automated optimisation genuinely outperforms our previous agency by a wide margin.",
    author: "David Mensah",
    title: "Head of Growth, PrimeMedia Group",
    company: "PRIMEMEDIA",
    industry: "Media & Broadcasting",
  },
];

const clientLogos = [
  { name: "IVORY SUITES", tag: "Hospitality" },
  { name: "CLEARFUND", tag: "FinTech" },
  { name: "STUDIO FORM", tag: "Interior Design" },
  { name: "PRIMEMEDIA", tag: "Media" },
  { name: "NOVALUX RETAIL", tag: "Retail" },
  { name: "VERTEXIO", tag: "Logistics" },
  { name: "ARCLINE HOMES", tag: "Real Estate" },
  { name: "MERIDIAN GROUP", tag: "Enterprise" },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const prev = () =>
    setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  return (
    <section
      id="testimonials"
      className="relative py-24 lg:py-36 border-t border-border/30"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 lg:mb-24">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-4">
                Social Proof
              </div>
              <h2 className="font-inter text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Trusted by
                <br />
                Leaders<span className="text-primary">.</span>
              </h2>
            </div>
            <p className="font-inter text-base text-muted-foreground max-w-sm mt-6 lg:mt-0 leading-relaxed font-light">
              From boutique hospitality brands to FinTech unicorns — our clients
              span every industry that matters.
            </p>
          </div>
        </ScrollReveal>

        {/* Testimonial Carousel */}
        <ScrollReveal>
          <div className="relative bg-card border border-border/50 rounded-sm overflow-hidden mb-16 lg:mb-20">
            <div className="absolute top-6 left-8 opacity-15">
              <Quote className="w-16 h-16 text-primary" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                className="p-8 lg:p-16"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                  <div className="lg:col-span-8 flex flex-col justify-center">
                    <p className="font-inter text-xl lg:text-2xl font-light text-foreground leading-relaxed mt-4">
                      "{testimonials[active].quote}"
                    </p>
                  </div>
                  <div className="lg:col-span-4 flex flex-col justify-center lg:border-l border-border/30 lg:pl-12">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                      <span className="font-inter font-semibold text-lg text-primary">
                        {testimonials[active].author[0]}
                      </span>
                    </div>
                    <div className="font-inter font-semibold text-foreground text-lg">
                      {testimonials[active].author}
                    </div>
                    <div className="font-inter text-sm text-muted-foreground mt-1">
                      {testimonials[active].title}
                    </div>
                    <div className="mt-4 flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-primary" />
                      <span className="font-mono text-[10px] uppercase tracking-widest text-primary">
                        {testimonials[active].industry}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-between px-8 lg:px-16 py-5 border-t border-border/30">
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`rounded-full transition-all duration-300 ${
                      i === active
                        ? "w-6 h-1.5 bg-primary"
                        : "w-1.5 h-1.5 bg-border hover:bg-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  className="w-9 h-9 rounded-full border border-border/50 flex items-center justify-center hover:bg-accent transition-colors"
                >
                  <ChevronLeft className="w-4 h-4 text-foreground" />
                </button>
                <button
                  onClick={next}
                  className="w-9 h-9 rounded-full border border-border/50 flex items-center justify-center hover:bg-accent transition-colors"
                >
                  <ChevronRight className="w-4 h-4 text-foreground" />
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Client Logo Grid */}
        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-px border border-border/20 rounded-sm overflow-hidden">
            {clientLogos.map((logo, i) => (
              <motion.div
                key={i}
                className="group bg-card hover:bg-accent/40 transition-colors duration-300 flex flex-col items-center justify-center py-6 px-3 gap-1"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <span className="font-inter text-[11px] font-semibold tracking-widest text-muted-foreground group-hover:text-foreground transition-colors text-center leading-tight">
                  {logo.name}
                </span>
                <span className="font-mono text-[8px] uppercase tracking-widest text-muted-foreground/40 group-hover:text-primary transition-colors">
                  {logo.tag}
                </span>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
