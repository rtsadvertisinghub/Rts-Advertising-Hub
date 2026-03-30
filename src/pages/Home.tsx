import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ImageSlider } from "@/components/ImageSlider";
import { StatsSection } from "@/components/StatsSection";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="RTS Advertising Hub — Pakistan's Premier Advertising & Marketing Company"
        description="Professional signage, billboard advertising, renovation works aur print media services. Rawalpindi, Islamabad aur poore Pakistan mein top advertising solutions."
        canonical="https://pr-web-builder.lovable.app/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "RTS Advertising and Marketing Hub",
          "description": "Pakistan's Premier Advertising & Marketing Hub",
          "url": "https://pr-web-builder.lovable.app",
          "telephone": "+923005382657",
          "email": "rts.advertisinghub@gmail.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Office No. 1, First Floor, Iqbal Plaza, Chakri Road",
            "addressLocality": "Rawalpindi",
            "addressCountry": "PK"
          },
          "priceRange": "PKR"
        }}
      />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ImageSlider />
        <StatsSection />
        <WhyChooseSection />
        <TestimonialsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
