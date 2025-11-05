import { useEffect, useState } from 'react';
import { Rocket, Layers, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#showcase', label: 'Showcase' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <div className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
      scrolled ? 'backdrop-blur-md bg-black/40 border border-[#00FF88]/20 shadow-[0_0_30px_#00FF8855] scale-100' : 'backdrop-blur-sm bg-black/20 border border-white/10'
    } rounded-full px-4 py-2`}
    >
      <nav className="flex items-center gap-6">
        <a href="#home" className="flex items-center gap-2 text-[#00FF88]">
          <Sparkles className="w-4 h-4" />
          <span className="font-semibold tracking-wider">Upscala</span>
        </a>
        <div className="h-5 w-px bg-white/10" />
        <ul className="hidden md:flex items-center gap-4">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-white/80 hover:text-[#00FF88] transition-colors px-3 py-1 rounded-full hover:shadow-[0_0_20px_#00FF8833]"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex-1" />
        <a
          href="#contact"
          className="hidden sm:flex items-center gap-2 text-black bg-[#00FF88] hover:bg-[#00e67b] transition-colors px-4 py-1.5 rounded-full shadow-[0_0_25px_#00FF8855]"
        >
          <Rocket className="w-4 h-4" />
          <span className="text-sm font-semibold">Get Started</span>
        </a>
        <a href="#showcase" className="md:hidden text-[#00FF88]" aria-label="Open">
          <Layers className="w-5 h-5" />
        </a>
      </nav>
    </div>
  );
}
