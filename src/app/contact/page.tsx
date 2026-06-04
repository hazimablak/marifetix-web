"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ContactPage() {
  // Formun durumunu takip edeceğimiz state yönetimi
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  // WhatsApp ön tanımlı mesaj linkimiz
  const whatsappMessage = encodeURIComponent("Merhabalar, daha fazla bilgi alabilir miyim?");
  const whatsappUrl = `https://wa.me/905303611650?text=${whatsappMessage}`;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // Sayfanın yenilenmesini ve GET isteği atmasını kesin olarak engelliyoruz
    e.preventDefault(); 
    setStatus('submitting');
    
    const form = e.currentTarget;
    const data = new FormData(form);
    const formDataObject = Object.fromEntries(data.entries());

    try {
      // Kendi oluşturduğumuz iç API rotamıza verileri fırlatıyoruz
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(formDataObject),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset(); // Gönderim başarılıysa kutuları temizliyoruz
        // 5 saniye sonra uyarının gitmesi ve formun eski haline dönmesi için
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <main className="min-h-screen bg-brandLight">
      <Navbar />
      
      {/* Üst Başlık Bölümü */}
      <section className="pt-24 pb-12 text-center container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-brandDark mb-4">
          Bizimle İletişime Geçin
        </h1>
        <p className="text-gray-500">Projeleriniz veya işbirliği için ekibimizle iletişime geçin.</p>
      </section>

      {/* İletişim İçeriği Gövdesi */}
      <section className="pb-24 container mx-auto px-6 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Sol Taraf: Bilgi ve Sosyal Medya Kartları */}
          <div className="md:col-span-5 space-y-4">
            
            {/* İletişim Bilgileri */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div className="w-10 h-10 bg-orange-50 text-brandOrange flex items-center justify-center rounded-xl mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="font-bold text-brandDark text-lg mb-4">Ekip İletişim Bilgileri</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-center space-x-3">
                  <span className="font-medium text-gray-800 w-16">E-posta:</span> 
                  <a href="mailto:ablakhazim1071@gmail.com" className="hover:text-brandOrange transition">ablakhazim1071@gmail.com</a>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="font-medium text-gray-800 w-16">Telefon:</span> 
                  <a href="tel:+905303611650" className="hover:text-brandOrange transition">+90 530 361 16 50</a>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="font-medium text-gray-800 w-16">Konum:</span> 
                  <span>Yayladağı / Hatay</span>
                </li>
              </ul>
            </div>

            {/* Sosyal Medya Bağlantıları */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="font-bold text-brandDark text-lg mb-4">Bizi Takip Edin</h3>
              <div className="flex space-x-3">
                <a href="https://github.com/hazimablak" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-50 text-gray-600 flex items-center justify-center rounded-xl hover:bg-brandOrange hover:text-white transition" aria-label="GitHub">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.09.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
                </a>
                <a href="https://www.linkedin.com/in/hazimablak/?skipRedirect=true" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-50 text-gray-600 flex items-center justify-center rounded-xl hover:bg-[#0077b5] hover:text-white transition" aria-label="LinkedIn">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="https://instagram.com/hazim.ablak" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-50 text-gray-600 flex items-center justify-center rounded-xl hover:bg-[#e1306c] hover:text-white transition" aria-label="Instagram">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0 3.259-.014 3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-50 text-gray-600 flex items-center justify-center rounded-xl hover:bg-[#25D366] hover:text-white transition" aria-label="WhatsApp">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.88-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                </a>
              </div>
            </div>

            {/* Yanıt Süresi */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="font-bold text-brandDark text-lg mb-2">Yanıt Süresi</h3>
              <p className="text-gray-500 text-sm">Bizden haber bekleyin; genellikle aynı iş günü veya en geç 24 saat içinde dönüş yapıyoruz.</p>
            </div>

          </div>

          {/* Sağ Taraf: İletişim Formu Alanı */}
          <div className="md:col-span-7 relative">
            
            {/* Durum Ekranları (Aynı sayfada açılan şık pencerelerimiz) */}
            {status === 'success' && (
              <div className="absolute top-0 left-0 w-full h-full bg-white/95 rounded-3xl z-40 flex flex-col items-center justify-center p-8 text-center backdrop-blur-sm border-2 border-green-200">
                <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center text-5xl mb-6 shadow-md border border-green-100">✓</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Mesajınız Başarıyla Bize Ulaştı!</h3>
                <p className="text-gray-600 mb-8">Ekibimiz, yazdıklarınızı inceliyor. En kısa sürede sizinle iletişime geçeceğiz. Bizimle çalıştığınız için teşekkür ederiz.</p>
                <button onClick={() => setStatus('idle')} className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition">Yeni bir mesaj gönder</button>
              </div>
            )}
            
            {status === 'error' && (
              <div className="absolute top-0 left-0 w-full h-full bg-white/95 rounded-3xl z-40 flex flex-col items-center justify-center p-8 text-center backdrop-blur-sm border-2 border-red-200">
                <div className="w-20 h-20 bg-red-50 text-red-500 rounded-full flex items-center justify-center text-5xl mb-6 shadow-md border border-red-100">×</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Aman! Bir Hata Oluştu.</h3>
                <p className="text-gray-600 mb-8">Maalesef mesajınızı şu an alamadık. Lütfen internet bağlantınızı kontrol edip tekrar deneyin veya doğrudan hello@marifetix.com adresine mail atın.</p>
                <button onClick={() => setStatus('idle')} className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition">Tekrar Dene</button>
              </div>
            )}

            {/* Asıl Form */}
            <div className={`bg-white p-8 rounded-3xl border border-gray-100 shadow-sm ${status === 'success' || status === 'error' ? 'opacity-20 pointer-events-none' : ''}`}>
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Adınız Soyadınız</label>
                    <input id="name" name="name" type="text" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brandOrange/50 transition bg-gray-50" placeholder="Adınızı girin" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">E-posta Adresiniz</label>
                    <input id="email" name="email" type="email" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brandOrange/50 transition bg-gray-50" placeholder="ornek@email.com" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">Konu</label>
                  <input id="subject" name="subject" type="text" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brandOrange/50 transition bg-gray-50" placeholder="Mesaj konusu" />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Mesajınız</label>
                  <textarea id="message" name="message" rows={5} required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brandOrange/50 transition bg-gray-50 resize-none" placeholder="Projenizden bahsedin..."></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className={`w-full py-4 text-white font-bold rounded-xl transition duration-300 shadow-lg flex justify-center items-center gap-3 cursor-pointer ${
                    status === 'submitting' ? 'bg-orange-400 cursor-not-allowed' : 'bg-brandOrange hover:bg-orange-600'
                  }`}
                >
                  {status === 'submitting' ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Mesajınız Uçuşa Geçiyor...
                    </>
                  ) : (
                    'Gönder'
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}