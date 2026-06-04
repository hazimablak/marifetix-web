"use client";

import React from 'react';
import { useParams, notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function BlogPostDetail() {
  const params = useParams();
  const id = parseInt(params.id as string);

  // 5 Adet Dolu Dolu Uzun Makale Veritabanı
  const postsDatabase: Record<number, any> = {
    1: {
      title: "Next.js 14 ile Yüksek Performanslı Web Geliştirme",
      category: "Web",
      date: "24 Mayıs 2026",
      readTime: "5 dk okuma",
      author: "Hazım Ablak",
      bgGradient: "from-blue-600 to-indigo-700",
      content: `
        Modern web dünyasında hız ve arama motoru optimizasyonu (SEO) bir projenin kaderini belirleyen en kritik iki unsurdur. Next.js 14, getirdiği yenilikçi mimari çözümlerle geliştiricilere ışık hızında çalışan web platformları kurma imkanı tanıyor.

        ## Server Components (Sunucu Bileşenleri) ile Sıfır JavaScript Yükü
        Geleneksel single-page (SPA) React uygulamalarında, yazdığımız tüm kodlar, devasa kütüphaneler ve mantıksal işlemler kullanıcının tarayıcısına (Client) yüklenirdi. Bu durum, özellikle düşük donanımlı mobil cihazlarda ve zayıf internet bağlantılarında sitenin açılış hızını ciddi oranda düşürüyordu. Next.js 14 ile birlikte gelen App Router yapısı sayesinde bileşenlerimiz varsayılan olarak doğrudan sunucuda (Server) derleniyor. Kullanıcının bilgisayarına sadece saf, optimize edilmiş HTML ve CSS kodları gönderiliyor. Bu sayede tarayıcı sayfayı anında işliyor ve kullanıcıya gösteriyor.

        > "Kullanıcıya sadece görmesi gereken HTML'i gönder, arkadaki devasa kütüphaneleri sunucuda bırak." - Clean Code Prensibi
        
        ## Dosya Tabanlı Gelişmiş Yönlendirme (App Router)
        Next.js 14'ün en güçlü yanlarından biri de klasör yapısına dayalı dinamik yönlendirme sistemidir. Pages router'ın getirdiği kısıtlamalardan kurtulup, component, stil ve test dosyalarını aynı klasör altında modüler bir şekilde tutabiliyoruz. Özel 'layout.tsx', 'loading.tsx' ve 'error.tsx' dosyaları sayesinde sayfa geçişleri, hata yakalama ve yüklenme durumları inanılmaz derecede profesyonel bir hissiyat veriyor.

        ## Görsel ve Font Optimizasyonu
        Next.js'in sunduğu 'next/image' ve 'next/font' modülleri, dışarıdan yüklenen devasa görselleri ve fontları otomatik olarak WebP formatına çevirir, boyutlandırır ve Layout Shift (ekran kayması) hatalarını sıfıra indirir. Bu küçük dokunuşlar Google Lighthouse puanlarınızı doğrudan 100'e yaklaştırır.
      `,
      references: [
        { name: "Next.js 14 Resmi Performans Dokümantasyonu", url: "https://nextjs.org/docs" },
        { name: "React Server Components Derin Dalış", url: "https://react.dev/" }
      ]
    },
    2: {
      title: "Flutter'da Clean Architecture Neden Önemli?",
      category: "Mobil",
      date: "18 Mayıs 2026",
      readTime: "7 dk okuma",
      author: "Melih",
      bgGradient: "from-sky-500 to-blue-600",
      content: `
        Mobil uygulama geliştirme süreçlerinde projeler büyüdükçe, başlangıçta çok kolay gelen kodlama yapısı zamanla içinden çıkılmaz bir kördüğüme dönüşebilir. Uygulamanızın her yerine dağılmış API çağrıları, durum yönetimleri (State Management) ve UI kodları bir süre sonra geliştirme hızını durma noktasına getirir. İşte tam bu noktada Clean Architecture (Temiz Mimari) imdadımıza yetişiyor.

        ## Katmanlı Mimari ile Kod İzolasyonu
        Clean Architecture, bir mobil uygulamanın kodlarını temel olarak üç ana katmana ayırır: Data (Veri), Domain (İş Mantığı) ve Presentation (Görsel Arayüz). 
        Data katmanı, uygulamanın dış dünyayla (API'ler, yerel veritabanları) konuştuğu yerdir. Domain katmanı, uygulamanızın kalbidir ve hiçbir framework'e bağlı olmadan sadece iş mantığını barındırır. Presentation katmanı ise kullanıcının gördüğü butonlar, ekranlar ve state yönetimi (örneğin Bloc veya Provider) kodlarını içerir.

        ## Neden Bu Kadar Efor Harcıyoruz?
        Bu ayrım sayesinde arayüzde yaptığınız en ufak bir tasarım değişikliği, veritabanı kodlarınızı asla etkilemez. Veya tam tersi, veri tabanı altyapınızı Firebase'den PostgreSQL'e taşımak istediğinizde, sadece Data katmanını değiştirmeniz yeterlidir. Uygulamanızın geri kalanı bu değişiklikten haberdar bile olmaz.

        > "İyi bir yazılım mimarisi, kararları ertelemenize olanak tanır." - Robert C. Martin (Uncle Bob)

        ## Sürdürülebilirlik ve Kolay Test Edilebilirlik
        Mimarinin en büyük avantajı, kodların birbirinden tamamen bağımsız olması sayesinde unit (birim) testlerinin çok rahat yazılabilmesidir. Ekibe yeni katılan bir geliştirici, projenin hangi kısmında ne yapacağını karmaşık spagetti kodlar arasında kaybolmadan anında çözer.
      `,
      references: [
        { name: "Flutter Clean Architecture Kaynak Kitabı", url: "https://flutter.dev" }
      ]
    },
    3: {
      title: "Yapay Zeka (AI) ve Yazılımın Geleceği",
      category: "Yapay Zeka",
      date: "10 Mayıs 2026",
      readTime: "4 dk okuma",
      author: "Hazım Ablak",
      bgGradient: "from-emerald-500 to-teal-600",
      content: `
        Büyük Dil Modelleri (LLM'ler) ve makine öğrenimi araçları sadece günlük hayatımızı değil, yazılım geliştirme süreçlerimizi de kökten değiştiriyor. Artık "AI yazılımcıların işini elinden mi alacak?" sorusunu sormayı bırakıp, "AI araçlarını kullanarak 10x geliştirici (10x Developer) nasıl olabilirim?" sorusuna odaklanmamız gerekiyor.

        ## Geliştirici Asistanları ve Copilot Devrimi
        Github Copilot, ChatGPT ve Gemini gibi araçlar, boilerplate (tekrarlayan temel kod) yazma süremizi dakikalardan saniyelere indirdi. Akıllı otomatik tamamlama, regex yazımı veya karmaşık bir algoritmanın açıklanması gibi konularda AI, yanımızda oturan kıdemli bir yazılımcı gibi çalışıyor.

        ## Prompt Engineering (İstem Mühendisliği)
        Artık sadece iyi kod yazmak yetmiyor, yapay zekaya ne istediğimizi doğru aktarmak da bir o kadar önemli. Bağlamı (context) doğru vermek, sınırları net çizmek ve yapay zekadan adım adım (step-by-step) düşünmesini istemek, elde edeceğimiz kodun kalitesini belirleyen en önemli faktörler haline geldi.
        
        > Yeni dönemin okuryazarlığı sadece kod okumak değil, makinelere doğru soruları sorabilmektir.

        ## AI Entegreli Ürünler Geliştirmek
        Yazılımcılar olarak sadece AI araçlarını kullanmakla kalmıyoruz, kendi geliştirdiğimiz mobil ve web uygulamalarına da bu zekayı entegre ediyoruz. Kullanıcı davranışlarını analiz eden erken uyarı sistemleri, akıllı metin sınıflandırma araçları ve OCR (Optik Karakter Tanıma) destekli okuyucular, modern yazılımların standart donanımı haline geliyor.
      `,
      references: []
    },
    4: {
      title: "Modern UI/UX: Glassmorphism ve Bento Grid",
      category: "Tasarım",
      date: "5 Mayıs 2026",
      readTime: "3 dk okuma",
      author: "Hazım Ablak",
      bgGradient: "from-brandOrange to-orange-500",
      content: `
        Kullanıcıların bir uygulamayı sevmeleri veya hemen terk etmeleri genellikle ilk 3 saniyedeki görsel deneyime bağlıdır. Son yıllarda dijital dünyayı kasıp kavuran iki tasarım trendi, projelerin çok daha 'premium' ve modern algılanmasını sağlıyor: Glassmorphism ve Bento Grid.

        ## Glassmorphism (Buzlu Cam Efekti)
        Apple'ın macOS ve iOS arayüzlerinde yoğun olarak kullandığı bu teknik, arka planı yarı saydam ve bulanık (blur) hale getirerek elementlere derinlik kazandırır. Saf beyaz veya düz renkli kartlar yerine, arkasındaki renkleri hafifçe yansıtan bu kartlar, arayüzde yüzer bir hissiyat yaratır. Tailwind CSS ile 'backdrop-blur-md' ve 'bg-white/10' gibi sınıfları kullanarak bu efekti saniyeler içinde projelerimize dahil edebiliyoruz.

        ## Bento Grid Tasarım Anlayışı
        Adını Japonların geleneksel çok bölmeli yemek kutularından alan Bento Grid, bilgileri farklı boyutlardaki kutucuklar (kartlar) içine yerleştirerek asimetrik ama inanılmaz düzenli bir hiyerarşi kurar. Apple'ın sunumlarında ve modern portfolyo sitelerinde sıkça gördüğümüz bu yapı, kullanıcıyı yormadan çok fazla bilgiyi tek ekranda sunmanın en estetik yoludur.

        > "İyi tasarım, iyi bir mühendisliğin sessiz temsilcisidir."
        
        Bu iki tekniği birleştirerek oluşturduğumuz arayüzler, hem mobil cihazlarda kusursuz bir duyarlılık (responsiveness) sunuyor hem de kullanıcıya modern, teknolojik ve güvenilir bir marka algısı aşılıyor.
      `,
      references: []
    },
    5: {
      title: "Siber Güvenlik: Uygulamalarınızı Nasıl Korursunuz?",
      category: "Güvenlik",
      date: "1 Mayıs 2026",
      readTime: "6 dk okuma",
      author: "Hazım Ablak",
      bgGradient: "from-slate-700 to-gray-900",
      content: `
        Mükemmel çalışan, ışık hızında açılan ve harika görünen bir web platformu inşa etmiş olabilirsiniz. Ancak sisteminiz güvenli değilse, yazdığınız o muhteşem kodlar bir gecede markanızın en büyük kabusuna dönüşebilir. Ağ güvenliği ve penetrasyon testleri, geliştirme sürecinin bir parçası olmak zorundadır.

        ## OWASP İlkeleri ve Zafiyetler
        Web uygulamalarında en sık rastlanan zafiyetler genellikle geliştirici dikkatsizliklerinden kaynaklanır. XSS (Cross-Site Scripting) ile kullanıcı tarayıcısına zararlı kod enjekte edilmesi veya yetersiz kimlik doğrulama kontrolleri nedeniyle oturumların ele geçirilmesi en popüler saldırı vektörleridir. 

        ## LDAP ve SQL Injection Tehlikesi
        Kullanıcıdan alınan verilerin filtrelenmeden doğrudan veritabanı sorgularına (SQL) veya dizin hizmetlerine (LDAP) gönderilmesi, saldırganların sisteminize sızıp tüm veritabanını dökmesine (dump) olanak tanır. ORM (Object-Relational Mapping) araçları kullanmak ve tüm giriş verilerini (input) sterilize etmek (sanitize) bu saldırıları büyük ölçüde önler.

        > Güvenlik bir ürün değil, bir süreçtir. Sisteminiz sadece en zayıf halkanız kadar güvenlidir.

        ## Temel Savunma Stratejileri
        1. Asla kullanıcıdan gelen veriye güvenmeyin (Zero Trust).
        2. Projenizde Role-Based Access Control (RBAC) kullanarak yetkilendirmeleri sıkı tutun.
        3. Hassas verileri, .env dosyalarında şifreli tutun ve asla GitHub gibi açık platformlara push'lamayın.
        4. Sisteminizde düzenli olarak sızma (penetrasyon) testleri metodolojilerini uygulayın ve ağ protokollerinizi (HTTPS, WAF) güçlendirin.
      `,
      references: [
        { name: "OWASP Top 10 Zafiyet Listesi", url: "https://owasp.org/" }
      ]
    }
  };

  const post = postsDatabase[id];

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className={`w-full pt-32 pb-24 bg-gradient-to-r ${post.bgGradient} relative overflow-hidden text-white`}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
          <Link href="/blog" className="inline-flex items-center text-white/80 hover:text-white transition-colors duration-75 font-medium text-sm mb-8 border border-white/20 px-4 py-1.5 rounded-full backdrop-blur-sm">
            <span>&larr;</span> <span className="ml-2">Blog'a Dön</span>
          </Link>
          
          <div className="flex justify-center items-center gap-3 mb-6">
            <span className="px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold tracking-wider uppercase border border-white/20">
              {post.category}
            </span>
            <span className="text-sm font-medium flex items-center opacity-80">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight tracking-tight drop-shadow-sm">
            {post.title}
          </h1>

          <div className="flex justify-center items-center gap-4 text-sm font-medium opacity-90">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold">
                {post.author.charAt(0)}
              </div>
              <span>{post.author}</span>
            </div>
            <span className="w-1.5 h-1.5 rounded-full bg-white/50"></span>
            <span>{post.date}</span>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 max-w-3xl py-16">
        <div className="text-gray-700 text-lg md:text-xl leading-relaxed space-y-6">
          
          {post.content.split('\n').map((paragraph: string, index: number) => {
            const p = paragraph.trim();
            if (!p) return null;
            
            if (p.startsWith('## ')) {
              return <h2 key={index} className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-12 mb-4 pt-4 border-b border-gray-100 pb-2">{p.replace('## ', '')}</h2>;
            }
            if (p.startsWith('> ')) {
              return (
                <blockquote key={index} className="border-l-4 border-brandOrange pl-6 py-3 my-8 bg-orange-50/40 rounded-r-2xl italic text-gray-600 font-medium">
                  {p.replace('> ', '')}
                </blockquote>
              );
            }
            return <p key={index} className="mb-6">{p}</p>;
          })}

        </div>

        {post.references && post.references.length > 0 && (
          <div className="mt-16 pt-8 border-t border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-brandOrange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
              Kaynakça ve Linkler
            </h3>
            <ul className="space-y-3">
              {post.references.map((ref: any, idx: number) => (
                <li key={idx}>
                  <a href={ref.url} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-brandOrange transition-colors duration-75 flex items-center gap-2 text-sm font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                    {ref.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

      </section>

      <Footer />
    </main>
  );
}