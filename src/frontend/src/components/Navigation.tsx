import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home", ocid: "nav.home.link" },
  { label: "About", href: "#about", ocid: "nav.about.link" },
  { label: "Services", href: "#services", ocid: "nav.services.link" },
  { label: "Partners", href: "#partners", ocid: "nav.partners.link" },
  { label: "Why Us", href: "#whyus", ocid: "nav.whyus.link" },
  {
    label: "Testimonials",
    href: "#testimonials",
    ocid: "nav.testimonials.link",
  },
  { label: "Contact", href: "#contact", ocid: "nav.contact.link" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Track active section
      const sections = navLinks.map((l) => l.href.slice(1));
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-navy-deep/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            type="button"
            onClick={() => scrollTo("#home")}
            className="flex items-center gap-2 group"
          >
            <img
              src="/assets/generated/logo-transparent.dim_200x80.png"
              alt="Matrix Networks and Solutions Logo"
              className="h-10 lg:h-12 w-auto object-contain"
            />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-ocid={link.ocid}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.href);
                }}
                className={`relative px-4 py-2 text-sm font-ui font-medium transition-colors duration-200 rounded-md group ${
                  activeSection === link.href.slice(1)
                    ? "text-brand-gold"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
                {activeSection === link.href.slice(1) && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute inset-0 bg-white/8 rounded-md"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Button
              data-ocid="nav.quote.button"
              onClick={() => scrollTo("#contact")}
              className="hidden sm:inline-flex bg-brand-gold hover:bg-brand-gold/90 text-brand-navy-deep font-ui font-semibold text-sm px-5 h-9 rounded-md shadow-gold-glow transition-all duration-200 hover:shadow-lg"
            >
              Get a Quote
            </Button>

            <button
              type="button"
              data-ocid="nav.mobile.toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-white hover:text-brand-gold transition-colors"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-brand-navy-deep/98 backdrop-blur-md border-t border-white/10"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  data-ocid={link.ocid}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.href);
                  }}
                  className={`px-4 py-3 rounded-md text-sm font-ui font-medium transition-colors ${
                    activeSection === link.href.slice(1)
                      ? "text-brand-gold bg-white/8"
                      : "text-white/80 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <Button
                data-ocid="nav.quote.button"
                onClick={() => scrollTo("#contact")}
                className="mt-2 bg-brand-gold hover:bg-brand-gold/90 text-brand-navy-deep font-ui font-semibold"
              >
                Get a Quote
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
