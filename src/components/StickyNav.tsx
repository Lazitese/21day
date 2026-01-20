import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "@/assets/logo.png";

const StickyNav = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { href: "program", label: "Program" },
    { href: "testimonials", label: "Testimonials" },
    { href: "gallery", label: "Gallery" },
    { href: "sponsor", label: "Sponsor" }
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50 shadow-sm"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex items-center gap-2.5">
                <img src={logo} alt="21 Day Bootcamp" className="h-9 w-auto" />
                <span className="font-semibold text-foreground text-sm">
                  21 Day Bootcamp
                </span>
              </div>

              {/* Desktop Nav Links */}
              <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-muted-foreground">
                {navLinks.map(link => (
                  <a
                    key={link.href}
                    href={`#${link.href}`}
                    onClick={e => scrollToSection(e, link.href)}
                    className="hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  className="hidden sm:inline-flex bg-foreground text-background hover:bg-foreground/90 rounded-full px-5 shadow-sm text-sm"
                  asChild
                >
                  <a href="https://forms.gle/joSQRC6r6yMZ461n9" target="_blank" rel="noopener noreferrer">
                    Sponsor Now
                  </a>
                </Button>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="lg:hidden flex items-center justify-center h-9 w-9 rounded-lg bg-muted/60 border border-border/50 text-foreground"
                >
                  {mobileMenuOpen ? <HiX className="h-5 w-5" /> : <HiMenu className="h-5 w-5" />}
                </button>
              </div>
            </nav>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="lg:hidden border-t border-border/50 bg-background"
              >
                <div className="container mx-auto px-4 py-4 space-y-1">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={`#${link.href}`}
                      onClick={e => scrollToSection(e, link.href)}
                      className="block px-4 py-3 rounded-xl text-foreground font-medium hover:bg-muted/60 transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                  <div className="pt-2">
                    <Button className="w-full bg-foreground text-background hover:bg-foreground/90 rounded-xl" asChild>
                      <a href="https://forms.gle/joSQRC6r6yMZ461n9" target="_blank" rel="noopener noreferrer">
                        Sponsor Now
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>
      )}
    </AnimatePresence>
  );
};

export default StickyNav;
