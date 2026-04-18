import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { ServicesSection } from "@/components/ServicesSection";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { CheckCircle, MapPin, Eye, PenTool } from "lucide-react";

const signageTypes = [
  "Neon Signs", "Mall Signage", "Business Signs", "Directional Sign",
  "Stainless Steel", "Acrylic Signages", "Pylon Signages", "Bus Sticker",
  "Sintra Board", "Menu Board", "Stainless Signage", "Hotel Signage",
  "Government Signage", "School Signage", "Company Signage", "Lawfirm Signage",
  "Baranggay Signage", "Signage Installation", "Signage Delivery", "Building Signage",
  "ACP", "Glass Sticker", "Van Wrap", "Wall Murals", "Sticker",
  "Indoor / Outdoor Stickers",
];

const perks = [
  { icon: CheckCircle, text: "Walk-in or Online Inquiry Accepted" },
  { icon: MapPin, text: "We Offer Free Site Visit" },
  { icon: PenTool, text: "Free Design & Free Estimate" },
  { icon: Eye, text: "Free Ocular Inspection" },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Our Services — Signage, Billboards, Print Media & Renovation | RTS Advertising Hub"
        description="Trusted indoor/outdoor signage, billboard advertising, print media aur renovation services. Affordable price, high quality. Complete advertising solutions across Pakistan."
        canonical="https://www.rtsadvertisinghub.com/services"
      />
      <Header />
      <main>
        <ServicesSection />

        {/* Signage Services Detail Section */}
        <section className="section-padding bg-background">
          <div className="container-width">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <span className="inline-block text-accent font-semibold uppercase tracking-wider text-sm mb-4">
                Indoor & Outdoor
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Trusted & Quality{" "}
                <span className="text-gradient-primary">Signage Services</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Affordable price and high quality signage & printing services designed by
                RTS Advertising and Marketing Hub (Private) Limited.
              </p>
            </motion.div>

            {/* Signage Types Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mb-12"
            >
              {signageTypes.map((type, i) => (
                <motion.div
                  key={type}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.03 }}
                  className="flex items-center gap-2 bg-card border border-border rounded-xl px-4 py-3 hover:border-primary/40 hover:shadow-card transition-all duration-300"
                >
                  <span className="text-primary text-lg">📌</span>
                  <span className="text-sm font-medium text-foreground">{type}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Perks */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10"
            >
              {perks.map((perk) => (
                <div
                  key={perk.text}
                  className="flex items-center gap-3 bg-primary/5 border border-primary/10 rounded-2xl p-5"
                >
                  <perk.icon className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-sm font-semibold text-foreground">{perk.text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center"
            >
              <p className="text-muted-foreground mb-6">
                Send us your layout, preferred size, and placement area for a free quotation.
              </p>
              <Button variant="hero" size="lg" asChild>
                <a
                  href={`https://wa.me/923005382657?text=${encodeURIComponent("Hi! I'd like to inquire about your signage services. Please share a quotation.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Free Quotation on WhatsApp
                </a>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
