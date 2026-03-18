import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const AnimatedNumber = ({ end, duration = 2, prefix = "", suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const endValue = parseFloat(end.replace(/,/g, ''));
    if (endValue === 0) return;

    let startTime = null;
    
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / (duration * 1000), 1);
      
      // Easing function
      const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
      const current = Math.floor(easeOutQuart * endValue);
      
      setCount(current);

      if (progress < duration * 1000) {
        window.requestAnimationFrame(step);
      } else {
        setCount(endValue);
      }
    };

    window.requestAnimationFrame(step);
  }, [end, duration, isInView]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString('pt-BR')}
      {suffix}
    </span>
  );
};

const Numbers = () => {
  const stats = [
    { value: "4000000", label: "Visitantes em 2025", pfx: "+ " },
    { value: "1400", label: "Shows Confirmados", pfx: "+ " },
    { value: "27", label: "Polos de Animação" },
    { value: "65", label: "Dias de Festa" },
    { value: "737", label: "Milhões Movimentados", pfx: "R$ ", sfx: " M" },
    { value: "26000", label: "Artistas Envolvidos", pfx: "+ " }
  ];

  return (
    <section className="py-24 px-4 bg-fundo relative border-t border-primaria/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-secundaria mb-6">
              O Que é o São João de Caruaru?
            </h2>
            <p className="text-textoClaro/90 text-lg leading-relaxed mb-6">
              Uma festa reconhecida mundialmente e realizada com paixão desde 1984 pela Fundação de Cultura de Caruaru. Aqui, o forró ecoa pelos quatro cantos, a cultura popular transborda e a cidade abraça multidões com a tradicional hospitalidade nordestina.
            </p>
            <div className="inline-block bg-primaria/10 border border-primaria/30 px-6 py-3 rounded-full text-destaque font-bold">
              A Verdadeira Capital do Forró
            </div>
          </motion.div>

          {/* Numbers Grid */}
          <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#2D1205] to-[#1A0A00] rounded-2xl border border-secundaria/10 shadow-lg group hover:border-destaque/40 transition-colors"
              >
                <div className="text-3xl md:text-4xl font-bold font-serif text-secundaria group-hover:text-destaque transition-colors mb-2 text-center">
                  <AnimatedNumber end={stat.value} prefix={stat.pfx} suffix={stat.sfx} />
                </div>
                <div className="text-sm md:text-base text-textoClaro/70 text-center font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Numbers;
