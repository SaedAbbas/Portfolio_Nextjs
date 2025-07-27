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
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Contact = () => {
  return (
    <footer
      className="relative w-full bg-gradient-to-b from-[#04071D] to-[#0a0e1f] pt-24 pb-12 overflow-hidden"
      id="contact"
    >
      {/* Background Grid with Parallax Effect */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <img
          src="/footer-grid.svg"
          alt="background grid"
          className="w-full h-full object-cover animate-subtle-move"
        />
      </div>

      {/* Main Content */}
      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8"
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
            Elevate Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5010FE] to-[#8B5CF6]">
              Digital Presence
            </span>{" "}
            Today
          </h1>
          <p className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
            Let’s collaborate to turn your vision into reality. Reach out to create something extraordinary together.
          </p>
          <a href="mailto:contact@jsmastery.pro">
            <MagicButton
              title="Get in Touch"
              icon={<FaLocationArrow />}
              position="right"
              className="bg-gradient-to-r from-[#5010FE] to-[#8B5CF6] hover:from-[#3a0bca] hover:to-[#6B46C1] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            />
          </a>
        </motion.div>

        {/* Profile Card */}
        <motion.div
          className="flex justify-center mt-16"
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

        {/* Footer Bottom */}
        <motion.div
          className="mt-16 flex flex-col md:flex-row justify-between items-center gap-8"
          variants={itemVariants}
        >
          <p className="text-gray-400 text-sm sm:text-base font-light">
            Copyright © {new Date().getFullYear()} Saed Abbas
          </p>
          <div className="flex items-center gap-4">
            {socialMedia.map((info) => (
              <a
                key={info.id}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex justify-center items-center rounded-full bg-[#0a0e1f] border border-[#5010FE]/30 hover:bg-[#5010FE]/30 transition-all duration-300 transform hover:scale-110 hover:shadow-md"
              >
                <img
                  src={info.img}
                  alt={info.name}
                  width={24}
                  height={24}
                  className="object-contain filter brightness-90 hover:brightness-100 transition-all duration-300"
                />
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Custom CSS for Animations */}
      <style jsx>{`
        @keyframes subtle-move {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0);
          }
        }
        .animate-subtle-move {
          animation: subtle-move 8s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
};

export default Contact;