import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const navItems = [
        "Solutions",
        "How It Works",
        "Integrations",
        "Pricing",
        "Testimonials",
        "Contact"
    ];

    return (
        <nav className="w-full fixed top-0 left-0 z-50 bg-white/10 backdrop-blur-xl border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="text-2xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent tracking-tight">
                    Aurora AI
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex space-x-10 text-gray-200 font-medium">
                    {navItems.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                            className="relative group transition tracking-wide"
                        >
                            {item}
                            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-pink-400 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </div>

                {/* CTA Buttons */}
                <div className="hidden md:flex items-center space-x-4">
                    <button className="px-4 py-2 text-gray-300 hover:text-white transition">
                        Sign In
                    </button>
                    <button className="px-5 py-2 bg-gradient-to-r from-indigo-500 to-pink-500 text-white rounded-full font-semibold shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 transition">
                        Get Started
                    </button>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden">
                    <button onClick={() => setMobileOpen(!mobileOpen)} className="text-gray-300 hover:text-white transition">
                        {mobileOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div
                    className="md:hidden fixed top-20 left-4 right-4 z-40 
               bg-gradient-to-br from-black/70 via-black/60 to-black/70 
               backdrop-blur-2xl rounded-2xl 
               border border-white/10 shadow-2xl 
               px-6 py-6 space-y-6 text-gray-200 
               motion-safe:animate-slideDown"
                >
                    {navItems.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                            className="block text-lg font-medium relative group tracking-wide"
                            onClick={() => setMobileOpen(false)}
                        >
                            {item}
                            <span className="absolute left-0 -bottom-1 w-0 h-0.5 
                         bg-gradient-to-r from-indigo-400 to-pink-400 
                         transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}

                    {/* Buttons */}
                    <div className="pt-4 flex flex-col space-y-4">
                        <button className="px-4 py-2 rounded-full bg-white/10 border border-white/20 
                         text-gray-200 font-medium hover:bg-white/20 hover:text-white 
                         transition w-full shadow-inner">
                            Sign In
                        </button>

                        <button className="px-5 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 
                         text-white font-semibold shadow-lg shadow-pink-500/30 
                         hover:shadow-pink-500/50 transition w-full">
                            Get Started
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}
