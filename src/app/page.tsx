import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import LogoLoop from "@/components/LogoLoop";

const loopItems = [
  { node: <span className="text-muted font-mono font-bold text-sm px-4 uppercase tracking-widest">Innovation</span> },
  { node: <span className="text-accent text-sm px-4">✦</span> },
  { node: <span className="text-muted font-mono font-bold text-sm px-4 uppercase tracking-widest">Scalability</span> },
  { node: <span className="text-accent text-sm px-4">✦</span> },
  { node: <span className="text-muted font-mono font-bold text-sm px-4 uppercase tracking-widest">Security</span> },
  { node: <span className="text-accent text-sm px-4">✦</span> },
  { node: <span className="text-muted font-mono font-bold text-sm px-4 uppercase tracking-widest">Performance</span> },
  { node: <span className="text-accent text-sm px-4">✦</span> },
];

export default function Home() {
  return (
    <main className="relative min-h-screen selection:bg-accent/20 overflow-x-hidden">
      <Navbar />
      <Hero />
      
      {/* Gap filler 1 */}
      <div className="w-full py-5 border-y border-surface-border bg-white/[0.01]">
        <LogoLoop logos={loopItems} speed={80} gap={32} logoHeight={16} />
      </div>

      <Skills />
      <Experience />
      <Certifications />

      {/* Gap filler 2 */}
      <div className="w-full py-5 border-y border-surface-border bg-white/[0.01]">
        <LogoLoop logos={loopItems} speed={-80} gap={32} logoHeight={16} />
      </div>

      <Projects />
      <Contact />

      <footer className="py-8 text-center text-muted text-sm border-t border-surface-border mt-8">
        <p>
          © {new Date().getFullYear()} Muhammad Ariq Azzaki
        </p>
      </footer>
    </main>
  );
}
