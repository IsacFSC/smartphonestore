"use client";

import { motion, useReducedMotion } from "motion/react";
import { clinicHours } from "@/data/clinicHours"; // Mantido o import original, mas tratado no texto abaixo
import { getClinicStatus } from "@/lib/clinicStatus"; // Mantido o import original do status
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
import ContactMap from "@/components/map/ContactMap";
import {
  buildCustomWhatsAppUrl,
  STORE_PHONE, // Atualizado para usar o padrão da loja de tecnologia
} from "@/lib/dataNumber";

export default function Contact() {
  const whatsAppLink = buildCustomWhatsAppUrl(
    STORE_PHONE,
    "Olá! Estou navegando no site e gostaria de tirar algumas dúvidas sobre aparelhos e acessórios."
  );
  const status = getClinicStatus();
  const shouldReduceMotion = useReducedMotion();

  const cardVariants = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 60, damping: 18 },
    },
  } as const;

  const socialLinks = [
    { icon: <FaInstagram />, href: "#", label: "Instagram Oficial" },
    { icon: <FaFacebookF />, href: "#", label: "Facebook Oficial" },
    { icon: <FaTiktok />, href: "#", label: "TikTok Oficial" },
  ];

  return (
    <section className="bg-brand-black text-white w-full overflow-hidden px-4 py-16 md:py-24">
      {/* ── Cabeçalho da Seção ── */}
      <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
        <span className="text-brand-red text-xs font-bold tracking-[0.3em] uppercase block mb-3">
          Fale Conosco
        </span>
        <h2 className="font-sans text-3xl font-black tracking-tight md:text-5xl">
          Contato & Localização
        </h2>
        <p className="text-gray-400 mt-4 font-sans text-sm md:text-base">
          Venha conhecer nosso showroom ou faça seu orçamento online com especialistas.
        </p>
      </div>

      {/* ── Grid Principal ── */}
      <div className="mx-auto grid w-full max-w-6xl gap-6 lg:grid-cols-12 lg:gap-8">
        {/* Bloco de Dados de Atendimento */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="border-brand-dark-gray bg-brand-dark-gray flex flex-col justify-between rounded-2xl border p-6 shadow-2xl lg:col-span-5"
        >
          <div>
            {/* Status de Atendimento (Real-time Feedback Badge) */}
            <div className="mb-6 flex justify-start">
              <span
                className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold tracking-wide backdrop-blur-xs ${
                  status.isOpen
                    ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-400"
                    : "border-rose-500/20 bg-rose-500/10 text-rose-400"
                }`}
              >
                <span
                  className={`h-2 w-2 rounded-full ${status.isOpen ? "animate-pulse bg-emerald-500" : "bg-rose-500"}`}
                />
                {status.isOpen ? "Showroom Aberto" : "Atendimento Fechado"}
              </span>
            </div>

            {/* Painel de Horários (Estilizado Premium Tech) */}
            <div className="space-y-1">
              {Object.values(clinicHours).map((day) => (
                <div
                  key={day.label}
                  className="border-brand-black/40 flex items-center justify-between border-b py-2.5 text-xs md:text-sm last:border-none"
                >
                  <span className="text-gray-400 font-sans font-medium">
                    {day.label}
                  </span>
                  <span className="text-gray-200 font-sans font-semibold">
                    {day.open ? `${day.open} às ${day.close}` : "Fechado"}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Informações Estruturais de Contato */}
          <div className="border-brand-black/40 mt-8 space-y-5 border-t pt-6">
            {/* Endereço */}
            <div className="flex items-start gap-3.5">
              <div className="bg-brand-black text-brand-red mt-0.5 shrink-0 rounded-xl p-2.5 border border-brand-black/60">
                <FaMapMarkerAlt className="h-4 w-4" />
              </div>
              <div className="flex flex-col text-left">
                <h3 className="font-sans text-gray-200 text-xs font-bold uppercase tracking-wider">
                  Nosso Endereço
                </h3>
                <p className="text-gray-400 mt-1 text-sm leading-relaxed">
                  Av. Cel Pôrto Carrero, 100 <br />
                  Rita Vieira — Campo Grande – MS
                </p>
              </div>
            </div>

            {/* Telefone */}
            <div className="flex items-start gap-3.5">
              <div className="bg-brand-black text-brand-red mt-0.5 shrink-0 rounded-xl p-2.5 border border-brand-black/60">
                <FaPhoneAlt className="h-4 w-4" />
              </div>
              <div className="flex flex-col text-left">
                <h3 className="font-sans text-gray-200 text-xs font-bold uppercase tracking-wider">
                  Telefone / Whats
                </h3>
                <a
                  href={`https://wa.me{STORE_PHONE.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-red hover:text-brand-red-hover mt-1 text-sm font-semibold transition-colors focus:underline focus:outline-none"
                >
                  {STORE_PHONE}
                </a>
              </div>
            </div>

            {/* E-mail */}
            <div className="flex items-start gap-3.5">
              <div className="bg-brand-black text-brand-red mt-0.5 shrink-0 rounded-xl p-2.5 border border-brand-black/60">
                <FaEnvelope className="h-4 w-4" />
              </div>
              <div className="flex flex-col text-left">
                <h3 className="font-sans text-gray-200 text-xs font-bold uppercase tracking-wider">
                  E-mail Corporativo
                </h3>
                <a
                  href="mailto:contato.technologystore@gmail.com"
                  className="text-gray-400 hover:text-white mt-1 text-sm font-medium transition-colors focus:underline focus:outline-none"
                >
                  contato.technologystore@gmail.com
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bloco do Mapa */}
        <motion.div
          initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          className="border-brand-dark-gray h-[350px] min-h-[400px] w-full overflow-hidden rounded-2xl border shadow-2xl lg:col-span-7 lg:h-full"
        >
          <ContactMap />
        </motion.div>
      </div>

      {/* ── Rodapé de Conversão (Social + CTA Primário) ── */}
      <div className="border-brand-dark-gray mx-auto mt-10 flex w-full max-w-6xl flex-col items-center justify-between gap-6 border-t pt-8 md:flex-row">
        {/* Redes Sociais */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-sans text-gray-400 mb-3 text-xs font-bold tracking-widest uppercase">
            Acompanhe nossas novidades
          </h3>
          <div className="flex gap-3">
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="bg-brand-dark-gray border border-brand-dark-gray text-gray-300 hover:border-brand-red hover:bg-brand-red hover:text-white flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 focus:outline-none"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bloco de Ação Rápida (CTA) */}
        <div className="flex w-full justify-center md:w-auto">
          <a
            href={whatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-red px-6 py-3.5 text-sm font-bold text-white shadow-lg hover:bg-brand-red-hover transition-all transform hover:scale-105 active:scale-95 cursor-pointer w-full sm:w-auto"
          >
            <FaWhatsapp className="text-base" />
            <span>Falar com Atendente</span>
          </a>
        </div>
      </div>
    </section>
  );
}
