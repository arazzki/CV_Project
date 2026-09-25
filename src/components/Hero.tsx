"use client";

import { motion } from "framer-motion";
import { Download, ChevronRight, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import type { MouseEvent as ReactMouseEvent } from "react";
import ShinyText from "./ShinyText";
import StarBorder from "./StarBorder";

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
);
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 11-2.88 0 1.441 1.441 0 012.88 0z"/></svg>
);

const roles = ["Full-stack Developer", "Cloud Enthusiast", "Tech Explorer"];

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIdx];
    let timeout: NodeJS.Timeout;
    if (!isDeleting && displayText.length < currentRole.length) {
      timeout = setTimeout(() => setDisplayText(currentRole.slice(0, displayText.length + 1)), 100);
    } else if (!isDeleting && displayText.length === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 60);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setRoleIdx((prev) => (prev + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIdx]);

  const handleMouseMove = (e: ReactMouseEvent) => {
    const x = (e.clientX / window.innerWidth) * 2 - 1;
    const y = (e.clientY / window.innerHeight) * 2 - 1;
    setMousePos({ x, y });
  };

  return (
    <section onMouseMove={handleMouseMove} className="min-h-screen flex items-center pt-36 pb-16 px-6 relative overflow-hidden">
      <motion.div
        animate={{ x: mousePos.x * 60, y: mousePos.y * 60 }}
        transition={{ type: "spring", stiffness: 40, damping: 20 }}
        className="absolute top-1/4 left-1/3 w-[30vw] h-[30vw] bg-accent/10 blur-[120px] rounded-full pointer-events-none"
      />

      <div className="max-w-5xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        <div className="col-span-1 lg:col-span-7 space-y-7">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-medium mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative rounded-full h-2 w-2 bg-accent" />
              </span>
              <ShinyText text="Open to opportunities" disabled={false} speed={3} className="text-accent" />
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.12] tracking-tight mb-4 text-text">
              Muhammad Ariq Azzaki
            </h1>

            <h2 className="text-lg md:text-xl font-mono text-muted h-7">
              {displayText}<span className="text-accent animate-pulse">_</span>
            </h2>
          </motion.div>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.15 }} className="text-muted max-w-xl leading-relaxed">
            Mahasiswa S1 Teknologi Informasi di Universitas Telkom yang passionate membangun produk digital end-to-end — dari frontend interaktif hingga backend yang scalable, didukung minat kuat pada cloud computing dan keamanan siber.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.3 }} className="flex flex-wrap gap-3 pt-1">
            <a href="/resume.pdf" className="bg-accent text-bg px-5 py-2.5 rounded-lg font-semibold text-sm flex items-center gap-2 hover:brightness-110 transition-all">
              <Download size={16} /> Download CV
            </a>
            <StarBorder as="a" href="#projects" className="!p-0" color="#34d399">
              <span className="flex items-center gap-2 text-sm font-medium">
                View Work <ChevronRight size={16} />
              </span>
            </StarBorder>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 0.45 }} className="flex gap-3 pt-3">
            {[
              { Icon: GithubIcon, href: "https://github.com/arazzki", label: "GitHub" },
              { Icon: LinkedinIcon, href: "https://www.linkedin.com/in/muhammad-ariq-azzaki-513244331/", label: "LinkedIn" },
              { Icon: InstagramIcon, href: "https://instagram.com/arazzki", label: "Instagram" },
            ].map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted hover:text-accent hover:border-accent/30 transition-all">
                <s.Icon />
              </a>
            ))}
            <a href="mailto:ariq23azzaky@gmail.com" aria-label="Email"
              className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted hover:text-accent hover:border-accent/30 transition-all">
              <Mail size={18} />
            </a>
          </motion.div>
        </div>
        <motion.div className="col-span-1 lg:col-span-5" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.3, delay: 0.2 }}>
          <motion.div style={{ rotateX: mousePos.y * -8, rotateY: mousePos.x * 8 }} className="w-full max-w-xs mx-auto relative mb-14">
            <div className="glass rounded-2xl overflow-hidden p-1">
              <div className="w-full aspect-[4/5] rounded-xl overflow-hidden relative bg-[#151515]">
                <img src="/profile.jpg" alt="Muhammad Ariq Azzaki" className="object-cover object-top w-full h-full opacity-90 hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-white font-bold">Muhammad Ariq Azzaki</p>
                  <p className="text-accent/80 text-sm">IT Student · Tel-U</p>
                </div>
              </div>
            </div>

            <motion.div animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
              className="absolute -bottom-8 -right-3 glass px-4 py-2.5 rounded-xl flex items-center gap-3 shadow-lg z-20">
              <span className="text-xl">🔐</span>
              <div>
                <p className="text-[10px] text-muted font-medium uppercase tracking-wider">Exploring</p>
                <p className="text-sm text-text font-semibold">Cyber Security</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
