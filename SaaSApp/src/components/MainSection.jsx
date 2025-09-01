import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import { useState, useEffect, useRef, Suspense } from "react";
import { a, useSpring } from "@react-spring/three";

function FuturisticShape() {
    const [hovered, setHovered] = useState(false);

    const { scale, emissiveIntensity } = useSpring({
        scale: hovered ? 1.05 : 1,
        emissiveIntensity: hovered ? 1.8 : 0.9,
        config: { tension: 200, friction: 18 },
    });

    return (
        <a.mesh
            rotation={[0.4, 0.2, 0]}
            scale={scale}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
        >
            <icosahedronGeometry args={[3.2, 2]} />
            <a.meshStandardMaterial
                wireframe
                color="#a78bfa"
                emissive="#ec4899"
                emissiveIntensity={emissiveIntensity}
            />
        </a.mesh>
    );
}

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
    const [showCursor, setShowCursor] = useState(true);
    const charIndexRef = useRef(0);
    const rafRef = useRef(null);

    useEffect(() => {
        charIndexRef.current = 0;
        setDisplayText("");
        const text = headlines[currentHeadline];
        let lastTime = 0;

        const type = (time) => {
            if (time - lastTime > 60) {
                if (charIndexRef.current <= text.length) {
                    setDisplayText(text.slice(0, charIndexRef.current));
                    charIndexRef.current++;
                } else {
                    setTimeout(
                        () => setCurrentHeadline((prev) => (prev + 1) % headlines.length),
                        2500
                    );
                    return;
                }
                lastTime = time;
            }
            rafRef.current = requestAnimationFrame(type);
        };

        rafRef.current = requestAnimationFrame(type);
        return () => cancelAnimationFrame(rafRef.current);
    }, [currentHeadline]);

    useEffect(() => {
        const blink = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, 500);
        return () => clearInterval(blink);
    }, []);

    return (
        <motion.section
            id="home"
            className="relative min-h-screen flex items-center bg-gradient-to-b from-gray-950 via-black to-gray-900 text-white overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
        >
            {/* Background glow */}
            <motion.div
                className="absolute inset-0 -z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
            >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] sm:w-[800px] h-[700px] sm:h-[800px] rounded-full bg-gradient-to-r from-indigo-500/20 via-purple-500/15 to-pink-500/20 blur-[120px] sm:blur-[140px] opacity-70" />
            </motion.div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-16 w-full">
                {/* Text */}
                {/* Text */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="flex-1 text-center lg:text-left"
                >
                    <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(236,72,153,0.4)] min-h-[6rem] transition-all duration-500">
                        {displayText}
                        <span
                            className={`ml-1 ${showCursor ? "opacity-100" : "opacity-0"} transition`}
                        >
                            |
                        </span>
                    </h1>
                    <p className="mt-6 text-base sm:text-lg md:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto md:mx-0">
                        Transform raw data into{" "}
                        <span className="text-white font-semibold">
                            boardroom-ready insights
                        </span>
                        . Our AI Copilot gives you clarity, foresight, and precision to
                        scale faster — without drowning in complexity.
                    </p>

                    {/* CTA */}
                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-5">
                        <button className="relative px-8 py-3 rounded-full font-semibold bg-gradient-to-r from-indigo-500 to-pink-500 shadow-lg shadow-pink-500/40 transition-all duration-300 hover:shadow-pink-500/80 hover:scale-110 hover:brightness-110 before:absolute before:inset-0 before:rounded-full before:border-2 before:border-transparent before:transition-all before:duration-500 hover:before:border-pink-400 hover:before:blur-md">
                            Get Started
                        </button>
                        <div className="relative px-8 py-3 rounded-full border border-gray-700/60 backdrop-blur-md bg-white/5 font-medium text-gray-300 transition-all duration-300 hover:border-indigo-400 hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/30 cursor-pointer">
                            Book Demo
                        </div>
                    </div>
                </motion.div>

                {/* 3D Shape */}
                {/* 3D Shape */}
                <div className="hidden lg:flex flex-1 items-center justify-center relative 
                w-full max-w-[420px] lg:max-w-[480px] 
                h-[280px] sm:h-[360px] md:h-[420px] lg:h-[480px]">
                    <Canvas camera={{ position: [0, 0, 7] }} gl={{ alpha: true }}>
                        <ambientLight intensity={0.6} />
                        <pointLight position={[10, 10, 10]} intensity={1.2} />
                        <Suspense fallback={<FuturisticShapePlaceholder />}>
                            <FuturisticShape />
                        </Suspense>
                        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
                    </Canvas>
                </div>
            </div>
        </motion.section>
    );
}
