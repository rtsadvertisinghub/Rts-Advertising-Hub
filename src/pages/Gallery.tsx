import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Search } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/ui/input";

import page1 from "@/assets/portfolio/page1.jpeg";
import page2 from "@/assets/portfolio/page2.jpg";
import page3 from "@/assets/portfolio/page3.jpg";
import page4 from "@/assets/portfolio/page4.jpg";
import page5 from "@/assets/portfolio/page5.jpg";
import page6 from "@/assets/portfolio/page6.jpg";
import aviation1 from "@/assets/projects/aviation1.jpg";
import aviation2 from "@/assets/projects/aviation2.jpeg";
import aviation3 from "@/assets/projects/aviation3.jpeg";
import aviation4 from "@/assets/projects/aviation4.jpeg";
import billboard1 from "@/assets/projects/billboard1.jpg";
import billboard2 from "@/assets/projects/billboard2.jpg";
import brand1 from "@/assets/projects/brand1.jpg";
import brand2 from "@/assets/projects/brand2.png";
import faisal1 from "@/assets/projects/faisal1.jpg";
import faisal2 from "@/assets/projects/faisal2.jpg";
import faisal3 from "@/assets/projects/faisal3.jpg";
import faisal4 from "@/assets/projects/faisal4.jpg";
import panaflex1 from "@/assets/projects/panaflex1.jpg";
import signageMidnight from "@/assets/projects/signage-midnight.jpg";
import lettersMaking from "@/assets/projects/letters-making.jpg";
import acrylicCutting from "@/assets/projects/acrylic-cutting.jpg";
import wallArt from "@/assets/projects/wall-art.jpg";
import threeDLetters from "@/assets/projects/3d-letters.jpg";

const allImages = [
  { src: page1, title: "503 Aviation Base Workshop", category: "Defense" },
  { src: page2, title: "Hangar Systems & Signage", category: "Defense" },
  { src: page3, title: "Faisal Masjid Signage", category: "Government" },
  { src: page4, title: "Billboard Network", category: "Outdoor" },
  { src: page5, title: "Brand Campaigns", category: "Branding" },
  { src: page6, title: "Portfolio Showcase", category: "Branding" },
  { src: aviation1, title: "PAF Aviation City", category: "Defense" },
  { src: aviation2, title: "Aviation Signage", category: "Defense" },
  { src: aviation3, title: "Aviation Facility", category: "Defense" },
  { src: billboard1, title: "Billboard Advertising", category: "Outdoor" },
  { src: billboard2, title: "Outdoor Campaign", category: "Outdoor" },
  { src: brand1, title: "Brand Identity", category: "Branding" },
  { src: brand2, title: "Corporate Branding", category: "Branding" },
  { src: faisal1, title: "Faisal Masjid Accessibility", category: "Government" },
  { src: faisal2, title: "Faisal Masjid Interior", category: "Government" },
  { src: faisal3, title: "Faisal Masjid Signage", category: "Government" },
  { src: faisal4, title: "Faisal Masjid Facility Signs", category: "Government" },
  { src: panaflex1, title: "Panaflex Billboard", category: "Outdoor" },
  { src: signageMidnight, title: "Midnight Signage Work", category: "Branding" },
  { src: lettersMaking, title: "3D Letters Manufacturing", category: "Branding" },
  { src: acrylicCutting, title: "Acrylic Laser Cutting", category: "Branding" },
  { src: wallArt, title: "Wall Art & Branding", category: "Branding" },
  { src: threeDLetters, title: "3D LED Letters", category: "Defense" },
];

const categories = ["All", ...Array.from(new Set(allImages.map((img) => img.category)))];

const OurWork = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filtered = useMemo(() => {
    let result = activeCategory === "All"
      ? allImages
      : allImages.filter((img) => img.category === activeCategory);
    
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (img) =>
          img.title.toLowerCase().includes(query) ||
          img.category.toLowerCase().includes(query)
      );
    }
    return result;
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pb-16">
        <div className="container-width">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="inline-block text-accent font-semibold uppercase tracking-wider text-sm mb-4">
              Portfolio
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
              Our <span className="text-gradient-primary">Work</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore our projects and see the quality we deliver
            </p>
          </motion.div>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-muted text-muted-foreground hover:bg-muted-foreground/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((img, index) => (
                <motion.div
                  key={img.src}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  className="relative group cursor-pointer rounded-2xl overflow-hidden aspect-square shadow-card"
                  onClick={() => setSelectedImage(index)}
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/50 transition-all duration-300 flex items-end">
                    <div className="p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white font-heading font-bold text-sm">{img.title}</p>
                      <span className="text-white/70 text-xs">{img.category}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/80 hover:text-white z-50"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              key={filtered[selectedImage].src}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              src={filtered[selectedImage].src}
              alt={filtered[selectedImage].title}
              className="max-w-full max-h-[85vh] object-contain rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-8 text-center text-white">
              <p className="font-heading font-bold text-lg">{filtered[selectedImage].title}</p>
              <span className="text-white/60 text-sm">{filtered[selectedImage].category}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default OurWork;
