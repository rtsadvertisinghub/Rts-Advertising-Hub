import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Heart, Lightbulb, Users, Shield, TrendingUp, HandHeart } from "lucide-react";

const coreValues = [
  {
    icon: Shield,
    title: "Integrity & Transparency",
    description: "We believe in honest communication, clear commitments, and ethical practices with our clients, partners, and team.",
  },
  {
    icon: Lightbulb,
    title: "Creativity with Purpose",
    description: "Design and ideas are not just visuals for us—they are tools to solve problems, build trust, and create impact.",
  },
  {
    icon: Users,
    title: "Client‑First Mindset",
    description: "Every brand is treated as our own. We listen deeply, understand business goals, and offer solutions—not shortcuts.",
  },
  {
    icon: Target,
    title: "Accountability & Ownership",
    description: "We take full responsibility for our work, timelines, and results. Success and failure—both belong to us.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Growth",
    description: "We believe in learning, adapting, and evolving with changing media, technology, and market behavior.",
  },
  {
    icon: HandHeart,
    title: "Social Responsibility",
    description: "We value meaningful contribution to society by supporting ethical causes, awareness campaigns, and community‑focused initiatives.",
  },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="container-width">
        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-card p-8 md:p-10 rounded-2xl shadow-card border border-border relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary"></div>
            <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-primary-foreground" />
            </div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
              Our <span className="text-gradient-primary">Mission</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              To empower brands through strategic, creative, and result‑driven advertising solutions. 
              We aim to help businesses grow by delivering honest marketing, impactful storytelling, 
              and smart media execution that connects brands with the right audience at the right time.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card p-8 md:p-10 rounded-2xl shadow-card border border-border relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-accent"></div>
            <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-primary-foreground" />
            </div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
              Our <span className="text-gradient-accent">Vision</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              To become a trusted and innovative advertising & marketing hub in Pakistan, recognized 
              for creativity, integrity, and measurable results—where brands don't just get visibility, 
              but real business growth.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="inline-block text-accent-foreground font-semibold uppercase tracking-wider text-sm mb-4 px-4 py-2 bg-muted/20 rounded-full">
              Our Core Values
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
              What <span className="text-gradient-primary">Drives Us</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              RTS stands for <strong className="text-foreground">Real Tagline Solution</strong> — where strategy meets creativity and results speak louder than promises.
            </p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreValues.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="group bg-card p-6 rounded-2xl shadow-card hover:shadow-hover transition-all duration-300 border border-border"
            >
              <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
