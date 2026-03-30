import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const nextProject = () => setActiveIndex((prev) => (prev + 1) % projects.length);
  const prevProject = () => setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section id="projects" className="section-padding bg-background overflow-hidden" ref={ref}>
      <div className="container-width">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-accent font-semibold uppercase tracking-wider text-sm mb-4">
            Our Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Featured{" "}
            <span className="text-gradient-primary">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore our high-profile projects executed for government, defense, 
            and private sector clients across Pakistan.
          </p>
        </motion.div>

        {/* Featured Project Showcase */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-8 items-center"
          >
            {/* Project Image — Clickable */}
            <Link
              to={`/projects/${projects[activeIndex].slug}`}
              className="relative group overflow-hidden rounded-3xl shadow-hover block"
            >
              <motion.img
                key={activeIndex}
                src={projects[activeIndex].image}
                alt={projects[activeIndex].title}
                className="w-full aspect-[4/3] object-cover object-top group-hover:scale-105 transition-transform duration-500"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
              
              {/* Highlight Badge */}
              <div className="absolute top-6 left-6">
                <span className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold">
                  {projects[activeIndex].highlight}
                </span>
              </div>

              {/* View Project overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-primary text-white px-6 py-3 rounded-xl font-semibold shadow-lg">
                  View Project →
                </span>
              </div>
            </Link>

            {/* Project Info */}
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:pl-8"
            >
              <Link to={`/projects/${projects[activeIndex].slug}`} className="hover:text-primary transition-colors">
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-2">
                  {projects[activeIndex].title}
                </h3>
              </Link>
              <p className="text-accent font-semibold mb-4">
                {projects[activeIndex].subtitle}
              </p>
              <p className="text-muted-foreground mb-4">
                {projects[activeIndex].description}
              </p>

              {/* Image count hint */}
              <p className="text-sm text-primary font-medium mb-4">
                📸 {projects[activeIndex].images.length} Photos Available
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {projects[activeIndex].tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Navigation */}
              <div className="flex items-center gap-4">
                <Button variant="outline" size="icon" onClick={prevProject} className="rounded-full">
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <span className="text-muted-foreground font-medium">
                  {activeIndex + 1} / {projects.length}
                </span>
                <Button variant="outline" size="icon" onClick={nextProject} className="rounded-full">
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </motion.div>
          </motion.div>

          {/* Project Thumbnails */}
          <div className="mt-12 grid grid-cols-3 sm:grid-cols-5 gap-3 sm:gap-4">
            {projects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => setActiveIndex(index)}
                className={`relative rounded-xl overflow-hidden aspect-video transition-all duration-300 ${
                  activeIndex === index
                    ? "ring-4 ring-primary scale-105"
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
