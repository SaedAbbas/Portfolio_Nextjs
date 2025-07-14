import Grid from "@/compenents/Grid";
import Hero from "@/compenents/Hero";
import { FloatingNav } from "@/compenents/ui/FloatingNav";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="mx-auto p-4 bg-black-100 text-white justify-center items-center flex flex-col overflow-hidden sm:px-10 px-5">
      <div className="">
        <FloatingNav navItems={[
          {name: 'Home', link: '/', icon: <FaHome/>},
          {name: 'Home', link: '/', icon: <FaHome/>},
          {name: 'Home', link: '/', icon: <FaHome/>},
          {name: 'Home', link: '/', icon: <FaHome/>},
        ]} />
        <Hero />
        <Grid />
      </div>
    </main>
  );
}
