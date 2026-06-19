"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { BsLinkedin, BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { projects, skillCategories, personalInfo } from "@/data/content";

const NAV_SECTIONS = ["About", "Projects", "Skills", "Contact"];

function useActiveSection() {
  const [active, setActive] = useState("home");
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    ["home", ...NAV_SECTIONS.map((s) => s.toLowerCase())].forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: "-45% 0px -45% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);
  return active;
}

function Nav() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#fffdf5]/90 backdrop-blur border-b border-orange-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-black text-xl tracking-tight">
          <span className="text-orange-500">A</span>nders
          <span className="text-rose-500">.</span>
        </span>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-8">
          {NAV_SECTIONS.map((s) => {
            const id = s.toLowerCase();
            return (
              <a
                key={s}
                href={`#${id}`}
                className={`text-sm font-semibold transition-colors ${active === id ? "text-orange-500" : "text-gray-500 hover:text-gray-900"}`}
              >
                {s}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="/CV.pdf"
            download
            className="bg-gradient-to-r from-orange-500 to-rose-500 text-white text-sm font-bold px-5 py-2 rounded-full hover:opacity-90 transition flex items-center gap-2 shadow-md shadow-orange-200"
          >
            CV <HiDownload size={14} />
          </a>
          {/* Mobile hamburger */}
          <button
            className="sm:hidden p-2 text-gray-600 hover:text-gray-900 transition"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <nav className="sm:hidden bg-[#fffdf5] border-t border-orange-100 px-6 py-4 flex flex-col gap-4">
          {NAV_SECTIONS.map((s) => {
            const id = s.toLowerCase();
            return (
              <a
                key={s}
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className={`text-sm font-semibold transition-colors ${active === id ? "text-orange-500" : "text-gray-600 hover:text-gray-900"}`}
              >
                {s}
              </a>
            );
          })}
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-6">
      <div className="text-center max-w-4xl">
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }} className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-400 to-rose-400 blur-xl opacity-30 scale-110" />
            <Image
              src="/profile.jpg"
              width={160}
              height={160}
              alt="Anders Helle Malling"
              quality={95}
              priority
              className="relative rounded-full object-cover w-40 h-40 border-4 border-white shadow-2xl shadow-orange-100"
            />
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-orange-600 text-xs font-bold uppercase tracking-widest rounded-full px-4 py-1.5 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500 animate-pulse" />
            Open to opportunities
          </div>
          <h1 className="text-5xl sm:text-7xl font-black leading-tight mb-4 text-gray-900">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent">
              Anders.
            </span>
          </h1>
          <p className="text-xl sm:text-2xl font-semibold text-gray-400 mb-6">
            Full-Stack Developer &middot; Aarhus, Denmark
          </p>
          <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto mb-10">
            I build fast, beautiful web applications and data-driven solutions.
            Available for freelance projects and full-time roles.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#contact"
              className="bg-gradient-to-r from-orange-500 to-rose-500 text-white font-bold px-8 py-3.5 rounded-full hover:opacity-90 hover:scale-105 active:scale-100 transition flex items-center gap-2 shadow-lg shadow-orange-200"
            >
              Let&apos;s talk <BsArrowRight />
            </a>
            <a
              href="/CV.pdf"
              download
              className="bg-white text-gray-700 font-bold px-8 py-3.5 rounded-full border-2 border-gray-200 hover:border-orange-300 hover:scale-105 active:scale-100 transition flex items-center gap-2 shadow-sm"
            >
              Download CV <HiDownload />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-3.5 rounded-full border-2 border-gray-200 hover:border-[#0077B5] hover:text-[#0077B5] text-gray-500 transition hover:scale-110 active:scale-100 shadow-sm"
              aria-label="LinkedIn"
            >
              <BsLinkedin size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 scroll-mt-16 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <p className="text-orange-400 font-bold text-sm uppercase tracking-widest mb-4">About me</p>
            <h2 className="text-4xl font-black leading-tight mb-6">
              Passionate about<br />
              <span className="bg-gradient-to-r from-orange-400 to-rose-400 bg-clip-text text-transparent">clean, smart code.</span>
            </h2>
            <div className="space-y-4 text-gray-300 leading-8">
              <p>Full-stack developer with a background in computer science, data engineering, and web development based in <strong className="text-white">Aarhus, Denmark</strong>.</p>
              <p>Backends in <strong className="text-white">C#, .NET and Laravel/PHP</strong> — frontends in <strong className="text-white">React, Next.js and Vue</strong> — data in <strong className="text-white">SQL Server with Entity Framework</strong>.</p>
              <p>I use <strong className="text-white">GitHub</strong> for every project and lean into <strong className="text-white">AI-assisted development</strong> tools like Claude Code as a core productivity layer.</p>
              <p>Open to <strong className="text-white">freelance projects</strong> and <strong className="text-white">full-time positions</strong>.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { emoji: "⚡", title: "Fast", desc: "Performance-first development" },
              { emoji: "🎨", title: "Beautiful", desc: "Attention to UI/UX details" },
              { emoji: "🔒", title: "Reliable", desc: "Clean, maintainable code" },
              { emoji: "📊", title: "Data-Driven", desc: "SQL, ML and analytics" },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="text-2xl mb-2">{card.emoji}</div>
                <div className="font-bold text-white text-sm mb-1">{card.title}</div>
                <div className="text-gray-400 text-xs leading-5">{card.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-24 scroll-mt-16 bg-[#fffdf5]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-orange-500 font-bold text-sm uppercase tracking-widest mb-3">Portfolio</p>
          <h2 className="text-4xl font-black text-gray-900">Selected Projects</h2>
        </motion.div>

        <div className="flex flex-col gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {/* Screenshot or placeholder */}
              {p.imageUrl ? (
                <div className="relative w-full aspect-video">
                  <Image src={p.imageUrl} alt={p.title} fill className="object-cover" />
                </div>
              ) : (
                <div className="w-full aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-center gap-2 text-gray-400">
                  <span className="text-3xl">🖼️</span>
                  <span className="text-xs font-semibold uppercase tracking-widest">Screenshot coming soon</span>
                </div>
              )}

              <div className="flex flex-col sm:flex-row flex-1">
                <div className="sm:w-20 bg-gradient-to-b from-orange-500 to-rose-500 flex items-center justify-center py-4 sm:py-0">
                  <span className="font-black text-2xl text-white/30 font-mono">{p.id}</span>
                </div>
                <div className="flex-1 p-7">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                  <h3 className="text-xl font-black text-gray-900">{p.title}</h3>
                  <span className="bg-orange-50 text-orange-600 border border-orange-200 text-xs font-bold px-3 py-1 rounded-full">{p.category}</span>
                </div>
                {p.note && <p className="text-xs text-amber-600 bg-amber-50 border border-amber-200 rounded-lg px-3 py-1.5 mb-3 w-fit">⚠️ {p.note}</p>}
                <p className="text-gray-600 text-sm leading-7 mb-5">{p.description}</p>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span key={tag} className="bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                  {p.liveUrl && (
                    <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-orange-500 hover:text-rose-500 transition flex items-center gap-1">
                      View live →
                    </a>
                  )}
                </div>
              </div>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-gray-400 mt-8 text-sm italic">More coming soon.</p>
      </div>
    </section>
  );
}

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  Frontend: { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200" },
  Backend: { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200" },
  Data: { bg: "bg-violet-50", text: "text-violet-700", border: "border-violet-200" },
  Tools: { bg: "bg-orange-50", text: "text-orange-700", border: "border-orange-200" },
};

function Skills() {
  return (
    <section id="skills" className="py-24 scroll-mt-16 bg-gray-900">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <p className="text-orange-400 font-bold text-sm uppercase tracking-widest mb-3">Capabilities</p>
          <h2 className="text-4xl font-black text-white">What I bring</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {skillCategories.map((cat, ci) => {
            const colors = categoryColors[cat.name] ?? { bg: "bg-gray-50", text: "text-gray-700", border: "border-gray-200" };
            return (
              <motion.div
                key={cat.name}
                className="bg-white/5 border border-white/10 rounded-2xl p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: ci * 0.08 }}
              >
                <h3 className="font-black text-white text-sm uppercase tracking-widest mb-4">{cat.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span key={skill} className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${colors.bg} ${colors.text} ${colors.border}`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const contactSchema = z.object({
  name: z.string().min(2, "Name too short"),
  email: z.string().email("Invalid email"),
  message: z.string().min(10, "Message too short"),
});
type ContactData = z.infer<typeof contactSchema>;

function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactData>({ resolver: zodResolver(contactSchema) });

  const fieldErrors = errors as Record<string, { message?: string }>;

  const onSubmit = async (data: ContactData) => {
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      if (res.ok) { setStatus("success"); reset(); } else setStatus("error");
    } catch { setStatus("error"); }
  };

  return (
    <section id="contact" className="py-24 scroll-mt-16 bg-[#fffdf5]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-orange-500 to-rose-500 rounded-3xl p-8 sm:p-12 text-white mb-10 text-center"
        >
          <h2 className="text-4xl font-black mb-3">Let&apos;s build something great.</h2>
          <p className="text-white/80 text-lg">Available for freelance projects and full-time roles.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-[1fr_1.5fr] gap-8 items-start">
          <div className="space-y-5">
            <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Email</p>
              <a href={`mailto:${personalInfo.email}`} className="text-gray-900 font-semibold hover:text-orange-500 transition text-sm">{personalInfo.email}</a>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Phone</p>
              <p className="text-gray-900 font-semibold text-sm">{personalInfo.phone}</p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">LinkedIn</p>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-900 font-semibold hover:text-orange-500 transition flex items-center gap-2 text-sm">
                <BsLinkedin /> anders-malling
              </a>
            </div>
          </div>

          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col gap-4"
            noValidate
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {[
              { name: "name", placeholder: "Your name", type: "text" },
              { name: "email", placeholder: "Your email", type: "email" },
            ].map((f) => (
              <div key={f.name}>
                <input {...register(f.name as "name" | "email")} type={f.type} placeholder={f.placeholder} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-orange-400 transition placeholder:text-gray-400" />
                {fieldErrors[f.name] && <p className="text-red-500 text-xs mt-1">{fieldErrors[f.name]?.message}</p>}
              </div>
            ))}
            <div>
              <textarea {...register("message")} placeholder="Your message" rows={5} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-orange-400 transition placeholder:text-gray-400 resize-none" />
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
            </div>
            <button type="submit" disabled={status === "sending"} className="bg-gradient-to-r from-orange-500 to-rose-500 text-white font-bold py-3 rounded-xl hover:opacity-90 transition disabled:opacity-60 shadow-md shadow-orange-100">
              {status === "sending" ? "Sending…" : "Send message"}
            </button>
            {status === "success" && <p className="text-center text-emerald-600 text-sm font-medium">Sent! I&apos;ll get back to you soon.</p>}
            {status === "error" && <p className="text-center text-red-500 text-sm">Something went wrong. Email me directly.</p>}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 py-10 px-6 text-center">
      <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} {personalInfo.name} &middot; Built with Next.js &amp; Tailwind CSS</p>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="bg-[#fffdf5] min-h-screen">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
