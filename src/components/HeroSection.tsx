import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useCallback } from "react";

import slide1 from "@/assets/Hero/hero1.jpeg";
import slide2 from "@/assets/Hero/hero2.jpeg";
import slide3 from "@/assets/Hero/hero3.jpeg";
import slide4 from "@/assets/Hero/hero4.jpg";
import slide5 from "@/assets/image gallery/faisal.png"

const slides = [
  {
    image: slide1,
    subtitle: "Aviation & Defense Projects",
  },
  
  {
    image: slide2,
    subtitle: "Billboard & Outdoor Advertising",
  },
  {
    image: slide3,
    subtitle: "Branding & Corporate Identity",
  },
  {
    image: slide4,
    subtitle: "Large-Scale Installations",
  },
  {
    image: slide5,
    subtitle: "Landmark Projects Across Pakistan",
  },
];

export function HeroSection() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Sliding Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt={slides[current].subtitle}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

      {/* Content */}
      <div className="container-width relative z-10">
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
          >
            <Star className="w-4 h-4 text-accent fill-accent" />
            <span className="text-sm font-medium text-white">Trusted by Government & Private Sector</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-4 text-white"
          >
            RTS
            <span className="block text-white">(Real Tagline Solution)</span>
          </motion.h1>

          {/* Animated subtitle from slide */}
          <AnimatePresence mode="wait">
            <motion.p
              key={current}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
              className="text-lg md:text-xl text-white font-semibold mb-2"
            >
              {slides[current].subtitle}
            </motion.p>
          </AnimatePresence>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-base md:text-lg text-white/70 mb-8 max-w-xl"
          >
            Professional advertising and renovation service provider specializing in
            large-scale government, defense, and private sector projects across Pakistan.
          </motion.p>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mb-10">
            {[
              { value: "50+", label: "Projects Completed" },
              { value: "6+", label: "Years Experience" },
              { value: "100%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                <p className="text-3xl md:text-4xl font-heading font-bold text-white">{stat.value}</p>
                <p className="text-sm text-white/60">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap gap-4"
          >
            <Button variant="accent" size="xl" asChild>
              <Link to="/projects">
                View Our Work
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/about">
                <Play className="mr-2 w-5 h-5" />
                Learn More
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Slide Controls */}
      <div className="absolute bottom-24 md:bottom-16 right-8 md:right-16 z-10 flex items-center gap-3">
        <button
          onClick={prev}
          className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? "w-8 bg-accent" : "w-2 bg-white/40"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full">
          <defs>
            <linearGradient id="waveGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="hsl(var(--primary))" />
              <stop offset="100%" stopColor="hsl(var(--accent))" />
            </linearGradient>
          </defs>
          <path
            d="M0 120V60C240 20 480 0 720 0s480 20 720 60v60H0z"
            fill="url(#waveGradient)"
          />
        </svg>
      </div>
    </section>
  );
}
