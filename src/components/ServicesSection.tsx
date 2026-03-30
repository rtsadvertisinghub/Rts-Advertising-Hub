import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Building2, 
  Megaphone, 
  PenTool, 
  
  Newspaper, 
  Signpost, 
  Home
} from "lucide-react";

const services = [
  {
    icon: Signpost,
    title: "Signage Solutions",
    description: "LED signs, acrylic boards, 3D letters, reflector signage, and directional boards for maximum visibility.",
    color: "from-primary to-secondary",
  },
  {
    icon: Building2,
    title: "Billboard Rental",
    description: "Prime-location billboards available for monthly/annual rental with flex/vinyl printing and installation.",
    color: "from-primary to-primary/70",
  },
 {
    icon: Home, 
    title: "Real Estate Solutions",
    description: "Real Estate Services. Residential & commercial property sale and purchase, investment advisory, project marketing, and complete documentation support with secure and transparent dealings.",
    color: "from-secondary to-primary",
  },
  {
    icon: Megaphone,
    title: "Outdoor Advertising",
    description: "Strategic outdoor campaigns including pole signs, roof boards, and building wraps.",
    color: "from-primary to-secondary",
  },
  {
    icon: PenTool,
    title: "Branding & Design",
    description: "Corporate identity, event branding, promotional materials, and creative design solutions.",
    color: "from-secondary to-primary",
  },
  {
    icon: Newspaper,
    title: "Print Media",
    description: "Newspaper advertising, classified ads, tender notices, and corporate campaigns in national media.",
    color: "from-primary to-primary/70",
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding bg-muted/50" ref={ref}>
      <div className="container-width">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-accent font-semibold uppercase tracking-wider text-sm mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Complete Advertising{" "}
            <span className="text-gradient-accent">Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From signage to billboards, renovation to print media - we provide 
            end-to-end advertising solutions tailored to your needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card rounded-3xl p-8 shadow-card hover:shadow-hover transition-all duration-500 border border-border overflow-hidden"
            >
              {/* Background Gradient on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="font-heading font-bold text-xl text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground">
                {service.description}
              </p>

              {/* Arrow on hover */}
              <div className="mt-6 flex items-center text-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn More
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
