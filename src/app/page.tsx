
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col bg-[#141414]">
        <Hero />
        <div className="flex flex-col gap-12 pb-20 relative z-10 -mt-20">
          <Projects />
          <Skills />
          <Experience />
          <Education />
          <Certifications />
          <About />
          <Contact />
        </div>
      </main>
    </>
  );
}
