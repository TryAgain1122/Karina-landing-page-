import { Calendar, Star, TrendingUp, Trophy } from "lucide-react";

const Stats = () => {
  const stats = [
    { label: "Instagram Followers", value: "10M+", icon: TrendingUp },
    { label: "Music Show Wins", value: "50+", icon: Trophy },
    { label: "Brand Endorsements", value: "20+", icon: Star },
    { label: "Years Active", value: "4+", icon: Calendar },
  ];
  return (
    <section id="stats" className="relative py-32 px-4 z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="py-3 text-5xl md:text=6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            By The Numbers
          </h2>
          <p className="text-gray-600 text-lg">Impact and influence across platforms</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                    <div
                        key={index}
                        className="group relative p-8 rounded-3xl bg-white/80 backdrop-blur-sm border-2 border-blue-200 hover:border-blue-300 transition-all duration-500 hover:scale-105 cursor-pointer overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="relative">
                            <Icon className="w-12 h-12 text-blue-400 mb-4 group-hover:scale-110 transition-transform"/>
                            <p className="text-4xl font-black bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-2">{stat.value}</p>
                            <p className="text-sm text-grayy-600 font-medium">{stat.label}</p>
                        </div>
                        
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-100">
                            <div className="h-full bg-gradient-to-r from-blue-400 to-purple-400 w-0 group-hover:w-full transition-all duration-1000"></div>
                        </div>
                    </div>
                )
            })}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-pink-200 to-rose-200 text-center">
                <p className="text-5xl font-black text-white mb-2">1st</p>
                <p className="text-gray-700 font-semibold">4th Gen Girl Group to Perform at Coachella</p>
            </div>
            <div className="p-8 rounded-3xl bg-gradient-to-br from-pink-200 to-rose-200 text-center">
                <p className="text-5xl font-black text-white mb-2">100M</p>
                <p className="text-gray-700 font-semibold">Total Music Video Views</p>
            </div>
            <div className="p-8 rounded-3xl bg-gradient-to-br from-pink-200 to-rose-200 text-center">
                <p className="text-5xl font-black text-white mb-2">15+</p>
                <p className="text-gray-700 font-semibold">Magazine Cover Features</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
