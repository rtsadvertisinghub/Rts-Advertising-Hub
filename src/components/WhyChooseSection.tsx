import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Shield, 
  Clock, 
  Award, 
  Sparkles, 
  HeadphonesIcon, 
  Layers 
} from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Proven Experience",
    description: "High-profile defense, government, and private sector projects with national recognition.",
  },
  {
    icon: Layers,
    title: "End-to-End Solutions",
    description: "From concept design to final execution, complete project management.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Premium materials, advanced technology, and skilled workmanship.",
  },
  {
    icon: Sparkles,
    title: "Wide Service Range",
    description: "Signage, branding, renovation, billboards, and newspaper advertising.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "Projects completed on schedule without compromising quality.",
  },
  {
    icon: HeadphonesIcon,
    title: "Client-Centric",
    description: "Customized solutions focused on your specific goals and requirements.",
  },
];

export function WhyChooseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-gradient-dark text-white relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" 
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="container-width relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-accent font-semibold uppercase tracking-wider text-sm mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
            Why RTS{" "}
            <span className="text-accent">Advertising Hub</span>?
          </h2>
          <p className="text-lg text-white/70">
            Our credibility and recognition make us the preferred choice for 
            organizations seeking impactful advertising solutions.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full hover:bg-white/10 transition-all duration-300">
                <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <reason.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-3">
                  {reason.title}
                </h3>
                <p className="text-white/70">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-white/60 mb-4">
            Our projects have been inaugurated by top national leadership
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Media Coverage", "National TV", "Print Media", "Digital Platforms"].map((item) => (
              <span
                key={item}
                className="px-4 py-2 border border-white/20 rounded-full text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
