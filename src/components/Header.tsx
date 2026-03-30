import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, ChevronDown, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoWhite from "@/assets/logo-white.png";

interface NavItem {
  name: string;
  href?: string;
  children?: { name: string; href: string }[];
}

const navLinks: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  {
    name: "Portfolio",
    children: [
      { name: "Projects", href: "/projects" },
      { name: "Our Work", href: "/gallery" },
    ],
  },
  { name: "Blog", href: "/blog" },
  // { name: "Calculator", href: "/calculator" },
  { name: "Contact", href: "/contact" },
];

function useTheme() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return false;
    const stored = localStorage.getItem("theme");
    if (stored) return stored === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return { isDark, toggle: () => setIsDark((v) => !v) };
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const location = useLocation();
  const { isDark, toggle } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpenDropdown(null);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (href: string) => location.pathname === href;
  const isGroupActive = (children: { href: string }[]) =>
    children.some((c) => location.pathname === c.href);

  return (
    <>
      {/* Top Bar */}
      <div className="hidden md:block bg-gradient-primary text-primary-foreground py-2">
        <div className="container-width flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:0300-5382657" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone size={14} />
              0300-5382657
            </a>
            <a href="mailto:rts.advertisinghub@gmail.com" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Mail size={14} />
              rts.advertisinghub@gmail.com
            </a>
          </div>
          <p className="text-primary-foreground/80">Creatively Driven, Digitally Focused</p>
        </div>
      </div>

      {/* Main Header */}
      <motion.header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? `${isDark ? "bg-background/90 backdrop-blur-md border-b border-border" : "glass-effect"} shadow-card py-3`
            : "bg-background py-5"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container-width">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img src={logoWhite} alt="Advertising Hub" className="h-10 w-auto object-contain invert dark:invert-0" />
              <div>
                <h1 className="font-heading font-bold text-lg text-foreground tracking-wide">Advertising <span className="text-primary">Hub</span></h1>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center gap-5">
              {navLinks.map((link) =>
                link.children ? (
                  <li
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(link.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      className={`flex items-center gap-1 font-medium transition-colors relative group ${
                        isGroupActive(link.children)
                          ? "text-primary"
                          : "text-foreground/80 hover:text-primary"
                      }`}
                    >
                      {link.name}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === link.name ? "rotate-180" : ""}`} />
                      <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                        isGroupActive(link.children) ? "w-full" : "w-0 group-hover:w-full"
                      }`} />
                    </button>

                    <AnimatePresence>
                      {openDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 pt-2"
                        >
                          <div className="bg-card border border-border rounded-xl shadow-hover py-2 min-w-[180px]">
                            {link.children.map((child) => (
                              <Link
                                key={child.name}
                                to={child.href}
                                className={`block px-4 py-2.5 text-sm font-medium transition-colors ${
                                  isActive(child.href)
                                    ? "text-primary bg-primary/5"
                                    : "text-foreground/80 hover:text-primary hover:bg-muted/50"
                                }`}
                              >
                                {child.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                ) : (
                  <li key={link.name}>
                    <Link
                      to={link.href!}
                      className={`font-medium transition-colors relative group ${
                        isActive(link.href!)
                          ? "text-primary"
                          : "text-foreground/80 hover:text-primary"
                      }`}
                    >
                      {link.name}
                      <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                        isActive(link.href!) ? "w-full" : "w-0 group-hover:w-full"
                      }`} />
                    </Link>
                  </li>
                )
              )}
            </ul>

            {/* Theme Toggle + CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={toggle}
                className="p-2.5 rounded-full border border-border bg-card hover:bg-muted/50 transition-colors"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={18} className="text-foreground" /> : <Moon size={18} className="text-foreground" />}
              </button>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Get Quote</Link>
              </Button>
            </div>

            {/* Mobile: Theme Toggle + Menu Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={toggle}
                className="p-2 rounded-full border border-border bg-card"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={20} className="text-foreground" /> : <Moon size={20} className="text-foreground" />}
              </button>
              <button
                className="p-2 text-foreground"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-foreground/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              className="absolute right-0 top-0 h-full w-72 bg-background shadow-hover p-8"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25 }}
            >
              <button
                className="absolute top-4 right-4 p-2 text-foreground"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X size={24} />
              </button>
              <ul className="flex flex-col gap-4 mt-16">
                {navLinks.map((link) =>
                  link.children ? (
                    <li key={link.name}>
                      <button
                        onClick={() => setOpenMobileDropdown(openMobileDropdown === link.name ? null : link.name)}
                        className={`flex items-center justify-between w-full text-lg font-medium transition-colors ${
                          isGroupActive(link.children) ? "text-primary" : "text-foreground hover:text-primary"
                        }`}
                      >
                        {link.name}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openMobileDropdown === link.name ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {openMobileDropdown === link.name && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden pl-4 mt-2 space-y-2 border-l-2 border-primary/20"
                          >
                            {link.children.map((child) => (
                              <li key={child.name}>
                                <Link
                                  to={child.href}
                                  className={`block text-base font-medium transition-colors ${
                                    isActive(child.href) ? "text-primary" : "text-foreground/70 hover:text-primary"
                                  }`}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {child.name}
                                </Link>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </li>
                  ) : (
                    <li key={link.name}>
                      <Link
                        to={link.href!}
                        className={`text-lg font-medium transition-colors ${
                          isActive(link.href!) ? "text-primary" : "text-foreground hover:text-primary"
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </li>
                  )
                )}
                <li className="mt-4">
                  <Button variant="hero" className="w-full" asChild>
                    <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                      Get Quote
                    </Link>
                  </Button>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
