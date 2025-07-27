"use client";

import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import ClickSpark from "@/components/ui/ClickSpark ";
import Navbar from "@/components/ui/FloatingNav";
import Skills from "@/components/Skills";
import MyProjects from "@/components/MyProjects";

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
          <MyProjects />
          <Clients />
          {/* <Experience />
          <Approach /> */}
          <Footer />
        </ClickSpark>
      </div>
    </main>
  );
};

export default Home;
