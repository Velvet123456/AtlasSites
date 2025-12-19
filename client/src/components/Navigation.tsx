import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ShoppingCart, MessageSquare, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Area */}
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="relative w-10 h-10 overflow-hidden rounded-lg bg-gradient-to-br from-gray-800 to-black border border-white/20 group-hover:border-white/50 transition-colors">
                {/* Logo Image */}
                <img 
                  src="/logo.png" 
                  alt="Atlas Logo" 
                  className="w-full h-full object-contain p-1"
                  onError={(e) => {
                    // Fallback if logo doesn't exist yet
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = '<span class="flex items-center justify-center w-full h-full text-white font-bold text-xl">A</span>';
                  }}
                />
              </div>
              <span className="font-mono text-xl font-bold tracking-widest text-white group-hover:text-glow transition-all">
                ATLAS
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => {
                const element = document.getElementById("features");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-sm font-mono text-gray-400 hover:text-white transition-colors uppercase tracking-wider"
            >
              Features
            </button>

            <a 
              href="https://discord.gg/atlas" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-mono text-gray-400 hover:text-white transition-colors uppercase tracking-wider"
            >
              Community
            </a>

            <div className="h-6 w-px bg-white/10 mx-2" />
            
            <Button 
              variant="outline" 
              size="sm" 
              className="gap-2"
              onClick={() => window.open('https://discord.gg/atlas', '_blank')}
            >
              <MessageSquare className="w-4 h-4" />
              DISCORD
            </Button>
            
            <Button 
              variant="default" 
              size="sm" 
              className="gap-2 bg-white text-black hover:bg-gray-200 border-none"
              onClick={() => document.getElementById('purchase')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <ShoppingCart className="w-4 h-4" />
              PURCHASE
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 hover:bg-white/10 rounded-md transition-colors"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-black border-b border-white/10"
        >
          <div className="px-4 py-6 space-y-4">
            <a 
              href="#features" 
              onClick={() => setIsOpen(false)}
              className="block text-gray-400 hover:text-white font-mono text-sm uppercase"
            >
              Features
            </a>
            <a 
              href="https://discord.gg/atlas"
              onClick={() => setIsOpen(false)}
              className="block text-gray-400 hover:text-white font-mono text-sm uppercase"
            >
              Community
            </a>
            <div className="pt-4 flex flex-col gap-3">
              <Button 
                variant="outline" 
                className="w-full justify-center"
                onClick={() => {
                  window.open('https://discord.gg/atlas', '_blank');
                  setIsOpen(false);
                }}
              >
                DISCORD
              </Button>
              <Button 
                variant="default" 
                className="w-full justify-center bg-white text-black"
                onClick={() => {
                  document.getElementById('purchase')?.scrollIntoView({ behavior: 'smooth' });
                  setIsOpen(false);
                }}
              >
                PURCHASE ACCESS
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
