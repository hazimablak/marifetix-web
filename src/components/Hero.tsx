import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    // 🔥 bg-brandLight yanına dark:bg-[#0a0a0a] ekledik
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center bg-brandLight dark:bg-[#0a0a0a] overflow-hidden pt-10 pb-20 transition-colors duration-300">
      
      {/* Arka Plan Grid Deseni */}
      <div className="absolute inset-0 z-0 opacity-20 dark:opacity-10" style={{ backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="container mx-auto px-6 z-10 flex flex-col md:flex-row items-center justify-between">
        
        {/* Sol Taraf: Metinler */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          
          {/* Rozet */}
          <div className="inline-block px-4 py-1.5 rounded-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm text-sm font-medium text-gray-500 dark:text-gray-400 mb-4 transition-colors">
            <span className="w-2 h-2 rounded-full bg-brandOrange inline-block mr-2"></span>
            Dijital Zirvelere Tırmanış
          </div>
          
          {/* Başlık */}
          <h1 className="text-5xl md:text-7xl font-extrabold text-brandDark dark:text-white leading-tight transition-colors">
            Dijital Dünyada <br/> Uçtan Uca <span className="text-brandOrange">Marifet.</span>
          </h1>
          
          {/* Açıklama */}
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed mx-auto md:mx-0 transition-colors">
            Marifetix; yüksek performanslı web platformlarından mobil uygulamalara, akıllı otomasyonlardan profesyonel video kurgularına kadar tüm süreçlerinizi tek çatı altında inşa eder.
          </p>
          
          {/* Butonlar */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 pt-4 w-full">
            <Link href="/portfolio" className="w-full sm:w-auto px-8 py-3 bg-brandOrange text-white font-semibold rounded-lg shadow-lg hover:bg-orange-600 transition duration-300 text-center">
              Projeleri Keşfet &rarr;
            </Link>
            <Link href="/contact" className="w-full sm:w-auto px-8 py-3 bg-white dark:bg-gray-900 text-brandDark dark:text-white font-semibold rounded-lg shadow-sm border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition duration-300 text-center">
              Bize Ulaşın
            </Link>
          </div>
        </div>

        {/* Sağ Taraf: Uçuşan Kartlar */}
        <div className="w-full md:w-1/2 mt-16 md:mt-0 relative flex flex-col items-center gap-4 md:block h-auto md:h-[400px]">
          
          {/* Web Geliştirme Kartı */}
          <div className="md:absolute top-0 right-24 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-white/40 dark:border-gray-700/50 shadow-xl rounded-2xl p-4 flex items-center space-x-3 w-64 transform md:-rotate-2 md:animate-pulse z-10 transition-colors">
            <div className="text-3xl">🌐</div>
            <div>
              <p className="text-sm font-bold text-gray-800 dark:text-white">Web Platformları</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Yüksek Performans</p>
            </div>
          </div>

          {/* Mobil Uygulama Kartı */}
          <div className="md:absolute top-28 right-8 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border border-white/40 dark:border-gray-700/50 shadow-xl rounded-2xl p-4 flex items-center space-x-3 w-64 transform md:rotate-3 md:animate-pulse z-10 delay-75 transition-colors">
            <div className="text-3xl">📱</div>
            <div>
              <p className="text-sm font-bold text-gray-800 dark:text-white">Mobil Uygulama</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Çapraz Platform</p>
            </div>
          </div>

          {/* Otomasyon Kartı */}
          <div className="md:absolute bottom-28 right-20 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border border-white/40 dark:border-gray-700/50 shadow-xl rounded-2xl p-4 flex items-center space-x-3 w-64 transform md:-rotate-1 md:animate-pulse z-10 delay-150 transition-colors">
            <div className="text-3xl">⚙️</div>
            <div>
              <p className="text-sm font-bold text-gray-800 dark:text-white">Akıllı Otomasyon</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Sistem Entegrasyonu</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;