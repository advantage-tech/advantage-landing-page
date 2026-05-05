import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
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
import { base44 } from "@/api/base44Client";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

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

export default function ContactSection() {
  const [sent, setSent] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = async (data) => {
    await base44.integrations.Core.SendEmail({
      to: "info@advantageng.com",
      subject: `New Contact Message from ${data.name}`,
      body: `
Name: ${data.name}
Email: ${data.email}

Message:
${data.message}
      `.trim(),
    });

    // Auto-reply to the sender
    await base44.integrations.Core.SendEmail({
      to: data.email,
      from_name: "Advantage",
      subject: "We received your message",
      body: `Hi ${data.name},\n\nThank you for reaching out to Advantage. A member of our team will respond to your message within 24 hours.\n\nBest regards,\nThe Advantage Team`,
    });

    setSent(true);
    toast.success("Message sent! We'll be in touch within 24 hours.");
  };

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
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5"
                noValidate
              >
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    Your Name
                  </label>
                  <Input
                    {...register("name")}
                    placeholder="Full name"
                    className={`bg-muted/50 border-border/50 rounded-sm h-12 font-inter placeholder:text-muted-foreground/40 ${errors.name ? "border-destructive focus-visible:ring-destructive" : ""}`}
                  />
                  {errors.name && (
                    <p className="font-inter text-xs text-destructive">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    Email Address
                  </label>
                  <Input
                    {...register("email")}
                    type="email"
                    placeholder="work@company.com"
                    className={`bg-muted/50 border-border/50 rounded-sm h-12 font-inter placeholder:text-muted-foreground/40 ${errors.email ? "border-destructive focus-visible:ring-destructive" : ""}`}
                  />
                  {errors.email && (
                    <p className="font-inter text-xs text-destructive">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    Your Message
                  </label>
                  <Textarea
                    {...register("message")}
                    placeholder="Tell us what's on your mind..."
                    className={`bg-muted/50 border-border/50 rounded-sm min-h-[140px] resize-none font-inter placeholder:text-muted-foreground/40 ${errors.message ? "border-destructive focus-visible:ring-destructive" : ""}`}
                  />
                  {errors.message && (
                    <p className="font-inter text-xs text-destructive">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-3 py-4 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-widest rounded-sm hover:bg-primary/90 transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? (
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
