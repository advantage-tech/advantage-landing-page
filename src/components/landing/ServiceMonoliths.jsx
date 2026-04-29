import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const INTERIOR_IMG =
  "https://media.base44.com/images/public/69efaf66bbc04c94531bd0d2/96a773d0f_generated_image.png";
const FINTECH_IMG =
  "https://media.base44.com/images/public/69efaf66bbc04c94531bd0d2/51b66b580_generated_image.png";
const SAAS_IMG =
  "https://media.base44.com/images/public/69efaf66bbc04c94531bd0d2/1271a0e6c_generated_image.png";
const MEDIA_IMG =
  "https://media.base44.com/images/public/69efaf66bbc04c94531bd0d2/cb89b57f4_generated_image.png";

const services = [
  {
    id: "branding",
    number: "01",
    title: "Strategic Branding",
    subtitle: "Identity Architecture",
    description:
      "We engineer brand identities that resonate across every touchpoint — from visual systems and naming to narrative frameworks that position your business as a category leader. Across hospitality, retail, tech and beyond.",
    capabilities: [
      "Brand Strategy",
      "Visual Identity Design",
      "Brand Guidelines",
      "Naming & Messaging",
      "Brand Audits",
      "Motion & Campaign Assets",
    ],
    image: INTERIOR_IMG,
  },
  {
    id: "erp",
    number: "02",
    title: "Enterprise ERP",
    subtitle: "Operational Intelligence",
    description:
      "Custom ERP solutions that transform complex operational workflows into streamlined, AI-augmented systems. Built for manufacturers, hospitality groups, logistics firms, and multi-location enterprises.",
    capabilities: [
      "Custom ERP Development",
      "System Integration",
      "Process Automation",
      "Data Migration",
      "Analytics Dashboards",
      "Legacy System Modernization",
    ],
    image: FINTECH_IMG,
  },
  {
    id: "saas",
    number: "03",
    title: "SaaS Platforms",
    subtitle: "Scalable Architecture",
    description:
      "Full-stack SaaS product development from concept to market. We build cloud-native platforms engineered for hypergrowth — for FinTech startups, media tools, booking systems, and everything in between.",
    capabilities: [
      "Product Architecture",
      "Cloud Infrastructure",
      "API Development",
      "User Experience Design",
      "Growth Engineering",
      "Ongoing Product Support",
    ],
    image: SAAS_IMG,
  },
  {
    id: "marketing",
    number: "04",
    title: "AI Marketing",
    subtitle: "Performance Systems",
    description:
      "Data-driven marketing ecosystems powered by machine learning. We deploy intelligent campaigns for media houses, hospitality brands, interior firms, and FinTechs — adapting in real-time for maximum ROI.",
    capabilities: [
      "Performance Marketing",
      "SEO & Content Strategy",
      "Marketing Automation",
      "Social Media Management",
      "Analytics & Attribution",
      "Conversion Optimization",
    ],
    image: MEDIA_IMG,
  },
];

function ServiceCard({ service, index, onExpand }) {
  return (
    <ScrollReveal delay={index * 0.15}>
      <motion.div
        className="group relative bg-card border border-border/50 rounded-sm overflow-hidden cursor-pointer"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
        onClick={() => onExpand(service)}
      >
        <div className="relative h-72 lg:h-80 overflow-hidden">
          <motion.img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.7 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
          <div className="absolute top-4 left-4">
            <span className="font-mono text-xs tracking-widest text-muted-foreground">
              {service.number}
            </span>
          </div>
          <div className="absolute top-4 right-4 w-10 h-10 rounded-full border border-border/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-background/30 backdrop-blur-sm">
            <ArrowUpRight className="w-4 h-4 text-foreground" />
          </div>
        </div>

        <div className="p-6 lg:p-8">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-2">
            {service.subtitle}
          </div>
          <h3 className="font-inter text-xl lg:text-2xl font-semibold text-foreground mb-3">
            {service.title}
          </h3>
          <p className="font-inter text-sm text-muted-foreground leading-relaxed line-clamp-2">
            {service.description}
          </p>
        </div>

        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px bg-primary"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.4 }}
          style={{ transformOrigin: "left" }}
        />
      </motion.div>
    </ScrollReveal>
  );
}

function ServiceModal({ service, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 lg:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div
        className="absolute inset-0 bg-background/90 backdrop-blur-xl"
        onClick={onClose}
      />
      <motion.div
        className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-card border border-border/50 rounded-sm"
        initial={{ scale: 0.9, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 30 }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full border border-border/50 flex items-center justify-center bg-background/50 backdrop-blur-sm hover:bg-accent transition-colors"
        >
          <X className="w-4 h-4 text-foreground" />
        </button>

        <div className="relative h-64 lg:h-80">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
        </div>

        <div className="p-8 lg:p-12 -mt-16 relative">
          <div className="font-mono text-xs tracking-[0.3em] text-primary mb-2">
            {service.number} — {service.subtitle}
          </div>
          <h2 className="font-inter text-3xl lg:text-5xl font-bold text-foreground mb-6">
            {service.title}
          </h2>
          <p className="font-inter text-base lg:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-10">
            {service.description}
          </p>

          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Core Capabilities
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.capabilities.map((cap, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 py-3 border-b border-border/30"
                >
                  <div className="w-1 h-1 rounded-full bg-primary" />
                  <span className="font-inter text-sm text-foreground">
                    {cap}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <a
            href="#contact"
            onClick={onClose}
            className="inline-flex items-center gap-3 mt-10 px-8 py-4 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-widest rounded-sm hover:bg-primary/90 transition-all duration-300"
          >
            Start a Project
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ServiceMonoliths() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section id="services" className="relative py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 lg:mb-24">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-4">
                What We Build
              </div>
              <h2 className="font-inter text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Our Core
                <br />
                Services<span className="text-primary">.</span>
              </h2>
            </div>
            <p className="font-inter text-base text-muted-foreground max-w-md mt-6 lg:mt-0 leading-relaxed font-light">
              Four pillars of business transformation — engineered with AI
              precision and delivered across every major industry vertical.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={i}
              onExpand={setExpanded}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {expanded && (
          <ServiceModal service={expanded} onClose={() => setExpanded(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
