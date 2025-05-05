
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold neon-gradient-text">Ruhul Engineering</h3>
            <p className="text-white/50 text-sm">Proudly made in Rajshahi</p>
          </div>
          
          <ul className="flex flex-wrap gap-6 justify-center md:justify-end mb-6 md:mb-0">
            <li><a href="#" className="text-white/70 hover:text-neon-yellow">Home</a></li>
            <li><a href="#about" className="text-white/70 hover:text-neon-yellow">About</a></li>
            <li><a href="#dream" className="text-white/70 hover:text-neon-yellow">Our Dream</a></li>
            <li><a href="#products" className="text-white/70 hover:text-neon-yellow">Products</a></li>
            <li><a href="#contact" className="text-white/70 hover:text-neon-yellow">Contact</a></li>
          </ul>
        </div>
        
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm text-center md:text-left">
            &copy; {currentYear} Ruhul Engineering. All rights reserved.
          </p>
          <p className="text-white/50 text-sm mt-2 md:mt-0">
            Building a better future with local talent and innovation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
