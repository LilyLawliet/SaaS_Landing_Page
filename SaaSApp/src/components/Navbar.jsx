export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-indigo-600">SaaSBrand</div>

        {/* Links */}
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <a href="#features" className="hover:text-indigo-600 transition">Features</a>
          <a href="#pricing" className="hover:text-indigo-600 transition">Pricing</a>
          <a href="#about" className="hover:text-indigo-600 transition">About</a>
          <a href="#contact" className="hover:text-indigo-600 transition">Contact</a>
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center space-x-4">
          <button className="hidden md:inline px-4 py-2 text-gray-600 hover:text-indigo-600 transition">
            Sign In
          </button>
          <button className="px-5 py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  )
}
