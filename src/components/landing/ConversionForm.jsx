import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Loader2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ScrollReveal from "./ScrollReveal";
import { toast } from "sonner";

const industries = [
  "Hospitality",
  "FinTech",
  "Interior Design",
  "Media & Broadcasting",
  "Retail & E-Commerce",
  "Real Estate",
  "Logistics",
  "Manufacturing",
  "Education",
  "Energy",
  "Other",
];

const services = [
  "Strategic Branding",
  "Enterprise ERP",
  "SaaS Platform",
  "AI Marketing",
  "Full-Stack Transformation",
];

const targets = [
  "Increase Revenue",
  "Reduce Operational Costs",
  "Scale to New Markets",
  "Launch a Product",
  "Modernise Existing Systems",
];

export default function ConversionForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    industry: "",
    service: "",
    target: "",
    details: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.industry ||
      !formData.service
    ) {
      toast.error("Please fill in all required fields");
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
    toast.success("Consultation request submitted!");
  };

  return (
    <section
      id="contact"
      className="relative py-24 lg:py-36 border-t border-border/30"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <ScrollReveal>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-4">
                Begin
              </div>
              <h2 className="font-inter text-4xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Configure Your
                <br />
                Solution<span className="text-primary">.</span>
              </h2>
              <p className="font-inter text-base text-muted-foreground leading-relaxed max-w-md font-light">
                Tell us about your business. Our team will analyse your
                requirements and deliver a strategic roadmap within 48 hours.
              </p>

              <div className="mt-12 space-y-6">
                {[
                  { label: "Response Time", value: "< 48 Hours" },
                  { label: "Initial Consultation", value: "Complimentary" },
                  { label: "NDA Provided", value: "Standard" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between py-3 border-b border-border/30"
                  >
                    <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                      {item.label}
                    </span>
                    <span className="font-inter text-sm font-medium text-foreground">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            {submitted ? (
              <motion.div
                className="flex flex-col items-center justify-center h-full text-center py-16"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <CheckCircle2 className="w-12 h-12 text-primary mb-6" />
                <h3 className="font-inter text-2xl font-semibold text-foreground mb-3">
                  Consultation Initiated
                </h3>
                <p className="font-inter text-sm text-muted-foreground max-w-sm">
                  Our team will analyse your requirements and reach out within
                  48 hours with a strategic proposal tailored to your industry.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-6">
                  // Solution Configuration Terminal
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      Name *
                    </label>
                    <Input
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Your name"
                      className="bg-muted/50 border-border/50 text-foreground placeholder:text-muted-foreground/50 font-inter rounded-sm h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      Email *
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="work@company.com"
                      className="bg-muted/50 border-border/50 text-foreground placeholder:text-muted-foreground/50 font-inter rounded-sm h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    My business is in *
                  </label>
                  <Select
                    value={formData.industry}
                    onValueChange={(v) =>
                      setFormData({ ...formData, industry: v })
                    }
                  >
                    <SelectTrigger className="bg-muted/50 border-border/50 text-foreground font-inter rounded-sm h-12">
                      <SelectValue placeholder="Select your industry" />
                    </SelectTrigger>
                    <SelectContent>
                      {industries.map((ind) => (
                        <SelectItem key={ind} value={ind}>
                          {ind}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    And we need to *
                  </label>
                  <Select
                    value={formData.service}
                    onValueChange={(v) =>
                      setFormData({ ...formData, service: v })
                    }
                  >
                    <SelectTrigger className="bg-muted/50 border-border/50 text-foreground font-inter rounded-sm h-12">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((s) => (
                        <SelectItem key={s} value={s}>
                          {s}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    To achieve
                  </label>
                  <Select
                    value={formData.target}
                    onValueChange={(v) =>
                      setFormData({ ...formData, target: v })
                    }
                  >
                    <SelectTrigger className="bg-muted/50 border-border/50 text-foreground font-inter rounded-sm h-12">
                      <SelectValue placeholder="Select your goal" />
                    </SelectTrigger>
                    <SelectContent>
                      {targets.map((t) => (
                        <SelectItem key={t} value={t}>
                          {t}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    Additional Details
                  </label>
                  <Textarea
                    value={formData.details}
                    onChange={(e) =>
                      setFormData({ ...formData, details: e.target.value })
                    }
                    placeholder="Tell us more about your project..."
                    className="bg-muted/50 border-border/50 text-foreground placeholder:text-muted-foreground/50 font-inter rounded-sm min-h-[100px] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-3 py-4 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-widest rounded-sm hover:bg-primary/90 transition-all duration-300 disabled:opacity-50"
                >
                  {loading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      Submit Configuration <ArrowUpRight className="w-3 h-3" />
                    </>
                  )}
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
