import { Sparkles, Play, ArrowRight, Star, Trophy } from "lucide-react";

interface HeroProps {
  currentSlide: number;
  scrollToSection: (sectionId: string) => void;
}

const HeroSection = ({ currentSlide, scrollToSection }: HeroProps) => {
  const heroSlides = [
    {
      gradient: "from-pink-300 via-purple-300 to-blue-300",
      text: "Main Dancer",
    },
    {
      gradient: "from-rose-300 via-pink-300 to-fuchsia-300",
      text: "Visual Queen",
    },
    {
      gradient: "from-violet-300 via-purple-300 to-indigo-300",
      text: "Leader",
    },
  ];
  return (
    <>
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
      >
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                currentSlide === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} opacity-20`}
              ></div>
            </div>
          ))}
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl">
          <div className="mb-8 relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 blur-3xl opacity-40 animate-pulse-slow"></div>
            <h1 className="relative text-7xl md:text-9xl font-black bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-slide-down">
              KARINA
            </h1>
          </div>

          <div
            className="flex items-center justify-center gap-3 mb-6 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-pink-400 to-transparent"></div>
            <Sparkles className="w-5 h-5 text-pink-400 animate-spin-slow" />
            <p className="text-xl text-purple-400 tracking-[0.3rem] font-light">
              aespa 에스파
            </p>
            <Sparkles className="w-5 h-5 text-purple-400 animate-spin-slow" />
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
          </div>

          <p
            className="text-xl md:text-xl text-gray-600 mb-8 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            {heroSlides[currentSlide].text} • Leader • Visual • Center
          </p>

          <div
            className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <button
              className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-pink-400 to-purple-400 text-white rounded-full font-semibold hover:shadow-xl
             hover:shadow-pink-300/50 transition-all duration-300 hover:scale-105 cursor-pointer group"
            >
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Watch MV
            </button>
            <button className="flex items-center gap-2 px-8 py-3 bg-white/80 backdrop-blur-sm text-gray-700 rounded-full font-semibold border-2 border-pink-200 hover:border-pink-300 hover:shadow-lg transition-all duration-300 hover:scale-105 group">
              Explore More
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div
            className="flex justify-center gap-6 animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            <div className="flex items-center gap-2 text-gray-600">
              <Star className="w-5 h-5 text-pink-300 fill-pink-300" />
              <span className="text-sm font-medium">10M+ Followers</span>
            </div>
            <div className="w-px h-6 bg-pink-200"></div>
            <div className="flex items-center gap-2 text-gray-600">
                <Trophy className="w-5 h-5 text-purple-300"/>
                <span className="text-sm font-medium">50+ Awards</span> 
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-12">
            {heroSlides.map((_, index) => (
                <div
                    key={index}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                        currentSlide === index ? 'w-8 bg-gradient-to-r from-pink-400 to-purple-400' : 'w-1.5 bg-gray-300'
                    }`}
                ></div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
