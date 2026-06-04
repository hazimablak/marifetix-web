import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-brandDark text-white pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-brandOrange rounded-lg flex items-center justify-center text-white font-bold text-xl">
                M
              </div>
              <span className="text-2xl font-extrabold text-white">
                Marifetix <span className="text-brandOrange font-medium text-sm ml-1">Soft</span>
              </span>
            </div>
            <p className="text-gray-400 max-w-sm">
              Fikirlerinizi koda, markanızı geleceğe taşıyoruz. Modern çağın teknolojik marifeti.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Hızlı Linkler</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-brandOrange transition">Ana Sayfa</a></li>
              <li><a href="#" className="hover:text-brandOrange transition">Portfolyo</a></li>
              <li><a href="#" className="hover:text-brandOrange transition">Ekibimiz</a></li>
              <li><a href="#" className="hover:text-brandOrange transition">İletişim</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Sosyal Medya</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-brandOrange transition">LinkedIn</a></li>
              <li><a href="#" className="hover:text-brandOrange transition">GitHub</a></li>
              <li><a href="#" className="hover:text-brandOrange transition">Instagram</a></li>
            </ul>
          </div>
          
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>&copy; 2026 Marifetix Soft. Tüm hakları saklıdır.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition">Gizlilik Politikası</a>
            <a href="#" className="hover:text-white transition">Çerez Politikası</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;