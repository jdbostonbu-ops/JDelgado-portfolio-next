import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import PortraitBand from "@/components/PortraitBand";
import Marquee from "@/components/Marquee";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Services from "@/components/Services";
import LiveAutomation from "@/components/LiveAutomation";
import Testimonials from "@/components/Testimonials";
import Projects from "@/components/Projects";
import StatStrip from "@/components/StatStrip";
import Education from "@/components/Education";
import Journey from "@/components/Journey";
import Community from "@/components/Community";
import Chatbot from "@/components/Chatbot";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <PortraitBand />
        <Skills />
        <About />
        <Services />
        <LiveAutomation />
        <Testimonials />
        <Projects />
        <StatStrip />
        <Education />
        <Journey />
        <Community />
        <Chatbot />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
