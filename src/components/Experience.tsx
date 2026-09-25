"use client";

import ChromaWrapper from "./ChromaWrapper";
import { motion } from "framer-motion";

const professional = [
  {
    role: "SAP FI/CO Consultant — Intern",
    org: "PT. Insaba",
    period: "2025",
    desc: "Mendukung stabilisasi sistem dan penutupan buku akhir periode. Menghubungkan proses bisnis keuangan dengan sistem SAP ERP.",
  },
  {
    role: "Bootcamp Ethical Hacking",
    org: "MBC LAB",
    period: "2024",
    desc: "Mempelajari fundamental ethical hacking — reconnaissance, vulnerability scanning, hingga exploitation dasar.",
  },
];

const organizational = [
  {
    role: "Staff Ahli Kemahasiswaan",
    org: "HMIT",
    period: "2026–2027",
    desc: "Berkontribusi di bidang kemahasiswaan Himpunan Mahasiswa Informatika Telkom.",
  },
  {
    role: "Ketua Pelaksana EVEREST",
    org: "HMIT",
    period: "2026",
    desc: "Memimpin ajang lomba olahraga tingkat prodi dari perencanaan hingga pelaksanaan.",
  },
  {
    role: "Koordinator Liaison Officer",
    org: "Megabit 9.0",
    period: "2026",
    desc: "Mengelola tim LO dan menjembatani mahasiswa baru dengan divisi acara.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 1.2 }} className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
          Work & <span className="text-accent">Experience</span>
        </h2>
      </motion.div>

      <ChromaWrapper>      {/* Professional */}
      <div className="mb-14">
        <h3 className="text-xs font-mono text-accent uppercase tracking-widest mb-6">💼 Professional</h3>
        <div className="relative border-l-2 border-surface-border ml-2 space-y-8">
          {professional.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ delay: i * 0.3, duration: 1.2, ease: "easeOut" }}
              className="relative pl-8">
              <div className="absolute -left-[9px] top-3 w-4 h-4 rounded-full bg-accent/80 border-[3px] border-bg" />
              <div className="glass p-5 rounded-xl hover:border-accent/20 transition-colors">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-2">
                  <div>
                    <h4 className="font-semibold">{item.role}</h4>
                    <p className="text-accent text-sm">{item.org}</p>
                  </div>
                  <span className="text-xs font-mono text-muted bg-white/5 px-2.5 py-1 rounded-md self-start">{item.period}</span>
                </div>
                <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Organizational */}
      <div>
        <h3 className="text-xs font-mono text-accent uppercase tracking-widest mb-6">🎓 Organizations</h3>
        <div className="relative border-l-2 border-surface-border ml-2 space-y-8">
          {organizational.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ delay: i * 0.3, duration: 1.2, ease: "easeOut" }}
              className="relative pl-8">
              <div className="absolute -left-[9px] top-3 w-4 h-4 rounded-full bg-accent/40 border-[3px] border-bg" />
              <div className="glass p-5 rounded-xl hover:border-accent/20 transition-colors">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-2">
                  <div>
                    <h4 className="font-semibold">{item.role}</h4>
                    <p className="text-accent/70 text-sm">{item.org}</p>
                  </div>
                  <span className="text-xs font-mono text-muted bg-white/5 px-2.5 py-1 rounded-md self-start">{item.period}</span>
                </div>
                <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div></ChromaWrapper>
    </section>
  );
}
