import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import tashveenImg from "../assets/owners/tashveen-hayat.jpeg";
import rajabImg from "../assets/owners/rajab-ali-raja.jpeg";
import riffatImg from "../assets/owners/riffat-hussain .png";

const owners = [
  {
    name: "Tashveen Hayat",
    role: "Managing Director",
    phone: "+92 300 5382657",
    whatsapp: "923005382657",
    image: tashveenImg,
  },
  {
    name: "Rajab Ali Raja",
    role: " Executive Director",
    phone: "+92 312 5499024",
    whatsapp: "923125499024",
    image: rajabImg,
  },
  {
    name: "Riffat Nadeem",
    role: "HR (Human Resource)",
    phone: "+92 332 5016109",
    whatsapp: "923325016109",
    image: riffatImg,
  },
];

export function OwnersSection() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-block text-accent font-semibold uppercase tracking-wider text-sm mb-4">
            Leadership
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Meet Our <span className="text-gradient-primary">Founders</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {owners.map((owner, i) => (
            <motion.div
              key={owner.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group relative bg-card border border-border rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={owner.image}
                  alt={owner.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
                {/* Name overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-xl font-heading font-bold text-white">
                    {owner.name}
                  </h3>
                  <p className="text-white/80 text-sm font-medium">{owner.role}</p>
                </div>
              </div>

              {/* Contact */}
              <div className="p-5 flex items-center justify-between">
                <a
                  href={`tel:${owner.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {owner.phone}
                </a>
                <a
                  href={`https://wa.me/${owner.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-[#25D366] text-white text-xs font-semibold px-3 py-1.5 rounded-full hover:bg-[#1fba59] transition-colors"
                >
                  <svg viewBox="0 0 32 32" className="w-3.5 h-3.5 fill-white">
                    <path d="M16.003 3.2C8.877 3.2 3.084 8.993 3.084 16.12c0 2.274.595 4.494 1.725 6.453L3.2 28.8l6.45-1.693a12.88 12.88 0 006.353 1.713c7.127 0 12.92-5.793 12.92-12.92S23.13 3.2 16.003 3.2z" />
                  </svg>
                  WhatsApp
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
