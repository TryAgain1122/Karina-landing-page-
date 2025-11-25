import {
  Sparkles,
  Heart,
  Menu,
} from "lucide-react";
import { useState } from "react";

interface navbarProps {
  scrolled: boolean;
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const Navbar = ({ scrolled, activeSection, scrollToSection }: navbarProps) => {
  const [open, setOpen] = useState(false);

  const navItems = [
    "Home",
    "About",
    "Achievements",
    "Discography",
    "Performances",
    "Gallery",
    "Stats",
    "Social",
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-lg shadow-pink-100/50"
          : "bg-white/50 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        {/* NAV HEADER */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => scrollToSection("home")}
          >
            <div className="relative">
              <Heart className="w-7 h-7 text-pink-400 group-hover:scale-110 transition-transform" />
              <Sparkles className="w-3 h-3 text-purple-400 absolute -top-1 -right-1 animate-pulse" />
            </div>
            <span className="text-2xl font-black bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              KARINA
            </span>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-sm font-semibold transition-all duration-300 hover:text-pink-500 relative group cursor-pointer ${
                  activeSection === item.toLowerCase()
                    ? "text-pink-500"
                    : "text-gray-600"
                }`}
              >
                {item}

                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 transition-all duration-300 ${
                    activeSection === item.toLowerCase()
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </button>
            ))}
          </div>

          {/* MOBILE HAMBURGER BUTTON */}
          <button
            className="md:hidden p-2 rounded-lg bg-white/80 backdrop-blur-sm shadow-sm active:scale-90 transition"
            onClick={() => setOpen(!open)}
          >
            <Menu className="w-7 h-7 text-pink-500" />
          </button>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        {open && (
          <div className="md:hidden mt-4 bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-lg animate-slideDown">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  scrollToSection(item.toLowerCase());
                  setOpen(false);
                }}
                className={`block w-full text-left py-3 text-lg font-semibold mb-1 rounded-xl transition ${
                  activeSection === item.toLowerCase()
                    ? "text-pink-500"
                    : "text-gray-700"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        )}

        {/* SCROLL PROGRESS BAR */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-pink-100">
          <div
            className="h-full bg-gradient-to-r from-pink-400 to-purple-400 transition-all duration-150"
            style={{
              width: `${
                (window.scrollY /
                  (document.documentElement.scrollHeight -
                    window.innerHeight)) *
                100
              }%`,
            }}
          ></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
