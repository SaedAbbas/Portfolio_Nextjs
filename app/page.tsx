import Grid from "@/compenents/Grid";
import Hero from "@/compenents/Hero";
import { FloatingNav } from "@/compenents/ui/FloatingNav";
import RecentProject from "@/compenents/RecentProject";
import { navItems } from "@/data";
import Clients from "@/compenents/Clients";
import Experience from "@/compenents/Experience";
import Approach from "@/compenents/Approach";
import Footer from "@/compenents/Footer";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProject />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
