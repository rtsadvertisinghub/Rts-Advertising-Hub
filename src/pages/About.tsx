import { Header } from "@/components/Header";
import { AboutSection } from "@/components/AboutSection";
import { OwnersSection } from "@/components/OwnersSection";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="About RTS Advertising Hub — Our Story & Mission | Rawalpindi Pakistan"
        description="RTS Advertising Hub ke baare mein jaanein. Professional advertising, signage aur branding company jo Pakistan mein government aur private projects handle karti hai."
        canonical="https://www.rtsadvertisinghub.com/about"
      />
      <Header />
      <main>
        <AboutSection />
        <OwnersSection />
        <WhyChooseSection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
