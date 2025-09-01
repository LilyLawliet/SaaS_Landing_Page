// src/components/SectionSeven.jsx
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Twitter } from "lucide-react";

export default function SectionSeven() {
  return (
    <section
      id="contact"
      className="min-h-screen relative py-24 px-6 bg-gradient-to-t from-black via-gray-950 to-gray-900 text-white overflow-hidden"
    >
      {/* Floating Orbs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.3, scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.25, scale: [1.1, 1.3, 1.1] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full blur-3xl"
      />

      {/* Title */}
      <div className="relative max-w-7xl mx-auto text-center mb-20 z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 drop-shadow-xl"
        >
          Let’s Build Something Iconic
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-gray-300 max-w-2xl mx-auto text-lg"
        >
          Questions, partnerships, or demos? We’re here to make your vision
          reality with AI-driven brilliance.
        </motion.p>
      </div>

      {/* Contact Form */}
      <motion.form
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-20 z-10"
      >
        <input
          type="text"
          placeholder="Your Name"
          className="p-4 rounded-2xl bg-white/10 backdrop-blur-xl text-white border border-white/20 focus:border-indigo-400 outline-none transition-all duration-300"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-4 rounded-2xl bg-white/10 backdrop-blur-xl text-white border border-white/20 focus:border-pink-400 outline-none transition-all duration-300"
        />
        <textarea
          placeholder="Your Message"
          className="p-4 rounded-2xl bg-white/10 backdrop-blur-xl text-white border border-white/20 focus:border-purple-400 outline-none transition-all duration-300 md:col-span-2 h-40 resize-none"
        />
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 30px rgba(236,72,153,0.6)" }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="md:col-span-2 px-8 py-4 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full text-white font-semibold shadow-xl transition-all duration-300"
        >
          Send Message
        </motion.button>
      </motion.form>

      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative max-w-4xl mx-auto text-center mb-16 z-10 space-y-6"
      >
        <div className="flex flex-col md:flex-row md:justify-center md:space-x-16 space-y-4 md:space-y-0 text-gray-300">
          <div className="flex items-center justify-center gap-2">
            <Mail size={22} className="text-indigo-400" />
            <span className="hover:text-white transition">contact@auroraai.com</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Phone size={22} className="text-pink-400" />
            <span className="hover:text-white transition">+1 (555) 123-4567</span>
          </div>
        </div>
      </motion.div>

      {/* Socials */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative flex justify-center gap-8 mb-12 z-10 text-gray-300"
      >
        <a href="#" className="hover:text-indigo-400 transition-transform transform hover:scale-110">
          <Linkedin size={28} />
        </a>
        <a href="#" className="hover:text-pink-400 transition-transform transform hover:scale-110">
          <Twitter size={28} />
        </a>
      </motion.div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="relative text-center text-gray-500 text-sm z-10"
      >
        &copy; {new Date().getFullYear()} Aurora AI. Crafted with ❤️
      </motion.div>
    </section>
  );
}
