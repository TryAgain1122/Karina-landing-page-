import {
  ExternalLink,
  Instagram,
  Sparkles,
  Twitter,
  Youtube,
} from "lucide-react";

const Social = () => {
  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      handle: "@katarinabluu",
      color: "from-pink-300 to-purple-300",
      link: 'https://www.instagram.com/katarinabluu/'
    },
    {
      name: "Twitter",
      icon: Twitter,
      handle: "@aespa_official",
      color: "from-blue-300 to-cyan-300",
      link: 'https://x.com/aespa_official?lang=en'
    },
    {
      name: "YouTube",
      icon: Youtube,
      handle: "aespa",
      color: "from-red-300 to-pink-300",
      link: "https://www.youtube.com/@aespa"
    },
  ];
  return (
    <section id="social" className="relative py-32 px-4 z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="py-3 text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 via-rose-400 to-red-400 bg-clip-text text-transparent mb-4">
            Connect With Karina
          </h2>
          <p className="text-gray-600 text-lg">
            Follow for the latest updates and content
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <div
                key={index}
                className="group relative p-10 rounded-3xl bg-white/80 backdrop-blur-sm border-2 border-pink-200 hover:border-pink-300 transition-all duration-500 hover:scale-105 cursor-pointer text-center overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>

                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <Icon className="w-10 h-10 text-pink-500" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-white transition-colors">
                    {social.name}
                  </h3>
                  <p className="text-gray-600 mb-6 group-hover:text-white/90 transition-colors">
                    {social.handle}
                  </p>

                  <button 
                  onClick={() => window.open(social.link, '_blank')}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-400 to-purple-400 text-white rounded-full font-semibold md:opacity-0 opacity-100 md:group-hover:opacity-100 transition-all duration-500 hover:scale-105">
                    Follow
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="max-w-2xl mx-auto p-10 rounded-3xl bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 border-2 border-pink-200">
          <div className="text-center mb-8">
            <Sparkles className="w-12 h-12 text-pink-400 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-gray-800 mb-2">
              Stay Updated
            </h3>
            <p className="text-gray-600">
              Get the latest news, releases, and exclusive content
            </p>
          </div>

          <div className="flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full border-2 border-pink-200 focus:border-pink-400 focus:outline-none bg-white/80 backdrop-blur-sm"
            />
            <button 
              className="px-8 py-4 bg-gradient-to-r from-pink-400 to-purple-400 text-white rounded-full font-semibold hover:shadow-xl hover:shadow-pink-300/50 transition-all duration-300 hover:scale-105 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Social;
