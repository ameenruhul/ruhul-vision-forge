
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "py-2 glass-card" : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold neon-gradient-text">
            Ruhul Engineering
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-neon-yellow transition-colors">
              Home
            </Link>
            <Link to="/team" className="hover:text-neon-yellow transition-colors">
              Team
            </Link>
            <a href="#about" className="hover:text-neon-yellow transition-colors">
              About
            </a>
            <a href="#products" className="hover:text-neon-yellow transition-colors">
              Products
            </a>
            <a href="#why-us" className="hover:text-neon-yellow transition-colors">
              Why Choose Us
            </a>
            <a
              href="#contact"
              className="px-6 py-2 bg-neon-gradient hover:opacity-90 transition-opacity rounded-md"
            >
              Get Involved
            </a>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden glass-card mt-4 py-4 px-4 rounded-lg">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="hover:text-neon-yellow" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <Link to="/team" className="hover:text-neon-yellow" onClick={() => setIsOpen(false)}>
                Team
              </Link>
              <a href="#about" className="hover:text-neon-yellow" onClick={() => setIsOpen(false)}>
                About
              </a>
              <a href="#products" className="hover:text-neon-yellow" onClick={() => setIsOpen(false)}>
                Products
              </a>
              <a href="#why-us" className="hover:text-neon-yellow" onClick={() => setIsOpen(false)}>
                Why Choose Us
              </a>
              <a
                href="#contact"
                className="px-4 py-2 bg-neon-gradient hover:opacity-90 transition-opacity rounded-md text-center"
                onClick={() => setIsOpen(false)}
              >
                Get Involved
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
