import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HERO_IMAGE =
  "https://media.base44.com/images/public/69efaf66bbc04c94531bd0d2/1769cf076_generated_image.png";

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - rect.left) / rect.width - 0.5,
        y: (e.clientY - rect.top) / rect.height - 0.5,
      });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image with parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ x: mousePos.x * -20, y: mousePos.y * -20 }}
      >
        <img
          src={HERO_IMAGE}
          alt="Advantage Intelligence"
          className="w-full h-full object-cover opacity-45 scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
      </motion.div>

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(hsl(0 0% 95%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 95%) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-20">
        <div className="flex flex-col items-start">
          {/* Metadata label */}
          <motion.div
            className="flex items-center gap-3 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
              AI-Powered Business Solutions
            </span>
          </motion.div>

          {/* Main headline */}
          <div className="space-y-2 lg:space-y-3">
            <motion.h1
              className="font-inter text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extralight tracking-tight text-foreground leading-[0.9]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              Your Business.
            </motion.h1>
            <motion.h1
              className="font-inter text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight text-primary leading-[0.9]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.65,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              Amplified.
            </motion.h1>
            <motion.h1
              className="font-inter text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extralight tracking-tight text-secondary leading-[0.9]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              Intelligently.
            </motion.h1>
          </div>

          {/* Subtext + CTA */}
          <motion.div
            className="mt-12 lg:mt-16 flex flex-col sm:flex-row items-start sm:items-end gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <p className="font-inter text-base lg:text-lg text-muted-foreground max-w-lg leading-relaxed font-light">
              From brand identity to enterprise ERP, SaaS platforms to AI-driven
              marketing — Advantage delivers end-to-end transformation across
              every industry.
            </p>
            <a
              href="#contact"
              className="group flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-widest rounded-sm hover:bg-primary/90 transition-all duration-300 shrink-0"
            >
              Get Started
              <ArrowDown className="w-3 h-3 group-hover:translate-y-0.5 transition-transform" />
            </a>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            className="mt-20 lg:mt-28 grid grid-cols-3 gap-8 lg:gap-16 border-t border-border/50 pt-8 w-full max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            {[
              { value: "200+", label: "Projects Delivered" },
              { value: "98%", label: "Client Retention" },
              { value: "12+", label: "Industries Served" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-inter text-2xl lg:text-3xl font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-muted-foreground/50 to-transparent" />
      </motion.div>
    </section>
  );
}
