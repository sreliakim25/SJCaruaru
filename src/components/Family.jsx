import React from 'react';
import { motion } from 'framer-motion';

const FamilyInfo = () => {
  const cards = [
    {
      icon: "👨‍👩‍👧‍👦",
      title: "FAMÍLIA",
      desc: "Polos gratuitos, estrutura com banheiros adaptados, acessibilidade para PcD, camarotes exclusivos para pessoas com necessidades especiais, intérpretes de Libras nos shows. Traga seus filhos, pais e avós — o São João é para todos."
    },
    {
      icon: "🔒",
      title: "SEGURANÇA",
      desc: "Policiamento ostensivo e integrado durante toda a festa. Serviços médicos nos polos. Canais de denúncia ativos. Ações de proteção a crianças e adolescentes. O Centro de Operações funciona 24h. Uma festa organizada, monitorada e segura."
    },
    {
      icon: "🌍",
      title: "DIVERSIDADE",
      desc: "Turistas de todo o Brasil e do mundo. Entrada gratuita nos polos públicos. Diferentes estilos musicais nos 27 polos. Do forró raiz ao sertanejo, do rock ao reggae, do repente à cena alternativa — tem absolutamente para todos os gostos."
    }
  ];

  return (
    <section className="py-24 px-4 bg-fundo border-y border-secundaria/10">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-secundaria mb-4">
            Uma Festa Para Todos
          </h2>
          <p className="text-textoClaro/80 text-lg max-w-2xl mx-auto">
            Caruaru se orgulha de promover um evento inclusivo, com estrutura impecável para receber quem vem de longe.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {cards.map((card, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="flex flex-col items-center text-center p-8 rounded-3xl bg-gradient-to-b from-[#2D1205] to-[#1A0A00] border border-primaria/20 hover:border-destaque/40 transition-colors group"
            >
              <div className="w-24 h-24 mb-6 rounded-full bg-primaria/10 flex items-center justify-center text-5xl group-hover:scale-110 group-hover:bg-primaria/20 transition-all duration-300">
                {card.icon}
              </div>
              <h3 className="text-2xl font-bold font-serif text-secundaria mb-4 tracking-wide group-hover:text-destaque transition-colors">
                {card.title}
              </h3>
              <p className="text-textoClaro/80 leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FamilyInfo;
