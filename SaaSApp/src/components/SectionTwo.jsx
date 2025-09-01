import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import { ChartBar, Cpu, Globe, Shield } from "lucide-react";

export default function SectionTwo() {
  const solutions = [
    {
      title: "Predictive Insights",
      description:
        "Forecast revenue, customer trends, and business KPIs with pinpoint AI accuracy.",
      icon: <ChartBar size={38} className="text-indigo-400" />,
    },
    {
      title: "Automated Analysis",
      description:
        "Let AI digest your data and deliver boardroom-ready reports in seconds.",
      icon: <Cpu size={38} className="text-purple-400" />,
    },
    {
      title: "Global Scalability",
      description:
        "Our AI Copilot adapts across multiple regions, currencies, and markets seamlessly.",
      icon: <Globe size={38} className="text-pink-400" />,
    },
    {
      title: "Secure & Compliant",
      description:
        "Enterprise-grade security ensures your data stays safe, compliant, and private.",
      icon: <Shield size={38} className="text-cyan-400" />,
    },
  ];

  return (
    <section
      id="solutions"
      className="min-h-screen relative flex flex-col justify-center py-24 px-6 overflow-hidden bg-gradient-to-br from-gray-950 via-black to-gray-900"
    >
      {/* Parallax glowing orbs */}
      <Parallax speed={-15}>
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-indigo-600/30 blur-[180px]" />
      </Parallax>
      <Parallax speed={20}>
        <div className="absolute top-40 -right-40 w-[500px] h-[500px] rounded-full bg-pink-600/30 blur-[180px]" />
      </Parallax>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 drop-shadow-lg"
        >
          Transform Your Business with AI Copilot
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-gray-300 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed"
        >
          From predictive insights to automated analysis, our AI Copilot empowers
          you to make smarter, faster, and more confident decisions. Engineered
          for enterprises where precision, security, and ROI define success.
        </motion.p>
      </div>

      {/* Solutions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto mt-20 relative z-10">
        {solutions.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: idx * 0.25 }}
            className="group relative bg-white/5 backdrop-blur-xl rounded-3xl p-10 flex flex-col items-center text-center border border-white/10 hover:border-indigo-400/50 hover:shadow-[0_0_40px_-10px_rgba(99,102,241,0.5)] transition-all duration-300"
          >
            <div className="mb-6 p-4 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/10 group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <h3 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {item.title}
            </h3>
            <p className="text-gray-400 text-base leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
