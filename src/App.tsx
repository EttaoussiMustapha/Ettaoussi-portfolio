import { useEffect, useState } from 'react';
import FilmPosters from './components/FilmPosters';
import Hero from './components/Hero';
import Illustrations from './components/Illustrations';
import LogoDesign from './components/LogoDesign';
import Merchandise from './components/Merchandise';
import Navigation from './components/Navigation';
import Photography from './components/Photography';
import SocialMedia from './components/SocialMedia';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="bg-white dark:bg-gradient-to-br dark:from-[#0a192f] dark:via-[#1a1a2e] dark:to-[#16213e] text-gray-900 dark:text-white transition-colors duration-500">
        <div
          className="fixed top-0 left-0 h-1 bg-gradient-to-r from-teal-400 via-amber-400 to-pink-500 z-50 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />

        <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />

        <Hero />
        <LogoDesign />
        <SocialMedia />
        <Merchandise />
        <FilmPosters />
        <Photography />
        <Illustrations />

        <footer className="py-12 px-6 text-center border-t border-gray-200 dark:border-gray-800">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © 2025 Visual Storyteller. Crafted with passion across cultures.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
