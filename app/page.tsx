import Grid from "@/compenents/Grid";
import Hero from "@/compenents/Hero";
import { FloatingNav } from "@/compenents/ui/FloatingNav";
import RecentProject from "@/compenents/RecentProject";
import { navItems } from "@/data";
import Clients from "@/compenents/Clients";
import Experience from "@/compenents/Experience";

export default function Home() {
  return (
    <main className="relative mx-auto bg-black-100 text-white justify-center items-center flex flex-col overflow-hidden sm:px-10 px-5">
      <div className="">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProject />
        <Clients />
        <Experience />
      </div>
    </main>
  );
}
