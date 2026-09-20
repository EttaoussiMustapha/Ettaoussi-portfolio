import { useState } from 'react';
import SectionHeader from './SectionHeader';

// Define the Logo type
interface Logo {
  id: number;
  name: string;
  description: string;
  style: string;
  colors: string[];
  details: string;
  useCase: string;
  icon: React.ReactNode;
}

// Map logo names to the images in public/logos
const logoImages = {
  atlasAdventures: '/logos/Atlas adventure.png',
  binaryBloom: '/logos/binary bloom.png',
  crescentCafe: '/logos/Crescent Café.png',
  echoSound: '/logos/echo sound.png',
  inkAndIron: '/logos/ink and iron.png',
  kasbahKitchen: '/logos/kasbah kitchen.png',
  lunaLuxe: '/logos/luna luxe.png',
  mirageMedia: '/logos/mirage media.png',
  noorStudio: '/logos/noor studio.png',
  paletteProse: '/logos/planette and prose.png',
  rootBranch: '/logos/Root and Branch.png',
  velocityVentures: '/logos/velocity ventures.png',
};

function LogoDesign() {
  const [selectedLogo, setSelectedLogo] = useState<Logo | null>(null);

  const logos: Logo[] = [
    {
      id: 1,
      name: 'Crescent Cafe',
      description: 'Minimalist crescent moon shape integrated with a coffee cup silhouette',
      style: 'Line art, single continuous line forming both elements',
      colors: ['#3E2723', '#F5F5DC'],
      details: 'The steam from the coffee cup forms delicate stars',
      useCase: 'Arabic-inspired coffee house',
      icon: (
        <img
          src={logoImages.crescentCafe}
          alt="Crescent Café Logo"
          className="w-full h-full object-contain"
        />
      ),
    },
    {
      id: 2,
      name: 'Atlas Adventures',
      description: 'Geometric mountain peak with compass rose integrated into the base',
      style: 'Bold, angular, modern geometric',
      colors: ['#2D5016', '#87CEEB'],
      details: 'Subtle topographic line patterns within the mountain',
      useCase: 'Travel and outdoor adventure company',
      icon: (
        <img
          src={logoImages.atlasAdventures}
          alt="Atlas Adventures Logo"
          className="w-full h-full object-contain"
        />
      ),
    },
    {
      id: 3,
      name: 'Noor Studios',
      description: 'Abstract sun rays forming a camera aperture',
      style: 'Radial symmetry, sacred geometry influence',
      colors: ['#FFD700', '#CC5500'],
      details: 'Arabic calligraphy "نور" (light) subtly integrated into rays',
      useCase: 'Photography and videography studio',
      icon: (
        <img
          src={logoImages.noorStudio}
          alt="Noor Studios Logo"
          className="w-full h-full object-contain"
        />
      ),
    },
    {
      id: 4,
      name: 'Binary Bloom',
      description: 'Flower petals made from 0s and 1s, growing from a circuit board stem',
      style: 'Fusion of organic and digital, modern tech aesthetic',
      colors: ['#00F0FF', '#FF006E'],
      details: 'Pixelated gradient effect on petals',
      useCase: 'Tech startup focused on growth',
      icon: (
        <img
          src={logoImages.binaryBloom}
          alt="Binary Bloom Logo"
          className="w-full h-full object-contain"
        />
      ),
    },
    {
      id: 5,
      name: 'Palette & Prose',
      description: 'Paint brush tip transforming into a fountain pen nib',
      style: 'Elegant, flowing, artistic',
      colors: ['#800020', '#D4AF37'],
      details: 'Watercolor splash effect around the elements',
      useCase: 'Creative writing and design agency',
      icon: (
        <img
          src={logoImages.paletteProse}
          alt="Palette & Prose Logo"
          className="w-full h-full object-contain"
        />
      ),
    },
    {
      id: 6,
      name: 'Kasbah Kitchen',
      description: 'Moroccan archway with cooking utensils forming the columns',
      style: 'Traditional meets modern, architectural',
      colors: ['#E2725B', '#9CAF88'],
      details: 'Zellige tile pattern texture within the arch',
      useCase: 'Moroccan restaurant or food brand',
      icon: (
        <img
          src={logoImages.kasbahKitchen}
          alt="Kasbah Kitchen Logo"
          className="w-full h-full object-contain"
        />
      ),
    },
    {
      id: 7,
      name: 'Echo Sound',
      description: 'Sound wave visualization forming a listening ear',
      style: 'Fluid, dynamic, audio-visual',
      colors: ['#4A148C', '#00BCD4'],
      details: 'Frequency bars increasing in height toward ear center',
      useCase: 'Podcast network or audio production',
      icon: (
        <img
          src={logoImages.echoSound}
          alt="Echo Sound Logo"
          className="w-full h-full object-contain"
        />
      ),
    },
    {
      id: 8,
      name: 'Mirage Media',
      description: 'Layered, offset duplicate shapes creating a mirage effect',
      style: 'Abstract, contemporary, bold',
      colors: ['#FFBF00', '#FF7F50', '#E6E6FA'],
      details: 'Each layer slightly transparent, creating depth',
      useCase: 'Digital media and content creation company',
      icon: (
        <img
          src={logoImages.mirageMedia}
          alt="Mirage Media Logo"
          className="w-full h-full object-contain"
        />
      ),
    },
    {
      id: 9,
      name: 'Root & Branch',
      description: 'Tree with roots and branches mirrored, forming circular mandala',
      style: 'Symmetrical, organic, spiritual',
      colors: ['#8A9A5B', '#6F4E37'],
      details: 'Leaves shaped like various cultural symbols',
      useCase: 'Holistic wellness or family therapy center',
      icon: (
        <img
          src={logoImages.rootBranch}
          alt="Root & Branch Logo"
          className="w-full h-full object-contain"
        />
      ),
    },
    {
      id: 10,
      name: 'Velocity Ventures',
      description: 'Forward-pointing arrow composed of speed lines with V-shape',
      style: 'Sharp, aggressive, corporate',
      colors: ['#C0C0C0', '#C41E3A'],
      details: 'Motion blur effect on trailing edges',
      useCase: 'Investment firm or racing brand',
      icon: (
        <img
          src={logoImages.velocityVentures}
          alt="Velocity Ventures Logo"
          className="w-full h-full object-contain"
        />
      ),
    },
    {
      id: 11,
      name: 'Luna Luxe',
      description: 'Crescent moon cradling a diamond/gem shape',
      style: 'Elegant, feminine, luxury',
      colors: ['#B76E79', '#191970'],
      details: 'Subtle constellation dots connecting moon points',
      useCase: 'Jewelry or beauty brand',
      icon: (
        <img
          src={logoImages.lunaLuxe}
          alt="Luna Luxe Logo"
          className="w-full h-full object-contain"
        />
      ),
    },
    {
      id: 12,
      name: 'Ink & Iron',
      description: 'Vintage printing press with ink drops forming strong arm',
      style: 'Retro industrial with vintage badge elements',
      colors: ['#36454F', '#B7410E'],
      details: 'Distressed texture, badge border with ribbon banner',
      useCase: 'Tattoo studio or artisan print shop',
      icon: (
        <img
          src={logoImages.inkAndIron}
          alt="Ink & Iron Logo"
          className="w-full h-full object-contain"
        />
      ),
    },
  ];

  return (
    <section id="logos" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Logo Design & Brand Identity"
          subtitle="Crafting memorable marks that tell stories"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {logos.map((logo) => (
            <div
              key={logo.id}
              className="group relative bg-white dark:bg-gray-800/50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-gray-200 dark:border-gray-700"
              onClick={() => setSelectedLogo(logo)}
            >
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-900 rounded-xl flex items-center justify-center mb-6 overflow-hidden group-hover:scale-105 transition-transform duration-300 p-8">
                {logo.icon}
              </div>

              <h3 className="text-2xl font-bold mb-2">{logo.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{logo.style}</p>

              <div className="flex gap-2 mb-4">
                {logo.colors.map((color, idx) => (
                  <div
                    key={idx}
                    className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800 shadow-md"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>

              <div className="text-xs text-teal-400 font-medium">{logo.useCase}</div>
            </div>
          ))}
        </div>

        {selectedLogo && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedLogo(null)}
          >
            <div
              className="bg-white dark:bg-gray-800 rounded-3xl max-w-3xl w-full p-8 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-900 rounded-xl flex items-center justify-center mb-6 p-12">
                {selectedLogo.icon}
              </div>

              <h2 className="text-4xl font-bold mb-4">{selectedLogo.name}</h2>
              <p className="text-lg mb-4 text-gray-600 dark:text-gray-300">{selectedLogo.description}</p>

              <div className="space-y-4 mb-6">
                <div>
                  <h3 className="font-semibold text-teal-400 mb-2">Style</h3>
                  <p className="text-gray-600 dark:text-gray-400">{selectedLogo.style}</p>
                </div>

                <div>
                  <h3 className="font-semibold text-teal-400 mb-2">Details</h3>
                  <p className="text-gray-600 dark:text-gray-400">{selectedLogo.details}</p>
                </div>

                <div>
                  <h3 className="font-semibold text-teal-400 mb-2">Use Case</h3>
                  <p className="text-gray-600 dark:text-gray-400">{selectedLogo.useCase}</p>
                </div>

                <div>
                  <h3 className="font-semibold text-teal-400 mb-2">Color Palette</h3>
                  <div className="flex gap-4">
                    {selectedLogo.colors.map((color, idx) => (
                      <div key={idx} className="text-center">
                        <div
                          className="w-16 h-16 rounded-lg mb-2 shadow-lg"
                          style={{ backgroundColor: color }}
                        />
                        <code className="text-xs font-mono">{color}</code>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <button
                onClick={() => setSelectedLogo(null)}
                className="w-full py-3 bg-gradient-to-r from-teal-500 to-amber-500 text-white font-semibold rounded-xl hover:shadow-xl transition-shadow"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default LogoDesign;