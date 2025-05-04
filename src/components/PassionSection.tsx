
import { Card, CardContent } from '@/components/ui/card';
import { useState } from 'react';

const PassionSection = () => {
  // Main content data - modify this array to change the cards displayed
  const passions = [
    {
      emoji: "🚀", 
      title: "Web Applications",
      description: "I love building fast, responsive web apps that provide a seamless user experience across all devices."
    },
    {
      emoji: "🧩", 
      title: "Problem Solving",
      description: "Taking complex problems and breaking them down into manageable solutions is what drives my passion for coding."
    },
    {
      emoji: "🤖",    
      title: "AI/ML Enthusiast",
      description: "Exploring the world of AI and Machine Learning excites me. I love learning how these technologies work and building innovative, intelligent solutions that solve real-world problems."
    },
    {
      emoji: "🔄", 
      title: "Continuous Learning",
      description: "The tech world evolves rapidly, and I'm committed to staying current with the latest tools and best practices."
    }
  ];

  return (
    // Section container - adjust padding or background as needed
    <section className="py-20">
      <div className="section-container">
        {/* Section heading - modify text content or spacing */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-2">What I Love Building</h2>
          {/* Accent line - modify color or size */}
          <div className="h-1 w-20 bg-primary mx-auto mb-6 rounded"></div>
          <p className="text-lg text-muted-foreground">
            Beyond just coding, these are the aspects of development that truly excite me and fuel my passion
          </p>
        </div>
        
        {/* Grid layout for cards - adjust columns or spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {passions.map((item, index) => (
            <PassionCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const PassionCard = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Card 
      className={`border border-muted shadow-sm card-hover transition-all duration-300 relative overflow-hidden ${
        isHovered ? 'shadow-lg' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={`absolute inset-0 bg-primary/5 rounded-lg transition-opacity duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          boxShadow: isHovered ? '0 0 20px 5px rgba(59, 130, 246, 0.15) inset' : 'none',
        }}
      />

      <CardContent className="pt-6 text-center relative z-10">
        <div className={`text-4xl mb-4 transition-transform duration-300 ${
          isHovered ? 'transform scale-110' : ''
        }`}>{item.emoji}</div>
        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
        <p className="text-muted-foreground">{item.description}</p>
      </CardContent>
    </Card>
  );
};

export default PassionSection;
