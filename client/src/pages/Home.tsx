import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { CheatMenu } from "@/components/CheatMenu";
'use client';
import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal, ShieldCheck, Zap, Ghost, Lock, Cpu, Globe } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-foreground relative overflow-hidden selection:bg-white selection:text-black">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.15),transparent_70%)] -z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-8 px-6 py-2 border border-white/10 bg-white/5 rounded-full backdrop-blur-sm shadow-[0_0_20px_rgba(255,255,255,0.05)]"
          >
            <span className="font-mono text-xs md:text-sm tracking-[0.2em] text-white/80 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              STATUS: UNDETECTED
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-7xl md:text-8xl lg:text-[10rem] font-black tracking-tighter mb-6 font-sans text-white leading-[0.9]"
          >
            ATLAS
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed"
          >
            The premium external for Roblox. <br />
            <span className="text-white font-medium bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Dominate with absolute precision.
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Button 
              size="lg" 
              className="w-full sm:w-auto min-w-[200px] h-14 text-lg bg-white text-black hover:bg-gray-200 rounded-none border-0 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] transition-all duration-300 font-bold tracking-wide"
              onClick={() => document.getElementById('purchase')?.scrollIntoView({ behavior: 'smooth' })}
            >
              PURCHASE ACCESS
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="w-full sm:w-auto min-w-[200px] h-14 text-lg border-white/20 text-white hover:bg-white hover:text-black rounded-none transition-all duration-300 font-mono"
              onClick={() => window.open('https://discord.gg/atlas', '_blank')}
            >
              JOIN DISCORD
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <div className="border-y border-white/10 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
          {[
            { label: "Active Users", value: "1,500+" },
            { label: "Uptime", value: "99.9%" },
            { label: "Last Detection", value: "NEVER" },
            { label: "Version", value: "v1.0.1" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white font-mono mb-2">{stat.value}</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest font-mono">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Feature Demo */}
      <section id="features" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">POWERFUL INTERFACE</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Fully customizable, stream-proof, and designed for ease of use. 
              Toggle features instantly with our modern GUI.
            </p>
          </div>
          
          <CheatMenu />
        </div>
      </section>

      {/* Feature Grid Details */}
      <section className="py-20 border-t border-white/10 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
      {
        icon: Ghost,
        title: "Silent Aim",
        desc: "Bullets hit targets without you needing to look at them. Completely invisible to spectators."
      },
      {
        icon: ShieldCheck,
        title: "Undetected",
        desc: "Our unique bypass method ensures your account stays safe. Zero detections since launch."
      },
      {
        icon: Zap,
        title: "Optimized",
        desc: "Zero FPS drop. Our external runs on a separate thread to ensure maximum game performance."
      },
      {
        icon: Globe,
        title: "Configs",
        desc: "Save and load your settings easily. Switch setups instantly without losing your preferences."
      },
      {
        icon: Lock,
        title: "HWID Locked",
        desc: "Secure authentication system tied to your hardware ID prevents unauthorized access."
      },
      {
        icon: Terminal,
        title: "Advanced ESP",
        desc: "See enemies, items, and objectives through walls with fully customizable display options."
      }

            ].map((feature, i) => (
              <div key={i} className="p-8 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors group">
                <feature.icon className="w-10 h-10 text-white mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-white mb-3 font-mono">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Purchase Section */}
      <section id="purchase" className="py-32 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-white/[0.02] transform -skew-y-3 origin-top-right scale-110" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold font-sans mb-6 text-white">SECURE ACCESS</h2>
            <p className="text-gray-400 font-light text-lg">Choose your plan. Instant delivery.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
            {/* Weekly Plan */}
            <div className="border border-white/10 bg-black p-8 flex flex-col group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gray-800" />
              <div className="mb-6">
                <span className="font-mono text-xs text-gray-500 uppercase tracking-[0.2em]">Weekly</span>
              </div>
              <div className="text-4xl font-bold mb-6 text-white group-hover:text-gray-200 transition-all font-mono">$4.99</div>
              <ul className="space-y-4 mb-8 flex-1 text-sm text-gray-400 font-mono">
                <li className="flex items-center"><Terminal className="w-4 h-4 mr-3 text-white" /> 7 Days Access</li>
                <li className="flex items-center"><Terminal className="w-4 h-4 mr-3 text-white" /> All Features</li>
                <li className="flex items-center"><Terminal className="w-4 h-4 mr-3 text-white" /> Standard Support</li>
              </ul>

              <Button
                onClick={() => window.location.href = 'https://purchaseatlas.mysellauth.com/product/atlas-external'}
                className="w-full border border-white/20 bg-transparent hover:bg-white hover:text-black transition-all rounded-none font-mono uppercase text-xs h-12"
              >
                Purchase Now
              </Button>
            </div>

            {/* Monthly Plan (Featured) */}
            <div className="border border-white/30 bg-[#0a0a0a] p-10 transform md:scale-110 shadow-[0_0_50px_rgba(255,255,255,0.05)] relative z-10 flex flex-col">
              <div className="absolute top-0 left-0 w-full h-1 bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
              <div className="absolute top-4 right-4 bg-white text-black text-[10px] font-bold px-2 py-1 font-mono uppercase tracking-wider">
                Most Popular
              </div>

              <div className="mb-6 mt-2">
                <span className="font-mono text-sm text-white uppercase tracking-[0.2em]">Monthly</span>
              </div>
              <div className="text-5xl font-bold mb-8 text-white text-glow font-mono">$7.99</div>

              <ul className="space-y-5 mb-10 flex-1 text-sm text-gray-300 font-mono">
                <li className="flex items-center"><ShieldCheck className="w-5 h-5 mr-3 text-white" /> 30 Days Access</li>
                <li className="flex items-center"><ShieldCheck className="w-5 h-5 mr-3 text-white" /> Instant Delivery</li>
                <li className="flex items-center"><ShieldCheck className="w-5 h-5 mr-3 text-white" /> Priority Support</li>
                <li className="flex items-center"><ShieldCheck className="w-5 h-5 mr-3 text-white" /> HWID Reset</li>
              </ul>

              <Button
                onClick={() => window.location.href = 'https://purchaseatlas.mysellauth.com/product/atlas-external'}
                className="w-full bg-white text-black hover:bg-gray-200 transition-all font-bold rounded-none h-14 text-sm font-mono uppercase tracking-widest shadow-[0_0_20px_rgba(255,255,255,0.2)]"
              >
                Purchase Now
              </Button>
            </div>

            {/* Lifetime Plan */}
            <div className="border border-white/10 bg-black p-8 flex flex-col group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gray-800" />
              <div className="mb-6">
                <span className="font-mono text-xs text-gray-500 uppercase tracking-[0.2em]">[🎄|LIMITED] Crate</span>
              </div>
              <div className="text-4xl font-bold mb-6 text-white group-hover:text-gray-200 transition-all font-mono">$5.99</div>
              <ul className="space-y-4 mb-8 flex-1 text-sm text-gray-400 font-mono">
                <li className="flex items-center"><Terminal className="w-4 h-4 mr-3 text-white" /> Random License</li>
                <li className="flex items-center"><Terminal className="w-4 h-4 mr-3 text-white" /> Instant Delivery</li>
                <li className="flex items-center"><Terminal className="w-4 h-4 mr-3 text-white" /> All Features</li>
              </ul>

              <Button
                onClick={() => window.location.href = 'https://purchaseatlas.mysellauth.com/product/atlas-external'}
                className="w-full border border-white/20 bg-transparent hover:bg-white hover:text-black transition-all rounded-none font-mono uppercase text-xs h-12"
              >
                Purchase Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#050505] py-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold font-sans tracking-tight mb-2 text-white">ATLAS</h3>
            <p className="text-xs text-gray-500 font-mono">
              © {new Date().getFullYear()} Atlas External. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center gap-8">
            <a href="#" className="text-xs font-mono text-gray-500 hover:text-white transition-colors uppercase tracking-widest">Terms</a>
            <a href="#" className="text-xs font-mono text-gray-500 hover:text-white transition-colors uppercase tracking-widest">Privacy</a>
            <a href="#" className="text-xs font-mono text-gray-500 hover:text-white transition-colors uppercase tracking-widest">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
