"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects ";
import ClickSpark from "@/components/ui/ClickSpark ";
import Navbar from "@/components/ui/FloatingNav";
import MagicBento from "@/components/ui/MagicBento";
import CircularGallery from "@/components/ui/CircularGallery";
import Skills from "@/components/Skills";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <ClickSpark
          sparkColor="#fff"
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
        >
          <Navbar />
          <Hero />
          <Skills />
          {/* <MagicBento
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={300}
            particleCount={6}
            glowColor="132, 0, 255"
          /> */}
          <RecentProjects />
          <Clients />
          <Experience />
          <Approach />
          <Footer />
        </ClickSpark>
      </div>
    </main>
  );
};

export default Home;
