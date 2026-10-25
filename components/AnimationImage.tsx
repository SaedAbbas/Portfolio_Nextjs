"use client";
import { motion } from "framer-motion";
import Image from "next/image";

// مواقع ثابتة للجزيئات (بدل Math.random) عشان ما يصير hydration mismatch،
// وحركتها بـ CSS على الـ GPU بدل JavaScript
const particles = [
  { left: 12, top: 18, dx: 8, dy: -6, dur: 3.2, delay: 0.2 },
  { left: 85, top: 12, dx: -7, dy: 9, dur: 2.6, delay: 1.1 },
  { left: 94, top: 55, dx: 5, dy: 7, dur: 3.8, delay: 0.6 },
  { left: 70, top: 92, dx: -9, dy: -4, dur: 2.9, delay: 1.4 },
  { left: 30, top: 95, dx: 6, dy: -8, dur: 3.5, delay: 0.3 },
  { left: 4, top: 70, dx: 9, dy: 5, dur: 2.4, delay: 0.9 },
  { left: 48, top: 3, dx: -5, dy: 8, dur: 3.1, delay: 1.3 },
  { left: 20, top: 45, dx: -8, dy: 6, dur: 2.7, delay: 0.5 },
  { left: 78, top: 35, dx: 7, dy: -9, dur: 3.6, delay: 0.1 },
  { left: 58, top: 75, dx: -6, dy: -7, dur: 2.8, delay: 1.2 },
];

const FloatingImage = () => {
  return (
    <div className="group relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px] flex items-center justify-center">
      {/* Background Particles */}
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute w-3 h-3 bg-gradient-to-r from-[#5010FE] to-[#8B5CF6] rounded-full"
          style={
            {
              left: `${p.left}%`,
              top: `${p.top}%`,
              "--dx": `${p.dx}px`,
              "--dy": `${p.dy}px`,
              animation: `particle-float ${p.dur}s ease-in-out ${p.delay}s infinite both`,
            } as React.CSSProperties
          }
        />
      ))}

      {/* Gradient Background (static gradient, glow pulses via transform/opacity only) */}
      <div
        className="absolute inset-0 rounded-full blur-2xl animate-[glow-pulse_5s_ease-in-out_infinite]"
        style={{
          background:
            "radial-gradient(circle, rgba(56,189,248,0.3) 0%, rgba(73,164,203,0.3) 70%)",
        }}
      />

      {/* Main Circle Frame */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        whileHover={{ scale: 1.04, transition: { duration: 0.3 } }}
        className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#5010FE]/90 shadow-2xl transition-shadow duration-300 hover:shadow-[0_0_40px_rgba(56,189,248,0.8)]"
      >
        {/* Inner Glow */}
        <div className="absolute inset-0 rounded-full bg-[#38BDF8]/20 blur-xl animate-[glow-pulse_2s_ease-in-out_infinite]" />

        {/* Image */}
        <Image
          src="/saedabbas.webp"
          alt="Saed Abbas"
          width={450}
          height={450}
          sizes="(min-width: 1024px) 450px, (min-width: 640px) 320px, 256px"
          className="w-full h-full object-cover rounded-full"
          priority
        />

        {/* Subtle Rotating Ring */}
        <div className="absolute inset-[-2px] rounded-full border border-white/25 animate-[spin_20s_linear_infinite]" />
      </motion.div>

      {/* Lens Flare on Hover */}
      <div
        className="pointer-events-none absolute w-20 h-20 rounded-full bg-gradient-to-r from-white/50 to-[#5010FE]/50 blur-md opacity-0 scale-50 transition duration-[400ms] group-hover:opacity-60 group-hover:scale-[1.2]"
        style={{ top: "10%", left: "10%" }}
      />

      {/* Hover Overlay */}
      <div className="pointer-events-none absolute inset-0 rounded-full bg-[#5010FE]/15 opacity-0 transition-opacity duration-300 group-hover:opacity-40" />
    </div>
  );
};

export default FloatingImage;
