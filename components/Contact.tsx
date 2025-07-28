import { FaLocationArrow } from "react-icons/fa6";
import { motion } from "framer-motion";
import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";
import ProfileCard from "./ui/ProfileCard";

// Animation variants for staggered entrance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Particle animation for creative left section
const particleVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: [0.2, 0.8, 0.2],
    scale: [1, 1.5, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
    },
  },
};

const Contact = () => {
  return (
    <footer
      className="relative w-full pt-24 pb-12 overflow-hidden "
      id="contact"
    >
      {/* Enhanced Background with Parallax Grid and Particles */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <img
          src="/footer-grid.svg"
          alt="background grid"
          className="w-full h-full object-cover animate-subtle-move"
        />
      </div>
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#5010FE] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            variants={particleVariants}
            initial="hidden"
            animate="visible"
          />
        ))}
      </div>

      {/* Main Content */}
<motion.div
  className="container relative mx-auto px-4 sm:px-6 lg:px-8 min-h-screen bg-gradient-to-b from-[#0a0e1f] to-[#1a1e3a] rounded-2xl"
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
>
  {/* Header Section */}
  <motion.div
    className="text-center mb-12"
    variants={itemVariants}
  >
    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
      Unleash Your{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5010FE] to-[#8B5CF6]">
        Digital Potential
      </span>
    </h1>
  </motion.div>

  {/* Main Content Split */}
  <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
    {/* Creative Left Section */}
    <motion.div
      className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left"
      variants={itemVariants}
    >
      <motion.h2
        className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4"
        variants={itemVariants}
      >
        Innovate. Create. Celebrate.
      </motion.h2>
      <motion.p
        className="text-gray-400 text-sm sm:text-base mb-6 max-w-md"
        variants={itemVariants}
      >
        Join me on a journey to transform your vision into reality with cutting-edge solutions and creative brilliance.
      </motion.p>
      <motion.div variants={itemVariants}>
        <MagicButton
          title="Get in Touch"
          icon={<FaLocationArrow />}
          position="right"
          handleClick={() => console.log("Get in Touch clicked")}
          className="bg-gradient-to-r from-[#5010FE] to-[#8B5CF6] hover:shadow-lg hover:shadow-[#5010FE]/50 transition-all duration-300"
        />
      </motion.div>
    </motion.div>

    {/* Profile Card on the Right */}
    <motion.div
      className="w-full lg:w-1/2 flex justify-center lg:justify-end"
      variants={itemVariants}
    >
      <div className="w-full max-w-[320px] sm:max-w-[400px]">
        <ProfileCard
          name="Saed Abbas"
          title="Software Engineer"
          handle="Abu Al Soos"
          status="Online"
          contactText="Contact Me"
          avatarUrl="/saed2.png"
          showUserInfo={true}
          enableTilt={true}
          enableMobileTilt={false}
          onContactClick={() => console.log("Contact clicked")}
        />
      </div>
    </motion.div>
  </div>
  </motion.div>

  {/* Footer Bottom */}
  <motion.div
    className="mt-16 flex flex-col md:flex-row max-md:flex-col-reverse justify-between items-center gap-8 border-t border-[#5010FE]/20 pt-8"
    variants={itemVariants}
  >
    <p className="text-gray-400 text-sm sm:text-base font-light">
      Copyright © {new Date().getFullYear()} Saed Abbas | All Rights Reserved
    </p>
    <div className="flex items-center gap-4">
      {socialMedia.map((info) => (
        <a
          key={info.id}
          href={info.link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex justify-center items-center rounded-full bg-[#0a0e1f] border border-[#5010FE]/50 hover:bg-[#5010FE]/50 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-[#5010FE]/30"
        >
          <img
            src={info.img}
            alt={info.name}
            width={24}
            height={24}
            className="object-contain filter brightness-90 hover:brightness-110 transition-all duration-300"
          />
        </a>
      ))}
    </div>
</motion.div>


      {/* Custom CSS for Animations */}
      <style jsx>{`
        @keyframes subtle-move {
          0% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.02);
          }
          100% {
            transform: translateY(0) scale(1);
          }
        }
        .animate-subtle-move {
          animation: subtle-move 10s ease-in-out infinite;
        }
        @media (max-width: 1024px) {
          .lg\\:flex-row {
            flex-direction: column;
          }
          .lg\\:text-left {
            text-align: center;
          }
          .lg\\:justify-end {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Contact;