import { useEffect } from "react";
import { motion } from "framer-motion";

export function TestimonialsSection() {
  useEffect(() => {
    // Elfsight platform script ko load karne ke liye
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup: Jab user kisi aur page par jaye to script remove ho jaye
      const existingScript = document.querySelector('script[src="https://elfsightcdn.com/platform.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <section className="section-padding bg-background py-16">
      <div className="container-width">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-block text-accent font-semibold uppercase tracking-wider text-sm mb-3">
            Client Reviews
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Trusted by <span className="text-gradient-primary">Our Customers</span>
          </h2>
        </motion.div>

        {/* Elfsight Widget Container */}
        <div className="rounded-xl overflow-hidden border border-border bg-card shadow-sm min-h-[300px]">
          {/* Nayi Widget ID yahan integrate kar di gayi hai */}
          <div 
            className="elfsight-app-1cd93f19-c7a0-4baf-b1d1-2afca2db713f" 
            data-elfsight-app-lazy
          ></div>
        </div>

        {/* Support Link */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Are you a client? 
            <a 
              href="https://search.google.com/local/writereview?placeid=ChIJ3_MUDYST3zgRG2JTgR-T4fY" 
              target="_blank" 
              rel="noopener noreferrer"
              className="ml-1 text-blue-500 hover:underline font-medium"
            >
              Share your experience on Google
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}