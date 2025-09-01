// src/components/SectionSix.jsx
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { User } from "lucide-react";

export default function SectionSix() {
  const testimonials = [
    {
      name: "Olivia Thompson",
      role: "CEO, Fintech Co.",
      quote:
        "Aurora AI Copilot transformed our data analysis overnight. The insights are precise and actionable — a total game-changer.",
    },
    {
      name: "Mark Reynolds",
      role: "CTO, Marketing Hub",
      quote:
        "Our decision-making is faster and smarter. The AI Copilot gives enterprise-level intelligence without the complexity.",
    },
    {
      name: "Sophia Lee",
      role: "COO, E-Commerce Inc.",
      quote:
        "Every dashboard, insight, and prediction feels hand-crafted for our business. Absolutely premium SaaS experience.",
    },
  ];

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax transforms
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section
      ref={ref}
      id="testimonials"
      className="relative min-h-screen py-24 px-6 bg-gradient-to-b from-gray-950 via-black to-gray-900 text-white overflow-hidden"
    >
      {/* Parallax Glow */}
      <motion.div
        style={{ y: y2 }}
        className="absolute -top-40 -left-40 w-[40rem] h-[40rem] rounded-full bg-gradient-to-r from-indigo-500/20 to-pink-500/20 blur-[120px]"
      />
      <motion.div
        style={{ y: y1 }}
        className="absolute -bottom-40 -right-40 w-[35rem] h-[35rem] rounded-full bg-gradient-to-r from-purple-500/20 to-pink-400/20 blur-[100px]"
      />

      <div className="relative max-w-7xl mx-auto text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400"
        >
          What Founders Say
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-gray-300 max-w-2xl mx-auto text-lg"
        >
          Trusted by top SaaS founders and enterprise executives worldwide.
        </motion.p>
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {testimonials.map((testi, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="relative bg-gray-800/80 border border-gray-700 rounded-3xl p-10 flex flex-col items-center text-center shadow-xl hover:scale-105 transition-transform backdrop-blur-md"
          >
            <div className="absolute -top-6 w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 flex items-center justify-center shadow-md">
              <User size={24} className="text-white" />
            </div>
            <p className="text-gray-300 mb-6 italic leading-relaxed">
              “{testi.quote}”
            </p>
            <h4 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400 text-lg">
              {testi.name}
            </h4>
            <span className="text-gray-400 text-sm">{testi.role}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
