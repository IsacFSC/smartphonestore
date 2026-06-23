"use client";

import Image from "next/image";
import { motion, useReducedMotion, Variants } from "motion/react";
import { FaShieldAlt } from "react-icons/fa";
import { BsCpu } from "react-icons/bs";

export default function About() {
  const shouldReduceMotion = useReducedMotion();

  // Orquestração de micro-interações para os textos (Fade-in sequencial)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 70, damping: 22 },
    },
  };

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-brand-black px-4 py-20 text-white md:py-28">
      {/* Container estrutural em Grid Descentralizado */}
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
        
        {/* Bloco de Imagens: Composição de Profundidade Visual (Lado Esquerdo - 5 Colunas) */}
        <div className="relative mx-auto flex aspect-[4/5] w-full max-w-md items-center justify-center lg:col-span-5 lg:mx-0">
          
          {/* Imagem 1: Fachada/Showroom ou Smartphone Premium (Âncora de Desejo) */}
          <motion.div
            initial={{
              opacity: 0,
              scale: shouldReduceMotion ? 1 : 0.95,
              x: shouldReduceMotion ? 0 : -20,
            }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 20,
              delay: 0.1,
            }}
            className="absolute top-0 left-0 z-10 aspect-[4/5] w-[85%] overflow-hidden rounded-2xl border border-brand-dark-gray bg-brand-dark-gray shadow-2xl shadow-black/50"
          >
            <Image
              src="/services/iphone.jpg" // Altere para a imagem correspondente da sua loja tech
              alt="Showroom de smartphones e acessórios premium"
              fill
              className="object-cover opacity-80 transition-transform duration-700 hover:scale-105"
              sizes="(max-w-768px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-brand-black/80 via-transparent to-transparent" />
          </motion.div>

          {/* Imagem 2: Close de Hardware/Acessório (Foco na Engenharia/Procedência) */}
          <motion.div
            initial={{
              opacity: 0,
              scale: shouldReduceMotion ? 1 : 0.85,
              y: shouldReduceMotion ? 0 : 30,
            }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              type: "spring",
              stiffness: 45,
              damping: 18,
              delay: 0.3,
            }}
            className="absolute right-0 bottom-0 z-20 aspect-square w-[55%] cursor-pointer overflow-hidden rounded-2xl border-4 border-brand-black bg-brand-dark-gray shadow-2xl shadow-brand-red/10 transition-transform duration-500 ease-out hover:scale-105"
          >
            <Image
              src="/hero/phones.jpg" // Altere para um close-up de iPhone ou placa
              alt="Detalhes técnicos de aparelhos de alta performance"
              fill
              className="object-cover"
              sizes="(max-w-768px) 50vw, 20vw"
            />
            {/* Tag flutuante sobre a imagem */}
            <div className="absolute bottom-3 left-3 bg-brand-red px-2 py-0.5 rounded-md text-[9px] font-black uppercase tracking-wider">
              100% Original
            </div>
          </motion.div>

          {/* Elemento de Fundo Abstrato (Vetor de Luz Vermelha Cyberpunk) */}
          <div className="absolute inset-0 -z-10 scale-75 rounded-full bg-brand-red/10 blur-3xl" />
        </div>

        {/* Bloco Narrativo de Textos (Lado Direito - 7 Colunas) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-150px" }}
          className="mx-auto flex max-w-2xl flex-col space-y-6 text-left lg:col-span-7 lg:mx-0"
        >
          <motion.span
            variants={itemVariants}
            className="text-brand-red font-sans text-xs font-bold tracking-[0.3em] uppercase block"
          >
            Nossa Trajetória
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className="relative pb-4 font-sans text-3xl font-black tracking-tight leading-tight md:text-5xl"
          >
            Hardware Forte e Conectividade Sem Limites
          </motion.h2>

          {/* Divisor customizado conforme a paleta */}
          <motion.div 
            variants={itemVariants}
            className="h-[3px] w-20 bg-brand-red rounded-full -mt-2"
          />

          <motion.p
            variants={itemVariants}
            className="pt-2 font-sans text-sm leading-relaxed text-gray-400 md:text-base"
          >
            Nascemos com o propósito de conectar você ao que há de mais avançado no ecossistema global de tecnologia. Trabalhamos exclusivamente com smartphones topo de linha e acessórios premium que elevam sua performance diária — seja no trabalho, na produção de conteúdo ou em jogos de alto nível.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="font-sans text-sm leading-relaxed text-gray-400 md:text-base"
          >
            Mais do que vender aparelhos, asseguramos uma experiência transparente. Cada item de nosso estoque passa por um rigoroso controle de procedência, garantindo saúde de bateria testada, homologação oficial e garantia sólida para que sua única preocupação seja aproveitar a velocidade máxima do seu novo dispositivo.
          </motion.p>

          {/* Badges de Confiança adicionados para otimizar conversão UX */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-2 gap-4 pt-4 border-t border-brand-dark-gray"
          >
            <div className="flex items-center gap-2.5">
              <FaShieldAlt className="text-brand-red text-lg shrink-0" />
              <span className="text-xs font-semibold text-gray-200">Garantia Certificada</span>
            </div>
            <div className="flex items-center gap-2.5">
              <BsCpu className="text-brand-red text-lg shrink-0" />
              <span className="text-xs font-semibold text-gray-200">Peças & Itens Originais</span>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
