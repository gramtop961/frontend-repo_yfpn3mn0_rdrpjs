import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesShowcase from './components/ServicesShowcase';
import AboutContact from './components/AboutContact';

export default function App() {
  return (
    <div className="min-h-screen bg-[#000000] text-white selection:bg-[#00FF88] selection:text-black">
      <Navbar />
      <Hero />
      <AboutContact />
      <ServicesShowcase />
      <footer className="border-t border-white/10">
        <div className="container mx-auto px-6 py-10 text-sm text-white/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Upscala. All rights reserved.</p>
          <p className="text-white/40">Premium digital experiences in neon green and black.</p>
        </div>
      </footer>
    </div>
  );
}
