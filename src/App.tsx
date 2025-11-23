import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Achievements from "./components/Achievements";
import Discography from "./components/Discography";


const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [hoverCard, setHoverCard] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'achievements', 'discography', 'gallery', 'stats', 'social'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY});
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    }
  },[])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000)
    return () => clearInterval(interval);
  },[])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start'});
    }
  }

  return (
    <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 min-h-screen text-gray-800 relative overflow-hidden">
      <div 
        className="fixed w-4 h-4 rounded-full bg-pink-400/30 pointer-events-none z-50 mix-blend-multiply transition-transform-150"
        style={{
          left: cursorPos.x - 8,
          top: cursorPos.y - 8,
          transform: hoverCard !== null ? 'scale(3)' : 'scale(1)'
        }}     
      />

      {/* Animated background particles  */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, index) => (
          <div
            key={index}
            className="absolute w-2 h-2 rounded-full animate-float-particle"
            style={{
              background: index % 3 === 0 ? '#fbcfe8' : '#fde68a',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
              opacity: 0.4
            }}
            />
        ))}
      </div>

      <Navbar scrolled={scrolled} activeSection={activeSection} scrollToSection={scrollToSection} />
      <HeroSection currentSlide={currentSlide} scrollToSection={scrollToSection}/>
      <About />
      <Achievements hoverCard={hoverCard} setHoverCard={setHoverCard}/>
      <Discography />
      {/* <Performances /> */}
      {/* <Gallery /> */}
      {/* <Stats /> */}
      {/* <Social /> */}
      {/* <Footer /> */}
    </div>
  )
}

export default App
