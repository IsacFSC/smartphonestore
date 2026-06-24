"use client";

import {
  buildCustomWhatsAppUrl,
  STORE_DEFAULT_MESSAGE,
  STORE_PHONE,
} from "@/lib/dataNumber";
import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function MobileContact() {
  const whatsAppLink = buildCustomWhatsAppUrl(
    STORE_PHONE,
    "Olá! Estou navegando no site e gostaria de solicitar um orçamento para aparelhos ou assistência técnica."
  );
  const [isVisible, setIsVisible] = useState(false);
  const [showBubble, setShowBubble] = useState(true);

  useEffect(() => {
    // UX Otimizada: Surge de forma suave após 5 segundos
    const timer = setTimeout(() => setIsVisible(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="group pointer-events-auto fixed right-6 bottom-6 z-50 flex items-center gap-3">
      
      {/* Balão de Mensagem - Estilo Tech Premium com botão de fechar */}
      {showBubble && (
        <div className="relative hidden max-w-xs animate-[fadeIn_0.4s_ease-out] flex-col rounded-xl border border-brand-dark-gray bg-brand-dark-gray/95 backdrop-blur-md px-4 py-3 text-left text-white shadow-2xl shadow-black/50 transition-all duration-300 group-hover:translate-y-[-4px] sm:flex">
          
          {/* Botão Fechar (X) - Área de clique limpa e visível no modo escuro */}
          <button
            onClick={(e) => {
              e.preventDefault();
              setShowBubble(false);
            }}
            className="absolute top-1.5 right-2 cursor-pointer p-1 font-sans text-[10px] font-bold text-gray-500 select-none hover:text-brand-red transition-colors"
            aria-label="Fechar mensagem"
          >
            ✕
          </button>

          <p className="text-brand-red font-sans text-[11px] font-black tracking-wider uppercase">
            Atendimento Online
          </p>
          <p className="mt-1 pr-4 font-sans text-xs leading-normal text-gray-300">
            Faça seu orçamento de smartphones ou reparos agora no WhatsApp!
          </p>

          {/* Setinha lateral do balão apontando para o ícone (Preenchimento com a cor do Card) */}
          <div className="absolute top-1/2 right-14 h-0 w-0 translate-x-full -translate-y-1/2 border-t-[6px] border-b-[6px] border-l-[6px] border-t-transparent border-b-transparent border-l-brand-dark-gray/95" />
        </div>
      )}

      {/* Botão Flutuante Principal - Cores e Identidade Style Tech */}
      <a
        href={whatsAppLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com atendimento no WhatsApp"
        className="bg-brand-red hover:bg-brand-red-hover relative flex h-14 w-14 items-center justify-center rounded-xl text-white shadow-xl shadow-brand-red/20 transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer border border-brand-red/10 opacity-60"
      >
        {/* Efeito de Pulsação Ondular Vermelha */}
        <span className="bg-brand-red absolute inset-0 -z-10 animate-[ping_2s_infinite] rounded-xl opacity-30" />

        {/* Ícone oficial do WhatsApp - Maior reconhecimento visual de clique */}
        <FaWhatsapp className="h-6 w-6 animate-[bounce_3s_infinite] [animation-delay:1s]" />
      </a>
    </div>
  );
}
