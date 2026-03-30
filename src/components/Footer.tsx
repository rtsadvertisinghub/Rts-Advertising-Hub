import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Twitter, ArrowUp, MapPin, Phone, Mail } from "lucide-react";
import logoWhite from "@/assets/logo-white.png";

const footerLinks = {
  services: [
    { name: "Signage Solutions", href: "/services" },
    { name: "Billboard Rental", href: "/services" },
    { name: "Renovation Works", href: "/services" },
    { name: "Print Media", href: "/services" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Projects", href: "/projects" },
    { name: "Why Choose Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-dark text-white">
      {/* Main Footer */}
      <div className="container-width py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src={logoWhite} alt="Advertising Hub" className="h-12 w-auto object-contain" />
              <div>
                <h2 className="font-heading font-bold text-2xl tracking-wide">Advertising <span className="text-accent">Hub</span></h2>
              </div>
            </Link>
            <p className="text-white/70 max-w-md mb-6">
              Professional advertising and renovation service provider specializing in 
              large-scale government, defense, and private sector projects across Pakistan.
            </p>
            <p className="text-accent font-semibold italic">
              "Creatively Driven, Digitally Focused"
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Map & Contact Info */}
        <div className="mt-12 pt-10 border-t border-white/10">
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.5!2d73.0479!3d33.5651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDMzJzU0LjQiTiA3M8KwMDInNTIuNCJF!5e0!3m2!1sen!2spk!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "220px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="RTS Advertising Hub Location - Iqbal Plaza, Chakri Road, Rawalpindi"
              />
            </div>

            {/* Contact Details */}
            <div className="space-y-5">
              <h3 className="font-heading font-bold text-lg">Get In Touch</h3>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <p className="text-white/70">Office No. 1, First Floor, Iqbal Plaza, Chakri Road, Rawalpindi, Pakistan</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <div className="text-white/70">
                  <a href="tel:0300-5382657" className="hover:text-accent transition-colors">0300-5382657</a>
                  <span className="mx-2">|</span>
                  <a href="tel:0301-5499024" className="hover:text-accent transition-colors">0301-5499024</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="mailto:rts.advertisinghub@gmail.com" className="text-white/70 hover:text-accent transition-colors">rts.advertisinghub@gmail.com</a>
              </div>
              <a
                href="https://maps.google.com/?q=Iqbal+Plaza+Chakri+Road+Rawalpindi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-2 px-5 py-2.5 bg-accent text-accent-foreground rounded-xl font-medium hover:opacity-90 transition-opacity"
              >
                <MapPin className="w-4 h-4" />
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-width py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm text-center md:text-left">
              © {new Date().getFullYear()} RTS Advertising and Marketing Hub (Private) Limited. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>

            {/* Scroll to Top */}
            <motion.button
              onClick={scrollToTop}
              className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center hover:scale-110 transition-transform shadow-glow"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUp size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
