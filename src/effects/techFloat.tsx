// app/components/techFloat.tsx
"use client";

import { useEffect, useState } from "react";
import {
  FaMobileAlt,
  FaClock,
  FaHeadphones
} from "react-icons/fa";

interface FloatingTechItem {
  id: number;
  left: string;
  delay: string;
  duration: string;
  opacity: string;
  size: number;
  type: "phone" | "watch" | "headphone";
}

export default function TechFloat() {
  const [items, setItems] = useState<FloatingTechItem[]>([]);

  useEffect(() => {
    // Gera 50 gotículas com propriedades dispersas e aleatórias
    const generated = Array.from({ length: 25 }).map((_, index) => ({
      id: index,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 8}s`,
      duration: `${10 + Math.random() * 10}s`,
      opacity: `${0.05 + Math.random() * 0.15}`,
      size: 12 + Math.random() * 18,
      type: ["phone", "watch", "headphone"][
        Math.floor(Math.random() * 3)
      ] as "phone" | "watch" | "headphone",
    }));

    setItems(generated);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {
        items.map((item) => (
          <div
            key={item.id}
            className="absolute bottom-0 animate-tech-float"
            style={{
              left: item.left,
              animationDelay: item.delay,
              animationDuration: item.duration,
              opacity: item.opacity,
            }}
          >
            {item.type === "phone" && (
              <FaMobileAlt size={item.size} />
            )}

            {item.type === "watch" && (
              <FaClock size={item.size} />
            )}

            {item.type === "headphone" && (
              <FaHeadphones size={item.size} />
            )}
          </div>
        ))
      };
    </div>
  );
}
