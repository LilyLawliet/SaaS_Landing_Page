// src/components/SectionFour.jsx
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import { Slack, Cloud, Cpu, Zap, CheckCircle } from "lucide-react";

export default function SectionFour() {
  const integrations = [
    { name: "Slack", icon: <Slack size={42} className="text-indigo-400" /> },
    { name: "Google Drive", icon: <Cloud size={42} className="text-green-400" /> },
    { name: "AI Engine", icon: <Cpu size={42} className="text-pink-400" /> },
    { name: "Zapier", icon: <Zap size={42} className="text-orange-400" /> },
  ];

  return (
    <section
      id="integrations"
      className="min-h-screen relative flex flex-col justify-center py-24 px-6 overflow-hidden bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white"
    >
      {/* Parallax glowing blobs */}
      <Parallax speed={-20}>
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-indigo-600/20 blur-[180px]" />
      </Parallax>
      <Parallax speed={15}>
        <div className="absolute bottom-20 right-0 w-[500px] h-[500px] rounded-full bg-pink-600/20 blur-[180px]" />
      </Parallax>

      {/* Headline */}
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 drop-shadow-lg"
        >
          Enterprise Integrations
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-gray-300 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed"
        >
          Connect Aurora AI Copilot to your existing stack in seconds. 
          From Slack to Zapier, Google Drive to Salesforce — your tools, 
          unified and supercharged with AI insights.
        </motion.p>
      </div>

      {/* Integrations Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-5xl mx-auto mt-20 relative z-10">
        {integrations.map((item, idx) => (
          <Parallax key={idx} translateY={[-10, 10]} speed={5}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.25 }}
              className="relative group flex flex-col items-center justify-center gap-4 p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-indigo-400/50 hover:shadow-[0_0_40px_-10px_rgba(129,140,248,0.5)] transition-all duration-300"
            >
              {/* Icon with glowing hover */}
              <div className="p-4 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/10 group-hover:scale-110 transition-transform relative">
                {item.icon}
                {/* Connected Badge */}
                <CheckCircle className="absolute -top-2 -right-2 text-green-400 drop-shadow-md" size={20} />
              </div>
              <span className="text-gray-200 font-medium text-lg">
                {item.name}
              </span>
              <span className="text-xs text-green-400 tracking-wide">Connected</span>
            </motion.div>
          </Parallax>
        ))}
      </div>

      {/* Trusted by companies */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="mt-28 text-center relative z-10"
      >
        <p className="text-gray-400 text-sm uppercase tracking-widest mb-6">
          Trusted by teams at
        </p>
        <div className="flex justify-center gap-12 flex-wrap opacity-80">
          <span className="text-xl font-bold text-white/70">Notion</span>
          <span className="text-xl font-bold text-white/70">Salesforce</span>
          <span className="text-xl font-bold text-white/70">Zoom</span>
          <span className="text-xl font-bold text-white/70">Stripe</span>
        </div>
      </motion.div>
    </section>
  );
}
