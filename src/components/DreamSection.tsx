
import React from "react";
import { Lightbulb, Globe, Users } from "lucide-react";

const DreamSection = () => {
  return (
    <section id="dream" className="section-padding">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="neon-gradient-text">Our Dream</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="glass-card p-6 hover:scale-105 transition-transform duration-300">
            <div className="bg-neon-gradient p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Lightbulb className="h-7 w-7 text-black" />
            </div>
            <h3 className="text-xl font-bold mb-3">Crazy Research, Real Impact</h3>
            <p className="text-white/70">
              We chase the "impossible" because that is where true breakthroughs live. 
              Moon-shot thinking is in our DNA. We deliberately run toward ideas most call "crazy" 
              because history shows that's where transformational breakthroughs hide.
            </p>
          </div>
          
          {/* Card 2 */}
          <div className="glass-card p-6 hover:scale-105 transition-transform duration-300">
            <div className="bg-neon-gradient p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Globe className="h-7 w-7 text-black" />
            </div>
            <h3 className="text-xl font-bold mb-3">Local Resources, Local Prosperity</h3>
            <p className="text-white/70">
              By sourcing and building in Bangladesh, we keep costs low, knowledge high, and value right here at home.
              Every taka that stays in Bangladesh multiplies opportunity.
            </p>
          </div>
          
          {/* Card 3 */}
          <div className="glass-card p-6 hover:scale-105 transition-transform duration-300">
            <div className="bg-neon-gradient p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Users className="h-7 w-7 text-black" />
            </div>
            <h3 className="text-xl font-bold mb-3">Grass-Roots First</h3>
            <p className="text-white/70">
              Farmers, delivery riders, shop owners, students—these are our primary stakeholders. 
              If it doesn't help them, we don't build it. We measure success by the number of lives improved on the ground.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DreamSection;
