import { useRef } from 'react';
import { Cpu, Shield, Rocket, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Cpu,
    title: 'Systems Design',
    desc: 'Scalable, resilient architectures with real-time insights and seamless integrations.',
  },
  {
    icon: Shield,
    title: 'Security by Design',
    desc: 'Defense-in-depth with zero-trust principles and proactive monitoring.',
  },
  {
    icon: Rocket,
    title: 'Product Acceleration',
    desc: 'Rapid prototyping to production with performance-first engineering.',
  },
];

const projects = [
  { title: 'Neon Commerce', tag: 'E‑commerce' },
  { title: 'Vision UI', tag: 'Design System' },
  { title: 'Quanta Cloud', tag: 'SaaS Platform' },
  { title: 'EdgeOps', tag: 'DevTools' },
  { title: 'Pulse AI', tag: 'ML Suite' },
  { title: 'Holo Grid', tag: '3D Viz' },
];

export default function ServicesShowcase() {
  return (
    <section id="services" className="relative bg-[#000000] text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#121212] to-[#000000] pointer-events-none" />
      <div className="relative z-10 container mx-auto px-6 py-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold"
        >
          Our Services
        </motion.h2>

        {/* Services cards */}
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, idx) => (
            <ServiceCard key={idx} Icon={s.icon} title={s.title} desc={s.desc} />
          ))}
        </div>

        {/* Showcase */}
        <motion.h3
          id="showcase"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-24 text-3xl md:text-4xl font-bold"
        >
          Showcase
        </motion.h3>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={i} title={p.title} tag={p.tag} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ Icon, title, desc }) {
  const ref = useRef(null);
  const onMove = (e) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const rx = ((e.clientY - r.top) / r.height - 0.5) * -8;
    const ry = ((e.clientX - r.left) / r.width - 0.5) * 8;
    ref.current.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg)';
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="group relative rounded-xl border border-white/10 bg-gradient-to-br from-[#121212] to-black p-6 overflow-hidden hover:border-[#00FF88]/40 transition-transform"
    >
      <div className="absolute -top-20 -right-20 w-52 h-52 bg-[#00FF88]/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition" />
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-[#00FF88]/10 border border-[#00FF88]/20 shadow-[0_0_20px_#00FF8833] text-[#00FF88]">
          <Icon className="w-6 h-6" />
        </div>
        <div>
          <h4 className="text-lg font-semibold">{title}</h4>
          <p className="mt-2 text-sm text-white/70">{desc}</p>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectCard({ title, tag }) {
  const ref = useRef(null);
  const onMove = (e) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const rx = ((e.clientY - r.top) / r.height - 0.5) * -6;
    const ry = ((e.clientX - r.left) / r.width - 0.5) * 6;
    ref.current.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
  };
  const onLeave = () => { if (ref.current) ref.current.style.transform = 'perspective(900px) rotateX(0) rotateY(0)'; };
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative rounded-xl overflow-hidden border border-white/10 bg-[#0b0b0b]"
    >
      <div className="aspect-[4/3] w-full bg-gradient-to-br from-[#0f0f0f] via-[#121212] to-black">
        <div className="absolute inset-0 opacity-40 mix-blend-screen"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, #00FF8822 0px, #00FF8822 2px, transparent 2px, transparent 6px)'
          }}
        />
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(circle at 30% 20%, #00FF8844, transparent 40%), radial-gradient(circle at 80% 70%, #00FF881F, transparent 40%)'
        }} />
      </div>
      <div className="p-4 flex items-center justify-between">
        <div>
          <h4 className="font-semibold">{title}</h4>
          <p className="text-xs text-white/60 mt-1">{tag}</p>
        </div>
        <div className="px-3 py-1 rounded-full text-xs bg-[#00FF88]/15 text-[#00FF88] border border-[#00FF88]/30 flex items-center gap-1">
          <Layers className="w-3 h-3" />
          3D
        </div>
      </div>
    </motion.div>
  );
}
