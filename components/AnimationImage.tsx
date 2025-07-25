"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const FloatingImage = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000); // تأخير بسيط بعد أول ظهور
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="w-44 h-44 sm:w-60 sm:h-60 lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden border-4 border-t-[#38BDF8] border-r-[#49a4cb] border-b-[#38BDF8] border-l-[#49a4cb] shadow-xl"
    >
      <motion.div
        animate={
          loaded
            ? {
                y: [0, -5, 0],
                scale: [1, 1.03, 1],
              }
            : {}
        }
        transition={
          loaded
            ? {
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
              }
            : {}
        }
        className="w-full h-full"
      >
        <Image
          src="/SAED.PNG"
          alt="Saed Abbas"
          width={400}
          height={400}
          className="w-full h-full object-cover"
          priority
        />
      </motion.div>
    </motion.div>
  );
};

export default FloatingImage;
