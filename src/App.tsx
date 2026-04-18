import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Gallery from "./pages/Gallery";
import PriceCalculator from "./pages/PriceCalculator";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogBillboardAdvertising from "./pages/blog/BlogBillboardAdvertising";
import BlogSignageBusiness from "./pages/blog/BlogSignageBusiness";
import BlogRenovationBranding from "./pages/blog/BlogRenovationBranding";
import BlogPrintMedia from "./pages/blog/BlogPrintMedia";
import BlogGovernmentProjects from "./pages/blog/BlogGovernmentProjects";
import BlogBrandingTrends from "./pages/blog/BlogBrandingTrends";
import NotFound from "./pages/NotFound";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/calculator" element={<PriceCalculator />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/billboard-advertising-pakistan" element={<BlogBillboardAdvertising />} />
          <Route path="/blog/signage-business-identity" element={<BlogSignageBusiness />} />
          <Route path="/blog/renovation-facility-branding" element={<BlogRenovationBranding />} />
          <Route path="/blog/print-media-advertising" element={<BlogPrintMedia />} />
          <Route path="/blog/government-projects-standards" element={<BlogGovernmentProjects />} />
          <Route path="/blog/branding-trends-2026" element={<BlogBrandingTrends />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <WhatsAppButton />
      </BrowserRouter>
      <SpeedInsights />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
