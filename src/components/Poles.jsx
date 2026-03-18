import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const polesData = [
  {
    id: 1,
    icon: "🎪",
    name: "Pátio de Eventos Luiz Gonzaga",
    shortDesc: "O palco principal. O coração do São João.",
    fullDesc: "Onde as maiores estrelas se apresentam todas as noites, das 20h às 2h. Palco de shows gigantescos que arrastam multidões, estrutura completa com camarotes, segurança e muita energia. O coração do São João de Caruaru bate aqui."
  },
  {
    id: 2,
    icon: "🎸",
    name: "Polo Azulão",
    shortDesc: "Samba, MPB, rock, reggae, rap.",
    fullDesc: "Para quem curte diversidade musical: samba, MPB, rock, reggae, rap e muito mais. Uma alternativa vibrante dentro da festa, trazendo uma mistura de ritmos e culturas alternativas."
  },
  {
    id: 3,
    icon: "🎨",
    name: "Polo Alto do Moura",
    shortDesc: "Forró pé-de-serra e artesanato UNESCO.",
    fullDesc: "O berço do Mestre Vitalino. Forró pé-de-serra autêntico, artesanato figurativo reconhecido pela UNESCO, quadrilhas e a alma da cultura popular nordestina. Experiência única, diurna e gratuita, regada a muita comida típica."
  },
  {
    id: 4,
    icon: "🚂",
    name: "Polo da Estação Ferroviária",
    shortDesc: "Trios pé-de-serra e ambiente cenográfico.",
    fullDesc: "Ambiente histórico e cenográfico. Trios pé-de-serra, bandas de pífano, exposições de arte, cartomantes, rezadeiras e muita cultura popular rolando nos trilhos do trem."
  },
  {
    id: 5,
    icon: "💃",
    name: "Polo das Quadrilhas",
    shortDesc: "Competições e apresentações de ponta.",
    fullDesc: "As quadrilhas juninas mais elaboradas do Brasil. Coreografias ensaiadas durante o ano todo, figurinos super coloridos e competições emocionantes no Centro Multicultural do Alto do Moura."
  },
  {
    id: 6,
    icon: "🎙️",
    name: "Polo do Repente",
    shortDesc: "A poesia nordestina ao vivo.",
    fullDesc: "A poesia nordestina ao vivo e a cores. Repentistas e poetas populares celebrando a identidade cultural do sertão, com rimas e métricas impressionantes feitas na hora."
  },
  {
    id: 7,
    icon: "🌾",
    name: "São João na Roça",
    shortDesc: "Polo itinerante na zona rural.",
    fullDesc: "Um polo itinerante que leva a festa para as comunidades rurais de Caruaru. Começa em abril e aquece a cidade antes da grande festa. O contato mais puro com as raízes juninas."
  },
  {
    id: 8,
    icon: "🎶",
    name: "Polo Mestre Camarão",
    shortDesc: "O palco secundário no Pátio de Eventos.",
    fullDesc: "Funcionando simultaneamente com o palco principal, o Mestre Camarão é dedicado a artistas regionais, forrozeiros clássicos e novas revelações do forró que estão despontando."
  }
];

const Poles = () => {
  const [selectedPole, setSelectedPole] = useState(null);

  return (
    <section className="py-24 px-4 bg-fundo">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-secundaria mb-4">
            Os 27 Polos do São João
          </h2>
          <p className="text-textoClaro/80 text-lg max-w-2xl mx-auto">
            Tem espaço para todo mundo! Conheça os principais polos onde a magia acontece durante os 65 dias de festa.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {polesData.map((pole, idx) => (
            <motion.div
              key={pole.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedPole(pole)}
              className="bg-[#2D1205] border border-primaria/30 rounded-2xl p-6 cursor-pointer hover:bg-primaria/20 hover:border-destaque/50 transition-all flex flex-col items-center text-center group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                {pole.icon}
              </div>
              <h4 className="text-lg font-bold font-serif text-destaque mb-2 group-hover:text-secundaria transition-colors">
                {pole.name}
              </h4>
              <p className="text-textoClaro/70 text-sm">
                {pole.shortDesc}
              </p>
              <div className="mt-4 text-xs font-bold text-secundaria uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                Ver Detalhes →
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedPole && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div 
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedPole(null)}
              />
              <motion.div 
                className="bg-gradient-to-br from-[#2D1205] to-[#1A0A00] border border-secundaria/30 relative z-10 w-full max-w-lg rounded-2xl p-8 shadow-2xl"
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 50 }}
              >
                <button 
                  onClick={() => setSelectedPole(null)}
                  className="absolute top-4 right-4 text-textoClaro/50 hover:text-destaque text-2xl transition-colors"
                >
                  ✕
                </button>
                <div className="text-6xl text-center mb-6">{selectedPole.icon}</div>
                <h3 className="text-2xl font-serif font-bold text-secundaria text-center mb-4">
                  {selectedPole.name}
                </h3>
                <p className="text-textoClaro/90 text-lg leading-relaxed text-center mb-8">
                  {selectedPole.fullDesc}
                </p>
                <button 
                  onClick={() => setSelectedPole(null)}
                  className="w-full bg-primaria hover:bg-destaque text-textoClaro font-bold py-3 rounded-lg transition-colors"
                >
                  Fechar
                </button>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Poles;
