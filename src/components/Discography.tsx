import { Music, Music2, Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Album {
  title: string;
  year: string;
  type: string;
  tracks: number;
  gradient: string;
  sales: string;
  preview: string;
  image: string;
}

const Discography = () => {
  const discography: Album[] = [
    {
      title: "Whipsplash",
      year: "2024",
      type: "Mini Album",
      tracks: 6,
      gradient: "from-purple-200 via-pink-200 to-rose-300",
      sales: "Mini Album",
      preview: "/Audio/whipsplash.mp3",
      image: "/Images/whipsplash.jpg",
    },
    {
      title: "Armageddon",
      year: "2024",
      type: "Full Album",
      tracks: 10,
      gradient: "from-orange-200 via-rose-200 to-pink-300",
      sales: "1.7M+",
      preview: "/Audio/armageddon.mp3",
      image: "/Images/armageddonImg.jpg",
    },
    {
      title: "Drama",
      year: "2023",
      type: "Mini Album",
      tracks: 6,
      gradient: "from-indigo-200 via-purple-200 to-pink-300",
      sales: "1.4M+",
      preview: "/Audio/drama.mp3",
      image: "/Images/drama.jpg",
    },
    {
      title: "MY WORLD",
      year: "2023",
      type: "Mini Album",
      tracks: 6,
      gradient: "from-sky-200 via-blue-200 to-purple-300",
      sales: "2.1M+",
      preview: "/Audio/myWorld.mp3",
      image: "/Images/myWorld.jpg",
    },
    {
      title: "Girls",
      year: "2022",
      type: "Mini Album",
      tracks: 9,
      gradient: "from-violet-200 via-purple-200 to-pink-300",
      sales: "1.8M+",
      preview: "/Audio/girls.mp3",
      image: "/Images/girls.jpg",
    },
    {
      title: "Savage",
      year: "2021",
      type: "Mini Album",
      tracks: 6,
      gradient: "from-rose-200 via-pink-200 to-fuchsia-300",
      sales: "787K+",
      preview: "/Audio/savage.mp3",
      image: "/Images/savage.jpg",
    },
  ];

  const audioRef = useRef<HTMLAudioElement>(new Audio());
  const [currentTrack, setCurrentTrack] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const playPreview = (src: string) => {
    if (!src) return;
    const audio = audioRef.current;
    if (currentTrack === src) {
      audio.pause();
      setCurrentTrack(null);
      return;
    }
    audio.src = src;
    audio.play();
    setCurrentTrack(src);
  };

  // Setup listeners once
  useEffect(() => {
    const audio = audioRef.current;
    const timeUpdate = () => {
      if (!isDragging) setCurrentTime(audio.currentTime);
    };
    const loadedMeta = () => setDuration(audio.duration);

    audio.addEventListener("timeupdate", timeUpdate);
    audio.addEventListener("loadedmetadata", loadedMeta);

    return () => {
      audio.removeEventListener("timeupdate", timeUpdate);
      audio.removeEventListener("loadedmetadata", loadedMeta);
    };
  }, [isDragging]);

  // Seek handler
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    audioRef.current.currentTime = value;
    setCurrentTime(value);
  };

  const formatTime = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s < 10 ? "0" + s : s}`;
  };
  return (
    <section id="discography" className="relative py-32 px-4 z-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 scroll-animate">
          <h2 className="py-3 text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent mb-4">
            Discography
          </h2>
          <p className="text-gray-600 text-lg">
            Chart-topping releases and iconic tracks
          </p>
        </div>

        {/* Album Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {discography.map((album, index) => (
            <div className="scroll-animate">
              <div
                key={index}
                className={`group relative rounded-3xl overflow-hidden cursor-pointer transform transition-all duration-500 shadow-xl shadow-pink-200/30 
                  ${
                    currentTrack === album.preview
                      ? "scale-105 shadow-pink-300/50"
                      : "hover:scale-105 hover:shadow-pink-300/50"
                  }`}
              >
                {/* Album Cover */}
                <div className="relative h-80">
                  <img
                    src={album.image}
                    alt={album.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {/* <div className={`absolute inset-0 bg-gradient-to-br ${album.gradient}`}></div> */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500"></div>

                  {/* Play Button */}
                  <div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500"
                    onClick={(e) => {
                      e.stopPropagation();
                      playPreview(album.preview);
                    }}
                  >
                    <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                      {currentTrack === album.preview ? (
                        <Pause className="w-8 h-8 text-pink-500" />
                      ) : (
                        <Play className="w-8 h-8 text-pink-500 ml-1" />
                      )}
                    </div>
                  </div>

                  {/* Tag */}
                  <div className="absolute top-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-700">
                      {album.type}
                    </span>
                  </div>
                </div>

                {/* Album Info */}
                <div className="p-6 bg-white/90 backdrop-blur-sm">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-1">
                        {album.title}
                      </h3>
                      <p className="text-sm text-gray-600">{album.year}</p>
                    </div>
                    <Music2 className="w-6 h-6 text-pink-400" />
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <span className="flex items-center gap-1">
                      <Music className="w-4 h-4" />
                      {album.tracks} track
                    </span>
                    <span className="font-semibold text-pink-500">
                      {album.sales}
                    </span>
                  </div>

                  {/* Progress Bar */}
                  {album.preview && currentTrack === album.preview && (
                    <div>
                      <input
                        type="range"
                        min={0}
                        max={duration || 0}
                        value={currentTime}
                        onChange={handleSeek}
                        onMouseDown={() => setIsDragging(true)}
                        onMouseUp={() => setIsDragging(false)}
                        className="w-full accent-pink-500"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>{formatTime(currentTime)}</span>
                        <span>{formatTime(duration)}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
// return (
//   <section id="discography" className="relative py-32 px-4 z-10">
//     <div className="max-w-7xl mx-auto">
//       {/* Header */}
//       <div className="text-center mb-16">
//         <h2 className="py-3 text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent mb-4">
//           Discography
//         </h2>
//         <p className="text-gray-600 text-lg">
//           Chart-topping releases and iconic tracks
//         </p>
//       </div>

//       {/* Album Grid */}
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {discography.map((album, index) => (
//           // <div
//           //   key={index}
//           //   className="group relative rounded-3xl overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-500 shadow-xl shadow-pink-200/30 hover:shadow-2xl hover:shadow-pink-300/50"
//           // >
//           <div
//               key={index}
//               className={`group relative rounded-3xl overflow-hidden cursor-pointer transform transition-all duration-500 shadow-xl shadow-pink-200/30
//                 ${
//                   currentTrack === album.preview
//                   ? "scale-105 shadow-pink-400/70"
//                   : "hover:scale-105 hover:shadow-pink-300/50"
//                 }
//                 `}
//           >
//             {/* Album Cover */}
//             <div className="relative h-80">
//               <div
//                 className={`absolute inset-0 bg-gradient-to-br ${album.gradient}`}
//               ></div>

//               {/* Darker overlay on hover */}
//               <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500"></div>

//               {/* Play Button */}
//               <div
//                 className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500"
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   playPreview(album.preview)
//                 }}
//                 >
//                 <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
//                   {currentTrack === album.preview ? (
//                     <Pause className="w-8 h-8 text-pink-500" />
//                   ) : (
//                     <Play className="w-8 h-8 text-pink-500 ml-1"/>
//                   )}
//                 </div>
//               </div>

//               {/* Tag */}
//               <div className="absolute top-4 left-4 right-4">
//                   <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-700">
//                   {album.type}
//                   </span>
//               </div>
//             </div>

//             {/* Album Info */}
//             <div className="p-6 bg-white/90 backdrop-blur-sm">
//               <div className="flex items-start justify-between mb-3">
//                 <div>
//                   <h3 className="text-2xl font-bold text-gray-800 mb-1">{album.title}</h3>
//                   <p className="text-sm text-gray-600">{album.year}</p>
//                 </div>
//                 <Music2 className="w-6 h-6 text-pink-400"/>
//               </div>

//               <div className="flex items-center justify-between text-sm text-gray-600">
//                 <span className="flex items-center gap-1">
//                   <Music  className="w-4 h-4"/>
//                   {album.tracks} track
//                 </span>
//                 <span className="font-semibold text-pink-500">{album.sales}</span>
//               </div>

//               {/* Progress Bar animation */}
//               {album.preview && currentTrack === album.preview && (
//                 <div>
//                   <input
//                       type="range"
//                       min={0}
//                       max={duration}
//                       value={currentTime}
//                       onChange={handleSeek}
//                       className="w-full accent-pink-500"
//                   />
//                   <div className="flex justify-between text-xs text-gray-500 mt-1">
//                     <span>{formatTime(currentTime)}</span>
//                     <span>{formatTime(duration)}</span>
//                   </div>
//                 </div>
//               )}

//               {/* <div className="mt-4 h-1 bg-pink-100 rounded-full overflow-hidden">
//                 <div className={`h-full bg-gradient-to-r from-pink-400 to-purple-400 w-0 group-hover:w-full transition-all duration-1000 ${
//                   currentTrack === album.preview
//                   ? "group-hover:w-full"
//                   : "group-hover:w-full"
//                 }`}></div>
//               </div> */}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   </section>
// );

export default Discography;
