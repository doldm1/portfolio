import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    // Increased movement sensitivity
    const moveX = (clientX - centerX) / 20;
    const moveY = (clientY - centerY) / 20;
    setMousePosition({ x: moveX, y: moveY });
  };

  const scrollToSection = (sectionClass) => {
    const section = document.querySelector(sectionClass);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="min-h-screen flex flex-col justify-center items-center relative bg-gradient-to-br from-indigo-600 to-purple-700 text-white p-4 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large floating circles */}
        {[...Array(6)].map((_, index) => (
          <div
            key={`circle-${index}`}
            className="absolute rounded-full opacity-20"
            style={{
              transform: `translate(${mousePosition.x * (index + 1) * 1.5}px, ${mousePosition.y * (index + 1) * 1.5}px)`,
              transition: 'transform 0.3s ease-out',
              width: `${200 + index * 100}px`,
              height: `${200 + index * 100}px`,
              top: `${(index * 20) - 10}%`,
              left: `${(index * 15) - 10}%`,
              background: `radial-gradient(circle, rgba(255,255,255,0.3) ${30 - index * 5}%, transparent 70%)`,
              filter: 'blur(8px)',
            }}
          />
        ))}
        
        {/* Small floating dots */}
        {[...Array(20)].map((_, index) => (
          <div
            key={`dot-${index}`}
            className="absolute rounded-full bg-white"
            style={{
              transform: `translate(${mousePosition.x * ((index % 4) + 2) * -1}px, ${mousePosition.y * ((index % 4) + 2) * -1}px)`,
              transition: 'transform 0.2s ease-out',
              width: `${4 + (index % 4)}px`,
              height: `${4 + (index % 4)}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.15,
            }}
          />
        ))}

        {/* Animated gradient shapes */}
        <div 
          className="absolute inset-0"
          style={{
            transform: `translate(${mousePosition.x * -2}px, ${mousePosition.y * -2}px)`,
            background: 'radial-gradient(circle at 50% 50%, rgba(129, 140, 248, 0.1), transparent 60%)',
            transition: 'transform 0.4s ease-out',
          }}
        />
      </div>

      {/* Content */}
      <div 
        className={`transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        } z-10 text-center`}
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center backdrop-blur-sm">
          Hi, I'm [Your Name]
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-center text-purple-100">
          UX/UI Designer & Digital Creator
        </p>
        <p className="text-lg mb-12 text-center text-purple-100 max-w-2xl">
          Creating intuitive and beautiful digital experiences that connect with users and drive engagement
        </p>
        
        {/* Social Links */}
        <div className="flex gap-6 justify-center mb-12">
          {/* Social icons remain the same */}
          <a 
            href="https://github.com/yourusername" 
            className="transform hover:scale-110 transition-transform bg-white/10 p-3 rounded-full hover:bg-white/20 backdrop-blur-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a 
            href="https://linkedin.com/in/yourusername" 
            className="transform hover:scale-110 transition-transform bg-white/10 p-3 rounded-full hover:bg-white/20 backdrop-blur-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a 
            href="mailto:your.email@example.com" 
            className="transform hover:scale-110 transition-transform bg-white/10 p-3 rounded-full hover:bg-white/20 backdrop-blur-sm"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinecap="round" strokeLinejoin="round"/>
              <polyline points="22,6 12,13 2,6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button 
            onClick={() => scrollToSection('.projects')}
            className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold
                       transform hover:scale-105 transition-all hover:shadow-lg
                       hover:bg-indigo-50 backdrop-blur-sm"
          >
            View My Work
          </button>
        </div>
      </div>

      {/* Scroll Arrow */}
      <div 
        className="absolute bottom-8 animate-bounce cursor-pointer z-10" 
        onClick={() => scrollToSection('.about')}
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8">
          <polyline points="6 9 12 15 18 9" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;