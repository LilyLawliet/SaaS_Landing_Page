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
      className="min-h-screen py-20 px-4 sm:py-24 sm:px-6 bg-gradient-to-b from-gray-900 via-black to-gray-950 text-white relative overflow-hidden"
    >
      {/* Parallax glowing accents */}
      <Parallax speed={-25}>
        <div className="absolute -top-40 left-20 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] rounded-full bg-indigo-600/20 blur-[150px] sm:blur-[180px]" />
      </Parallax>
      <Parallax speed={20}>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] rounded-full bg-purple-600/20 blur-[150px] sm:blur-[180px]" />
      </Parallax>

      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-14 sm:mb-20 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400"
        >
          Choose Your Plan
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 sm:mt-6 text-gray-300 max-w-2xl mx-auto text-base sm:text-lg"
        >
          Whether you're a startup or enterprise, Aurora AI Copilot grows with
          your ambitions.
        </motion.p>
      </div>

      {/* Pricing grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 max-w-7xl mx-auto relative z-10">
        {tiers.map((tier, idx) => (
          <div key={idx} className="w-full flex">
            <Parallax translateY={[-10, 10]} speed={6} className="w-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                whileHover={{
                  rotateX: -5,
                  rotateY: 5,
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 200, damping: 15 },
                }}
                whileTap={{ scale: 0.98 }}
                className={`relative w-full rounded-2xl sm:rounded-3xl p-5 sm:p-8 flex flex-col items-center text-center shadow-xl transition-transform ${
                  tier.highlighted
                    ? "bg-gradient-to-b from-indigo-900/60 via-purple-900/50 to-pink-900/40 border border-indigo-400/40 shadow-indigo-500/40"
                    : "bg-gray-800 border border-gray-700"
                }`}
              >
                {tier.highlighted && (
                  <span className="absolute -top-3 sm:-top-4 px-3 sm:px-4 py-0.5 sm:py-1 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full text-xs sm:text-sm font-semibold">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
                  {tier.name}
                </h3>
                <p className="text-3xl sm:text-4xl font-extrabold my-3 sm:my-4">
                  {tier.price}
                </p>
                <ul className="mb-5 sm:mb-6 space-y-1.5 sm:space-y-2 text-gray-300 text-sm sm:text-base">
                  {tier.features.map((feat, i) => (
                    <li key={i}>• {feat}</li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.07 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full font-semibold shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 transition text-sm sm:text-base"
                >
                  {tier.name === "Enterprise" ? "Contact Us" : "Get Started"}
                </motion.button>
              </motion.div>
            </Parallax>
          </div>
        ))}
      </div>
    </section>
  );
}
