import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1A0A00] pt-16 pb-8 px-4 border-t border-primaria/30">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-3xl font-serif font-bold text-secundaria mb-2">
            São João de Caruaru
          </h2>
          <p className="text-textoClaro/60 text-sm">
            O Maior e Melhor do Mundo
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <h4 className="text-lg font-bold text-textoClaro mb-2 hidden md:block">Links Oficiais</h4>
          <a 
            href="https://instagram.com/saojoaocaruaru.oficial" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-secundaria hover:text-destaque transition-colors flex items-center gap-2"
          >
            📸 @saojoaocaruaru.oficial
          </a>
          <a 
            href="#" 
            className="text-secundaria hover:text-destaque transition-colors flex items-center gap-2"
          >
            🏛️ Prefeitura de Caruaru
          </a>
        </div>

      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-textoClaro/10 flex flex-col md:flex-row justify-between items-center gap-4 text-textoClaro/50 text-sm text-center md:text-left">
        <p>
          © 2026 — São João de Caruaru — O Maior e Melhor São João do Mundo. Todos os direitos reservados.
        </p>
        <p className="flex items-center gap-1">
          Feito com <span className="text-destaque animate-pulse">❤</span> pelo povo de Caruaru
        </p>
      </div>
    </footer>
  );
};

export default Footer;
