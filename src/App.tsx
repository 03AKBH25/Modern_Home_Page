import Navbar from "./components/layout/Navbar";
import Hero from "./components/hero/Hero";
import Features from "./components/features/Features";
import InteractiveDemo from "./components/demo/InteractiveDemo";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#09090b] text-white">
      <Navbar />

      <main>
        <Hero />
        <Features />
        <InteractiveDemo />
      </main>

      <Footer />
    </div>
  );
}

export default App;