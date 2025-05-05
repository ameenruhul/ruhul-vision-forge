
import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="glass-card p-8 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 neon-gradient-text">
            Proudly Made in Rajshahi
          </h2>
          
          <p className="text-white/80 mb-6 leading-relaxed">
            At Ruhul Engineering, we believe every great invention starts with a simple truth: the people who live closest 
            to a problem are the best equipped to solve it. That's why our entire research-and-development engine—design studios, 
            prototyping labs, firmware benches, and testing grounds—thrives here in Rajshahi.
          </p>
          
          <p className="text-white/80 mb-6 leading-relaxed">
            We recruit from local universities, source raw materials from regional suppliers, and lean on decades-old 
            craft traditions that have always powered Bangladesh's ingenuity. When you pick up a Ruhul device, you're holding 
            the combined skill, passion, and resilience of our community.
          </p>
          
          <p className="text-white/80 leading-relaxed">
            Our teams don't just read datasheets; they walk the same streets as delivery riders who need affordable e-bikes. 
            They share tea stalls with farmers anxious about irrigation downtime. They stand shoulder-to-shoulder with 
            shop owners praying the lights stay on through another power cut. Every circuit board we etch and every line 
            of code we write is rooted in the everyday realities of the very people we serve.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
