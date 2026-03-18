import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Newsletter = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    pais: 'Brasil',
  });
  const [submitted, setSubmitted] = useState(false);

  const countries = [
    "Brasil", "Portugal", "Estados Unidos", "Argentina", "Espanha", "França", "Reino Unido", "Outro"
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.nome && formData.email) {
      localStorage.setItem('saojoao2026_newsletter', JSON.stringify(formData));
      setSubmitted(true);
      setFormData({ nome: '', email: '', pais: 'Brasil' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <section className="py-24 px-4 bg-fundo relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-colors-primaria)_0%,_transparent_50%)] opacity-10 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-[#2D1205] to-[#1A0A00] p-8 md:p-12 rounded-3xl border border-secundaria/20 shadow-2xl"
        >
          <div className="text-4xl mb-4">💌</div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-secundaria mb-4">
            Receba Notificações
          </h2>
          <p className="text-textoClaro/80 text-lg mb-8 max-w-2xl mx-auto">
            Não perca nenhum detalhe do maior e melhor São João do mundo. Deixe seu contato e saiba tudo sobre a programação e ingressos em primeira mão!
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-lg mx-auto">
            <input 
              type="text"
              name="nome"
              placeholder="Seu Nome Completo"
              value={formData.nome}
              onChange={handleChange}
              required
              className="px-4 py-3 rounded-xl bg-[#1A0A00] border border-primaria/50 text-textoClaro focus:outline-none focus:border-destaque focus:ring-1 focus:ring-destaque transition-all"
            />
            
            <input 
              type="email"
              name="email"
              placeholder="Seu E-mail Principal"
              value={formData.email}
              onChange={handleChange}
              required
              className="px-4 py-3 rounded-xl bg-[#1A0A00] border border-primaria/50 text-textoClaro focus:outline-none focus:border-destaque focus:ring-1 focus:ring-destaque transition-all"
            />

            <select
              name="pais"
              value={formData.pais}
              onChange={handleChange}
              className="px-4 py-3 rounded-xl bg-[#1A0A00] border border-primaria/50 text-textoClaro focus:outline-none focus:border-destaque focus:ring-1 focus:ring-destaque transition-all appearance-none"
            >
              {countries.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>

            <button 
              type="submit"
              className="mt-4 bg-destaque hover:bg-[#c9320b] text-textoClaro font-bold text-lg px-8 py-4 rounded-xl transition-all shadow-[0_0_15px_rgba(232,56,13,0.3)] hover:shadow-[0_0_25px_rgba(232,56,13,0.8)] flex items-center justify-center gap-2"
            >
              Quero saber tudo sobre o São João 2026
            </button>
          </form>

          {submitted && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 text-acento font-bold text-lg bg-acento/10 py-3 px-6 rounded-lg inline-block border border-acento/30"
            >
              ✅ Ótimo! Você será notificado assim que a programação completa for divulgada!
            </motion.div>
          )}

        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
