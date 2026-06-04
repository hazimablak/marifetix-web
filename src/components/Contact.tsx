import React from 'react';
import Link from 'next/link';

const Contact = () => {
  return (
    <section className="w-full py-24 bg-white dark:bg-[#0a0a0a] border-t border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="bg-brandLight dark:bg-gray-900 p-12 md:p-16 rounded-[3rem] shadow-sm border border-gray-100 dark:border-gray-800 text-center relative overflow-hidden transition-colors duration-300">
          
          {/* Arka plan ince deseni */}
          <div className="absolute inset-0 z-0 opacity-30 dark:opacity-10" style={{ backgroundImage: 'radial-gradient(#ff6b35 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          
          <div className="relative z-10">
            <div className="flex justify-center items-center space-x-2 text-brandOrange font-bold text-sm tracking-wider uppercase mb-6">
              <span className="w-6 h-[2px] bg-brandOrange"></span>
              <span>BİRLİKTE ÇALIŞALIM</span>
              <span className="w-6 h-[2px] bg-brandOrange"></span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-brandDark dark:text-white mb-6 transition-colors">
              Yeni Bir Projeye Başlamaya <br className="hidden md:block" /> Hazır Mısınız?
            </h2>
            
            <p className="text-gray-500 dark:text-gray-400 text-lg mb-10 max-w-2xl mx-auto transition-colors">
              Harika bir fikriniz mi var? Ya da dijital süreçlerinizi baştan mı yaratmak istiyorsunuz? Kahvelerimizi alalım ve projenizi birlikte hayata geçirelim. Biz üretmeye hazırız.
            </p>
            
            <Link 
              href="/contact" 
              className="px-10 py-4 bg-brandOrange text-white font-bold text-lg rounded-xl shadow-lg hover:bg-orange-600 transition-all duration-300 inline-flex items-center gap-3 group"
            >
              Bizimle İletişime Geçin
              <span className="group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;