import React from 'react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Web Platformları",
      description: "Next.js ve React mimarisiyle, SEO uyumlu, ışık hızında çalışan kurumsal web siteleri ve gelişmiş yönetim panelleri inşa ediyoruz.",
      icon: "🌐",
      colSpan: "md:col-span-2 lg:col-span-2",
      bgStyle: "bg-white dark:bg-gray-900 text-brandDark dark:text-white border border-gray-100 dark:border-gray-800",
      textStyle: "text-gray-500 dark:text-gray-400"
    },
    {
      id: 2,
      title: "Mobil Uygulama",
      description: "Çapraz platform (Flutter) ve native çözümlerle, her ekranda kusursuz çalışan kullanıcı dostu mobil deneyimler geliştiriyoruz.",
      icon: "📱",
      colSpan: "md:col-span-1 lg:col-span-1",
      bgStyle: "bg-white dark:bg-gray-900 text-brandDark dark:text-white border border-gray-100 dark:border-gray-800",
      textStyle: "text-gray-500 dark:text-gray-400"
    },
    {
      id: 3,
      title: "Yapay Zeka & Veri",
      description: "Makine öğrenmesi modelleri ve akıllı sınıflandırma algoritmalarıyla işletmenize vizyoner bir zeka katıyoruz.",
      icon: "🧠",
      colSpan: "md:col-span-1 lg:col-span-1",
      bgStyle: "bg-white dark:bg-gray-900 text-brandDark dark:text-white border border-gray-100 dark:border-gray-800",
      textStyle: "text-gray-500 dark:text-gray-400"
    },
    {
      id: 4,
      title: "Akıllı Otomasyon",
      description: "Tekrarlayan işleri sıfırlayan, SMS ve mail entegrasyonlu özel yazılım otomasyonlarıyla saatler kazanmanızı sağlıyoruz.",
      icon: "⚙️",
      colSpan: "md:col-span-1 lg:col-span-1",
      bgStyle: "bg-white dark:bg-gray-900 text-brandDark dark:text-white border border-gray-100 dark:border-gray-800",
      textStyle: "text-gray-500 dark:text-gray-400"
    },
    {
      id: 5,
      title: "Video & Medya",
      description: "Markanızın dijital dünyadaki hikayesini, akılda kalıcı, profesyonel kurgulanmış reklam ve tanıtım filmleriyle anlatıyoruz.",
      icon: "🎬",
      colSpan: "md:col-span-1 lg:col-span-1",
      bgStyle: "bg-white dark:bg-gray-900 text-brandDark dark:text-white border border-gray-100 dark:border-gray-800",
      textStyle: "text-gray-500 dark:text-gray-400"
    }
  ];

  return (
    <section id="services" className="w-full py-24 bg-brandLight dark:bg-[#0a0a0a] transition-colors duration-300">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center space-x-2 text-brandOrange font-bold text-sm tracking-wider uppercase mb-4">
            <span className="w-6 h-[2px] bg-brandOrange"></span>
            <span>HİZMETLERİMİZ</span>
            <span className="w-6 h-[2px] bg-brandOrange"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-brandDark dark:text-white mb-4 transition-colors">
            Neler Yapıyoruz?
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl text-lg transition-colors">
            Fikrinizi alıyor, kodluyor, tasarlıyor ve dijital dünyanın zirvesine taşıyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service) => (
            <div key={service.id} className={`p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 ${service.colSpan} ${service.bgStyle} group`}>
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300 origin-left">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className={`leading-relaxed ${service.textStyle} transition-colors`}>
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;