"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function BlogPage() {
  // Örnek Blog Yazıları Veritabanı
  const posts = [
    {
      id: 1,
      title: "Next.js 14 ile Yüksek Performanslı Web Geliştirme",
      excerpt: "Server Components ve App Router mimarisi ile web projelerinizin hızını nasıl ikiye katlayabileceğinizi adım adım inceliyoruz.",
      category: "Web",
      date: "24 Mayıs 2026",
      readTime: "5 dk okuma",
      author: "Hazım Ablak",
      icon: "⚡",
      bgGradient: "from-blue-500 to-indigo-600"
    },
    {
      id: 2,
      title: "Flutter'da Clean Architecture Neden Önemli?",
      excerpt: "Büyük ölçekli mobil uygulamalarda kodun sürdürülebilirliğini sağlamak için Clean Architecture kullanımının altın kuralları.",
      category: "Mobil",
      date: "18 Mayıs 2026",
      readTime: "7 dk okuma",
      author: "Melih",
      icon: "📱",
      bgGradient: "from-sky-400 to-blue-500"
    },
    {
      id: 3,
      title: "Yapay Zeka (AI) ve Yazılımın Geleceği",
      excerpt: "LLM (Büyük Dil Modelleri) ve makine öğrenmesinin günlük geliştirici süreçlerimize nasıl entegre edileceğini tartışıyoruz.",
      category: "Yapay Zeka",
      date: "10 Mayıs 2026",
      readTime: "4 dk okuma",
      author: "Hazım Ablak",
      icon: "🧠",
      bgGradient: "from-emerald-400 to-teal-500"
    },
    {
      id: 4,
      title: "Modern UI/UX: Glassmorphism ve Bento Grid",
      excerpt: "Kullanıcıların aklından çıkmayacak, modern ve premium hissettiren arayüzler tasarlamanın en trend 2 yöntemi.",
      category: "Tasarım",
      date: "5 Mayıs 2026",
      readTime: "3 dk okuma",
      author: "Hazım Ablak",
      icon: "🎨",
      bgGradient: "from-brandOrange to-orange-500"
    },
    {
      id: 5,
      title: "Siber Güvenlik: Uygulamalarınızı Nasıl Korursunuz?",
      excerpt: "Geliştirdiğiniz yazılımlarda açık vermemek için alınması gereken temel güvenlik önlemleri ve penetrasyon tüyoları.",
      category: "Güvenlik",
      date: "1 Mayıs 2026",
      readTime: "6 dk okuma",
      author: "Hazım Ablak",
      icon: "🛡️",
      bgGradient: "from-slate-700 to-gray-900"
    }
  ];

  const [activeFilter, setActiveFilter] = useState('Tümü');
  const [searchQuery, setSearchQuery] = useState('');

  const filterTabs = ['Tümü', 'Web', 'Mobil', 'Yapay Zeka', 'Tasarım', 'Güvenlik'];

  // Arama ve Filtreleme Mantığı
  const displayedPosts = posts.filter(post => {
    const matchesCategory = activeFilter === 'Tümü' || post.category === activeFilter;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-[#fafafa]">
      <Navbar />

      {/* Blog Hero Alanı */}
      <section className="w-full pt-28 pb-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <div className="flex items-center justify-center space-x-2 text-brandOrange font-bold text-sm tracking-wider uppercase mb-4">
            <span className="w-6 h-[2px] bg-brandOrange"></span>
            <span>MARİFETİX BLOG</span>
            <span className="w-6 h-[2px] bg-brandOrange"></span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-brandDark mb-6 tracking-tight">
            Dijital Dünyadan <br/> <span className="text-brandOrange">Güncel Fikirler</span>
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Yazılım mimarileri, modern tasarım trendleri, yapay zeka ve teknoloji dünyasındaki son gelişmeler hakkında ekibimizin kaleminden notlar.
          </p>
        </div>
      </section>

      {/* Arama, Filtre ve Makaleler Alanı */}
      <section className="w-full py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          
          {/* Arama ve Filtre Çubuğu */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
            
            {/* Dinamik Filtre Butonları */}
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              {filterTabs.map((filter) => (
                <button 
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 shadow-sm cursor-pointer ${
                    activeFilter === filter 
                      ? 'bg-brandDark text-white' 
                      : 'bg-white text-gray-600 border border-gray-200 hover:border-brandDark hover:text-brandDark'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Arama Kutusu */}
            <div className="w-full md:w-72 relative">
              <input 
                type="text" 
                placeholder="Makalelerde ara..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-brandOrange/50 transition text-gray-700 text-sm shadow-sm"
              />
              <svg className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
          </div>

          {/* Makale Grid Listesi */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedPosts.map((post) => (
              /* 🔥 TIKLANABİLİR DİNAMİK LİNK YAPISI BURASI 🔥 */
              <Link 
                href={`/blog/${post.id}`} 
                key={post.id} 
                className="bg-white rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer flex flex-col h-full"
              >
                {/* Resim/İkon Alanı */}
                <div className={`w-full h-48 bg-gradient-to-br ${post.bgGradient} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>
                  <span className="text-6xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative z-10 drop-shadow-md">
                    {post.icon}
                  </span>
                </div>

                {/* İçerik Alanı */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-center mb-4">
                    <span className="px-3 py-1 bg-gray-50 text-brandOrange border border-gray-100 text-xs font-bold rounded-full uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-xs font-medium flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      {post.readTime}
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-brandOrange transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>

                  <div className="flex justify-between items-center pt-4 border-t border-gray-50 mt-auto">
                    <span className="text-xs font-bold text-gray-400 flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 border border-gray-200">
                        {post.author.charAt(0)}
                      </div>
                      {post.author}
                    </span>
                    <span className="text-xs text-gray-400 font-medium">
                      {post.date}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Sonuç Bulunamadıysa */}
          {displayedPosts.length === 0 && (
            <div className="text-center py-20 bg-white rounded-3xl border border-gray-100">
              <span className="text-4xl block mb-4">🔍</span>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Makale Bulunamadı</h3>
              <p className="text-gray-500">Aramanıza veya seçtiğiniz kategoriye uygun bir yazı henüz eklenmemiş.</p>
            </div>
          )}

        </div>
      </section>

      <Footer />
    </main>
  );
}