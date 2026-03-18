import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const activitiesData = [
  {
    id: "gastro",
    icon: "🍽️",
    title: "GASTRONOMIA",
    items: [
      "Festival de Comidas Gigantes: cuscuz, bolo de milho, canjica, pé de moleque em versões colossais.",
      "Caminhada do Forró com a tradicional parada gastronômica (criada em 1993).",
      "Culinária nordestina na Rua da Má Fama e Feira de Artesanato.",
      "Comida autêntica de feira: baião de dois, sarapatel, buchada, tapioca."
    ]
  },
  {
    id: "cultura",
    icon: "🎨",
    title: "CULTURA E ARTESANATO",
    items: [
      "Alto do Moura: maior centro de artes figurativas das Américas (UNESCO).",
      "Ateliês abertos diariamente durante todo o São João.",
      "Museu do Barro de Caruaru.",
      "Feira de Caruaru (uma das maiores do Brasil e Patrimônio Imaterial).",
      "Bacamarteiros: tradição dos tiros festivos com trajes típicos e história nordestina."
    ]
  },
  {
    id: "natureza",
    icon: "🌿",
    title: "NATUREZA E LAZER",
    items: [
      "Parque Ambiental da Serra dos Cavalos: trilhas e ecoturismo.",
      "Via Parque e Parques Urbanos para caminhadas e lazer relaxante.",
      "Monte Bom Jesus: a melhor vista panorâmica da cidade e do pôr do sol."
    ]
  },
  {
    id: "cidades",
    icon: "🏘️",
    title: "CIDADES VIZINHAS",
    items: [
      "Bezerros: famosa pelos papangus e carnaval cultural fora de época.",
      "Gravatá: 'Suíça Pernambucana', clima frio, fondue e turismo rural.",
      "Brejo da Madre de Deus: Serra do Biturité e ecoturismo de montanha.",
      "Fazenda Nova: Nova Jerusalém — o maior teatro a céu aberto do mundo.",
      "Garanhuns: Festival de Inverno renomado e cidade das flores."
    ]
  }
];

const Activities = () => {
  const [activeTab, setActiveTab] = useState(activitiesData[0].id);

  return (
    <section className="py-24 px-4 bg-gradient-to-t from-fundo to-[#231000]">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-secundaria mb-4">
            O Que Fazer em Caruaru e Região
          </h2>
          <p className="text-textoClaro/80 text-lg">
            Muito além do forró: descubra sabores, histórias e passeios inesquecíveis pelo agreste pernambucano.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          {/* Tabs Navigation */}
          <div className="md:w-1/3 flex flex-col gap-2">
            {activitiesData.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-left px-6 py-4 rounded-xl font-bold transition-all flex items-center gap-4 ${
                  activeTab === tab.id 
                    ? 'bg-primaria text-textoClaro shadow-lg scale-105'
                    : 'bg-[#1A0A00] text-textoClaro/60 hover:bg-[#2D1205] hover:text-secundaria'
                }`}
              >
                <span className="text-2xl">{tab.icon}</span>
                {tab.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="md:w-2/3 bg-[#2D1205]/50 border border-primaria/20 rounded-2xl p-6 md:p-8 min-h-[300px]">
            <AnimatePresence mode="wait">
              {activitiesData.map((tab) => {
                if (tab.id === activeTab) {
                  return (
                    <motion.div
                      key={tab.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-center gap-4 mb-6 pb-4 border-b border-primaria/30">
                        <span className="text-4xl">{tab.icon}</span>
                        <h3 className="text-2xl font-serif font-bold text-secundaria">
                          {tab.title}
                        </h3>
                      </div>
                      <ul className="space-y-4">
                        {tab.items.map((item, idx) => (
                          <motion.li 
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-start gap-3"
                          >
                            <span className="text-destaque mt-1">✔</span>
                            <span className="text-textoClaro/90 leading-relaxed text-lg">
                              {item}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  );
                }
                return null;
              })}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Activities;
