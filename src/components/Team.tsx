import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Hazım Ablak",
      role: "Kurucu & Yazılım Geliştirici",
      image: "https://ui-avatars.com/api/?name=Hazım+Ablak&background=1a1a1a&color=fff&size=128",
      bgPattern: "bg-gradient-to-br from-gray-900 to-gray-700",
      icon: "💻"
    },
    {
      id: 2,
      name: "Melih",
      role: "Yazılım Geliştirici",
      image: "https://ui-avatars.com/api/?name=Melih&background=ff6b35&color=fff&size=128",
      bgPattern: "bg-gradient-to-br from-brandOrange to-orange-400",
      icon: "⚙️"
    }
  ];

  return (
    <section id="team" className="w-full py-24 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-6">
        
        {/* Başlık Alanı */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center space-x-2 text-brandOrange font-bold text-sm tracking-wider uppercase mb-4">
            <span className="w-6 h-[2px] bg-brandOrange"></span>
            <span>EKİBİMİZ</span>
            <span className="w-6 h-[2px] bg-brandOrange"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-brandDark mb-4">
            Geliştirici Ekibimiz
          </h2>
          <p className="text-gray-500 max-w-2xl text-lg">
            Bu projelerin ve kusursuz sistemlerin arkasındaki beyin takımı.
          </p>
        </div>

        {/* Ekip Kartları */}
        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="w-full max-w-sm bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
              
              {/* Kart Üst (Renkli/Desenli Arka Plan) */}
              <div className={`w-full h-32 ${member.bgPattern} relative flex items-center justify-center overflow-hidden`}>
                <div className="absolute opacity-20 text-6xl transform group-hover:scale-125 transition-transform duration-500">
                  {member.icon}
                </div>
              </div>

              {/* Profil Fotoğrafı ve Bilgiler */}
              <div className="px-6 pb-8 relative text-center">
                <div className="w-24 h-24 mx-auto -mt-12 mb-4 rounded-full border-4 border-white shadow-lg overflow-hidden bg-white">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-gray-500 text-sm font-medium mb-6">{member.role}</p>
                
                {/* Alt Kısım: Linkler/Buton */}
                <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                  <div className="flex space-x-3 text-gray-400">
                    <button 
                      aria-label="GitHub Profiline Git" 
                      title="GitHub Profiline Git"
                      className="hover:text-brandOrange transition"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.09.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
                    </button>
                    <button 
                      aria-label="LinkedIn Profiline Git" 
                      title="LinkedIn Profiline Git"
                      className="hover:text-brandOrange transition"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </button>
                  </div>
                  <button className="text-brandOrange text-sm font-semibold flex items-center hover:text-orange-600 transition">
                    Profili Gör <span className="ml-1">&rarr;</span>
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Team;