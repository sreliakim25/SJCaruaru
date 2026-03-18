import React from 'react';
import { motion } from 'framer-motion';

const AttractionCard = ({ name, date, location, badge, description, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="bg-[#1A0A00] rounded-2xl p-6 border border-primaria/20 hover:border-destaque/50 transition-colors shadow-lg relative overflow-hidden group"
  >
    <div className="absolute top-0 right-0 p-2">
      <span className="bg-secundaria text-fundo text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
        {badge}
      </span>
    </div>
    
    <div className="w-20 h-20 mb-4 bg-primaria/20 rounded-full flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
      🎙️
    </div>
    
    <h4 className="text-2xl font-serif font-bold text-textoClaro mb-1 group-hover:text-destaque transition-colors">
      {name}
    </h4>
    
    <p className="text-secundaria text-sm font-medium mb-3">
      {date} • {location}
    </p>
    
    {description && (
      <p className="text-textoClaro/70 text-sm leading-relaxed">
        {description}
      </p>
    )}
  </motion.div>
);

const Attractions = () => {
  const confirmadas = [
    { name: "Roberto Carlos", date: "12 de junho", loc: "Pátio Luiz Gonzaga", desc: "A noite mais romântica do Brasil — Dia dos Namorados" },
    { name: "Cláudia Leitte", date: "14 de junho", loc: "Drilha de Caruaru" },
    { name: "Gusttavo Lima", date: "EM BREVE", loc: "Pátio Luiz Gonzaga" },
    { name: "Nação Zumbi", date: "EM BREVE", loc: "Polo Azulão" },
    { name: "Anderson Neiff", date: "EM BREVE", loc: "A Confirmar" },
    { name: "É o Tchan", date: "EM BREVE", loc: "A Confirmar" },
  ];

  const homenageadas = [
    { name: "Anastácia", badge: "HOMENAGEADA 2026", desc: '"Rainha do Forró", autora de "Eu Só Quero um Xodó", mais de 600 composições e 7 décadas de carreira.' },
    { name: "Nádia Maia", badge: "HOMENAGEADA 2026", desc: "Artista com forte ligação com a cultura nordestina e presença marcante na história do São João." }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-[#231000] to-fundo text-textoClaro">
      <div className="max-w-6xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-primaria/10 border border-primaria/40 rounded-xl p-6 md:p-8 mb-16 text-center"
        >
          <span className="text-2xl mb-2 block">🎤</span>
          <h3 className="text-xl md:text-2xl font-bold font-serif text-secundaria mb-2">
            Programação em Lançamento!
          </h3>
          <p className="text-textoClaro/80 max-w-2xl mx-auto">
            A grade completa está sendo divulgada oficialmente em março de 2026. Acompanhe e cadastre seu e-mail para receber todas as novidades em primeira mão.
          </p>
        </motion.div>

        <div className="mb-20">
          <h2 className="text-4xl font-serif font-bold text-center text-destaque mb-12">
            Grandes Nomes Confirmados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {confirmadas.map((art, idx) => (
              <AttractionCard 
                key={idx}
                name={art.name}
                date={art.date}
                location={art.loc}
                description={art.desc}
                badge={art.date === "EM BREVE" ? "EM BREVE" : "CONFIRMADO"}
                delay={idx * 0.1}
              />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-4xl font-serif font-bold text-center text-secundaria mb-12">
            Homenageadas do Ano
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {homenageadas.map((hom, idx) => (
              <AttractionCard 
                key={idx}
                name={hom.name}
                date="São João 2026"
                location="Caruaru"
                description={hom.desc}
                badge={hom.badge}
                delay={idx * 0.2}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Attractions;
