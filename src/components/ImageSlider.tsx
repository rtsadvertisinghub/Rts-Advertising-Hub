import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import aviation1 from "@/assets/projects/aviation1.jpg";
import aviation2 from "@/assets/projects/aviation2.jpeg";
import aviation3 from "@/assets/projects/aviation3.jpeg";
import aviation4 from "@/assets/projects/aviation4.jpeg";
import faisal1 from "@/assets/image gallery/faisal.png";
import faisal2 from "@/assets/projects/faisal2.jpg";
import billboard1 from "@/assets/projects/billboard1.jpg";
import billboard2 from "@/assets/projects/billboard2.jpg";
import amrooz1 from "@/assets/image gallery/amrooz1.jpeg"
import amrooz2 from "@/assets/image gallery/amrooz2.jpeg"


const slides = [
  {
    image: aviation1,
    title: "Aviation Base Workshop",
    description: "Hangar Renovation i.e Aircraft maintenance working Plate Forms,Portable Workstations,Signage Boards,hangar Floor Marking",
  },
  {
    image: faisal1,
    title: "CDA & KORT (Joint Project)-Faisal Masjid  ",
    description: "Designed and Installed Signage Boards for Disabled Persons,Directional and reflector signboard’s across the Faisal Masjid premises",
  },
  {
    image: billboard1,
    title: "Billboard Rental & Outdoor Adverting",
    description: "Prime location billboards across major cities",
  },
  {
    image: aviation2,
    title: "Signage Solutions",
    description: "LED signs, 3D letters, and directional boards",
  },
  {
    image: faisal2,
    title: "RBS-DHA & Capital Smart City",
    description: "Brandig & Advertising project",
  },
  {
    image: billboard2,
    title: "Outdoor Campaigns",
    description: "Strategic outdoor advertising with maximum visibility",
  },
  {
    image: amrooz1,
    title: "News Paper & Print Media Advertising",
    description: "Provides newspaper advertisement services",
  },
  {
    image: amrooz2,
    title: "Event Branding",
    description: "Creative branding solutions for events and exhibitions",
  },
];

export function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = slides.length - 1;
      if (nextIndex >= slides.length) nextIndex = 0;
      return nextIndex;
    });
  }, []);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(timer);
  }, [paginate]);

  return (
    <section className="section-padding bg-muted/30 overflow-hidden">
      <div className="container-width">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block text-accent font-semibold uppercase tracking-wider text-sm mb-4">
            Our Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Featured <span className="text-gradient-primary">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore our latest work across various sectors
          </p>
        </motion.div>

        {/* Slider */}
        <div className="relative">
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden bg-card shadow-card">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute inset-0"
              >
                <img
                  src={slides[currentIndex].image}
                  alt={slides[currentIndex].title}
                  className="w-full h-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white"
                >
                  <h3 className="text-2xl md:text-4xl font-heading font-bold mb-3">
                    {slides[currentIndex].title}
                  </h3>
                  <p className="text-lg md:text-xl text-white/80 max-w-2xl">
                    {slides[currentIndex].description}
                  </p>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white rounded-full w-12 h-12"
              onClick={() => paginate(-1)}
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white rounded-full w-12 h-12"
              onClick={() => paginate(1)}
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
