import { motion } from "framer-motion";

interface CheatMenuProps {
  imageUrl?: string;
}

export function CheatMenu({ 
  imageUrl = "https://media.discordapp.net/attachments/1448386946627014789/1451579899176554566/image.png?ex=6946b0a1&is=69455f21&hm=064abc32207f59ca500d66132874d20a5d0d5945e62be44272d135853ca73b1d&=&format=webp&quality=lossless" 
}: CheatMenuProps) {

  return (
    <div className="relative w-full max-w-4xl mx-auto my-20 perspective-1000">
      {/* Decorative background glow */}
      <div className="absolute -inset-4 bg-gradient-to-b from-white/10 to-transparent blur-2xl -z-10 rounded-[30px]" />

      {/* Main Menu Window Frame */}
      <motion.div 
        initial={{ opacity: 0, rotateX: 10, y: 50 }}
        whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden shadow-2xl flex flex-col"
      >
        {/* The Image Container */}
        {/* Changed: Removed fixed height (h-500px) and aspect-ratio. 
            Now uses h-auto so it stretches to show the full image. */}
        <div className="relative w-full h-auto bg-black">

          {/* Optional: Grid overlay (keeps the tech vibe) */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-10" />

          {/* THE IMAGE */}
          <img 
            src={imageUrl} 
            alt="Cheat Menu UI" 
            className="w-full h-auto block" // h-auto ensures the image isn't squished or cropped
          />

        </div>

        {/* Footer Status Bar */}
        {/* Changed: Made relative so it sits BELOW the image, not on top of it */}
        <div className="relative w-full h-10 bg-[#050505] border-t border-white/5 flex items-center px-4 justify-between z-20">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] text-white/50 font-mono">STATUS: UNDETECTED</span>
          </div>
          <span className="text-[10px] text-white/30 font-mono">v1.0.1</span>
        </div>

      </motion.div>
    </div>
  );
}