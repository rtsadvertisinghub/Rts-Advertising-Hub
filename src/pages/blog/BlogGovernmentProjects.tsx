import { BlogLayout } from "@/components/BlogLayout";
import { SEOHead } from "@/components/SEOHead";
import govImg from "@/assets/blog/government-projects.jpg";

const BlogGovernmentProjects = () => {
  return (
    <>
    <SEOHead
      title="Government Projects & Advertising Standards | RTS Blog"
      description="Defense aur government sector projects mein advertising ke quality standards. Pakistan mein high-standard project execution."
      canonical="https://pr-web-builder.lovable.app/blog/government-projects-standards"
      jsonLd={{ "@context": "https://schema.org", "@type": "Article", "headline": "How Government Projects Shape Advertising Standards", "datePublished": "2025-12-20", "author": { "@type": "Organization", "name": "RTS Advertising Hub" } }}
    />
    <BlogLayout
      title="How Government Projects Shape Advertising Standards"
      category="Industry Insights"
      date="Dec 20, 2025"
      readTime="7 min read"
      author="RTS Team"
      heroImage={govImg}
      variant="standard"
    >
      <p className="text-lg text-muted-foreground leading-relaxed mb-6">
        Working with government and defense organizations isn't just about completing a project—it's about 
        meeting the highest standards of quality, compliance, and accountability. These projects have shaped 
        the way RTS Advertising Hub operates across all sectors.
      </p>

      <h2 className="text-2xl font-heading font-bold text-foreground mt-10 mb-4">
        The Defense Sector Experience
      </h2>
      <p className="text-muted-foreground leading-relaxed mb-6">
        Our work with Pakistan's defense establishments has included aviation hangar renovation, facility 
        branding, large-scale signage installations, and specialized floor marking. Each project demands 
        <strong className="text-foreground"> precision, security clearance, and zero-compromise quality</strong>.
      </p>

      <div className="relative my-10 pl-8 border-l-2 border-primary/30 space-y-10">
        {[
          { year: "2020", title: "First Defense Contract", desc: "Awarded our first major hangar renovation project, setting new quality benchmarks." },
          { year: "2021", title: "Expanded Operations", desc: "Multiple base-level signage and branding projects across different installations." },
          { year: "2023", title: "National Recognition", desc: "Projects inaugurated by top national leadership with national media coverage." },
          { year: "2025", title: "ISO Certification", desc: "Achieved ISO 9001 certification, validating our quality management systems." },
        ].map((item) => (
          <div key={item.year} className="relative">
            <div className="absolute -left-[calc(1rem+5px)] top-1 w-3 h-3 rounded-full bg-primary" />
            <span className="text-accent font-bold text-sm">{item.year}</span>
            <h3 className="font-heading font-semibold text-foreground mt-1">{item.title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-heading font-bold text-foreground mt-10 mb-4">
        Standards That Set Us Apart
      </h2>

      <div className="grid sm:grid-cols-2 gap-4 my-8">
        {[
          { title: "Quality Materials", desc: "Only premium-grade materials that meet military specifications" },
          { title: "Compliance First", desc: "Full adherence to government procurement regulations" },
          { title: "Security Protocols", desc: "Strict security clearance and confidentiality procedures" },
          { title: "Timely Execution", desc: "Military-grade project management and deadline discipline" },
        ].map((item) => (
          <div key={item.title} className="bg-muted/50 rounded-xl p-5">
            <h3 className="font-heading font-semibold text-foreground mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.desc}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-heading font-bold text-foreground mt-10 mb-4">
        Impact on Private Sector Work
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        The discipline and quality standards we've developed through government projects directly benefit our 
        private sector clients. When you hire RTS, you get a team that treats every project with the same 
        level of professionalism and attention to detail as a defense installation.
      </p>
    </BlogLayout>
    </>
  );
};

export default BlogGovernmentProjects;
