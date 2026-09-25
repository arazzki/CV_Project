"use client";

import ChromaWrapper from "./ChromaWrapper";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certifications = [
  {
    title: "Google Cybersecurity Professional Certificate",
    issuer: "Google",
    platform: "Coursera",
    icon: "🛡️",
  },
  {
    title: "Google AI Certificate",
    issuer: "Google",
    platform: "Coursera",
    icon: "🤖",
  },
  {
    title: "Network Security",
    issuer: "Coursera",
    platform: "Coursera",
    icon: "🌐",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 max-w-5xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 1.2 }}
        className="mb-12"
      >
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
          Verified <span className="text-accent">Certifications</span>
        </h2>
      </motion.div>

      <ChromaWrapper><div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {certifications.map((cert, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ delay: idx * 0.3, duration: 1.2, ease: "easeOut" }}
            className="glass rounded-2xl overflow-hidden group hover:border-accent/20 transition-all duration-300"
          >
            <div className="h-1 bg-accent/30 group-hover:bg-accent transition-colors" />

            <div className="p-6 flex flex-col h-full">
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                  {cert.icon}
                </div>
                <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-semibold text-accent bg-accent/10 px-2.5 py-1 rounded-md">
                  <Award size={12} />
                  Verified
                </div>
              </div>
              <h3 className="text-base font-bold text-text mb-3 leading-snug group-hover:text-accent transition-colors">
                {cert.title}
              </h3>
              <div className="mt-auto pt-4 border-t border-surface-border flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-muted uppercase tracking-wider">Issued by</p>
                  <p className="text-xs text-text font-medium">{cert.issuer}</p>
                </div>
                <span className="text-[10px] text-muted bg-white/5 px-2 py-1 rounded-md border border-white/5">
                  {cert.platform}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div></ChromaWrapper>
    </section>
  );
}
