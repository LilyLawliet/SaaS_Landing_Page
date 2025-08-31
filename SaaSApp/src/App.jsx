import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section placeholder */}
      <div className="flex flex-col items-center justify-center text-center h-screen px-6">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
          Build Your SaaS with <span className="text-indigo-600">Speed & Style</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mb-8">
          A modern boilerplate powered by Vite + React + Tailwind. Scale fast, design effortlessly, and focus on growth.
        </p>
        <div className="flex gap-4">
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition">
            Get Started
          </button>
          <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
