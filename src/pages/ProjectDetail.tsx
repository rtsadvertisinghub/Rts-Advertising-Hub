import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowLeft, MapPin, Calendar, User, CheckCircle } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);
  const [activeImage, setActiveImage] = useState(0);

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="section-padding text-center">
          <h1 className="text-3xl font-heading font-bold text-foreground mb-4">Project Not Found</h1>
          <Button asChild><Link to="/projects">Back to Projects</Link></Button>
        </main>
        <Footer />
      </div>
    );
  }

  const nextImage = () => setActiveImage((prev) => (prev + 1) % project.images.length);
  const prevImage = () => setActiveImage((prev) => (prev - 1 + project.images.length) % project.images.length);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`${project.title} — ${project.subtitle} | RTS Advertising Hub`}
        description={project.description}
        canonical={`https://www.rtsadvertisinghub.com/projects/${project.slug}`}
      />
      <Header />
      <main className="py-12 md:py-20">
        <div className="container-width">
          {/* Back Button */}
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-hover mb-4 aspect-[4/3] bg-muted">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeImage}
                    src={project.images[activeImage]}
                    alt={`${project.title} - Image ${activeImage + 1}`}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </AnimatePresence>

                {/* Navigation Arrows */}
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}

                {/* Image Counter */}
                <div className="absolute bottom-3 right-3 bg-black/60 text-white text-sm px-3 py-1 rounded-full">
                  {activeImage + 1} / {project.images.length}
                </div>

                {/* Highlight Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-accent text-accent-foreground px-4 py-1.5 rounded-full text-sm font-semibold">
                    {project.highlight}
                  </span>
                </div>
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-4 gap-2">
                {project.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`rounded-lg overflow-hidden aspect-video transition-all duration-200 ${
                      activeImage === i
                        ? "ring-3 ring-primary scale-[1.02]"
                        : "opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img src={img} alt={`Thumbnail ${i + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Project Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
                {project.title}
              </h1>
              <p className="text-primary font-semibold text-lg mb-4">{project.subtitle}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-8">{project.fullDescription}</p>

              {/* Meta Info */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center gap-3 bg-card rounded-xl border border-border p-4">
                  <User className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground">Client</p>
                    <p className="text-sm font-semibold text-foreground">{project.client}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-card rounded-xl border border-border p-4">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground">Location</p>
                    <p className="text-sm font-semibold text-foreground">{project.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-card rounded-xl border border-border p-4">
                  <Calendar className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground">Year</p>
                    <p className="text-sm font-semibold text-foreground">{project.year}</p>
                  </div>
                </div>
              </div>

              {/* Scope of Work */}
              <div className="bg-card rounded-2xl border border-border p-6">
                <h3 className="font-heading font-bold text-lg text-foreground mb-4">Scope of Work</h3>
                <ul className="space-y-3">
                  {project.scopeOfWork.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="mt-8">
                <Button variant="hero" size="lg" asChild>
                  <a
                    href={`https://wa.me/923005382657?text=${encodeURIComponent(`Hi! I want to inquire about a project similar to: ${project.title}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Inquire About Similar Project
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
