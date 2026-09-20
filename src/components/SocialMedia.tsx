import { Instagram, Play } from 'lucide-react';
import SectionHeader from './SectionHeader';

function SocialMedia() {
  const posts = [
    {
      id: 1,
      title: 'Morocco Campaign',
      theme: 'Travel & Tourism Campaign',
      image: '/social media/Morocco conpangn.png',
      colors: ['#007FFF', '#FFDA29', '#E2725B'],
      caption: 'Discover the magic of Morocco 🇲🇦 #VisitMorocco #Travel',
      type: 'post',
    },
    {
      id: 2,
      title: 'Floral Vibes',
      theme: 'Lifestyle & Aesthetic Content',
      image: '/social media/floral vibes.png',
      colors: ['#FFB6C1', '#9CAF88', '#F5F5DC'],
      caption: 'Bloom where you are planted 🌸 #FloralVibes #Aesthetic',
      type: 'post',
    },
    {
      id: 3,
      title: 'Atlas Trekkers Group',
      theme: 'Adventure Tourism Campaign',
      image: '/social media/Atlas Trekkers Group touristing.png',
      colors: ['#2D5016', '#87CEEB', '#F4A460'],
      caption: 'Adventure awaits in the Atlas Mountains ⛰️ #AtlasTrekkers #Morocco',
      type: 'carousel',
    },
    {
      id: 4,
      title: 'Rabat Poster',
      theme: 'City Tourism Campaign',
      image: '/social media/Rabat poster.png',
      colors: ['#4169E1', '#FFD700', '#DC143C'],
      caption: 'Rabat - Where history meets modernity 🏛️ #Rabat #Morocco',
      type: 'post',
    },
  ];

  const highlights = [
    { name: 'Travel', icon: '✈️', color: 'from-orange-400 to-pink-500' },
    { name: 'Food', icon: '🍽️', color: 'from-yellow-400 to-red-500' },
    { name: 'Design', icon: '🎨', color: 'from-purple-400 to-blue-500' },
    { name: 'BTS', icon: '🎬', color: 'from-green-400 to-teal-500' },
    { name: 'Tips', icon: '💡', color: 'from-pink-400 to-purple-500' },
  ];

  return (
    <section id="social" className="py-24 px-6 bg-gray-50 dark:bg-transparent">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Social Media Campaigns"
          subtitle="Scroll-stopping visuals for digital platforms"
        />

        <div className="flex justify-center gap-6 mb-16 overflow-x-auto pb-4">
          {highlights.map((highlight) => (
            <div key={highlight.name} className="flex flex-col items-center gap-2 flex-shrink-0">
              <div
                className={`w-20 h-20 rounded-full bg-gradient-to-br ${highlight.color} flex items-center justify-center text-3xl border-4 border-white dark:border-gray-800 shadow-lg cursor-pointer hover:scale-110 transition-transform`}
              >
                {highlight.icon}
              </div>
              <span className="text-sm font-medium text-gray-900 dark:text-white">{highlight.name}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className={`group relative ${post.id >= 3 ? 'aspect-[4/5]' : 'aspect-square'} rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow bg-gray-200 dark:bg-gray-800`}
            >
              <img
                src={post.image}
                alt={post.title}
                className={`w-full h-full ${post.id >= 3 ? 'object-contain bg-white dark:bg-gray-900' : 'object-cover'} group-hover:scale-105 transition-transform duration-500`}
                onError={(e) => {
                  console.error(`Failed to load social media post: ${post.image}`);
                  e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23ddd" width="400" height="400"/%3E%3Ctext fill="%23999" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3EPost Not Found%3C/text%3E%3C/svg%3E';
                }}
                onLoad={() => console.log(`Loaded social post: ${post.image}`)}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    {post.type === 'reel' ? (
                      <Play size={20} fill="white" />
                    ) : post.type === 'carousel' ? (
                      <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-white" />
                        <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
                        <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
                      </div>
                    ) : (
                      <Instagram size={20} />
                    )}
                  </div>
                  <h3 className="font-bold text-lg mb-1">{post.title}</h3>
                  <p className="text-sm text-gray-300 mb-3">{post.theme}</p>
                  <p className="text-sm italic">{post.caption}</p>
                  <div className="flex gap-2 mt-3">
                    {post.colors.map((color, idx) => (
                      <div
                        key={idx}
                        className="w-6 h-6 rounded-full border-2 border-white"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {post.type === 'reel' && (
                <div className="absolute top-4 right-4">
                  <Play size={24} className="text-white drop-shadow-lg" fill="white" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Specialized in creating engaging content for Instagram, Facebook, and other social platforms.
          </p>
          <a
            href="mailto:mustaphaettaoussi405@gmail.com?subject=Social%20Media%20Campaign%20Inquiry&body=Hi,%20I'm%20interested%20in%20social%20media%20content%20creation."
            className="inline-block px-8 py-4 bg-gradient-to-r from-teal-500 to-amber-500 text-white font-semibold rounded-full hover:shadow-xl transform hover:scale-105 transition-all"
          >
            View More Campaigns
          </a>
        </div>
      </div>
    </section>
  );
}

export default SocialMedia;