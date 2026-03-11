import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import InsightsSection from "@/components/sections/InsightsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import TeamSection from "@/components/sections/TeamSection";
import VisionSection from "@/components/sections/VisionSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <InsightsSection />
        <ProjectsSection />
        <TeamSection />
        <VisionSection />
        <Footer />
      </main>
    </>
  );
}
