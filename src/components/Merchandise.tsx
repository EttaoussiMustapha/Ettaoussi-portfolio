import { ShoppingBag } from 'lucide-react';
import SectionHeader from './SectionHeader';

function Merchandise() {
  const products = [
    {
      id: 1,
      name: 'Heritage Fusion T-Shirt',
      category: 'Apparel',
      description: 'Geometric Moroccan zellige pattern in circular mandala formation',
      colors: ['Black/Gold/Teal', 'Cream/Terracotta', 'Navy/Copper'],
      image: '/merch/heritage fusion.png',
      details: 'Premium organic cotton, oversized fit, metallic foil accents',
    },
    {
      id: 2,
      name: 'Creative Fuel Hoodie',
      category: 'Apparel',
      description: 'Brain made from creative tools illustration on back',
      colors: ['Charcoal', 'Sand', 'Forest Green', 'Burgundy'],
      image: '/merch/Creative Fuel.png',
      details: 'Heavyweight fleece, embroidered logo, thumb holes',
    },
    {
      id: 3,
      name: 'Creative Fuel 2 Hoodie',
      category: 'Apparel',
      description: 'Alternative creative fuel design with artistic elements',
      colors: ['Charcoal', 'Sand', 'Forest Green', 'Burgundy'],
      image: '/merch/Creative fuel 2.png',
      details: 'Heavyweight fleece, embroidered logo, premium quality',
    },
    {
      id: 4,
      name: 'Visionary Sunglasses',
      category: 'Accessories',
      description: 'Premium navigator frames with geometric temple design',
      colors: ['Golden Hour', 'Blue Dream', 'Desert Rose'],
      image: '/merch/visionary glasses.png',
      details: 'UV400 protection, acetate frames, hard case included',
    },
    {
      id: 5,
      name: 'Fuel For Creation Mug',
      category: 'Home',
      description: 'Coffee cup with inspiring creative illustration',
      colors: ['Black/Gold', 'White/Emerald', 'Terracotta/Cream'],
      image: '/merch/fuel for creation.png',
      details: '12oz ceramic, matte exterior, surprise message inside',
    },
    {
      id: 6,
      name: 'Meditative Moments Tea Set',
      category: 'Home',
      description: 'Porcelain teapot and cups with geometric pattern, wooden tray',
      colors: ['White/Teal/Gold'],
      image: '/merch/Meditative Moments Tea Set.png',
      details: '32oz teapot, 2 double-wall cups, walnut tray, bamboo box',
    },
  ];

  return (
    <section id="merch" className="py-24 px-6 bg-white dark:bg-transparent">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Brand Identity & Merchandise"
          subtitle="From concept to physical touchpoints"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white dark:bg-gray-800/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className="relative aspect-square overflow-hidden bg-gray-100 dark:bg-gray-900">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    console.error(`Failed to load image: ${product.image}`);
                    e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23ddd" width="400" height="400"/%3E%3Ctext fill="%23999" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3EImage Not Found%3C/text%3E%3C/svg%3E';
                  }}
                  onLoad={() => console.log(`Loaded: ${product.image}`)}
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-900 dark:text-white">
                    {product.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <button className="w-full py-3 bg-white text-gray-900 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors">
                    <ShoppingBag size={20} />
                    View Details
                  </button>
                </div>
              </div>

              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{product.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{product.description}</p>

                <div className="space-y-2">
                  <p className="text-xs font-semibold text-teal-400">AVAILABLE COLORS</p>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs text-gray-900 dark:text-gray-200"
                      >
                        {color}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-xs text-gray-500 dark:text-gray-500 pt-2 border-t border-gray-200 dark:border-gray-700">
                  {product.details}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-teal-500 to-amber-500 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Custom Merchandise Design</h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Need branded merchandise for your business? I create cohesive product lines that extend
            your brand identity into the physical world.
          </p>
          <a 
            href="mailto:mustaphaettaoussi405@gmail.com?subject=Merchandise Design Inquiry&body=Hi, I'm interested in custom merchandise design."
            className="inline-block px-8 py-4 bg-white text-gray-900 font-semibold rounded-full hover:shadow-xl transform hover:scale-105 transition-all cursor-pointer"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
}

export default Merchandise;