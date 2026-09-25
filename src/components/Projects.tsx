"use client";

import ChromaWrapper from "./ChromaWrapper";
import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Bot, Newspaper, BarChart3 } from "lucide-react";

const categories = ["All", "Bot", "Web App", "Utility"];

const projects = [
  {
    title: "receipt_bot",
    category: "Bot",
    description: "Bot otomatis yang memproses dan menganalisis struk belanja — mengekstrak data pembelian secara otomatis dari gambar atau file.",
    tags: ["Python"],
    icon: Bot,
  },
  {
    title: "Journalink",
    category: "Web App",
    description: "Platform web untuk menulis dan mengelola jurnal secara digital dengan antarmuka modern yang responsif.",
    tags: ["Next.js", "JavaScript", "Tailwind", "Vite"],
    icon: Newspaper,
  },
  {
    title: "SalesTrack",
    category: "Utility",
    description: "Sistem pelacakan dan analisis penjualan yang membantu memantau performa bisnis secara real-time.",
    tags: ["Coming Soon"],
    icon: BarChart3,
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  return (
    <section id="projects" className="py-24 relative z-10 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 1.2 }}
          className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">
              Featured <span className="text-accent">Projects</span>
            </h2>
            <p className="text-muted text-sm max-w-xl">
              Proyek pilihan yang menunjukkan proses berpikir dari desain sampai eksekusi, bukan sekadar daftar repositori.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? "bg-accent text-bg shadow-[0_0_15px_rgba(52,211,153,0.3)]"
                    : "glass text-muted hover:text-text hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>
        <ChromaWrapper>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((project, idx) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ delay: idx * 0.2, duration: 1.2, ease: "easeOut" }}
                className="glass rounded-2xl overflow-hidden group hover:border-accent/20 transition-all duration-300 flex flex-col"
              >
                <div className="h-32 bg-accent-dim p-6 relative flex items-center justify-center border-b border-surface-border">
                  <Icon
                    size={48}
                    className="text-accent/40 group-hover:text-accent/80 group-hover:scale-110 transition-all duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-bg/50 backdrop-blur-md text-text text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-md">
                    {project.category}
                  </span>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-text mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                    <p className="text-muted text-sm leading-relaxed line-clamp-3">{project.description}</p>
                  </div>

                  <div className="flex items-center justify-between pt-5 mt-5 border-t border-surface-border">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono text-muted bg-white/5 px-2 py-1 rounded-md border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-accent hover:text-bg transition-colors text-muted">
                      <ExternalLink size={14} />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </ChromaWrapper>
      </div>
    </section>
  );
}
