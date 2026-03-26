import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Countdown = () => {
  const targetDate = new Date('2026-04-19T00:00:00');
  
  const [timeLeft, setTimeLeft] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0
  });

  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const calcTime = () => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();
      if (diff <= 0) return { dias: 0, horas: 0, minutos: 0, segundos: 0 };

      return {
        dias: Math.floor(diff / (1000 * 60 * 60 * 24)),
        horas: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((diff / 1000 / 60) % 60),
        segundos: Math.floor((diff / 1000) % 60),
      };
    };

    setTimeLeft(calcTime());
    const interval = setInterval(() => setTimeLeft(calcTime()), 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      localStorage.setItem('saojoao2026_email', email);
      setSubscribed(true);
      setEmail('');
    }
  };

  const timeBlocks = [
    { label: 'DIAS', value: timeLeft.dias },
    { label: 'HORAS', value: timeLeft.horas },
    { label: 'MINUTOS', value: timeLeft.minutos },
    { label: 'SEGUNDOS', value: timeLeft.segundos },
  ];

  return (
    <section id="countdown" className="py-20 px-4 bg-gradient-to-b from-fundo to-[#231000] text-textoClaro flex flex-col items-center">
      <div className="max-w-4xl w-full">
        
        {/* Title */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-secundaria mb-4">
            A Maior Festa Espera Por Você
          </h2>
          <p className="text-lg md:text-xl text-textoClaro/80">
            Faltam poucos dias para a abertura do São João na Roça.
          </p>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div 
          className="flex justify-center flex-wrap gap-4 md:gap-8 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: {
              opacity: 1, scale: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
        >
          {timeBlocks.map((block, idx) => (
            <motion.div 
              key={idx}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="flex flex-col items-center bg-primaria/20 border border-primaria/40 rounded-xl p-4 md:p-6 min-w-[100px] md:min-w-[140px] shadow-[0_0_15px_rgba(181,69,27,0.3)]"
            >
              <span className="text-4xl md:text-6xl font-bold font-serif text-destaque mb-2">
                {String(block.value).padStart(2, '0')}
              </span>
              <span className="text-xs md:text-sm tracking-widest text-secundaria/80 font-bold">
                {block.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Card Aviso Programação Lançada */}
        <motion.div 
          className="bg-gradient-to-r from-[#3D1A0D]/60 to-[#2D1205]/60 border border-secundaria/30 rounded-2xl p-6 md:p-8 text-center max-w-3xl mx-auto shadow-xl relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-destaque/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
          
          <div className="text-3xl mb-4">🔥🎵</div>
          <h3 className="text-xl md:text-2xl font-bold font-serif text-secundaria mb-3">
            A Programação Oficial Foi Lançada!
          </h3>
          <p className="text-textoClaro/90 mb-6 leading-relaxed font-medium">
            O tema deste ano é "Tecido de tradições, costurando gerações". Cadastre-se na nossa lista VIP abaixo para receber novidades, mapas e as melhores dicas direto no seu e-mail.
          </p>

          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 justify-center max-w-lg mx-auto relative z-10">
            <input 
              type="email" 
              placeholder="Digite seu e-mail" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg bg-fundo border border-primaria/50 text-textoClaro focus:outline-none focus:border-destaque focus:ring-1 focus:ring-destaque transition-all"
            />
            <button 
              type="submit"
              className="bg-destaque hover:bg-destaque/90 text-textoClaro font-bold px-6 py-3 rounded-lg transition-colors whitespace-nowrap shadow-[0_0_10px_rgba(232,56,13,0.4)] hover:shadow-[0_0_15px_rgba(232,56,13,0.8)]"
            >
              Quero ser notificado
            </button>
          </form>

          {subscribed && (
            <motion.p 
              initial={{ opacity: 0, h: 0 }}
              animate={{ opacity: 1, h: 'auto' }}
              className="mt-4 text-acento font-semibold"
            >
              ✅ Cadastro realizado com sucesso! Você será avisado.
            </motion.p>
          )}

        </motion.div>

      </div>
    </section>
  );
};

export default Countdown;
