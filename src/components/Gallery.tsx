import { ArrowRight, Camera, ExternalLink, Heart } from "lucide-react";
import { useState } from "react";

interface GalleryItem {
  title: string;
  color: string;
  height: string;
  image: string;
  index?: number;
}

interface GalleryProps {
  hoverCard: number | null;
  setHoverCard: (value: number | null) => void;
  scrollToSection: (sectionId: string) => void;
}

const Gallery = ({setHoverCard }: GalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const gallery: GalleryItem[] = [
    {
      title: "Stage Charisma",
      color: "from-pink-200 to-rose-300",
      height: "h-80",
      image: "/Images/stageCharisma.jpg",
    },
    {
      title: "Magazine Cover",
      color: "from-sky-200 to-blue-300",
      height: "h-64",
      image: "/Images/magazineCover.jpg",
    },
    {
      title: "Red Carpet",
      color: "from-rose-200 to-pink-300",
      height: "h-96",
      image: "/Images/redCarpet.jpg",
    },
    {
      title: "Music Video",
      color: "from-amber-200 to-orange-300",
      height: "h-72",
      image: "/Images/musicVideo.jpg",
    },
    {
      title: "Dance Practice",
      color: "from-emerald-200 to-teal-300",
      height: "h-80",
      image: "/Images/dancePractice.jpg",
    },
    {
      title: "Behind the Scenes",
      color: "from-violet-200 to-purple-300",
      height: "h-64",
      image: "/Images/behindTheScene.jpg",
    },
    {
      title: "Fashion Show",
      color: "from-fuchsia-200 to-pink-300",
      height: "h-88",
      image: "/Images/fashion.jpg",
    },
    {
      title: "Photoshoot",
      color: "from-indigo-200 to-purple-300",
      height: "h-72",
      image: "/Images/photoshoot.jpg",
    },
    {
      title: "Concert",
      color: "from-cyan-200 to-sky-300",
      height: "h-96",
      image: "/Images/karinaConcert.jpg",
    },
    {
      title: "Award Show",
      color: "from-rose-300 to-pink-400",
      height: "h-68",
      image: "/Images/karinaAward.jpg",
    },
    {
      title: "Music Show",
      color: "from-purple-300 to-violet-400",
      height: "h-76",
      image: "/Images/redCarpet.jpg",
    },
    {
      title: "Dance Cover",
      color: "from-teal-200 to-emerald-300",
      height: "h-84",
      image: "/Images/karinaMusicShow.jpg",
    },
  ];

  const openModal = (item: GalleryItem, index: number) => {
    setSelectedImage({ ...item, index });
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <section id="gallery" className="relative py-32 px-4 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="py-3 text-5xl md:text-6xl font-bold bg-gradient-to-br from-rose-400 via-pink-400 to-fuchsia-400 bg-clip-text text-transparent mb-4">
              Visual Gallery
            </h2>
            <p className="text-gray-600 text-lg">
              Stunning moments captured in time
            </p>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {gallery.map((item, index) => (
              <div key={index} className="break-inside-avoid mb-6 scroll-animate">
                <div
                  className={`group relative ${item.height} rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]`}
                  onMouseEnter={() => setHoverCard(index)}
                  onMouseLeave={() => setHoverCard(null)}
                  onClick={() => openModal(item, index)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/20 backdrop-blur-0 group-hover:backdrop-blur-sm transition-all duration-500"></div>

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-10">
                    <Camera className="w-16 h-16 text-white drop-shadow-lg" />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white/95 via-white/90 to-transparent backdrop-blur-md transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-xl font-bold text-gray-800 mb-2">
                      {item.title}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">
                        View Full Size
                      </span>
                      <ExternalLink className="w-5 h-5 text-pink-500" />
                    </div>
                  </div>

                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10">
                    <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                      <Heart className="w-5 h-5 text-pink-500 group-hover:fill-pink-500 transition-all" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-400 to-purple-400 text-white rounded-full font-semibold hover:shadow-xl hover:shadow-pink-300/50 transition-all duration-300 hover:scale-105 group">
              View Full Gallery
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-lg z-50 flex items-center justify-center p-4 animate-fade-in2"
          onClick={closeModal}
        >
          <div
            className="relative max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute -top-4 -right-4 md:top-4 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white flex items-center justify-center shadow-xl hover:scale-110 transition-all duration-300 z-10"
            >
              <svg
                className="w-6 h-6 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-full max-h-[90vh] object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
