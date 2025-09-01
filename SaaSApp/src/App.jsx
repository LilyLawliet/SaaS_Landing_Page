import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-black to-gray-900">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <MainSection />
    </div>
  );
}

export default App;
