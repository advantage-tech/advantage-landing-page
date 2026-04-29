import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const SAAS_IMG =
  "https://media.base44.com/images/public/69efaf66bbc04c94531bd0d2/1271a0e6c_generated_image.png";
const BRAND_IMG =
  "https://media.base44.com/images/public/69efaf66bbc04c94531bd0d2/a73cd91ec_generated_image.png";
const ERP_IMG =
  "https://media.base44.com/images/public/69efaf66bbc04c94531bd0d2/51b66b580_generated_image.png";
const MARKETING_IMG =
  "https://media.base44.com/images/public/69efaf66bbc04c94531bd0d2/4258bc162_generated_image.png";
const HOSPITALITY_IMG =
  "https://media.base44.com/images/public/69efaf66bbc04c94531bd0d2/c6ccd7909_generated_image.png";
const INTERIOR_IMG =
  "https://media.base44.com/images/public/69efaf66bbc04c94531bd0d2/96a773d0f_generated_image.png";

const projects = [
  {
    id: 1,
    title: "ClearFund Platform",
    client: "ClearFund",
    type: "SaaS Platform",
    tag: "saas",
    year: "2025",
    image: SAAS_IMG,
    size: "large",
    description:
      "End-to-end FinTech SaaS for consumer lending — built to scale from 0 to 500k users in under 12 months.",
  },
  {
    id: 2,
    title: "Studio FORM Identity",
    client: "Studio FORM",
    type: "Brand Identity",
    tag: "branding",
    year: "2024",
    image: BRAND_IMG,
    size: "small",
    description:
      "Premium visual identity for a luxury interior design firm entering the GCC market.",
  },
  {
    id: 3,
    title: "Meridian ERP Suite",
    client: "Meridian Group",
    type: "Enterprise ERP",
    tag: "erp",
    year: "2025",
    image: ERP_IMG,
    size: "small",
    description:
      "Unified operational ERP across procurement, HR, and finance for a regional conglomerate.",
  },
  {
    id: 4,
    title: "PrimeMedia Campaign AI",
    client: "PrimeMedia Group",
    type: "AI Marketing",
    tag: "marketing",
    year: "2025",
    image: MARKETING_IMG,
    size: "medium",
    description:
      "AI-driven media buying and audience targeting system delivering 3× ROAS improvement.",
  },
  {
    id: 5,
    title: "Ivory Suites Experience",
    client: "Ivory Suites Hotels",
    type: "Brand Identity",
    tag: "branding",
    year: "2025",
    image: HOSPITALITY_IMG,
    size: "medium",
    description:
      "Full brand refresh and digital presence overhaul for a 5-star hospitality group across 4 cities.",
  },
  {
    id: 6,
    title: "Arcline Interior OS",
    client: "Arcline Homes",
    type: "Enterprise ERP",
    tag: "erp",
    year: "2026",
    image: INTERIOR_IMG,
    size: "small",
    description:
      "Custom project management and client portal ERP tailored for high-end interior design studios.",
  },
];

const filters = ["All", "SaaS", "ERP", "Branding", "Marketing"];

function ProjectCard({ project, delay = 0 }) {
  const isLarge = project.size === "large";

  return (
    <ScrollReveal delay={delay} className={isLarge ? "md:col-span-2" : ""}>
      <motion.div
        className="group relative bg-card border border-border/30 rounded-sm overflow-hidden cursor-pointer h-full"
        whileHover={{ y: -3 }}
        transition={{ duration: 0.3 }}
      >
        <div
          className={`relative overflow-hidden ${isLarge ? "h-72 lg:h-96" : "h-52 lg:h-64"}`}
        >
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700"
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.7 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />

          <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
            <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground bg-background/60 backdrop-blur-sm px-2 py-1 rounded-sm">
              {project.type}
            </span>
            <span className="font-mono text-[9px] text-muted-foreground bg-background/60 backdrop-blur-sm px-2 py-1 rounded-sm">
              {project.year}
            </span>
          </div>

          <div className="absolute top-4 right-4 w-9 h-9 rounded-full border border-border/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-background/40 backdrop-blur-sm">
            <ArrowUpRight className="w-3.5 h-3.5 text-foreground" />
          </div>
        </div>

        <div className="p-5 lg:p-6">
          <div className="font-mono text-[9px] uppercase tracking-widest text-primary mb-1">
            {project.client}
          </div>
          <h3 className="font-inter text-base lg:text-lg font-semibold text-foreground mb-1.5">
            {project.title}
          </h3>
          <p className="font-inter text-xs text-muted-foreground leading-relaxed">
            {project.description}
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

export default function ProjectGrid() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (p) =>
            p.type.toLowerCase().includes(activeFilter.toLowerCase()) ||
            p.tag.toLowerCase() === activeFilter.toLowerCase(),
        );

  return (
    <section
      id="work"
      className="relative py-24 lg:py-36 border-t border-border/30"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 lg:mb-16">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-4">
                Our Work
              </div>
              <h2 className="font-inter text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Selected
                <br />
                Projects<span className="text-primary">.</span>
              </h2>
            </div>
            <p className="font-inter text-base text-muted-foreground max-w-sm mt-6 lg:mt-0 leading-relaxed font-light">
              Spanning hospitality, interior design, media, FinTech, and
              enterprise — a curated snapshot of our best work.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex items-center gap-2 flex-wrap mb-10 lg:mb-14">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`font-mono text-[10px] uppercase tracking-widest px-4 py-2 rounded-sm border transition-all duration-300 ${
                  activeFilter === filter
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border/40 text-muted-foreground hover:border-border hover:text-foreground"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                delay={i * 0.07}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
