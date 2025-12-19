import { motion } from "framer-motion";
import { Crosshair, Eye, Zap, Shield, Ghost, Wind } from "lucide-react";
import { cn } from "@/lib/utils";

// Map logical categories to icons
const getIcon = (category: string) => {
  switch (category.toLowerCase()) {
    case 'combat': return <Crosshair className="w-6 h-6" />;
    case 'visual': return <Eye className="w-6 h-6" />;
    case 'movement': return <Wind className="w-6 h-6" />;
    case 'misc': return <Zap className="w-6 h-6" />;
    default: return <Shield className="w-6 h-6" />;
  }
};

interface FeatureCardProps {
  name: string;
  description: string;
  category: string;
  index: number;
}

export function FeatureCard({ name, description, category, index }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-white/5 transform skew-y-2 group-hover:skew-y-0 transition-transform duration-300 -z-10" />
      <div className={cn(
        "h-full p-6 border border-white/10 bg-black/50 backdrop-blur-sm",
        "hover:border-white/40 transition-colors duration-300",
        "flex flex-col gap-4"
      )}>
        <div className="flex items-center justify-between">
          <div className="p-2 bg-white/5 rounded-none border border-white/10 group-hover:bg-white/10 transition-colors">
            {getIcon(category)}
          </div>
          <span className="text-xs font-mono text-white/40 uppercase tracking-widest border border-white/10 px-2 py-1">
            {category}
          </span>
        </div>
        
        <div>
          <h3 className="text-xl font-bold font-mono mb-2 group-hover:text-glow transition-all">
            {name}
          </h3>
          <p className="text-sm text-gray-400 font-sans leading-relaxed">
            {description}
          </p>
        </div>
        
        <div className="mt-auto pt-4 flex items-center gap-2 text-xs text-white/30 font-mono">
          <div className="h-px bg-white/20 flex-grow" />
          <span>STATUS: ACTIVE</span>
        </div>
      </div>
    </motion.div>
  );
}
