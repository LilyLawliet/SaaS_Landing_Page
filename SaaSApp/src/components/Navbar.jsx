import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    "Home",
    "Solutions",
    "How It Works",
    "Integrations",
    "Pricing",
    "Testimonials",
    "Contact",
  ];

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 
      bg-black/40 backdrop-blur-xl 
      border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 
        flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-xl lg:text-2xl font-extrabold 
          bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 
          bg-clip-text text-transparent tracking-tight cursor-pointer">
          Aurora AI
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-8 xl:space-x-10 
          text-gray-100 font-medium">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="relative group tracking-wide whitespace-nowrap"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 
                bg-gradient-to-r from-indigo-400 to-pink-400 
                transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <button className="px-4 py-2 text-gray-300 hover:text-white 
            transition font-medium">
            Sign In
          </button>
          <button className="px-5 py-2 bg-gradient-to-r from-indigo-500 to-pink-500 
            text-white rounded-full font-semibold 
            shadow-md shadow-pink-500/30 hover:shadow-pink-500/50 
            transition whitespace-nowrap">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-gray-200 hover:text-white transition"
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
  <div 
    className="lg:hidden fixed top-20 left-4 right-4 z-50 
      bg-gradient-to-br from-gray-950/90 via-black/85 to-gray-900/95 
      backdrop-blur-3xl rounded-3xl 
      border border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.8)] 
      px-6 py-8 space-y-8 text-gray-200 
      animate-fade-in-down"
  >
    {navItems.map((item) => (
      <a
        key={item}
        href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
        className="block text-xl font-medium relative group tracking-wide"
        onClick={() => setMobileOpen(false)}
      >
        {item}
        <span className="absolute left-0 -bottom-1 w-0 h-0.5 
          bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 
          transition-all duration-500 ease-out group-hover:w-full"></span>
      </a>
    ))}

    {/* Buttons */}
    <div className="pt-6 flex flex-col space-y-5">
      <button 
        className="px-5 py-2.5 rounded-full 
          bg-white/5 border border-white/15 
          text-gray-200 font-medium 
          hover:bg-white/10 hover:text-white 
          transition-all duration-300 
          shadow-inner shadow-white/5"
      >
        Sign In
      </button>

      <button 
        className="px-6 py-3 rounded-full 
          bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
          text-white font-semibold 
          shadow-lg shadow-pink-500/30 
          hover:shadow-pink-500/50 
          hover:scale-[1.03] active:scale-[0.98] 
          transition-all duration-300 ease-out"
      >
        Get Started
      </button>
    </div>
  </div>
)}

    </nav>
  );
}
