import BubbleBackground from "@/effects/techFloat";
import Link from "next/link";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark-gray text-brand-light-gray border-brand-medium/20 relative border-t px-4 pt-8 pb-4 font-sans md:pb-10">
      <div className="mx-auto
    max-w-6xl
    grid
    grid-cols-1
    md:grid-cols-[1.5fr_1fr_1fr]
    gap-10">
        {/* Coluna 1: Sobre / Identidade */}
        <div className="space-y-4 text-center md:text-left">
          <Link
            href="/"
            className="from-brand-red font-bold bg-linear-to-r to-white bg-clip-text text-transparent uppercase"
          >
            Style Tech
          </Link>

          <p className="text-brand-bg/70 max-w-sm mx-auto md:mx-0 text-sm leading-relaxed">
            Smartphones, smartwatches e acessórios premium com garantia,
            procedência e atendimento especializado para quem busca tecnologia
            com confiança.
          </p>

          <p className="text-brand-light text-xs font-semibold italic">
            Produtos selecionados • Garantia • Suporte especializado
          </p>
        </div>

        {/* Coluna 2: Links Rápidos */}
        <div className="space-y-3 text-center md:text-left">
          <h4 className="text-base font-semibold text-red-500">Links Rápidos</h4>
          <ul className="flex flex-col items-center space-y-2 text-sm md:items-start">
            <li>
              <Link
                href="/"
                className="hover:text-brand-light transition-colors"
              >
                Início
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-brand-light transition-colors"
              >
                Nossos Serviços
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-brand-light transition-colors"
              >
                Sobre Nós
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-brand-light transition-colors"
              >
                Contato e Localização
              </Link>
            </li>
          </ul>
        </div>

        {/* Coluna 3: Redes Sociais e Atendimento */}
        <div className="space-y-4 text-center md:text-left">
          <h4 className="text-base font-semibold text-red-500">Redes Sociais</h4>
          <div className="text-brand-light flex justify-center gap-4 text-2xl md:justify-start">
            <a
              href="#"
              className="transition-colors hover:text-white"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="transition-colors hover:text-white"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="transition-colors hover:text-white"
              aria-label="TikTok"
            >
              <FaTiktok />
            </a>
          </div>
          <div className="text-gray-400 space-y-1 text-xs">
            <p><strong>Horário:</strong> Segunda a Sexta</p>
            <p><strong>Horário:</strong> 08h às 18h</p>
            <p>retiradas no sábado mediante agendamento</p>
          </div>
        </div>
      </div>

      {/* Direitos Autorais */}
      <div className="border-brand-medium/10 text-brand-bg/50 mx-auto mt-8 max-w-6xl border-t pt-8 text-center text-xs">
        <p>
          &copy; {currentYear} Style Tech. Todos os direitos reservados.
        </p>
      </div>
      <BubbleBackground />
    </footer>
  );
}
