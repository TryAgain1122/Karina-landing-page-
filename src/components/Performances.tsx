import { Calendar, ExternalLink, MapPin, Mic2, Music, Trophy, Users } from "lucide-react";

const Performances = () => {
  const performances = [
    {
      event: "Coachella 2024",
      location: "California, USA",
      date: "April 2024",
      icon: Music,
      color: "from-pink-200 to-rose-300",
    },
    {
      event: "MAMA Awards 2023",
      location: "Tokyo, Japan",
      date: "November 2023",
      icon: Trophy,
      color: "from-purple-200 to-violet-300",
    },
    {
      event: "aespa LIVE TOUR 2023",
      location: "Seoul, Korea",
      date: "August 2023",
      icon: Mic2,
      color: "from-blue-200 to-cyan-300",
    },
    {
      event: "Music Bank World Tour",
      location: "Paris, France",
      date: "May 2023",
      icon: Users,
      color: "from-amber-200 to-yellow-300",
    },
  ];
  return (
    <section id="performances" className="relative py-32 px-4 z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="py-3 text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Stage Appearance
          </h2>
          <p className="text-gray-600 text-xl">
            Iconic performances around the world
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-300 via-purple-300 to-blue-300 transform -translate-x-1/2"></div>

          <div className="space-y-12">
            {performances.map((performance, index) => {
              const Icon = performance.icon;
              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 border-4 border-white shadow-lg z-10"></div>
                  <div
                    className={`w-full md:w-5/12 ${
                      index % 2 === 0 ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    <div className="group p-8 rounded-3xl bg-white/80 backdrop-blur-sm border-2 border-pink-200 hover:border-pink-300 hover:shadow-xl hover:shadow-pink-200/50 transition-all duration-500 hover:scale-105 cursor-pointer">
                      <div
                        className={`flex items-start gap-4 ${
                          index % 2 === 0
                            ? "md:flex-row-reverse md:text-right"
                            : "flex-row text-left"
                        }`}
                      >
                        <div
                          className={`flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${performance.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                        >
                          <Icon className="w-7 h-7 text-white" />
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Calendar className="w-4 h-4 text-gray-400" />
                            <span className="text-sm text-gray-500">
                              {performance.date}
                            </span>
                          </div>
                          <h3 className="text-2xl font-bold text-gray-800 mb-2">
                            {performance.event}
                          </h3>
                          <div className="flex items-center gap-2 text-gray-600">
                            <MapPin className="w-4 h-4" />
                            <span>{performance.location}</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t border-pink-100">
                        <button className="inline-flex items-center gap-2 text-sm font-semibold text-pink-500 hover:gap-3 transition-all">
                            Watch Highlights
                            <ExternalLink className="w-4 h-4"/>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:block w-5/12"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Performances;
