import { Award } from 'lucide-react';
import { useState } from 'react';
import SectionHeader from './SectionHeader';

function FilmPosters() {
  const [selectedPoster, setSelectedPoster] = useState<number | null>(null);

  const posters = [
    {
      id: 1,
      title: 'صدى',
      englishTitle: 'Sadaa (Echo)',
      language: 'Arabic Drama',
      tagline: 'بعض الأصوات لا تموت أبداً',
      taglineEng: 'Some voices never die',
      description: 'Close-up of half a face emerging from shadows, dissolving into Arabic calligraphy sound waves',
      colors: ['#1a1a1a', '#D4AF37', '#FFD700'],
      image: '/poster/SADAA.png',
      awards: 'Official Selection',
    },
    {
      id: 2,
      title: 'Entre Deux',
      englishTitle: 'Between Two',
      language: 'French Psychological Thriller',
      tagline: 'La vérité a deux visages',
      taglineEng: 'Truth has two faces',
      description: 'Split composition with two faces in profile, shattered mirror effect center',
      colors: ['#4682B4', '#708090', '#8B0000'],
      image: '/poster/entre 2.png',
      awards: 'Prix du Jury - Festival de Cannes',
    },
    {
      id: 3,
      title: 'The Last Light',
      englishTitle: 'The Last Light',
      language: 'English Sci-Fi',
      tagline: 'When darkness falls, humanity rises',
      taglineEng: '',
      description: 'Silhouette facing dying supernova over abandoned futuristic cityscape',
      colors: ['#FF6347', '#4B0082', '#00BFFF'],
      image: '/poster/THE last night.png',
      awards: 'Best Visual Effects',
    },
    {
      id: 4,
      title: 'يوم عادي',
      englishTitle: 'Yawm Aadi (Ordinary Day)',
      language: 'Arabic Comedy',
      tagline: 'ليس كل الأيام عادية',
      taglineEng: 'Not all days are ordinary',
      description: 'Illustrated character surrounded by chaotic situation vignettes',
      colors: ['#FFD700', '#40E0D0', '#FF6B6B'],
      image: '/poster/yawm 3adi.png',
      awards: 'Audience Choice Award',
    },
    {
      id: 5,
      title: 'Silence Blanc',
      englishTitle: 'White Silence',
      language: 'French Art Film',
      tagline: 'Dans le silence, on entend tout',
      taglineEng: 'In silence, we hear everything',
      description: 'Minimalist lone figure in snow-covered landscape with massive negative space',
      colors: ['#F8F8FF', '#B0C4DE', '#D2B48C'],
      image: '/poster/silence blanc.png',
      awards: 'Best Cinematography',
    },
    {
      id: 6,
      title: 'Crossroads',
      englishTitle: 'Crossroads',
      language: 'English Urban Drama',
      tagline: 'Every choice echoes',
      taglineEng: '',
      description: 'City intersection from above with four characters in corners, stories converging',
      colors: ['#696969', '#FF1493', '#00BFFF'],
      image: '/poster/crossrods.png',
      awards: 'Best Ensemble Cast',
    },
    {
      id: 7,
      title: 'رحلة',
      englishTitle: 'Rihla (Journey)',
      language: 'Arabic Adventure',
      tagline: 'أعظم المغامرات تبدأ بخطوة واحدة',
      taglineEng: 'Greatest adventures begin with one step',
      description: 'Map-like illustration with path through desert to mountains to ocean',
      colors: ['#D2691E', '#228B22', '#4169E1'],
      image: '/poster/ri7la.png',
      awards: 'Best Original Score',
    },
    {
      id: 8,
      title: 'Minuit à Paris',
      englishTitle: 'Midnight in Paris',
      language: 'French Romance',
      tagline: 'Certains moments ne se répètent jamais',
      taglineEng: 'Some moments never repeat',
      description: 'Eiffel Tower silhouette with couple and bokeh city lights creating magic',
      colors: ['#191970', '#FFD700', '#FFB6C1'],
      image: '/poster/minuit a paris.png',
      awards: 'Best Romance',
    },
  ];

  return (
    <section id="films" className="py-24 px-6 bg-gray-50 dark:bg-transparent">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Film & Visual Storytelling"
          subtitle="Cinematic narratives through poster design"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {posters.map((poster) => (
            <div
              key={poster.id}
              className="group relative cursor-pointer"
              onClick={() => setSelectedPoster(poster.id)}
            >
              <div className="relative aspect-[2/3] rounded-xl overflow-hidden shadow-2xl transform group-hover:-translate-y-2 group-hover:rotate-1 transition-all duration-300">
                <img
                  src={poster.image}
                  alt={poster.englishTitle}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    console.error(`Failed to load poster: ${poster.image}`);
                    e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="600"%3E%3Crect fill="%23333" width="400" height="600"/%3E%3Ctext fill="%23999" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3EPoster Not Found%3C/text%3E%3C/svg%3E';
                  }}
                  onLoad={() => console.log(`Loaded poster: ${poster.image}`)}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-95 transition-opacity">
                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    <div>
                      {poster.awards && (
                        <div className="flex items-center gap-2 mb-3">
                          <Award size={16} className="text-amber-400" />
                          <span className="text-xs text-amber-400 font-semibold">
                            {poster.awards}
                          </span>
                        </div>
                      )}
                    </div>

                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">{poster.title}</h3>
                      <p className="text-sm text-gray-300 mb-3">{poster.language}</p>
                      <p className="text-sm text-gray-400 italic mb-4">
                        {poster.tagline}
                        {poster.taglineEng && (
                          <>
                            <br />
                            <span className="text-xs">{poster.taglineEng}</span>
                          </>
                        )}
                      </p>
                      <div className="flex gap-2">
                        {poster.colors.map((color, idx) => (
                          <div
                            key={idx}
                            className="w-6 h-6 rounded-full border-2 border-white/50"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedPoster && (
          <div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedPoster(null)}
          >
            <div
              className="max-w-4xl w-full bg-gray-900 rounded-3xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div className="aspect-[2/3] rounded-xl overflow-hidden">
                  <img
                    src={posters.find((p) => p.id === selectedPoster)?.image}
                    alt={posters.find((p) => p.id === selectedPoster)?.englishTitle}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex flex-col justify-between">
                  {posters
                    .filter((p) => p.id === selectedPoster)
                    .map((poster) => (
                      <div key={poster.id}>
                        <h2 className="text-4xl font-bold mb-2 text-white">{poster.title}</h2>
                        <p className="text-xl text-gray-400 mb-4">{poster.englishTitle}</p>
                        <p className="text-teal-400 font-semibold mb-6">{poster.language}</p>

                        <div className="space-y-4 mb-6">
                          <div>
                            <h3 className="text-sm font-bold text-gray-500 mb-2">TAGLINE</h3>
                            <p className="text-gray-300 italic">
                              {poster.tagline}
                              {poster.taglineEng && (
                                <>
                                  <br />
                                  <span className="text-sm">{poster.taglineEng}</span>
                                </>
                              )}
                            </p>
                          </div>

                          <div>
                            <h3 className="text-sm font-bold text-gray-500 mb-2">CONCEPT</h3>
                            <p className="text-gray-300">{poster.description}</p>
                          </div>

                          {poster.awards && (
                            <div className="flex items-center gap-2 pt-4 border-t border-gray-800">
                              <Award size={20} className="text-amber-400" />
                              <span className="text-amber-400 font-semibold">{poster.awards}</span>
                            </div>
                          )}

                          <div>
                            <h3 className="text-sm font-bold text-gray-500 mb-3">COLOR PALETTE</h3>
                            <div className="flex gap-3">
                              {poster.colors.map((color, idx) => (
                                <div key={idx} className="text-center">
                                  <div
                                    className="w-12 h-12 rounded-lg mb-2"
                                    style={{ backgroundColor: color }}
                                  />
                                  <code className="text-xs text-gray-500">{color}</code>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}

                  <button
                    onClick={() => setSelectedPoster(null)}
                    className="w-full py-3 bg-gradient-to-r from-teal-500 to-amber-500 text-white font-semibold rounded-xl hover:shadow-xl transition-shadow"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default FilmPosters;