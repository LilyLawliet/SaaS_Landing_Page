import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import { Cpu, Database, TrendingUp } from "lucide-react";

export default function SectionThree() {
  const steps = [
    {
      icon: <Database size={38} className="text-indigo-400" />,
      title: "Connect Your Data",
      description:
        "Integrate seamlessly with your CRM, ERP, and spreadsheets in minutes.",
    },
    {
      icon: <Cpu size={38} className="text-purple-400" />,
      title: "AI Analyzes Automatically",
      description:
        "Our AI Copilot digests complex datasets and highlights trends instantly.",
    },
    {
      icon: <TrendingUp size={38} className="text-pink-400" />,
      title: "Get Actionable Insights",
      description:
        "Receive predictive insights and recommendations to scale your business smarter.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="min-h-screen relative flex flex-col justify-center py-24 px-6 overflow-hidden bg-gradient-to-br from-black via-gray-950 to-gray-900 text-white"
    >
      {/* Parallax glowing orbs */}
      <Parallax speed={-20}>
        <div className="absolute -top-40 left-0 w-[500px] h-[500px] rounded-full bg-indigo-600/25 blur-[180px]" />
      </Parallax>
      <Parallax speed={25}>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-purple-600/25 blur-[180px]" />
      </Parallax>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 drop-shadow-lg"
        >
          How Aurora AI Works
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-gray-300 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed"
        >
          Aurora AI Copilot is engineered for executives who demand precision.
          Connect, analyze, and act — all in one seamless, intelligent flow.
        </motion.p>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto mt-20 relative z-10">
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: idx * 0.25 }}
            className="relative group bg-white/5 backdrop-blur-xl rounded-3xl p-10 flex flex-col items-center text-center border border-white/10 hover:border-indigo-400/50 hover:shadow-[0_0_40px_-10px_rgba(129,140,248,0.5)] transition-all duration-300"
          >
            <div className="mb-6 p-4 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/10 group-hover:scale-110 transition-transform">
              {step.icon}
            </div>
            <h3 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {step.title}
            </h3>
            <p className="text-gray-400 text-base leading-relaxed">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
