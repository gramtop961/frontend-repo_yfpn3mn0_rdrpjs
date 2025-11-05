import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';

export default function AboutContact() {
  return (
    <section id="about" className="relative bg-[#000000] text-white">
      <div className="relative container mx-auto px-6 py-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold"
        >
          About Upscala
        </motion.h2>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <GlowCard>
            <h3 className="text-xl font-semibold">Crafting the Future</h3>
            <p className="mt-3 text-white/70">
              We design and engineer immersive digital experiences where aesthetics and performance converge. From spatial UIs to intelligent platforms, our work blends real-time 3D, smooth motion, and robust systems thinking.
            </p>
            <ul className="mt-6 space-y-2 text-white/70 text-sm">
              <li>• Depth-based motion and tactile micro-interactions</li>
              <li>• Design systems with premium brand expression</li>
              <li>• End-to-end execution from prototype to scale</li>
            </ul>
          </GlowCard>

          <GlowCard>
            <h3 className="text-xl font-semibold">Engagement Model</h3>
            <p className="mt-3 text-white/70">
              We partner with ambitious brands and startups through sprints and retained collaborations, emphasizing rapid learning, inclusive teams, and measurable outcomes.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="px-3 py-1 rounded-full bg-[#00FF88]/15 border border-[#00FF88]/30 text-[#00FF88] text-xs">Premium</div>
              <div className="px-3 py-1 rounded-full bg-[#00FF88]/10 border border-[#00FF88]/20 text-[#00FF88] text-xs">High‑Performance</div>
              <div className="px-3 py-1 rounded-full bg-[#00FF88]/10 border border-[#00FF88]/20 text-[#00FF88] text-xs">Secure</div>
            </div>
          </GlowCard>
        </div>

        {/* Contact */}
        <motion.h3
          id="contact"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-24 text-3xl md:text-4xl font-bold"
        >
          Contact
        </motion.h3>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <GlassCard>
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-[#00FF88]/10 border border-[#00FF88]/20 text-[#00FF88]">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold">Let’s build something exceptional</h4>
                <p className="text-sm text-white/70">Share a few details and we’ll get back within 24 hours.</p>
              </div>
            </div>
            <form className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input className="col-span-1 rounded-lg bg-white/5 border border-white/10 focus:border-[#00FF88]/50 outline-none px-4 py-3 placeholder-white/40 text-sm backdrop-blur" placeholder="First name" />
              <input className="col-span-1 rounded-lg bg-white/5 border border-white/10 focus:border-[#00FF88]/50 outline-none px-4 py-3 placeholder-white/40 text-sm backdrop-blur" placeholder="Last name" />
              <input className="sm:col-span-2 rounded-lg bg-white/5 border border-white/10 focus:border-[#00FF88]/50 outline-none px-4 py-3 placeholder-white/40 text-sm backdrop-blur" placeholder="Email" type="email" />
              <textarea className="sm:col-span-2 rounded-lg bg-white/5 border border-white/10 focus:border-[#00FF88]/50 outline-none px-4 py-3 placeholder-white/40 text-sm backdrop-blur min-h-[120px]" placeholder="Your message" />
              <button type="button" className="sm:col-span-2 group inline-flex items-center justify-center gap-2 bg-[#00FF88] text-black font-semibold px-6 py-3 rounded-lg shadow-[0_0_30px_#00FF8855] hover:bg-[#00e67b] transition">
                Send Message
                <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </GlassCard>

          <GlowCard>
            <h4 className="text-xl font-semibold">Office</h4>
            <p className="mt-3 text-white/70">Remote-first with global presence. Available for onsite workshops upon request.</p>
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-white/70">
              <div>
                <p className="text-white/50">Timezone</p>
                <p className="mt-1">UTC — Flexible</p>
              </div>
              <div>
                <p className="text-white/50">Response</p>
                <p className="mt-1">Within 24 hours</p>
              </div>
            </div>
          </GlowCard>
        </div>
      </div>
    </section>
  );
}

function GlowCard({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="relative rounded-xl border border-white/10 bg-gradient-to-br from-[#121212] to-black p-6 overflow-hidden"
    >
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#00FF88]/10 blur-3xl rounded-full" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

function GlassCard({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="relative rounded-xl border border-white/15 bg-white/5 p-6 backdrop-blur-xl"
    >
      <div className="absolute inset-0 rounded-xl pointer-events-none"
        style={{ boxShadow: 'inset 0 0 0 1px #00FF8820, 0 0 60px #00FF8815' }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
