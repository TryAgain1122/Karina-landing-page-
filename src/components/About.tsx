import {
  Calendar,
  Crown,
  Music2,
  Star,
  TrendingUp,
  Trophy,
  Zap,
} from "lucide-react";

const About = () => {
  const stats = [
    { label: "Instagram Followers", value: "10M+", icon: TrendingUp },
    { label: "Music Show Wins", value: "50+", icon: Trophy },
    { label: "Brand Endorsements", value: "20+", icon: Star },
    { label: "Years Active", value: "4+", icon: Calendar },
  ];
  return (
    <section id="about" className="relative py-32 px-4 z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
            Meet Karina
          </h2>
          <p className="text-gray-600 text-lg">
            The multifacted leader of aespa
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group scroll-animate">
            <div className="absolute -inset-4 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            <div className="relative h-[758px] rounded-3xl overflow-hidden shadow-2xl shadow-pink-200/50">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-300 via-purple-300 to-blue-300"></div>
              {/* <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Sparkles className="w-24 h-24 text-white/70 mb-4 mx-auto animate-pulse-slow" />
                  <p className="text-white/90 text-2xl font-bold">유지민</p>
                  <p className="text-white/70 text-lg">YOO JIMIN</p>
                </div>
                <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-white/30 rounded-tl-2xl"></div>
                <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-white/30 rounded-br-2xl"></div>
              </div> */}
              <img
                src="/Images/karina.JPG"
                alt="karina"
                className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-6 right-6 text-white">
                <p className="text-2xl font-bold drop-shadow-2xl">유지민</p>
                <p className="text-lg opacity-90 drop-shadow-2xl">YOO JIMIN</p>
              </div>
            </div>
          </div>
          <div className="space-y-8 scroll-animate">
            <div className="space-y-6">
              <div className="flex items-start gap-4 cursor-pointer scroll-animate">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-pink-200 flex items-center justify-center group-hover:scale-11 transition-transform">
                  <Star className="w-6 h-6 text-pink-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Birth & Early Life
                  </h3>
                  <p className="text-gray-600">
                    Born Yu Ji-min on April 11, 2000 in South Korea, Showed
                    exceptional talent in dance from a young age.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-purple-200 to-blue-200 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Music2 className="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    SM Entertainment
                  </h3>
                  <p className="text-gray-600">
                    Joined SM Entertainment and trained for 4 years before
                    debuting as aespa's leader in 2020.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group cursor-pointer scroll-animate">
                <div
                  className="shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-200 to-cyan-200
                 flex items-center justify-center"
                >
                  <Crown className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Rise to Fame
                  </h3>
                  <p className="text-gray-600">
                    As aespa's main dancer and visual, she's become one of
                    K-pop's most influential 4th gen idols.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group cursor-pointer scroll-animate">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-200 to-teal-200 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-cyan-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 scroll-animate">
                    KWANGYA Universe
                  </h3>
                  <p className="text-gray-600">
                    Her AI avatar æ-KARINA represents the innovative concept
                    bridging real and virtual worlds.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-pink-200 hover:border-pink-300 hover:shadow-pink-100 hover:scale-105 transition-all duration-300"
                  >
                    <Icon className="w-8 h-8 text-pink-400 mb-2" />
                    <p className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 to-purple-400 bg-clip-text text-transparent mb-1">
                      {stat.value}
                    </p>
                    <p className="text-xs text-gray-500">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
