import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Kurumsal Web Çözümleri",
      category: "Web",
      description: "Modern, SEO uyumlu ve yüksek performanslı (Next.js & React) web projeleri ve yönetim panelleri.",
      icon: "🌐",
      isFeatured: true,
    },
    {
      id: 2,
      title: "Utilify",
      category: "Mobil Uygulama",
      description: "PDF dönüştürme, OCR ve ses işleme modüllerine sahip çok yönlü, çapraz platform mobil araç.",
      icon: "📱",
      isFeatured: true,
    },
    {
      id: 3,
      title: "Yapay Zeka Erken Uyarı",
      category: "Yapay Zeka",
      description: "TÜBİTAK destekli, makine öğrenmesi tabanlı akıllı sınıflandırma ve analiz sistemi.",
      icon: "🧠",
      isFeatured: false,
    },
    {
      id: 4,
      title: "Akıllı Otomasyon Sistemleri",
      category: "Otomasyon",
      description: "C# ve SQL altyapısıyla çalışan, çok fonksiyonlu SMS ve mail entegrasyonlu otomasyonlar.",
      icon: "⚙️",
      isFeatured: false,
    },
    {
      id: 5,
      title: "Marka Tanıtım Serisi",
      category: "Video Edit",
      description: "Markaların dijital varlıklarını güçlendiren, profesyonel kurgulanmış reklam ve tanıtım filmleri.",
      icon: "🎬",
      isFeatured: false,
    }
  ];

  return (
    <section id="portfolio" className="w-full py-24 bg-white">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex items-center space-x-2 text-brandOrange font-bold text-sm tracking-wider uppercase mb-4">
            <span className="w-6 h-[2px] bg-brandOrange"></span>
            <span>PORTFOLYO</span>
            <span className="w-6 h-[2px] bg-brandOrange"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-brandDark mb-4">
            Tüm Projeler
          </h2>
          <p className="text-gray-500 max-w-2xl text-lg">
            Ekibimizin tamamladığı web platformları, mobil uygulamalar, yapay zeka entegrasyonları ve medya projeleri.
          </p>
        </div>

        <div className="flex flex-col items-center mb-16 space-y-6">
          <div className="w-full max-w-md relative">
            <input 
              type="text" 
              placeholder="Proje veya geliştirici ara..." 
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brandOrange/50 transition"
            />
            <svg className="w-5 h-5 text-gray-400 absolute left-3 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <button className="px-5 py-2 bg-brandOrange text-white font-medium rounded-full text-sm shadow-md">Tümü</button>
            <button className="px-5 py-2 bg-white text-gray-600 font-medium rounded-full text-sm border border-gray-200 hover:border-brandOrange hover:text-brandOrange transition">Web</button>
            <button className="px-5 py-2 bg-white text-gray-600 font-medium rounded-full text-sm border border-gray-200 hover:border-brandOrange hover:text-brandOrange transition">Mobil Uygulama</button>
            <button className="px-5 py-2 bg-white text-gray-600 font-medium rounded-full text-sm border border-gray-200 hover:border-brandOrange hover:text-brandOrange transition">Yapay Zeka</button>
            <button className="px-5 py-2 bg-white text-gray-600 font-medium rounded-full text-sm border border-gray-200 hover:border-brandOrange hover:text-brandOrange transition">Video Edit</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group bg-brandLight rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer">
              
              <div className="w-full h-48 bg-gray-100 rounded-2xl mb-6 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-300">
                {project.icon}
              </div>

              <div className="flex items-center space-x-3 mb-4">
                <span className="px-3 py-1 bg-white border border-gray-200 text-gray-600 text-xs font-semibold rounded-full">
                  {project.category}
                </span>
                {project.isFeatured && (
                  <span className="px-3 py-1 bg-orange-100 text-brandOrange text-xs font-semibold rounded-full flex items-center">
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    Öne Çıkan
                  </span>
                )}
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{project.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;