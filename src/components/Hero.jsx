import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Banderinhas = () => {
  const colors = ['bg-primaria', 'bg-secundaria', 'bg-destaque', 'bg-acento'];
  return (
    <div className="absolute top-0 w-full overflow-hidden flex justify-center -mt-2">
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className={`w-12 h-16 ${colors[i % colors.length]} mx-1 origin-top`}
          style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.1 }}
        />
      ))}
    </div>
  );
};

const Particles = () => {
  const colors = ['#B5451B', '#F4A22D', '#E8380D'];
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 40 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            backgroundColor: colors[i % colors.length],
            width: Math.random() * 6 + 2,
            height: Math.random() * 6 + 2,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.5 + 0.3,
          }}
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

const Hero = () => {
  const [langIndex, setLangIndex] = useState(0);
  const phrases = [
    "The world's greatest June festival",
    "La fiesta junina más grande del mundo"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setLangIndex((prev) => (prev + 1) % phrases.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [phrases.length]);

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-fundo">
      {/* Background with radial gradient for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-colors-primaria)_0%,_transparent_70%)] opacity-20"></div>
      
      <Particles />
      <Banderinhas />

      <div className="z-10 px-4 max-w-5xl">
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-secundaria mb-4 drop-shadow-lg"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          O MAIOR E MELHOR<br className="max-md:hidden"/> SÃO JOÃO DO MUNDO
        </motion.h1>
        
        <motion.h2 
          className="text-xl md:text-3xl font-sans font-medium text-textoClaro mb-8"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          Caruaru, Pernambuco — A Capital do Forró
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="h-8 mb-10"
        >
          <motion.p
            key={langIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="text-sm md:text-base text-secundaria/80 italic font-medium"
          >
            {phrases[langIndex]}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1.2, type: "spring" }}
        >
          <Link
            to="countdown"
            smooth={true}
            duration={800}
            className="cursor-pointer inline-block bg-destaque text-textoClaro font-bold text-lg md:text-xl py-4 px-10 rounded-full shadow-[0_0_20px_rgba(232,56,13,0.6)] hover:shadow-[0_0_30px_rgba(232,56,13,1)] transition-shadow duration-300"
          >
            <motion.span
              animate={{ opacity: [1, 0.7, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              QUERO CONHECER O SÃO JOÃO
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
