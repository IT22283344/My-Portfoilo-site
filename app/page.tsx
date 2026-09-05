import Hero from "@/components/Hero";
import TechStack from "@/components/ui/TechStack";
import Experience from "@/components/ui/Expereience";
import Footer from "@/components/ui/Footer";
import Grid from "@/components/ui/Grid";
import Navbar from "@/components/ui/Navbar";
import RecentProjects from "@/components/ui/RecentProjects";
import Reveal from "@/components/ui/Reveal";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative mx-auto flex flex-col items-center justify-center overflow-clip bg-surface-0 px-5 sm:px-10">
        <div className="w-full max-w-7xl">
          <Hero />
          <Reveal>
            <Grid />
          </Reveal>
          <Reveal>
            <RecentProjects />
          </Reveal>
          <Reveal>
            <TechStack />
          </Reveal>
          <Reveal>
            <Experience />
          </Reveal>
          <Footer />
        </div>
      </main>
    </>
  );
}
