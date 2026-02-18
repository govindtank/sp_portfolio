import Hero from "./components/main/Hero";
import Skills from "./components/main/Skills";
import Experience from "./components/main/Experience";
import Education from "./components/main/Education";
import Projects from "./components/main/Projects";

export default function Home() {
  return (
    <main className='h-full w-full'>
      <div className='flex flex-col gap-20'>

        <Hero />
        <Skills />
        <Experience />
        <Education />
        <Projects />

      </div>
    </main>
  )
}
