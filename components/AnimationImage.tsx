"use client";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

const FloatingImage = () => {
  const [loaded, setLoaded] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
      controls.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.6, ease: "easeOut" },
      });
    }, 200);
    return () => clearTimeout(timer);
  }, [controls]);

  // Variants for main circle animation
  const circleVariants = {
    initial: { opacity: 0, scale: 0.85, y: 20 },
    animate: { opacity: 1, scale: 1, y: 0 },
  };

  // Particle animation
  const particleVariants = {
    animate: {
      x: [0, Math.random() * 20 - 10, 0],
      y: [0, Math.random() * 20 - 10, 0],
      opacity: [0, 0.8, 0],
      scale: [0.5, 1, 0.5],
      transition: {
        duration: 2 + Math.random() * 2,
        repeat: Infinity,
        ease: "easeInOut",
        delay: Math.random() * 1.5,
      },
    },
  };

  // Lens flare effect on hover
  const flareVariants = {
    initial: { opacity: 0, scale: 0.5 },
    hover: { opacity: 0.6, scale: 1.2, transition: { duration: 0.4 } },
  };

  return (
    <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px] flex items-center justify-center">
      {/* Background Particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 bg-gradient-to-r from-[#5010FE] to-[#8B5CF6] rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: `translate(-50%, -50%)`,
          }}
          variants={particleVariants}
          animate="animate"
        />
      ))}

      {/* Dynamic Gradient Background */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-[#5010FE] to-[#8B5CF6] blur-2xl"
        animate={{
          background: [
            "radial-gradient(circle, rgba(56,189,248,0.3) 0%, rgba(73,164,203,0.3) 70%)",
            "radial-gradient(circle, rgba(73,164,203,0.3) 0%, rgba(56,189,248,0.3) 70%)",
            "radial-gradient(circle, rgba(56,189,248,0.3) 0%, rgba(73,164,203,0.3) 70%)",
          ],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      />

      {/* Main Circle Frame */}
      <motion.div
        variants={circleVariants}
        initial="initial"
        animate={controls}
        className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#5010FE]/90 shadow-2xl"
        whileHover={{
          scale: 1.04,
          boxShadow: "0 0 40px rgba(56, 189, 248, 0.8)",
          transition: { duration: 0.3 },
        }}
      >
        {/* Inner Glow */}
        <motion.div
          className="absolute inset-0 rounded-full bg-[#38BDF8]/20 blur-xl"
          animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Image */}
        <Image
          src="/saed.png"
          alt="Saed Abbas"
          width={450}
          height={450}
          className="w-full h-full object-cover rounded-full"
          priority
        />

        {/* Subtle Rotating Ring */}
        <motion.div
          className="absolute inset-[-2px] rounded-full border border-white/25"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      {/* Lens Flare on Hover */}
      <motion.div
        className="absolute w-20 h-20 rounded-full bg-gradient-to-r from-white/50 to-[#5010FE]/50 blur-md"
        style={{ top: "10%", left: "10%" }}
        variants={flareVariants}
        initial="initial"
        whileHover="hover"
      />

      {/* Hover Overlay */}
      <motion.div
        className="absolute inset-0 rounded-full bg-[#5010FE]/15"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.4 }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};

export default FloatingImage;