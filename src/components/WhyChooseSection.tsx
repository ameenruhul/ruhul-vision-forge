
import React from "react";
import { Layers, Map, Rocket } from "lucide-react";

const WhyChooseSection = () => {
  return (
    <section id="why-us" className="section-padding">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="neon-gradient-text">Why Choose Ruhul Engineering?</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="text-center">
            <div className="mx-auto bg-neon-gradient w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Layers className="h-8 w-8 text-black" />
            </div>
            <h3 className="text-xl font-bold mb-3">End-to-End Capability</h3>
            <p className="text-white/70">
              Ideation, PCB design, firmware, enclosures, and data dashboards—all under one roof. 
              We handle every aspect of the development process with our local team.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="text-center">
            <div className="mx-auto bg-neon-gradient w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Map className="h-8 w-8 text-black" />
            </div>
            <h3 className="text-xl font-bold mb-3">Hyper-Local Supply Chain</h3>
            <p className="text-white/70">
              80% of parts sourced within Bangladesh; faster iterations, lower costs.
              By manufacturing locally, we build resilience and support our economy.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="text-center">
            <div className="mx-auto bg-neon-gradient w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Rocket className="h-8 w-8 text-black" />
            </div>
            <h3 className="text-xl font-bold mb-3">Open Collaboration</h3>
            <p className="text-white/70">
              We partner with universities, NGOs, and industry leaders to scale faster.
              Our collaborative approach helps us tackle complex challenges more effectively.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
