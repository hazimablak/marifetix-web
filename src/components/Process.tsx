import React from 'react';

const Process = () => {
  const steps = [
    { id: "01", title: "Fikir & Planlama", icon: "💡", desc: "Projenizin mimarisini ve gereksinimlerini belirliyoruz." },
    { id: "02", title: "Tasarım & UX", icon: "🎨", desc: "Kullanıcı deneyimini merkeze alan modern arayüzler çiziyoruz." },
    { id: "03", title: "Geliştirme", icon: "⚡", desc: "Clean Code prensipleriyle ölçeklenebilir sistemler kodluyoruz." },
    { id: "04", title: "Yayına Alma", icon: "🚀", desc: "Sistemi test edip, kusursuz bir şekilde canlıya alıyoruz." },
  ];

  return (
    <section className="w-full py-24 bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center space-x-2 text-brandOrange font-bold text-sm tracking-wider uppercase mb-4">
            <span className="w-6 h-[2px] bg-brandOrange"></span>
            <span>SÜREÇ</span>
            <span className="w-6 h-[2px] bg-brandOrange"></span>
          </div>
          <h2 className="text-4xl font-extrabold text-brandDark dark:text-white transition-colors">
            Nasıl Çalışıyoruz?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-gray-100 dark:bg-gray-800 -z-10 -translate-y-1/2 transition-colors"></div>

          {steps.map((step) => (
            <div key={step.id} className="bg-brandLight dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-lg transition-all duration-300 relative z-10 group">
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{step.icon}</div>
              <div className="text-brandOrange font-bold text-sm mb-2">{step.id}</div>
              <h3 className="text-lg font-bold text-brandDark dark:text-white mb-2 transition-colors">{step.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed transition-colors">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;