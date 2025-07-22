import Grid from "@/compenents/Grid";
import Hero from "@/compenents/Hero";
import { FloatingNav } from "@/compenents/ui/FloatingNav";
import RecentProject from "@/compenents/RecentProject";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative mx-auto bg-black-100 text-white justify-center items-center flex flex-col overflow-hidden sm:px-10 px-5">
      <div className="">
        <FloatingNav navItems={[
          {name: 'About', link: '/About', icon: <FaHome/>},
          {name: 'Projects', link: '/Projects', icon: <FaHome/>},
          {name: 'Testimonials', link: '/Testimonials', icon: <FaHome/>},
          {name: 'Contact', link: '/Contact', icon: <FaHome/>},
        ]} />
        <Hero />
        <Grid />
        <RecentProject />
      </div>
    </main>
  );
}
