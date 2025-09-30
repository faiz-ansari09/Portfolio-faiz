import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Close mobile menu on scroll
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  const handleMobileNavClick = (name) => {
    setActiveItem(name);
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="container flex justify-between items-center">
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground"> Faiz Ansari's </span>
            Portfolio
          </span>
        </a>

        {/* desktop nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* mobile menu button */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* overlay */}
      <div
        onClick={() => setIsMenuOpen(false)}
        className={cn(
          "fixed inset-0 bg-black/40 backdrop-blur-sm z-30 transition-opacity duration-300 md:hidden",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      />

      {/* mobile menu sliding from right */}
      <div
        className={cn(
          "fixed top-0 right-0 h-100 w-54 bg-background/95 backdrop-blur-md z-40 flex flex-col items-start px-6 pt-20",
          "transition-transform duration-300 md:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col space-y-4 w-full">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => handleMobileNavClick(item.name)}
              className={cn(
                "text-lg font-semibold transition-colors duration-300 block px-4 py-2 rounded",
                activeItem === item.name
                  ? "text-primary"
                  : "text-foreground/80 hover:text-primary"
              )}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </nav>
  );
};
