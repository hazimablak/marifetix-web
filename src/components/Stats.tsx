import React from 'react';

const Stats = () => {
  const stats = [
    { 
      id: 1, 
      icon: "📱", 
      value: "10+", 
      label: "Tamamlanan Proje", 
      sub: "Play Store & Web" 
    },
    { 
      id: 2, 
      icon: "👥", 
      value: "2", 
      label: "Çekirdek Ekip", 
      sub: "Genç & Dinamik" 
    },
    { 
      id: 3, 
      icon: "🏆", 
      value: "2+", 
      label: "Ödül & Destek", 
      sub: "TÜBİTAK & Teknofest" 
    },
    { 
      id: 4, 
      icon: "💻", 
      value: "15+", 
      label: "Teknoloji", 
      sub: "Next.js, Flutter, AI..." 
    },
  ];

  return (
    <section className="w-full py-16 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-gray-100">
          
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center text-center px-4 group">
              <div className="w-16 h-16 bg-brandLight rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:-translate-y-2 transition-transform duration-300 border border-gray-100 shadow-sm text-brandOrange">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-extrabold text-brandDark mb-1 tracking-tight">{stat.value}</h3>
              <p className="text-gray-800 font-semibold mb-1">{stat.label}</p>
              <p className="text-gray-400 text-xs">{stat.sub}</p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Stats;