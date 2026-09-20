import { Pencil, X } from 'lucide-react';
import { useState } from 'react';
import SectionHeader from './SectionHeader';

function Illustrations() {
  const [selectedArt, setSelectedArt] = useState<number | null>(null);
  const artworks = [
    {
      id: 1,
      title: 'Sunset Dining',
      medium: 'Pencil & Colored Pencil',
      image: '/handdrawing/2peopledinningwithacrazysun.png',
      rotation: -4,
      description: 'A whimsical dinner party where the sun joins as an uninvited guest',
    },
    {
      id: 2,
      title: 'Studies in Expression',
      medium: 'Pencil Sketches',
      image: '/handdrawing/blackandwhite%20wimens.jpg',
      rotation: 2,
      description: 'Capturing different moods and personalities through portrait practice',
    },
    {
      id: 3,
      title: 'Grace & Elegance',
      medium: 'Pencil Portrait',
      image: '/handdrawing/blackwomen.jpg',
      rotation: -3,
      description: 'A study in confidence and natural beauty',
    },
    {
      id: 4,
      title: 'Playful Spirits',
      medium: 'Pencil Sketches',
      image: '/handdrawing/cutegirls.jpg',
      rotation: 1,
      description: 'Moments of joy and innocence captured in simple lines',
    },
    {
      id: 5,
      title: 'Exotic Nature',
      medium: 'Colored Pencil',
      image: '/handdrawing/dragonfruit.jpg',
      rotation: 3,
      description: 'The vibrant geometry of tropical fruit',
    },
    {
      id: 6,
      title: 'Edible Bouquet',
      medium: 'Pencil & Colored Pencil',
      image: "/handdrawing/eatingflower'sonaplate.png",
      rotation: -2,
      description: 'When nature becomes cuisine in a surreal still life',
    },
    {
      id: 7,
      title: 'Fresh Harvest',
      medium: 'Pencil Drawing',
      image: '/handdrawing/fruitdrawing.jpg',
      rotation: 2,
      description: 'Simple line work celebrating organic forms',
    },
    {
      id: 8,
      title: 'Inner Structures',
      medium: 'Pencil Sketch',
      image: '/handdrawing/humainhead.jpg',
      rotation: -1,
      description: 'Exploring anatomy through artistic observation',
    },
    {
      id: 9,
      title: 'Figure Study',
      medium: 'Pencil Drawing',
      image: '/handdrawing/humanbody.jpg',
      rotation: 1,
      description: 'Understanding form through careful observation',
    },
    {
      id: 10,
      title: 'Unexpected Gentleness',
      medium: 'Pencil & Colored Pencil',
      image: "/handdrawing/monster's hands broshing and doing parfule to a little girl.png",
      rotation: -3,
      description: 'A fairytale moment of care and kindness',
    },
    {
      id: 11,
      title: 'Sketchbook Pages',
      medium: 'Pencil Sketches',
      image: '/handdrawing/randomsketchs.jpg',
      rotation: 2,
      description: 'Ideas flowing freely across the page',
    },
    {
      id: 12,
      title: 'Practice Makes Progress',
      medium: 'Pencil Sketches',
      image: '/handdrawing/randomsketchsagain.jpg',
      rotation: -2,
      description: 'The continuous journey of improving through drawing',
    },
  ];

  return (
    <section id="art" className="py-24 px-6 bg-gray-50 dark:bg-transparent">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="From Hand to Heart" subtitle="Analog art in a digital world" />

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {artworks.map((art, index) => (
              <div
                key={art.id}
                className="group relative cursor-pointer"
                style={{
                  transform: `rotate(${art.rotation}deg) translateY(${index % 2 === 0 ? '20px' : '-20px'})`,
                }}
                onClick={() => setSelectedArt(art.id)}
              >
                <div className="bg-white dark:bg-gray-800 p-6 shadow-2xl hover:shadow-3xl transform hover:scale-110 hover:rotate-0 hover:z-10 transition-all duration-300 relative">
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full p-2">
                      <Pencil size={16} className="text-teal-500" />
                    </div>
                  </div>

                  <div className="aspect-square bg-gray-100 dark:bg-gray-900 mb-4 overflow-hidden">
                    <img
                      src={art.image}
                      alt={art.title}
                      className="w-full h-full object-cover filter sepia-[0.3] group-hover:sepia-0 transition-all duration-500"
                      onError={(e) => {
                        console.error(`Failed to load artwork: ${art.image}`);
                        e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23ddd" width="400" height="400"/%3E%3Ctext fill="%23999" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3EArtwork Not Found%3C/text%3E%3C/svg%3E';
                      }}
                      onLoad={() => console.log(`Loaded artwork: ${art.image}`)}
                    />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-handwriting text-xl text-gray-800 dark:text-gray-200">
                      {art.title}
                    </h3>
                    <p className="text-xs text-teal-600 dark:text-teal-400 font-semibold uppercase tracking-wide">
                      {art.medium}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      {art.description}
                    </p>
                  </div>

                  <div
                    className="absolute top-2 left-2 w-8 h-8 opacity-20"
                    style={{
                      backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, currentColor 2px, currentColor 4px)',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {selectedArt && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedArt(null)}
          >
            <button
              className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              onClick={() => setSelectedArt(null)}
            >
              <X size={24} className="text-white" />
            </button>

            <div
              className="max-w-5xl w-full max-h-[90vh] overflow-y-auto bg-gray-900 rounded-3xl p-8"
              onClick={(e) => e.stopPropagation()}
            >
              {artworks
                .filter((a) => a.id === selectedArt)
                .map((art) => (
                  <div key={art.id} className="space-y-6">
                    <div className="rounded-xl overflow-hidden flex items-center justify-center bg-black">
                      <img src={art.image} alt={art.title} className="w-full h-auto object-contain" />
                    </div>

                    <div>
                      <h2 className="text-3xl font-bold text-white mb-2">{art.title}</h2>
                      <p className="text-sm text-teal-400 mb-6 uppercase tracking-wide font-semibold">{art.medium}</p>
                      <p className="text-lg leading-relaxed text-gray-300">{art.description}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

        <div className="mt-24 text-center max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-teal-500/10 to-amber-500/10 rounded-3xl p-12 border border-teal-500/20">
            <Pencil size={48} className="mx-auto mb-6 text-teal-500" />
            <h3 className="text-3xl font-bold mb-4">Let's Create Together</h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              Every project tells a story. What's yours? Whether you need branding, visual content,
              or custom artwork, I'm here to bring your vision to life with passion and precision.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="mailto:mustaphaettaoussi405@gmail.com?subject=Project Inquiry&body=Hi, I'd like to discuss a project with you."
                className="px-8 py-4 bg-gradient-to-r from-teal-500 to-amber-500 text-white font-semibold rounded-full hover:shadow-xl transform hover:scale-105 transition-all"
              >
                Start a Project
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-full border-2 border-gray-300 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-500 transition-colors cursor-pointer"
              >
                View Full Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Illustrations;