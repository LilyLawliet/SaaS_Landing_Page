// src/components/SectionFive.jsx
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";

export default function SectionFive() {
  const tiers = [
    {
      name: "Starter",
      price: "$49/mo",
      features: ["AI Insights", "1 Dashboard", "Email Support"],
    },
    {
      name: "Pro",
      price: "$149/mo",
      features: [
        "AI Insights",
        "5 Dashboards",
        "Priority Support",
        "Integrations",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: [
        "Unlimited Dashboards",
        "Dedicated AI Analyst",
        "SLA Support",
        "Full Integrations",
      ],
    },
  ];

  return (
    <section
      id="pricing"
      className="min-h-screen py-24 px-6 bg-gradient-to-b from-gray-900 via-black to-gray-950 text-white relative overflow-hidden"
    >
      {/* Parallax glowing accents */}
      <Parallax speed={-25}>
        <div className="absolute -top-40 left-20 w-[600px] h-[600px] rounded-full bg-indigo-600/20 blur-[180px]" />
      </Parallax>
      <Parallax speed={20}>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-purple-600/20 blur-[180px]" />
      </Parallax>

      <div className="max-w-7xl mx-auto text-center mb-20 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400"
        >
          Choose Your Plan
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-gray-300 max-w-2xl mx-auto text-lg"
        >
          Whether you're a startup or enterprise, Aurora AI Copilot grows with
          your ambitions.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto relative z-10">
        {tiers.map((tier, idx) => (
          <Parallax key={idx} translateY={[-15, 15]} speed={8}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className={`relative rounded-3xl p-8 flex flex-col items-center text-center shadow-lg hover:scale-105 transition-transform ${
                tier.highlighted
                  ? "bg-gradient-to-b from-indigo-900/60 via-purple-900/50 to-pink-900/40 border border-indigo-400/40 shadow-indigo-500/40"
                  : "bg-gray-800 border border-gray-700"
              }`}
            >
              {tier.highlighted && (
                <span className="absolute -top-4 px-4 py-1 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold mb-3">{tier.name}</h3>
              <p className="text-4xl font-extrabold my-4">{tier.price}</p>
              <ul className="mb-6 space-y-2 text-gray-300">
                {tier.features.map((feat, i) => (
                  <li key={i}>• {feat}</li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full font-semibold shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 transition"
              >
                {tier.name === "Enterprise" ? "Contact Us" : "Get Started"}
              </motion.button>
            </motion.div>
          </Parallax>
        ))}
      </div>
    </section>
  );
}
