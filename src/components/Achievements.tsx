import { Award, Camera, ChevronRight, Crown, Music2, Sparkles } from "lucide-react";

interface AchievementsProps {
    hoverCard: number | null;
    setHoverCard: (value: number | null) => void;
}
const Achievements = ({  setHoverCard }: AchievementsProps) => {
      const achievements = [
    { icon: Award, title: 'Leader of aespa', desc: 'Leading 4th Gen Revolution', color: 'from-pink-300 to-rose-400' },
    { icon: Crown, title: 'It Girl Status', desc: 'Fashion & Beauty Icon', color: 'from-purple-300 to-violet-400' },
    { icon: Music2, title: 'Chart Domination', desc: 'Multiple #1 Hits', color: 'from-blue-300 to-cyan-400' },
    { icon: Camera, title: 'Global Recognition', desc: 'Worldwide Fanbase', color: 'from-amber-300 to-orange-400' }
  ];
  return (
    <section id="achievements" className="relative py-32 px-4 z-10">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 scroll-animate">
                <h2 className="py-2 text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
                    Achievements & Recognition
                </h2>
                <p className="text-gray-600 text-lg">Breaking records and setting trends</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {achievements.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <div className="scroll-animate">    
                        <div
                            key={index}
                            className="group relative p-8 rounded-3xl bg-white/80 backdrop-blur-sm border-2 border-pink-200 hover:border-pink-300 transition-all duration-500 hover:translate-y-4 hover:shadow-pink-200/50 cursor-pointer"
                            onMouseEnter={() => setHoverCard(index)}
                            onMouseLeave={() => setHoverCard(null)}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>

                            <div className="relative">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                    <Icon className="w-8 h-8 text-pink-500"/>
                                </div>

                                <h3 className="text-xl font-bold mb-3 text-gray-800">{item.title}</h3>
                                <p className="text-gray-600 mb-4">{item.desc}</p>

                                <div className="flex items-center gap-2 text-pink-500 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <span>Learn more</span>
                                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"/>
                                </div>
                            </div>

                            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <Sparkles className="w-5 h-5 text-pink-400" />
                            </div>
                        </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default Achievements