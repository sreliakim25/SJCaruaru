import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AttractionCard = ({ name, date, location, badge, description, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="bg-[#1A0A00] rounded-2xl p-6 border border-primaria/20 hover:border-destaque/50 transition-colors shadow-lg relative overflow-hidden group flex flex-col h-full"
  >
    <div className="absolute top-0 right-0 p-2 z-10">
      <span className={`${badge.includes("HOMENAGEADA") ? "bg-destaque" : "bg-secundaria"} text-fundo text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider`}>
        {badge}
      </span>
    </div>
    
    <div className="w-16 h-16 mb-4 bg-primaria/20 rounded-full flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
      🎙️
    </div>
    
    <h4 className="text-2xl font-serif font-bold text-textoClaro mb-2 group-hover:text-destaque transition-colors">
      {name}
    </h4>
    
    <div className="mb-auto">
      <p className="text-secundaria text-sm font-bold bg-secundaria/10 inline-block px-3 py-1 rounded-lg mb-3">
        📅 {date} • 📍 {location}
      </p>
      
      {description && (
        <p className="text-textoClaro/70 text-sm leading-relaxed border-t border-primaria/20 pt-3 mt-2">
          {description}
        </p>
      )}
    </div>
  </motion.div>
);

const scheduleByPole = [
  {
    id: "patio",
    name: "Pátio de Eventos",
    icon: "🎪",
    schedule: [
      { date: "30 de Maio", artists: ["Elba Ramalho", "Mari Fernandez", "Solange Almeida"] },
      { date: "12 de Junho", artists: ["Roberto Carlos", "Batista Lima"] },
      { date: "13 de Junho", artists: ["Alok", "Bell Marques", "Zé Vaqueiro"] },
      { date: "19 de Junho", artists: ["Wesley Safadão"] },
      { date: "21 de Junho", artists: ["Luan Santana", "Henry Freitas"] },
      { date: "27 de Junho", artists: ["Gusttavo Lima", "Thiaguinho", "Xandy Avião"] }
    ]
  },
  {
    id: "azulao",
    name: "Polo Azulão",
    icon: "🎸",
    schedule: [
      { date: "05 de Junho", artists: ["Nação Zumbi", "Academia da Berlinda"] },
      { date: "06 de Junho", artists: ["BaianaSystem", "Siba"] },
      { date: "12 de Junho", artists: ["Alceu Valença (Voz e Violão)"] },
      { date: "19 de Junho", artists: ["Pitty", "Marcelo Falcão"] }
    ]
  },
  {
    id: "altodomoura",
    name: "Alto do Moura",
    icon: "🎨",
    schedule: [
      { date: "Finais de Semana", artists: ["Trios Pé-de-Serra Regionais (10h às 17h)"] },
      { date: "07 de Junho", artists: ["Santanna, O Cantador"] },
      { date: "14 de Junho", artists: ["Petrúcio Amorim"] },
      { date: "24 de Junho", artists: ["Maciel Melo", "Novinho da Paraíba"] }
    ]
  },
  {
    id: "estacao",
    name: "Estação Ferroviária",
    icon: "🚂",
    schedule: [
      { date: "Diariamente", artists: ["Exposições de Arte", "Pífanos e Cultura Popular"] },
      { date: "Sábados e Domingos", artists: ["Apresentações Teatrais e Intervenções Urbanas"] },
      { date: "23 de Junho", artists: ["Festival de Repentistas"] }
    ]
  },
  {
    id: "quadrilhas",
    name: "Polo das Quadrilhas",
    icon: "💃",
    schedule: [
      { date: "10 de Junho", artists: ["Abertura do Concurso de Quadrilhas Juninas"] },
      { date: "15 a 20 de Junho", artists: ["Apresentações Regionais (Grupo de Acesso)"] },
      { date: "25 de Junho", artists: ["Grande Final do Concurso Principal"] }
    ]
  }
];

const Attractions = () => {
  const [activePole, setActivePole] = useState(scheduleByPole[0].id);

  const atracoes = [
    { name: "Elba Ramalho & Mari Fernandez", date: "30 de maio", loc: "Pátio Luiz Gonzaga", desc: "Abertura do Pátio Principal com grandes vozes femininas e Solange Almeida." },
    { name: "Roberto Carlos", date: "12 de junho", loc: "Pátio Luiz Gonzaga", desc: "A noite mais romântica do Brasil com o Rei e Batista Lima." },
    { name: "Alok & Bell Marques", date: "13 de junho", loc: "Pátio Luiz Gonzaga", desc: "Sábado eletrizante com Zé Vaqueiro e transmissão do Jogo do Brasil." },
    { name: "Wesley Safadão", date: "19 de junho", loc: "Pátio Luiz Gonzaga", desc: "Muito forró e transmissão do Jogo do Brasil na Copa 2026." },
    { name: "Luan Santana", date: "21 de junho", loc: "Pátio Luiz Gonzaga", desc: "Domingo de sucessos com Henry Freitas." },
    { name: "Gusttavo Lima", date: "27 de junho", loc: "Pátio Luiz Gonzaga", desc: "Encerramento gigante com Thiaguinho e Xandy Avião." },
  ];

  const homenageadas = [
    { name: "Anastácia", badge: "HOMENAGEADA 2026", desc: '"Rainha do Forró", autora de "Eu Só Quero um Xodó", com 7 décadas de carreira.' },
    { name: "Nádia Maia", badge: "HOMENAGEADA 2026", desc: "Forte ligação com a cultura nordestina, apresenta-se dia 06 de junho." },
    { name: "Prazeres Barbosa", badge: "HOMENAGEADA 2026", desc: "Ícone da cultura caruaruense, celebrando matrizes e tradições." },
    { name: "Mércia Pinheiro", badge: "IN MEMORIAM", desc: "Homenagem póstuma a uma grande personalidade cultural de Caruaru." }
  ];

  const activePoleData = scheduleByPole.find(pole => pole.id === activePole);

  return (
    <section id="programacao" className="py-24 px-4 bg-gradient-to-b from-[#231000] to-fundo text-textoClaro relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Banner Tema do Ano */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-primaria/10 border border-primaria/40 rounded-3xl p-8 mb-20 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-destaque/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secundaria/10 rounded-full blur-3xl -ml-20 -mb-20"></div>
          
          <span className="text-sm font-bold tracking-widest text-secundaria uppercase mb-2 block">
            Tema Oficial 2026
          </span>
          <h3 className="text-3xl md:text-5xl font-bold font-serif text-textoClaro mb-4 drop-shadow-md">
            "Tecido de tradições, <br className="hidden md:block"/> costurando gerações"
          </h3>
          <p className="text-textoClaro/80 max-w-3xl mx-auto text-lg">
            A programação oficial está lançada! De 10 de abril (São João na Roça) a 28 de junho, a Capital do Forró receberá mais de 70% de artistas locais e transmissão ao vivo da Copa do Mundo 2026 nos polos.
          </p>
        </motion.div>

        {/* Homenageadas em Destaque */}
        <div className="mb-24">
          <div className="flex flex-col items-center mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-secundaria mb-4">
              Mulheres Homenageadas
            </h2>
            <p className="text-textoClaro/70 max-w-2xl">
              Nesta edição, Caruaru reverencia a força feminina que construiu a nossa cultura popular.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {homenageadas.map((hom, idx) => (
              <AttractionCard 
                key={idx}
                name={hom.name}
                date="São João 2026"
                location="Caruaru"
                description={hom.desc}
                badge={hom.badge}
                delay={idx * 0.1}
              />
            ))}
          </div>
        </div>

        {/* Grade de Atrações Confirmed (Destaques) */}
        <div className="mb-24">
          <div className="flex flex-col items-center mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-destaque mb-4">
              Principais Destaques do Pátio
            </h2>
            <p className="text-textoClaro/70 max-w-2xl">
              O Pátio Luiz Gonzaga esquentará as noites com astros do Brasil inteiro a partir de 30 de Maio.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {atracoes.map((art, idx) => (
              <AttractionCard 
                key={idx}
                name={art.name}
                date={art.date}
                location={art.loc}
                description={art.desc}
                badge="CONFIRMADO"
                delay={idx * 0.1}
              />
            ))}
          </div>
        </div>

        {/* Nova Seção Interativa da Programação por Polos */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-primaria/20 pt-20"
        >
          <div className="flex flex-col items-center mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-textoClaro mb-4">
              Programação Completa
            </h2>
            <p className="text-textoClaro/70 max-w-2xl">
              Navegue pelos nossos polos e descubra todas as atrações lançadas para esta edição histórica.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Menu de Polos */}
            <div className="flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 lg:w-1/3 hide-scrollbar">
              {scheduleByPole.map(pole => (
                <button
                  key={pole.id}
                  onClick={() => setActivePole(pole.id)}
                  className={`flex-shrink-0 lg:flex-shrink w-auto flex items-center gap-3 px-6 py-4 rounded-xl font-bold transition-all whitespace-nowrap lg:whitespace-normal text-left ${
                    activePole === pole.id 
                      ? 'bg-primaria text-textoClaro shadow-lg scale-100 lg:scale-105'
                      : 'bg-[#1A0A00] text-textoClaro/60 hover:bg-[#2D1205] hover:text-secundaria'
                  }`}
                >
                  <span className="text-2xl">{pole.icon}</span>
                  {pole.name}
                </button>
              ))}
            </div>

            {/* Programação do Polo Ativo */}
            <div className="lg:w-2/3 bg-[#2D1205]/40 border border-primaria/20 rounded-2xl p-6 md:p-8 min-h-[400px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePole}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-4 mb-8 pb-4 border-b border-primaria/30">
                    <span className="text-4xl">{activePoleData.icon}</span>
                    <h3 className="text-3xl font-serif font-bold text-secundaria">
                      {activePoleData.name}
                    </h3>
                  </div>
                  
                  <div className="space-y-6">
                    {activePoleData.schedule.map((session, idx) => (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-fundo/40 p-5 rounded-xl border border-primaria/10 hover:border-destaque/30 transition-colors"
                      >
                        <h4 className="text-destaque font-bold text-lg mb-3 flex items-center gap-2">
                          <span className="bg-destaque/20 text-destaque px-3 py-1 rounded-md text-sm">📅 {session.date}</span>
                        </h4>
                        <ul className="space-y-2 pl-2 border-l-2 border-secundaria/30">
                          {session.artists.map((artist, i) => (
                            <li key={i} className="text-textoClaro/90 pl-3 flex items-center gap-2 text-lg">
                              <span className="text-secundaria text-sm">🎤</span> {artist}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

      </div>
      
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Attractions;

