import { 
    Sparkles, 
    Music2, 
    Camera, 
    Award, 
    Mic2, 
    Crown, 
    Heart, 
    Star, 
    Play, 
    Music, 
    Trophy, 
    Users, 
    Calendar, 
    MapPin, 
    Instagram, 
    Twitter, 
    Youtube, 
    ExternalLink, 
    ChevronRight, 
    Zap, 
    TrendingUp, 
    ArrowRight } from 'lucide-react';

interface navbarProps {
    scrolled: boolean;
    activeSection: string;
    scrollToSection: (sectionId: string) => void;
}

const Navbar = ({scrolled, activeSection, scrollToSection}: navbarProps) => {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-pink-100/50' : 'bg-white/50 backdrop-blur-sm'
    }`}>
        <div className='max-w-7xl mx-auto px-6 py-4'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-3 cursor-pointer group' onClick={() => scrollToSection('home')}>
                    <div className='relative'>
                        <Heart className='w-7 h-7 text-pink-400 group-hover:scale-110 transition-transform'/>
                        <Sparkles className='w-3 h-3 text-purple-400 absolute -top-1 -right-1 animate-pulse'/>
                    </div>
                    <span className='text-2xl font-black bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent'>
                        KARINA
                    </span>
                </div>

                <div className='hidden md:flex items-center gap-6'>
                    {['Home', 'About', 'Achievements', 'Discography', 'Performances', 'Gallery', 'Stats', 'Social'].map((item) =>(
                        <button
                            key={item}
                            onClick={() => scrollToSection(item.toLocaleLowerCase())}
                            className={`text-sm font-semibold transition-all duration-300 hover:text-pink-500 relative group cursor-pointer ${
                                activeSection === item.toLowerCase() ? 'text-pink-500' : 'text-gray-600'
                            }`}
                        >{item}
                        <span
                            className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 transition-all duration-300 ${
                                activeSection === item.toLowerCase() ? 'w-full' : 'w-0 group-hover:w-full'
                            }`}
                        ></span>
                        </button>
                    ))}

                    <div className='flex items-center gap-3'>
                        <button className='hidden md:flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-pink-300 to-purple-300 text-white rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-pink-200 transition-all duration-300 hover:scale-105'>
                            <Heart className='w-4 h-4'/> 
                            Follow
                        </button>
                    </div>
                </div>
            </div>

            <div className='absolute bottom-0 left-0 right-0 h-0.5 bg-pink-100'>
                <div 
                    className='h-full bg-gradient-to-r from-pink-400 to-purple-400 transition-all duration-150'
                    style={{ width: `${(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%`}}
                >

                    </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar