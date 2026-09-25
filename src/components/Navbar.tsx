"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-bg/80 backdrop-blur-md border-b border-surface-border" : ""
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="#" className="text-lg font-bold tracking-tight">
          Ariq Azzki<span className="text-accent">.</span>
        </Link>

        <ul className="hidden md:flex items-center gap-8 text-sm text-muted font-medium">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="hover:text-text transition-colors">{l.label}</Link>
            </li>
          ))}
        </ul>

        <a href="#contact" className="hidden md:inline-flex text-sm font-medium px-4 py-2 rounded-lg bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20 transition-colors">
          Say Hello
        </a>

        <button className="md:hidden text-muted" onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-surface-border bg-bg px-6 py-4 space-y-3">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-sm text-muted hover:text-text transition-colors">
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
