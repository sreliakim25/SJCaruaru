import React from 'react';
import { motion } from 'framer-motion';

const HowToArrive = () => {
  const options = [
    {
      icon: "✈️",
      title: "De Avião",
      desc: "Aeroporto Internacional do Recife (REC) — a cerca de 130 km de Caruaru."
    },
    {
      icon: "🚌",
      title: "De Ônibus",
      desc: "Terminal Integrado de Passageiros (TIP) em Recife, conexões frequentes para Caruaru."
    },
    {
      icon: "🚗",
      title: "De Carro",
      desc: "Pela BR-232, rodovia duplicada, fácil acesso e bem sinalizada, saída para Caruaru."
    }
  ];

  return (
    <section className="py-24 px-4 bg-[#231000] text-textoClaro border-t border-primaria/20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        
        <motion.div 
          className="md:w-1/3"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-secundaria mb-6">
            Como Chegar
          </h2>
          <p className="text-textoClaro/90 text-lg leading-relaxed mb-8">
            Fácil acesso para o Brasil e o mundo. Caruaru está estrategicamente localizada no Agreste Pernambucano, conectada por rodovias de qualidade e próxima à capital.
          </p>
          <div className="mt-8 relative h-48 rounded-2xl overflow-hidden border border-primaria/30">
            {/* Fake Map */}
            <div className="absolute inset-0 bg-[#1A0A00] flex items-center justify-center opacity-80 backdrop-blur-sm">
              <span className="text-5xl">🗺️</span>
            </div>
            <div className="absolute inset-0 bg-map-pattern opacity-30 mix-blend-overlay"></div>
            <div className="absolute bottom-4 left-4 bg-fundo/80 text-sm px-3 py-1 rounded-full text-destaque font-bold">
              📍 Caruaru, PE
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="md:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 }
            }
          }}
        >
          {options.map((opt, idx) => (
            <motion.div 
              key={idx}
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              className="bg-[#1A0A00] p-8 rounded-2xl border border-primaria/20 hover:bg-gradient-to-t hover:from-primaria/20 hover:to-[#1A0A00] transition-colors flex flex-col items-center text-center shadow-lg group"
            >
              <div className="text-6xl mb-6 group-hover:-translate-y-2 transition-transform duration-300">
                {opt.icon}
              </div>
              <h3 className="text-xl font-bold font-serif text-secundaria mb-3 group-hover:text-destaque transition-colors">
                {opt.title}
              </h3>
              <p className="text-textoClaro/70 text-sm leading-relaxed">
                {opt.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default HowToArrive;
