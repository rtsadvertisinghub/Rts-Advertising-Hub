import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BlogLayoutProps {
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  heroImage: string;
  children: React.ReactNode;
  variant?: "standard" | "fullwidth" | "sidebar" | "magazine" | "minimal" | "card";
}

export function BlogLayout({
  title,
  category,
  date,
  readTime,
  author,
  heroImage,
  children,
  variant = "standard",
}: BlogLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero varies by variant */}
        {variant === "fullwidth" ? (
          <FullWidthHero title={title} category={category} date={date} readTime={readTime} author={author} heroImage={heroImage} />
        ) : variant === "magazine" ? (
          <MagazineHero title={title} category={category} date={date} readTime={readTime} author={author} heroImage={heroImage} />
        ) : variant === "minimal" ? (
          <MinimalHero title={title} category={category} date={date} readTime={readTime} author={author} />
        ) : (
          <StandardHero title={title} category={category} date={date} readTime={readTime} author={author} heroImage={heroImage} />
        )}

        {/* Content */}
        <section className="section-padding">
          <div className={`${variant === "sidebar" ? "container-width grid lg:grid-cols-3 gap-12" : "max-w-4xl mx-auto px-4 sm:px-6"}`}>
            <div className={variant === "sidebar" ? "lg:col-span-2" : ""}>
              {variant === "sidebar" && (
                <img src={heroImage} alt={title} className="w-full rounded-2xl mb-8 object-cover max-h-[400px]" />
              )}
              <article className="prose prose-lg max-w-none text-foreground">
                {children}
              </article>
            </div>
            {variant === "sidebar" && <Sidebar />}
          </div>
        </section>

        {/* Back to Blog */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
          <Button variant="outline" asChild>
            <Link to="/blog">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function StandardHero({ title, category, date, readTime, author, heroImage }: Omit<BlogLayoutProps, "children" | "variant">) {
  return (
    <section className="bg-gradient-hero text-primary-foreground pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Link to="/blog" className="inline-flex items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <span className="block text-accent font-semibold uppercase tracking-wider text-sm mb-3">{category}</span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">{title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-primary-foreground/60">
            <span className="flex items-center gap-1"><User className="w-4 h-4" /> {author}</span>
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {date}</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {readTime}</span>
          </div>
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="max-w-4xl mx-auto px-4 sm:px-6 mt-10">
        <img src={heroImage} alt={title} className="w-full rounded-2xl shadow-hover object-cover max-h-[450px]" />
      </motion.div>
    </section>
  );
}

function FullWidthHero({ title, category, date, readTime, author, heroImage }: Omit<BlogLayoutProps, "children" | "variant">) {
  return (
    <section className="relative min-h-[70vh] flex items-end overflow-hidden">
      <img src={heroImage} alt={title} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="relative z-10 container-width pb-16 pt-32 text-white">
        <Link to="/blog" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>
        <span className="block text-accent font-semibold uppercase tracking-wider text-sm mb-3">{category}</span>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 max-w-3xl">{title}</h1>
        <div className="flex flex-wrap items-center gap-4 text-sm text-white/60">
          <span className="flex items-center gap-1"><User className="w-4 h-4" /> {author}</span>
          <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {date}</span>
          <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {readTime}</span>
        </div>
      </motion.div>
    </section>
  );
}

function MagazineHero({ title, category, date, readTime, author, heroImage }: Omit<BlogLayoutProps, "children" | "variant">) {
  return (
    <section className="bg-muted/30 pt-20 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
            <span className="inline-block text-accent font-semibold uppercase tracking-wider text-sm mb-3 bg-accent/10 px-3 py-1 rounded-full">{category}</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">{title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><User className="w-4 h-4" /> {author}</span>
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {date}</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {readTime}</span>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
            <img src={heroImage} alt={title} className="w-full rounded-2xl shadow-hover object-cover aspect-[4/3]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function MinimalHero({ title, category, date, readTime, author }: Omit<BlogLayoutProps, "children" | "variant" | "heroImage">) {
  return (
    <section className="pt-20 pb-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="inline-block text-accent font-semibold uppercase tracking-wider text-sm mb-4 bg-accent/10 px-4 py-1.5 rounded-full">{category}</span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">{title}</h1>
          <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1"><User className="w-4 h-4" /> {author}</span>
            <span>•</span>
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {date}</span>
            <span>•</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {readTime}</span>
          </div>
          <div className="mt-8 h-px bg-border w-24 mx-auto" />
        </motion.div>
      </div>
    </section>
  );
}

function Sidebar() {
  const relatedPosts = [
    { title: "The Power of Billboard Advertising", slug: "billboard-advertising-pakistan" },
    { title: "Why Signage Matters for Business", slug: "signage-business-identity" },
    { title: "Branding Trends to Watch", slug: "branding-trends-2026" },
  ];

  return (
    <aside className="lg:col-span-1">
      <div className="sticky top-24 space-y-8">
        <div className="bg-card rounded-2xl border border-border p-6 shadow-card">
          <h3 className="font-heading font-bold text-lg text-foreground mb-4">Related Posts</h3>
          <ul className="space-y-3">
            {relatedPosts.map((post) => (
              <li key={post.slug}>
                <Link to={`/blog/${post.slug}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-gradient-primary rounded-2xl p-6 text-primary-foreground text-center">
          <h3 className="font-heading font-bold text-lg mb-2">Need Advertising Help?</h3>
          <p className="text-sm text-primary-foreground/70 mb-4">Get a free consultation from our team.</p>
          <Button variant="accent" size="sm" asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </aside>
  );
}
