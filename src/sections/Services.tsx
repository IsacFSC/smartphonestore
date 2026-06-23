"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaMobileAlt,
  FaClock,
  FaHeadphones,
  FaArrowRight,
  FaTools,
  FaBatteryHalf,
  FaChargingStation,
  FaStar,
  FaWhatsapp,
} from "react-icons/fa";
import { BsShieldCheck } from "react-icons/bs";
import { buildCustomWhatsAppUrl, STORE_PHONE } from "@/lib/dataNumber";

export default function Services() {
  
  const products = [
    {
      icon: <FaMobileAlt />,
      title: "Smartphones",
      image: "/services/iphone.jpg",
      tag: "Últimos Lançamentos",
      desc: "iPhones, Xiaomi, Samsung e Motorola com garantia e procedência.",
      price: "A partir de R$ 1.499",
    },
    {
      icon: <FaClock />,
      title: "Smartwatches",
      image: "/services/watch.jpg",
      tag: "Alta Performance",
      desc: "Apple Watch, Xiaomi Watch e modelos esportivos premium.",
      price: "A partir de R$ 299",
    },
    {
      icon: <FaHeadphones />,
      title: "Fones Bluetooth",
      image: "/services/fone.jpg",
      tag: "Som Premium",
      desc: "AirPods, Redmi Buds e acessórios originais para o dia a dia.",
      price: "A partir de R$ 49",
    },
    {
      icon: <BsShieldCheck />,
      title: "Cases smartphones",
      image: "/services/case.jpg",
      tag: "Protection",
      desc: "Capas para smartphones Redmi, Samsung, Iphone e muito mais.",
      price: "A partir de R$ 25",
    },
  ];

  const repairs = [
    { icon: <FaTools />, title: "Troca de Tela" },
    { icon: <FaBatteryHalf />, title: "Troca de Bateria" },
    { icon: <FaChargingStation />, title: "Conector de Carga" },
    { icon: <FaMobileAlt />, title: "Atualização de Software" },
  ];
  
  return (
    <section
      id="servicos"
      className="from-brand-black bg-linear-to-b to-[#141414] px-4 py-16 text-white md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header - Tipografia corrigida */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-10 max-w-3xl text-center md:mb-16"
        >
          <span className="text-brand-red text-xs font-bold tracking-[0.2em] uppercase block mb-3">
            Tecnologia sem limites
          </span>
          <h2 className="font-sans text-3xl font-black md:text-5xl tracking-tight leading-tight">
            Smartphones, Smartwatches e Headphones
          </h2>
          <p className="mt-4 text-sm text-gray-400 md:text-lg max-w-xl mx-auto">
            Venda de aparelhos originais e acessórios premium com a melhor garantia.
          </p>
        </motion.div>

        {/* Produtos: Carrossel nativo no mobile (Evita scroll infinito) e Grid no Desktop */}
        <div className="flex overflow-x-auto pb-6 gap-4 snap-x snap-mandatory scrollbar-none -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-x-visible md:pb-0 md:gap-6">
          {products.map((item, index) => {
            const whatsAppProductLink = buildCustomWhatsAppUrl(
              STORE_PHONE,
              `Olá! Tenho interesse no produto:

          📦 Produto: ${item.title}
          📝 Descrição: ${item.desc}
          💰 Valor: ${item.price}

          Gostaria de saber sobre disponibilidade e formas de pagamento.`
            );
            return (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group border-brand-dark-gray bg-brand-dark-gray w-[280px] shrink-0 snap-start overflow-hidden rounded-2xl border shadow-xl md:w-auto"
            >
              {/* Proporção de imagem horizontalizada para Mobile (aspect-square) */}
              <div className="relative aspect-video md:h-52 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-w-768px) 280px, 300px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="from-brand-black absolute inset-0 bg-linear-to-t via-transparent to-transparent opacity-60" />
                <span className="bg-brand-black/90 backdrop-blur-xs text-brand-red border border-brand-red/20 absolute top-3 right-[20%] rounded-full px-2.5 py-0.5 text-[9px] font-bold tracking-wider uppercase">
                  {item.tag}
                </span>
              </div>

              {/* Conteúdo com espaçamentos confortáveis */}
              <div className="p-5 flex flex-col justify-between min-h-[220px]">
                <div>
                  <div className="text-brand-red mb-2 text-2xl">{item.icon}</div>
                  <h3 className="mb-2 text-xl font-bold tracking-tight">{item.title}</h3>
                  <p className="text-xs leading-relaxed text-gray-400 line-clamp-2 md:text-sm">
                    {item.desc}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-gray-800 pt-4 mt-4">
                  <div>
                    <span className="text-[10px] text-gray-500 block uppercase tracking-wider">
                      Oferta
                    </span>
                    <p className="text-brand-red text-base font-extrabold md:text-lg">
                      {item.price}
                    </p>
                  </div>
                  <a
                    href={whatsAppProductLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Consultar ${item.title} pelo WhatsApp`}
                    className="
                      bg-brand-black
                      hover:bg-brand-red
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      text-white
                      transition-colors
                      duration-200
                      shrink-0
                    "
                  >
                    <FaArrowRight className="text-sm" />
                  </a>
                </div>
              </div>
            </motion.article>
            );
          })}
        </div>

        {/* Assistência Técnica - Grid adaptativo inteligente */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 md:mt-28"
        >
          <div className="mb-8 text-center md:mb-12">
            <span className="text-brand-red text-xs font-bold tracking-[0.2em] uppercase">
              Assistência Técnica
            </span>
            <h3 className="mt-2 text-2xl font-bold md:text-4xl tracking-tight">
              Reparos rápidos com garantia
            </h3>
          </div>

          <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {repairs.map((repair) => (
              <div
                key={repair.title}
                className="bg-brand-dark-gray flex items-center gap-4 rounded-xl border border-gray-800 p-4 transition-all hover:border-gray-700"
              >
                <div className="text-brand-red text-xl shrink-0">{repair.icon}</div>
                <span className="font-semibold text-sm md:text-base">{repair.title}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Indicadores - Otimizado de 1 coluna (mobile) para 2/4 colunas */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 grid gap-3 grid-cols-2 lg:grid-cols-4"
        >
          {[
            { title: "+5.000", desc: "Clientes atendidos" },
            { title: "4.9", desc: "Avaliação média", icon: <FaStar className="text-yellow-500 text-xl" /> },
            { title: "Garantia", desc: "Em todos os reparos" },
            { title: "Rápido", desc: "Atendimento especializado" },
          ].map((stat, i) => (
            <div key={i} className="bg-brand-dark-gray rounded-xl border border-gray-800 p-5 text-center flex flex-col justify-center items-center">
              <h4 className="text-brand-red flex items-center justify-center gap-1.5 text-2xl font-black md:text-3xl">
                {stat.icon}
                {stat.title}
              </h4>
              <p className="mt-1 text-xs text-gray-400 md:text-sm">{stat.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center bg-linear-to-br from-brand-dark-gray to-transparent border border-gray-800 rounded-3xl p-8 max-w-3xl mx-auto"
        >
          <h3 className="mb-3 text-2xl font-bold md:text-4xl">Precisa de um orçamento?</h3>
          <p className="mx-auto mb-6 text-sm text-gray-400 md:text-base max-w-md">
            Fale agora com nossa equipe especializada e receba seu diagnóstico rápido pelo WhatsApp.
          </p>
          <a
            href="https://wa.me/5567999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-red hover:bg-brand-red-hover inline-flex items-center gap-3 rounded-2xl px-8 py-4 font-bold text-white transition-all duration-300 hover:scale-105"
          >
            <FaWhatsapp />
            Solicitar Orçamento
          </a>
        </motion.div>
      </div>
    </section>
  );
}
