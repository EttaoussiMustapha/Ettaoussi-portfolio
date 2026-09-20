import { ArrowDown } from 'lucide-react';
import { useEffect, useState } from 'react';

function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState('');
  const fullName = 'Creative Visionary';

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullName.length) {
        setTypedText(fullName.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-teal-400/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(20, 184, 166, 0.15), transparent 80%)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-5 gap-12 items-center relative z-10">
        <div className="md:col-span-2 flex justify-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-amber-400 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
            <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-teal-400/50 transform group-hover:scale-105 transition-transform duration-500">
              <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-400 dark:from-gray-700 dark:to-gray-900 flex items-center justify-center">
                <img
                  src="/orange.png"   // place your photo in public/assets/
                  alt="Mustapha Ettaoussi"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-3 space-y-6">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-tight">
            {typedText}
            <span className="animate-pulse">|</span>
          </h1>

          <p className="text-xl md:text-2xl text-teal-400 font-light">
          Creative Technologist | Multimedia Designer | UI/UX Enthusiast
          </p>

          <div className="h-px w-32 bg-gradient-to-r from-teal-400 to-transparent" />

          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 max-w-2xl">
            Hi! I’m Mustapha Ettaoussi, an aspiring Mediengestalter passionate about transforming ideas into captivating visual experiences.  
            I specialize in graphic design, multimedia, and creative storytelling, combining colors, typography, and digital tools to craft impactful designs.  
            Fluent in Arabic, French, and English, and good in German, I bring a multicultural perspective to every project, creating visuals that inspire, engage, and resonate.  
            My mission: to turn concepts into bold, futuristic media that leaves a lasting impression.
          </p>

          <div className="pt-6">
            <a
              href="#logos"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-teal-500 to-amber-500 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-teal-500/50 transform hover:scale-105 transition-all duration-300"
            >
              View My Work
              <ArrowDown className="animate-bounce" size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown size={32} className="text-teal-400" />
      </div>
    </section>
  );
}

export default Hero;
