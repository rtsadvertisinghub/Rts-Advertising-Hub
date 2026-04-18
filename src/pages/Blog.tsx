import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import billboardImg from "@/assets/blog/billboard-advertising.jpg";
import signageImg from "@/assets/blog/signage-business.jpg";
import renovationImg from "@/assets/blog/renovation-branding.jpg";
import printImg from "@/assets/blog/print-media.jpg";
import govImg from "@/assets/blog/government-projects.jpg";
import brandingImg from "@/assets/blog/branding-trends.jpg";

const blogPosts = [
  {
    id: 1,
    title: "The Power of Billboard Advertising in Pakistan",
    excerpt: "Discover how strategically placed billboards can transform your brand visibility and reach millions of potential customers across major cities.",
    date: "Feb 5, 2026",
    readTime: "5 min read",
    category: "Outdoor Advertising",
    slug: "billboard-advertising-pakistan",
    image: billboardImg,
  },
  {
    id: 2,
    title: "Why Signage Matters for Your Business Identity",
    excerpt: "From LED signs to 3D letters, learn how professional signage creates lasting first impressions and builds brand recognition.",
    date: "Jan 28, 2026",
    readTime: "4 min read",
    category: "Signage",
    slug: "signage-business-identity",
    image: signageImg,
  },
  {
    id: 3,
    title: "Complete Guide to Renovation & Facility Branding",
    excerpt: "How renovation projects combined with strategic branding can elevate your workspace and strengthen your corporate identity.",
    date: "Jan 15, 2026",
    readTime: "6 min read",
    category: "Renovation",
    slug: "renovation-facility-branding",
    image: renovationImg,
  },
  {
    id: 4,
    title: "Print Media Advertising: Still Relevant in 2026?",
    excerpt: "Newspaper ads, tender notices, and classified campaigns still drive results. Here's how to maximize your print media ROI.",
    date: "Jan 5, 2026",
    readTime: "4 min read",
    category: "Print Media",
    slug: "print-media-advertising",
    image: printImg,
  },
  {
    id: 5,
    title: "How Government Projects Shape Advertising Standards",
    excerpt: "A look at how defense and government sector projects demand the highest quality standards and what that means for the industry.",
    date: "Dec 20, 2025",
    readTime: "7 min read",
    category: "Industry Insights",
    slug: "government-projects-standards",
    image: govImg,
  },
  {
    id: 6,
    title: "Branding Trends to Watch This Year",
    excerpt: "From minimalist logos to immersive brand experiences, explore the trends shaping how businesses connect with their audience.",
    date: "Dec 10, 2025",
    readTime: "5 min read",
    category: "Branding",
    slug: "branding-trends-2026",
    image: brandingImg,
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Blog — Advertising Insights & Industry Updates | RTS Advertising Hub"
        description="Advertising industry ke latest trends, tips aur project highlights. Billboard, signage, print media aur branding ke expert insights."
        canonical="https://www.rtsadvertisinghub.com/blog"
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-hero text-primary-foreground py-20 md:py-28">
          <div className="container-width text-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block text-accent font-semibold uppercase tracking-wider text-sm mb-4"
            >
              Our Blog
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4"
            >
              Insights & <span className="text-accent">Updates</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-primary-foreground/70 max-w-2xl mx-auto text-lg"
            >
              Industry trends, project highlights, and expert tips from the RTS Advertising Hub team.
            </motion.p>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="section-padding">
          <div className="container-width">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Link
                    to={`/blog/${post.slug}`}
                    className="group bg-card rounded-2xl border border-border shadow-card hover:shadow-hover transition-all duration-300 overflow-hidden flex flex-col h-full block"
                  >
                    {/* Image */}
                    <div className="overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <div className="p-6 flex flex-col flex-1">
                      <span className="inline-block text-xs font-semibold uppercase tracking-wider text-accent bg-accent/10 px-3 py-1 rounded-full w-fit mb-4">
                        {post.category}
                      </span>

                      <h2 className="font-heading font-bold text-lg text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h2>

                      <p className="text-muted-foreground text-sm mb-6 flex-1 line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-border pt-4">
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            {post.readTime}
                          </span>
                        </div>
                        <span className="flex items-center gap-1 text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                          Read
                          <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
