import { Camera, X } from 'lucide-react';
import { useState } from 'react';
import SectionHeader from './SectionHeader';

function Photography() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  const photos = [
    {
      id: 1,
      title: 'Beauty of the Sea',
      orientation: 'landscape',
      image: '/pictures/beautyoftheseewithcamera.jpg',
      caption: 'Where sky meets water',
      rotation: 2,
      story: `The ocean has always been my place of meditation. This moment, captured at dawn, shows the infinite beauty where sea and sky become one. The gentle waves, the soft light, the endless horizon - it's a reminder of how small we are and how vast the world is. I chase these moments because they ground me, they remind me to breathe, to be present, to appreciate the simple majesty of nature.`,
      exif: 'Canon 6D • 50mm • f/8 • ISO 200',
    },
    {
      id: 2,
      title: 'Bird on Sky',
      orientation: 'portrait',
      image: '/pictures/bird%20on%20sky%20by%20phone.jpg',
      caption: 'Freedom visualized',
      rotation: -2,
      story: `There's something profoundly liberating about photographing birds in flight. This single frame, captured in a fleeting moment, represents pure freedom - no boundaries, no constraints, just the endless possibility of the sky. I chase these shots because they remind me why I became a photographer: to capture the ephemeral, the beautiful, the moments that exist for mere seconds but resonate for lifetimes.`,
      exif: 'Phone • f/1.8 • ISO 400',
    },
    {
      id: 3,
      title: 'Curious Cat',
      orientation: 'landscape',
      image: '/pictures/catbycamera.jpg',
      caption: 'Eyes that speak',
      rotation: 1,
      story: `Cats have this incredible ability to be both present and distant at the same time. This street cat in the medina watched me for minutes, neither afraid nor overly friendly, just observing with that timeless feline wisdom. I love photographing animals because they're authentic in a way humans sometimes struggle to be - no pretense, just pure existence in the moment.`,
      exif: 'Canon 6D • 85mm • f/2.8 • ISO 800',
    },
    {
      id: 4,
      title: 'Chellah Rabat',
      orientation: 'portrait',
      image: '/pictures/chalainrabatwithphone.jpg',
      caption: 'Ancient whispers',
      rotation: -1,
      story: `Chellah in Rabat is a place where history breathes. Walking through these ancient ruins, I feel connected to centuries of stories - Roman settlers, medieval dynasties, the passage of time itself. This photograph captures not just architecture, but the weight of history, the beauty of decay, the poetry of ruins. Every stone has witnessed generations, every arch frames centuries.`,
      exif: 'Phone • f/1.9 • ISO 320',
    },
    {
      id: 5,
      title: 'City Beach',
      orientation: 'landscape',
      image: '/pictures/citybeachwith%20camera.jpg',
      caption: 'Urban oasis',
      rotation: 2,
      story: `Where the city meets the sea, life takes on a different rhythm. This beach, nestled against the urban landscape, represents the duality of Moroccan coastal cities - modern and timeless, bustling and peaceful. I love how the architecture frames the natural beauty, creating a perfect harmony between human ambition and nature's constancy.`,
      exif: 'Canon 6D • 35mm • f/5.6 • ISO 400',
    },
    {
      id: 6,
      title: 'Fishing in the Sea',
      orientation: 'landscape',
      image: '/pictures/fishingintheseewithcamera.jpg',
      caption: 'Patient pursuit',
      rotation: -3,
      story: `Fishing is meditation in action. This fisherman, standing in the gentle surf, embodies patience and connection to tradition. Morocco's fishing heritage runs deep, and I'm drawn to capturing these moments where modern life hasn't erased ancient practices. The silhouette against the water, the timeless posture - this is photography as documentation of cultural continuity.`,
      exif: 'Canon 6D • 100mm • f/4 • ISO 400',
    },
    {
      id: 7,
      title: 'Moroccan Fountain',
      orientation: 'portrait',
      image: '/pictures/fountainemoroccanbycamera.jpg',
      caption: 'Water of life',
      rotation: 0,
      story: `Fountains in Morocco are more than decorative elements - they're gathering places, sources of life, architectural masterpieces that combine form and function beautifully. This fountain, with its intricate zellige tilework and flowing water, represents the Islamic tradition of water as a precious gift. I waited for the perfect light to highlight the texture of the tiles and the movement of the water, creating a sense of timeless tranquility.`,
      exif: 'Canon 6D • 50mm • f/4 • ISO 200',
    },
    {
      id: 8,
      title: 'Kasbah Al Oudaya',
      orientation: 'portrait',
      image: '/pictures/kasbatalwdayawithphone.jpg',
      caption: 'Blue dreams',
      rotation: 2,
      story: `The iconic blue and white streets of Kasbah Al Oudaya are a photographer's dream. Every corner is a composition, every doorway a frame within a frame. I love how the Mediterranean color palette creates such a serene atmosphere. This is Morocco's coastal charm distilled into pure visual poetry - simple, beautiful, unforgettable.`,
      exif: 'Phone • f/1.9 • ISO 250',
    },
    {
      id: 9,
      title: 'Morocco Flags',
      orientation: 'landscape',
      image: '/pictures/morocco%20flagsbycamera.jpg',
      caption: 'Pride in motion',
      rotation: -2,
      story: `The Moroccan flag dancing in the wind is more than patriotism - it's identity, it's belonging, it's the visual representation of a nation's soul. I love capturing flags in motion because they're never static; like the country they represent, they're constantly moving, evolving, responding to the forces around them. The red symbolizes strength and valor, the green star represents hope and joy - all visible in a single flutter of fabric.`,
      exif: 'Canon 6D • 70mm • f/8 • ISO 200',
    },
    {
      id: 10,
      title: 'Sacred Architecture',
      orientation: 'portrait',
      image: '/pictures/mosquebycamera.jpg',
      caption: 'Reaching for the divine',
      rotation: 1,
      story: `Mosques are architectural poetry, spaces designed to elevate the spirit and bring humans closer to the divine. This shot captures not just a building, but a philosophy - the idea that beauty and faith are inseparable. The geometric precision, the reaching minarets, the play of light and shadow - everything is intentional, everything serves a purpose beyond the purely functional. I approach photographing sacred spaces with reverence and patience.`,
      exif: 'Canon 6D • 24mm • f/11 • ISO 100',
    },
    {
      id: 11,
      title: 'Old Moroccan Man',
      orientation: 'portrait',
      image: '/pictures/old%20moroccan%20manbyphone.jpg',
      caption: 'Maps of experience',
      rotation: -1,
      story: `In the weathered faces of elders, I see maps of lived experiences - every wrinkle a journey, every line a memory. This gentleman sat in the afternoon light, and for a moment, allowed me to capture decades of stories written in his features. I'm fascinated by portraits that honor age and experience rather than hiding them. These faces tell the truth about life - its joys, its hardships, its wisdom earned through time.`,
      exif: 'Phone • f/1.9 • ISO 320',
    },
    {
      id: 12,
      title: 'Purple Flower',
      orientation: 'square',
      image: '/pictures/purpleflowerwithcamera.jpg',
      caption: 'Delicate beauty',
      rotation: 2,
      story: `Sometimes the smallest subjects create the most powerful photographs. This purple flower, captured in soft natural light, represents nature's exquisite attention to detail. Every petal, every gradient of color, every curve - it's a masterclass in design that no human could improve upon. Macro photography teaches you to see the extraordinary in the ordinary.`,
      exif: 'Canon 6D • 100mm Macro • f/2.8 • ISO 400',
    },
    {
      id: 13,
      title: 'Running Cat',
      orientation: 'landscape',
      image: '/pictures/runningcatwithcamera.jpg',
      caption: 'Motion and grace',
      rotation: -2,
      story: `Capturing a cat in motion requires patience, anticipation, and a bit of luck. This frame, frozen mid-stride, shows the incredible athleticism and grace of these animals. The blur of movement, the focused expression, the suspended moment - this is what I live for as a photographer. The perfect intersection of preparation and spontaneity.`,
      exif: 'Canon 6D • 70mm • f/4 • 1/500s • ISO 800',
    },
    {
      id: 14,
      title: 'Street Sign',
      orientation: 'square',
      image: '/pictures/streetsignwithcamera.jpg',
      caption: 'Urban typography',
      rotation: 0,
      story: `I'm fascinated by the typography and design of everyday urban elements. This street sign, weathered by time and elements, has become an unintentional work of art. The peeling paint, the faded letters, the texture - these imperfections tell stories of countless passersby, of seasons changing, of a city constantly evolving. Beauty exists everywhere if you know where to look.`,
      exif: 'Canon 6D • 50mm • f/5.6 • ISO 400',
    },
    {
      id: 15,
      title: 'Vintage',
      orientation: 'square',
      image: '/pictures/vintagebyphone.jpg',
      caption: 'Echoes of yesterday',
      rotation: 3,
      story: `There's a haunting beauty in vintage objects - evidence of lives lived, stories untold, moments frozen in time. This piece caught my eye because it represents a connection to the past, a reminder that what we consider modern today will be vintage tomorrow. I'm drawn to these subjects because they force us to slow down, to appreciate craftsmanship and durability over disposability. Every scratch, every patina mark is a story.`,
      exif: 'Phone • f/2.0 • ISO 640',
    },
    {
      id: 16,
      title: 'Ocean Waves',
      orientation: 'landscape',
      image: '/pictures/waveswithcamera.jpg',
      caption: 'Liquid power',
      rotation: -1,
      story: `Waves are nature's eternal rhythm, the heartbeat of the ocean. I'm endlessly fascinated by trying to capture their power and grace in a single frozen moment. This photograph shows the dramatic force of the Atlantic meeting Morocco's coast - spray, motion, raw energy contained in one decisive moment. The challenge is capturing both the violence and the beauty simultaneously.`,
      exif: 'Canon 6D • 85mm • f/8 • 1/1000s • ISO 400',
    },
    {
      id: 17,
      title: 'Wild Flowers',
      orientation: 'landscape',
      image: '/pictures/wildflowerswithcamera.jpg',
      caption: 'Nature unscripted',
      rotation: 2,
      story: `Wild flowers have a beauty that cultivated gardens can never quite match - there's an authenticity, a randomness, a sense of life flourishing on its own terms. This field, bathed in golden hour light, represents nature's artistry. I love photographing wildflowers because they're a reminder that beauty doesn't need human intervention to be profound. Sometimes the best art is the art of observation.`,
      exif: 'Canon 6D • 50mm • f/4 • ISO 200',
    },
  ];

  return (
    <section id="photos" className="py-24 px-6 bg-white dark:bg-transparent">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="Through the Lens" subtitle="Capturing moments, crafting memories" />

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="break-inside-avoid group cursor-pointer"
              style={{ transform: `rotate(${photo.rotation}deg)` }}
              onClick={() => setSelectedPhoto(photo.id)}
            >
              <div className="bg-white dark:bg-gray-800 p-4 shadow-xl hover:shadow-2xl transform hover:scale-105 hover:rotate-0 transition-all duration-300">
                <div
                  className={`relative overflow-hidden mb-3 ${
                    photo.orientation === 'portrait'
                      ? 'aspect-[3/4]'
                      : photo.orientation === 'square'
                        ? 'aspect-square'
                        : 'aspect-[4/3]'
                  }`}
                >
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    onError={(e) => {
                      console.error(`Failed to load photo: ${photo.image}`);
                      e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23333" width="400" height="400"/%3E%3Ctext fill="%23999" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3EPhoto Not Found%3C/text%3E%3C/svg%3E';
                    }}
                    onLoad={() => console.log(`Loaded photo: ${photo.image}`)}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <Camera className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={32} />
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="font-handwriting text-lg text-gray-700 dark:text-gray-300">
                    {photo.caption}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-500">{photo.exif}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedPhoto && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedPhoto(null)}
          >
            <button
              className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              onClick={() => setSelectedPhoto(null)}
            >
              <X size={24} className="text-white" />
            </button>

            <div
              className="max-w-5xl w-full max-h-[90vh] overflow-y-auto bg-gray-900 rounded-3xl p-8"
              onClick={(e) => e.stopPropagation()}
            >
              {photos
                .filter((p) => p.id === selectedPhoto)
                .map((photo) => (
                  <div key={photo.id} className="space-y-6">
                    <div className="rounded-xl overflow-hidden flex items-center justify-center bg-black">
                      <img src={photo.image} alt={photo.title} className="w-full h-auto object-contain" />
                    </div>

                    <div>
                      <h2 className="text-3xl font-bold text-white mb-2">{photo.title}</h2>
                      <p className="text-sm text-gray-400 mb-6">{photo.exif}</p>
                      <p className="text-lg leading-relaxed text-gray-300">{photo.story}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Photography;