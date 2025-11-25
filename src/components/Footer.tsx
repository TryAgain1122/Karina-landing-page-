import { Heart, Instagram, Twitter, Youtube } from "lucide-react"

const Footer = () => {
    const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start'});
    }
  }
  return (
    <footer className="relative py-16 px-4 z-10 border-t border-pink-200 bg-white/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-8 h-8 text-pink-400"/>
              <span className="text-3xl font-black bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                KARINA
              </span>
            </div>
          </div>
          <p>Fan-made tribute celebrating karina from aespa. All content is for appreciation purposes only.
          </p>
          <div className="flex gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-200 to-purple-200 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
              <Instagram className="w-5 h-5 text-pink-500"/>
            </div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-200 to-cyan-200 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
              <Twitter className="w-5 h-5 text-blue-500"/>
            </div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-200 to-pink-200 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
              <Youtube className="w-5 h-5 text-red-500"/>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-gray-800 mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {['About', 'Discography', 'Gallery', 'Stats'].map((link) => (
              <li key={link}>
                <button 
                  onClick={() => scrollToSection(link.toLowerCase())}
                  className="text-gray-600 hover:text-pink-500 transition-colors"
                >{link}</button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-gray-800 mb-4">Resources</h4>
          <ul className="space-y-2">
            {['Official Site', 'Fan Cafe', 'Merchandise', 'Support'].map((link) => (
              <li key={link}>
                <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors">{link}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer