import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import { useState, useEffect, useRef, Suspense } from "react";

// Full-detail 3D shape
function FuturisticShape() {
  return (
    <mesh rotation={[0.4, 0.2, 0]}>
      <icosahedronGeometry args={[3.2, 2]} />
      <meshStandardMaterial
        wireframe
        color="#a78bfa"
        emissive="#ec4899"
        emissiveIntensity={0.9}
      />
    </mesh>
  );
}

// Low-poly placeholder (blurred)
function FuturisticShapePlaceholder() {
  return (
    <mesh rotation={[0.4, 0.2, 0]}>
      <icosahedronGeometry args={[3, 0]} />
      <meshStandardMaterial
        wireframe
        color="#a78bfa"
        emissive="#ec4899"
        emissiveIntensity={0.3}
        opacity={0.4}
        transparent
      />
    </mesh>
  );
}

export default function MainSection() {
  const headlines = [
    "Your AI Business Intelligence Copilot",
    "Scale Faster with Clarity & Precision",
    "Transform Data into Boardroom-Ready Insights",
  ];

  const [currentHeadline, setCurrentHeadline] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [showCanvas, setShowCanvas] = useState(false);
  const charIndexRef = useRef(0);

  // Smooth typewriter
  useEffect(() => {
    setDisplayText("");
    charIndexRef.current = 0;
    let rafId;
    const text = headlines[currentHeadline];

    const type = () => {
      if (charIndexRef.current <= text.length) {
        setDisplayText(text.slice(0, charIndexRef.current) + "|");
        charIndexRef.current++;
        rafId = requestAnimationFrame(() => setTimeout(type, 60));
      } else {
        setDisplayText(text);
        rafId = requestAnimationFrame(() =>
          setTimeout(() => setCurrentHeadline((prev) => (prev + 1) % headlines.length), 2500)
        );
      }
    };

    rafId = requestAnimationFrame(() => setTimeout(type, 500));
    return () => cancelAnimationFrame(rafId);
  }, [currentHeadline]);

  // Lazy load Canvas after mount
  useEffect(() => {
    const lazyTimeout = setTimeout(() => setShowCanvas(true), 500);
    return () => clearTimeout(lazyTimeout);
  }, []);

  return (
    <motion.section
      className="relative min-h-screen flex items-center bg-gradient-to-b from-gray-950 via-black to-gray-900 text-white overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      {/* Background Glow */}
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] rounded-full bg-gradient-to-r from-indigo-500/30 via-purple-500/20 to-pink-500/30 blur-[180px] opacity-80 animate-pulse" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-20 w-full">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 text-center lg:text-left"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(236,72,153,0.4)] min-h-[6rem] transition-all duration-500">
            {displayText}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0">
            Transform raw data into{" "}
            <span className="text-white font-semibold">boardroom-ready insights</span>.  
            Our AI Copilot gives you clarity, foresight, and precision to
            scale faster — without drowning in complexity.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
            <button className="px-10 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 font-semibold shadow-lg shadow-pink-500/50 hover:shadow-pink-500/90 transition transform hover:scale-110 hover:brightness-110">
              Get Started
            </button>
            <div className="px-10 py-4 rounded-full border border-gray-700/60 backdrop-blur-md bg-white/5 font-medium text-gray-300 hover:border-indigo-400 hover:text-white hover:brightness-110 transition cursor-pointer">
              Book Demo
            </div>
          </div>
        </motion.div>

        {/* Futuristic 3D Shape */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: showCanvas ? 1 : 0, scale: showCanvas ? 1 : 0.95 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          whileHover={{
            scale: 1.08,
            filter: "drop-shadow(0px 0px 35px rgba(236,72,153,0.8))",
          }}
          whileTap={{
            scale: 0.95,
            rotate: [0, -5, 5, 0],
            transition: { duration: 0.4 },
          }}
          className="flex-1 flex items-center justify-center relative w-[480px] h-[480px]"
        >
          {/* Gradient Glow Behind Shape */}
          {showCanvas && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-500/20 via-indigo-500/10 to-purple-500/20 blur-[120px]"
            />
          )}

          {/* Canvas with Suspense & low-poly placeholder */}
          {showCanvas && (
            <Suspense
              fallback={
                <Canvas camera={{ position: [0, 0, 7] }}>
                  <ambientLight intensity={0.3} />
                  <FuturisticShapePlaceholder />
                </Canvas>
              }
            >
              <Canvas camera={{ position: [0, 0, 7] }}>
                <ambientLight intensity={0.6} />
                <pointLight position={[10, 10, 10]} intensity={1.2} />
                <FuturisticShape />
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
              </Canvas>
            </Suspense>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
}
