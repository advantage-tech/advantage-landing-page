import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

const COOKIE_KEY = "advantage_cookie_consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_KEY);
    if (!stored) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(COOKIE_KEY, "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(COOKIE_KEY, "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-md z-[100]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="relative bg-card border border-border/60 rounded-sm p-6 shadow-2xl">
            {/* Close button */}
            <button
              onClick={decline}
              className="absolute top-4 right-4 w-6 h-6 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>

            <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-primary mb-3">
              Cookie Notice
            </div>
            <p className="font-inter text-sm text-foreground font-medium mb-2">
              We use cookies to improve your experience.
            </p>
            <p className="font-inter text-xs text-muted-foreground leading-relaxed mb-5">
              We use essential and analytics cookies to understand how our site
              is used and to improve your experience. See our{" "}
              <Link
                to="/privacy"
                className="text-primary hover:underline underline-offset-2"
              >
                Privacy Policy
              </Link>{" "}
              for details.
            </p>

            <div className="flex items-center gap-3">
              <button
                onClick={accept}
                className="flex-1 py-2.5 bg-primary text-primary-foreground font-mono text-[10px] uppercase tracking-widest rounded-sm hover:bg-primary/90 transition-colors"
              >
                Accept All
              </button>
              <button
                onClick={decline}
                className="flex-1 py-2.5 border border-border/60 text-muted-foreground font-mono text-[10px] uppercase tracking-widest rounded-sm hover:text-foreground hover:border-border transition-colors"
              >
                Decline
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
