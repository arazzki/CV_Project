"use client";

import { motion } from "framer-motion";
import ChromaWrapper from "./ChromaWrapper";

const skillsData = [
  {
    category: "Languages",
    icon: "💻",
    items: ["C++", "Golang", "JavaScript", "TypeScript", "Python", "HTML/CSS"],
    span: "md:col-span-2",
  },
  {
    category: "Frameworks & Libraries",
    icon: "⚡",
    items: ["React.js", "Next.js", "Flutter", "Tailwind CSS", "Node.js"],
    span: "md:col-span-1",
  },
  {
    category: "DevOps & Tools",
    icon: "🛠",
    items: ["Git", "Docker", "PostgreSQL"],
    span: "md:col-span-1",
  },
  {
    category: "Currently Exploring",
    icon: "🚀",
    items: ["Cloud Computing", "Ethical Hacking", "SAP ERP"],
    span: "md:col-span-2",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 1.2 }} className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
          Technical <span className="text-accent">Arsenal</span>
        </h2>
        <p className="text-muted text-sm mt-2">Teknologi yang saya gunakan sehari-hari.</p>
      </motion.div>

      <ChromaWrapper><div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {skillsData.map((g, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ delay: i * 0.2, duration: 1.2, ease: "easeOut" }}
            className={`glass p-6 rounded-2xl ${g.span} group hover:border-accent/20 transition-colors`}>
            <div className="flex items-center gap-2 mb-5">
              <span className="text-xl">{g.icon}</span>
              <h3 className="text-sm font-semibold">{g.category}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {g.items.map((s, j) => (
                <span key={j} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/8 text-sm text-muted hover:text-accent hover:border-accent/20 transition-colors cursor-default">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div></ChromaWrapper>
    </section>
  );
}
