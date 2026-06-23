"use client";

import { motion } from "framer-motion";
import { JSX, useState } from "react";
import {
  FaMobileAlt,
  FaClock,
  FaHeadphones,
  FaWhatsapp,
} from "react-icons/fa";
import { BiStar } from "react-icons/bi";
import {
  buildCustomWhatsAppUrl,
  STORE_DEFAULT_MESSAGE,
  STORE_PHONE,
} from "@/lib/dataNumber";

interface BadgeItem {
  icon: JSX.Element;
  title: string;
  desc: string;
  position: string;
}

export default function Hero() {
  // Estado para os badges abrirem com toque no mobile de forma responsiva
  const [activeBadge, setActiveBadge] = useState<number | null>(null);

  // Número e mensagem padrão focados na loja de eletrônicos
  const whatsAppLink = buildCustomWhatsAppUrl(
    STORE_PHONE,
    STORE_DEFAULT_MESSAGE,
  );

  const sections = [
    {
      title: "Nossos Serviços",
      description:
        "Assistência especializada, venda de smartphones, smartwatches e acessórios premium.",
      button: "Ver Serviços",
      href: "/services",
      animation: "left",
    },

    {
      title: "Sobre Nós",
      description:
        "Conheça nossa história, compromisso com qualidade e atendimento diferenciado.",
      button: "Conhecer a Loja",
      href: "/about",
      animation: "right",
    },

    {
      title: "Localização",
      description:
        "Estamos em uma localização estratégica para melhor atender nossos clientes.",
      button: "Ver Endereço",
      href: "/location",
      animation: "left",
    },

    {
      title: "Contato",
      description:
        "Fale com nossa equipe pelo WhatsApp ou envie sua solicitação diretamente.",
      button: "Entrar em Contato",
      href: "/contact",
      animation: "right",
    },
  ];

  // Badges remodelados para produtos eletrônicos
  const badges: BadgeItem[] = [
    {
      icon: <FaMobileAlt />,
      title: "Smartphones",
      desc: "iPhones e Xiaomi com garantia.",
      position:
        "top-[-8%] left-[85px] -translate-x-1/2 lg:top-[20%] lg:left-[1%] lg:translate-x-0",
    },

    {
      icon: <FaClock />,
      title: "Smartwatches",
      desc: "Série Ultra e esportivos.",
      position: "top-[15%] right-[-5%] lg:top-[50%] lg:right-[1%]",
    },

    {
      icon: <FaHeadphones />,
      title: "Acessórios",
      desc: "Áudio Premium e cases.",
      position: "bottom-[10%] left-[10%] lg:bottom-[10%] lg:left-[10%]",
    },
  ];

  const stats = [
    {
      value: "+1500",
      label: "Clientes",
    },
    {
      value: "5★",
      label: "Avaliações",
    },
    {
      value: "100%",
      label: "Originais",
    },
  ];

  return (
    <section className="relative flex min-h-screen w-full flex-col justify-between overflow-hidden pt-24 text-white bg-brand-black">
      {/* 🎥 VÍDEO DE FUNDO PREMIUM TECH */}
      {/* Salve seu vídeo webm leve em: public/hero/tech-bg.webm */}
      <video
        src="/hero/phone-video.webm"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 z-0 hidden w-full object-cover md:flex"
      />
      <video
        src="/hero/phone-video-mobile.webm"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 z-0 flex w-full object-cover md:hidden"
      />

      {/* Camada de Gradiente Escuro: Garante o contraste dos textos */}
      <div className="from-brand-black/45 via-brand-black/5 to-brand-dark-gray/75 absolute inset-0 z-0 bg-linear-to-b" />

      {/* CONTEÚDO PRINCIPAL (FRENTE DO VÍDEO) */}
      <div className="relative z-10 mx-auto grid w-full max-w-6xl flex-1 grid-cols-1 items-center gap-8 px-4 lg:grid-cols-2 lg:gap-12">
        {/* BLOCO DE TEXTOS (ESQUERDA) */}
        <div className="order-1 mx-auto flex max-w-xl flex-col space-y-6 text-center lg:mx-0 lg:text-left">
          {/* Badge de Destaque da Loja */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-brand-dark-gray/60 mx-auto inline-flex w-fit items-center gap-2 rounded-full border border-gray-800 px-3 py-1.5 backdrop-blur-md lg:mx-0"
          >
            <span className="bg-brand-red flex h-2 w-2 animate-pulse rounded-full" />
            <span className="font-sans text-[10px] font-bold tracking-widest text-gray-300 uppercase">
              Produtos Originais com Pronta Entrega
            </span>
          </motion.div>

          {/* Título Principal Agressivo (Vermelho e Branco) */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans text-2xl leading-none font-extrabold tracking-tight uppercase sm:text-5xl md:text-6xl"
          >
            O Upgrade que seu <br />
            <span className="from-brand-red bg-gradient-to-r to-white bg-clip-text text-transparent">
              Style Tech
            </span>{" "}
            precisa.
          </motion.h1>

          {/* Texto de Apoio Comercial */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-xl border border-black/40 bg-black/30 p-2 font-sans text-xs leading-relaxed font-normal text-gray-300 sm:text-lg"
          >
            Encontre iPhones lacrados, os smartwatches mais cobiçados do momento
            e acessórios premium com condições exclusivas de parcelamento.
          </motion.p>

          {/* Botão de Ação Principal (CTA) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden sm:pt-4 md:flex"
          >
            <a
              href={whatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-red hover:bg-brand-red-hover inline-flex w-full items-center justify-center gap-3 rounded-xl px-4 py-2 shadow-lg transition-all duration-300 active:scale-95 sm:w-auto sm:px-8 sm:py-4"
            >
              <FaWhatsapp className="font-baloo2 text-xs font-bold tracking-wider text-white uppercase sm:text-sm" />
              Ver catálogo agora
            </a>
          </motion.div>
        </div>

        {/* BLOCO DA IMAGEM CENTRAL COM BADGES GLASS (DIREITA) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative order-1 mx-auto flex aspect-square w-full max-w-sm items-center justify-center overflow-visible md:max-w-md lg:order-2 lg:max-w-lg"
        >
          <div className="absolute inset-0 z-30 flex items-center justify-center md:hidden">
            <a
              href={whatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-red hover:bg-brand-red-hover border-brand-black flex h-20 w-20 items-center justify-center rounded-full border-4 text-white shadow-[0_0_30px_rgba(229,9,20,.4)]"
            >
              <FaWhatsapp className="text-3xl" />
            </a>
          </div>
          {/* Brilho Vermelho Tech ao fundo da imagem para dar o ar de requinte */}
          <div className="bg-brand-red/10 absolute top-[15%] left-[15%] z-0 aspect-square w-[70%] animate-pulse rounded-full blur-3xl" />
          {/* mobile */}
          <svg
            className="pointer-events-none absolute inset-0 z-10 h-full w-full md:hidden"
            viewBox="0 0 100 100"
          >
            {/* Smartphone -> CTA */}
            <path
              d="M20 0 Q10 20 50 55"
              fill="none"
              stroke="rgba(255,255,255,.25)"
              strokeWidth="0.7"
              strokeDasharray="3 3"
              className="animate-[flow_2s_linear_infinite]"
            />

            {/* Smartwatch -> CTA */}
            <path
              d="M92 25 Q75 35 55 55"
              fill="none"
              stroke="rgba(255,255,255,.25)"
              strokeWidth="0.7"
              strokeDasharray="4 3"
              className="animate-[flow_3s_linear_infinite]"
            />

            {/* Acessórios -> CTA */}
            <path
              d="M30 85 Q75 65 48 55"
              fill="none"
              stroke="rgba(255,255,255,.25)"
              strokeWidth="0.7"
              strokeDasharray="1 1"
              className="animate-[flow_4s_linear_infinite]"
            />
          </svg>
          {/* desktop */}
          <svg
            className="pointer-events-none absolute inset-0 z-10 hidden h-full w-full md:block"
            viewBox="0 0 100 100"
          >
            <path
              d="M20 25 Q35 35 50 50"
              fill="none"
              stroke="rgba(255,255,255,.25)"
              strokeWidth="0.5"
              strokeDasharray="3 3"
              className="animate-[flow_2s_linear_infinite]"
            />

            <path
              d="M80 50 Q65 45 50 50"
              fill="none"
              stroke="rgba(255,255,255,.25)"
              strokeWidth="0.5"
              strokeDasharray="4 2"
              className="animate-[flow_4s_linear_infinite]"
            />

            <path
              d="M25 85 Q35 70 50 50"
              fill="none"
              stroke="rgba(255,255,255,.25)"
              strokeWidth="0.5"
              strokeDasharray="1 1"
              className="animate-[flow_8s_linear_infinite]"
            />

            {/* Nó central */}
            <circle cx="50" cy="50" r="2" fill="#ef4444" />

            <circle cx="50" cy="50" r="4" fill="#ef4444" opacity="0.2" />
          </svg>
          {/* Mapeamento dos Badges com Efeito Glass Dark-Tech */}
          {badges.map((item, index) => {
            const isOpen = activeBadge === index;
            return (
              <div
                key={index}
                onClick={() => setActiveBadge(isOpen ? null : index)}
                className={`group bg-brand-black/60 absolute z-20 flex cursor-pointer flex-col rounded-xl border border-gray-800 p-3 shadow-2xl backdrop-blur-md transition-all duration-300 ease-in-out hover:w-48 ${
                  isOpen ? "w-48" : "w-48"
                } ${item.position}`}
              >
                <div className="flex items-center gap-2 text-white">
                  <div className="bg-brand-red/10 text-brand-red border-brand-red/20 shrink-0 rounded-lg border p-1.5 text-base">
                    {item.icon}
                  </div>
                  <span className="font-sans text-[11px] font-bold tracking-wider whitespace-nowrap uppercase">
                    {item.title}
                  </span>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "mt-2 max-h-16 opacity-100"
                      : "max-h-0 opacity-0 group-hover:mt-2 group-hover:max-h-16 group-hover:opacity-100"
                  }`}
                >
                  <p className="border-t border-gray-800 pt-1 font-sans text-[11px] leading-tight text-gray-400">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* SEÇÃO INFORMATIVA INFERIOR (FAIXA DE PROMOÇÃO) */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-brand-dark-gray/80 mt-12 w-full border-t border-gray-800 px-6 py-8 backdrop-blur-md"
      >
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-sans text-2xl font-extrabold tracking-tight uppercase md:text-4xl">
            Garantia de procedência e{" "}
            <span className="text-brand-red">suporte técnico</span>{" "}
            especializado.
          </h2>
        </div>

        {/* Prova Social Rápida (Estrelas do Google) */}
        <div className="mt-4 flex items-center justify-center gap-2">
          <div className="text-brand-red flex grid-cols-2 text-lg">
            <BiStar />
            <BiStar />
            <BiStar />
            <BiStar />
            <BiStar />
          </div>
          <span className="text-brand-light-gray/70 text-center text-xs tracking-wider uppercase">
            + de 1.500 clientes satisfeitos na região
          </span>
        </div>
        <div className="mt-6 grid grid-cols-3 gap-3">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-white/10 bg-black/30 p-3 text-center backdrop-blur-md"
            >
              <div className="text-brand-red text-xl font-bold">
                {item.value}
              </div>

              <div className="text-xs text-gray-400 uppercase">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      <section className="relative z-20 px-4 py-20">
        <div className="mx-auto max-w-5xl space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{
                opacity: 0,
                x: section.animation === "left" ? -50 : 50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className="rounded-2xl border border-white/10 bg-black/30 p-6 backdrop-blur-md md:p-8"
            >
              <h3 className="text-xl font-bold text-white uppercase md:text-3xl">
                {section.title}
              </h3>

              <p className="mt-3 leading-relaxed text-gray-300">
                {section.description}
              </p>

              <a
                href={section.href}
                className="bg-brand-red hover:bg-brand-red-hover mt-6 inline-flex items-center rounded-xl px-5 py-3 font-semibold transition"
              >
                {section.button}
              </a>
            </motion.div>
          ))}
        </div>
      </section>
    </section>
  );
}
