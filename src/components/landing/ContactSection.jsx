import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Loader2,
  CheckCircle2,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ScrollReveal from "./ScrollReveal";
import { toast } from "sonner";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1400));
    setLoading(false);
    setSent(true);
    toast.success("Message sent! We'll be in touch within 24 hours.");
  };

  const contactInfo = [
    { icon: Mail, label: "Email Us", value: "info@advantageng.com" },
    { icon: Phone, label: "Call Us", value: "+234 905 536 6549" },
    {
      icon: MapPin,
      label: "Headquarters",
      value:
        "Plot 430, Ali Muhammad Zara Street, Central Business District, FCT Abuja",
    },
  ];

  return (
    <section
      id="reach-out"
      className="relative py-24 lg:py-36 border-t border-border/30"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-16 lg:mb-20">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-4">
              Direct Line
            </div>
            <h2 className="font-inter text-4xl lg:text-6xl font-bold text-foreground leading-tight">
              Let's Talk<span className="text-primary">.</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left: contact info */}
          <ScrollReveal>
            <p className="font-inter text-base text-muted-foreground leading-relaxed mb-12 font-light max-w-md">
              Have a question? Not ready for a full brief yet? That's fine. Drop
              us a message and a real person from our team will respond — no
              auto-responders, no BDRs.
            </p>

            <div className="space-y-6">
              {contactInfo.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-start gap-4 py-5 border-b border-border/30"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      {label}
                    </div>
                    <div className="font-inter text-base text-foreground mt-0.5">
                      {value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Right: simple form */}
          <ScrollReveal delay={0.2}>
            {sent ? (
              <motion.div
                className="flex flex-col items-center justify-center h-full text-center py-16"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <CheckCircle2 className="w-10 h-10 text-primary mb-5" />
                <h3 className="font-inter text-2xl font-semibold text-foreground mb-2">
                  Message Received
                </h3>
                <p className="font-inter text-sm text-muted-foreground max-w-xs">
                  Someone from our team will reach out within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    Your Name
                  </label>
                  <Input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Full name"
                    className="bg-muted/50 border-border/50 rounded-sm h-12 font-inter placeholder:text-muted-foreground/40"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    placeholder="work@company.com"
                    className="bg-muted/50 border-border/50 rounded-sm h-12 font-inter placeholder:text-muted-foreground/40"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    Your Message
                  </label>
                  <Textarea
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    placeholder="Tell us what's on your mind..."
                    className="bg-muted/50 border-border/50 rounded-sm min-h-[140px] resize-none font-inter placeholder:text-muted-foreground/40"
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
                      Send Message <ArrowUpRight className="w-3 h-3" />
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
