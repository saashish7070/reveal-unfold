import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aashish Shrestha — Product Designer & AI Builder" },
      { name: "description", content: "Engineering graduate and Product Manager crafting human-centered AI systems across healthcare, fintech, and public sectors." },
      { property: "og:title", content: "Aashish Shrestha — Product Designer & AI Builder" },
      { property: "og:description", content: "Building intelligent products with purpose." },
    ],
  }),
  component: Index,
});

const display = "font-[Geist] font-semibold tracking-tight";
const label = "font-[Geist] font-semibold uppercase tracking-[0.2em] text-xs text-on-surface-variant";

type Project = {
  num: string;
  title: string;
  blurb: string;
  tags: string[];
  image: string;
  reverse?: boolean;
  deepDive: {
    problem: string;
    architecture: string;
    contributions: string[];
    outcomes: string[];
    stack: string[];
  };
};

const projects: Project[] = [
  {
    num: "Case Study 01",
    title: "Kathmandu Metropolitan Police Digital Diary",
    blurb:
      "A robust digital tracking system built to improve transparency and operational efficiency across municipal police departments.",
    tags: ["Next.js", "PostgreSQL", "Public Sector"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD5HFDTS0PQhjQ5la26PADreCgVC4_LlgnxsEflJcwUSsAFeD5xpUMBMUE7vWZvo3hIFGUjC15Ma6o1gkdDwYlGWw8mhH7VqO8_4YBcZVKjnixJ1FSIH7m8XWRhhq-NpcbfN0gnSW64rl0RWe0FRplX57RDjU4yU_Kxt-YgkdF9JDuJLwNFRV0AXET1QW0hhFZsil63-ew6Wv_boV0qdaRMOikQjuLqNHVyKecAe2OFxmWu5kP1bbdhH9izJA3saAwwg8RZE3u_c1cQ",
    deepDive: {
      problem:
        "Paper-based incident logs across precincts produced inconsistent records, delayed reporting up the chain, and made cross-station audits nearly impossible.",
      architecture:
        "Next.js App Router frontend, PostgreSQL via Prisma, role-based access control with audit trails, and a write-once incident ledger backed by Postgres triggers.",
      contributions: [
        "Designed the incident intake flow and role hierarchy with 4 ranks of access",
        "Built the offline-tolerant draft system so officers can log on patrol",
        "Shipped the supervisor dashboard with cohort filtering and export",
      ],
      outcomes: [
        "Cut average report turnaround from 36h to under 4h in pilot precincts",
        "Adopted as the digital ledger of record across 3 metropolitan units",
      ],
      stack: ["Next.js 14", "PostgreSQL", "Prisma", "NextAuth", "Tailwind"],
    },
  },
  {
    num: "Case Study 02",
    title: "SwadKhoj — Local Food Discovery",
    blurb:
      "Connecting food enthusiasts with local hidden gems through a curated, community-driven restaurant discovery experience in Nepal.",
    tags: ["Product Design", "Full Stack", "Consumer App"],
    reverse: true,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAvcz83oAM-kPgjC-N9b40Ob-iY7ZQ4y1dcTxLXnNfMtYmaAqxcXvOSQuuW_EDoMR0FIOT2nSBNAHficYLt2KIwiA-cG22DSRilDHVpbSWSBnCmKJJP39mmr33KFVl-EWGSEYGuoQIze1ZbMN5Xo4njRFwHlPl4fYYVEUUHB4nYSOyFJcrMIN-UB7QycAnkfZYWY5Blk_7JkvOUUns_5l4YAPuR8gluptNYCnWqpAiaBlHgW_uGPrMZ_ZFXMl5HhVYIzWKaWav0kdE2",
    deepDive: {
      problem:
        "Generic ratings drown out the small, owner-run kitchens that define Kathmandu's food culture. Discovery defaulted to whoever had the loudest marketing.",
      architecture:
        "React Native client, Node/Express API, Postgres with PostGIS for geo queries, and a taste-graph recommender weighted on tagged community visits.",
      contributions: [
        "Led end-to-end product design across 4 core flows",
        "Defined the taste-graph schema and the trust score for community reviews",
        "Prototyped the map-first home and validated through 12 user interviews",
      ],
      outcomes: [
        "Closed beta reached 850 active tasters across Kathmandu valley",
        "62% of saved spots came from community curation, not search",
      ],
      stack: ["React Native", "Node", "Express", "PostGIS", "Figma"],
    },
  },
  {
    num: "Case Study 03",
    title: "AI Transaction Monitoring System",
    blurb:
      "Real-time fraud detection utilizing ensemble machine learning models to secure high-volume financial transactions.",
    tags: ["AI/ML", "Fintech", "Hackathon Winner"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuByVSYhapIKzHLQb-VwjjTAYD2fcQfSJY4C9RRtLV9Q7bGkYqRdFSt-lZQiJQcvf8HIZ6g4rW0D92uht9ZeMOTP7Ti83FZ6Gyy4FzzU17mKgyK9DdWXcocKlk_0Sdqs19iP14XqG2Xf94bjUfz8Q44k6OORaY088qXA64JTV7l16uRmKWVmrKEYYjaY5Wp5bSbeainI5-YckS--dcOQm69BVUqantywvITF-z9RSswtxo7DsFYlEWfgWSoY5DPNJLGKRJZIAc9J8nUx",
    deepDive: {
      problem:
        "Rule-based fraud filters were too brittle for emerging digital wallet abuse patterns, generating high false positives and missing coordinated mule activity.",
      architecture:
        "Streaming pipeline ingesting transactions into a feature store, served by an ensemble of gradient-boosted trees and an autoencoder anomaly model behind a low-latency scoring API.",
      contributions: [
        "Owned the analyst-facing review console — case timelines, evidence, decisions",
        "Engineered the feature pipeline for velocity, peer-graph, and device signals",
        "Tuned the ensemble threshold against an analyst-reviewed labeled set",
      ],
      outcomes: [
        "Reduced false positives by 41% versus the existing rule engine",
        "Awarded 4th Runner-Up at the Global IME Bank AI Hackathon",
      ],
      stack: ["Python", "XGBoost", "Kafka", "FastAPI", "Postgres"],
    },
  },
];

function Icon({ name, className = "" }: { name: string; className?: string }) {
  return (
    <span className={`material-symbols-outlined ${className}`} aria-hidden="true">
      {name}
    </span>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-on-surface overflow-x-hidden selection:bg-primary selection:text-on-primary">
      <Nav />
      <Hero />
      <Stats />
      <Work />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 nav-blur">
      <div className="max-w-[1280px] mx-auto px-8 py-6 flex justify-between items-center">
        <div className={`${display} text-xl tracking-tighter`}>AASHISH SHRESTHA</div>
        <div className="hidden md:flex items-center gap-10">
          <a href="#home" className="text-on-surface font-medium border-b border-on-surface">Home</a>
          <a href="#work" className="text-on-surface-variant hover:text-on-surface font-medium transition-colors">Work</a>
          <a href="#about" className="text-on-surface-variant hover:text-on-surface font-medium transition-colors">About</a>
          <a href="#contact" className="text-on-surface-variant hover:text-on-surface font-medium transition-colors">Contact</a>
        </div>
        <a href="#contact" className="px-7 py-2.5 rounded-full bg-white text-background font-bold text-sm hover:bg-primary transition-all">
          Connect
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="home" className="relative pt-48 pb-32 min-h-[90vh] flex items-center">
      <div className="max-w-[1280px] mx-auto px-8 relative z-10 w-full">
        <div className="max-w-4xl space-y-10">
          <div className="space-y-6">
            <span className={label}>Product Designer · AI Builder</span>
            <h1 className={`${display} text-[56px] md:text-[88px] leading-[1.0] tracking-[-0.04em]`}>
              Building intelligent <br />
              <span className="text-gradient">products with purpose.</span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl leading-relaxed">
              Engineering graduate and Product Manager crafting human-centered AI systems across healthcare, fintech, and public sectors.
            </p>
          </div>
          <div className="flex flex-wrap gap-5">
            <a href="#work" className="bg-primary px-10 py-5 rounded-full text-on-primary font-bold flex items-center gap-3 hover:bg-white transition-colors">
              View Case Studies <Icon name="arrow_forward" className="text-lg" />
            </a>
            <button className="px-10 py-5 rounded-full border border-outline text-on-surface font-bold flex items-center gap-3 hover:bg-white/5 transition-all">
              Download CV
            </button>
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-0 w-1/3 h-full bg-surface-container-low -z-10 opacity-50" />
    </section>
  );
}

function Stats() {
  const items = [
    ["Current Role", "Associate Product Manager"],
    ["Education", "Computer Engineering"],
    ["Focus", "AI + UI/UX Design"],
    ["Impact", "Public & FinTech Sectors"],
  ];
  return (
    <div className="max-w-[1280px] mx-auto px-8 relative z-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-t border-white/5">
        {items.map(([k, v], index) => (
          <motion.div
            key={k}
            initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60, y: 60 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.08 }}
            className="space-y-2"
          >
            <p className={`${label} text-xs`}>{k}</p>
            <p className="text-lg font-semibold">{v}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function Work() {
  return (
    <section id="work" className="py-[160px]">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="flex justify-between items-baseline mb-20">
          <div>
            <span className={label}>Selected Projects</span>
            <h2 className={`${display} text-5xl md:text-[64px] leading-[1.1] tracking-[-0.03em] mt-4`}>
              Crafting experiences
            </h2>
          </div>
          <a href="#" className="text-on-surface-variant hover:text-on-surface transition-colors flex items-center gap-2 font-semibold">
            Archive <Icon name="arrow_outward" className="text-sm" />
          </a>
        </div>
        <div className="space-y-40">
          {projects.map((p) => (
            <ProjectRow key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectRow({ project: p }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const imageFromRight = p.reverse;
  return (
    <div className="group">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <motion.div
          className={`lg:col-span-7 ${p.reverse ? "order-1 lg:order-2" : ""} aspect-video overflow-hidden rounded-xl bg-surface-container border border-white/5`}
          initial={{ opacity: 0, x: imageFromRight ? 80 : -80, y: 60 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <img
            src={p.image}
            alt={p.title}
            className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
          />
        </motion.div>
        <motion.div
          className={`lg:col-span-5 ${p.reverse ? "order-2 lg:order-1" : ""} space-y-8`}
          initial={{ opacity: 0, x: imageFromRight ? -80 : 80, y: 60 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease: "easeOut", delay: 0.1 }}
        >
          <div className="space-y-4">
            <span className="text-sm font-semibold text-on-surface-variant uppercase tracking-widest">
              {p.num}
            </span>
            <h3 className={`${display} text-3xl md:text-[32px] leading-tight`}>{p.title}</h3>
            <p className="text-base text-on-surface-variant leading-relaxed">{p.blurb}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {p.tags.map((t) => (
              <span key={t} className="text-xs font-semibold px-4 py-1.5 border border-white/10 rounded-full">
                {t}
              </span>
            ))}
          </div>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="inline-flex items-center gap-3 text-on-surface font-bold border-b border-white/20 pb-1 hover:border-white transition-all"
          >
            {open ? "Hide Technical Deep-Dive" : "View Technical Deep-Dive"}
            <Icon
              name="expand_more"
              className={`text-base transition-transform duration-500 ${open ? "rotate-180" : ""}`}
            />
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="deep-dive"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="mt-16 border-t border-white/5 pt-16 grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-7 space-y-10">
                <DeepBlock label="The Problem" body={p.deepDive.problem} />
                <DeepBlock label="Architecture" body={p.deepDive.architecture} />
                <div className="space-y-4">
                  <span className={`${label} text-xs`}>My Contributions</span>
                  <ul className="space-y-3">
                    {p.deepDive.contributions.map((c) => (
                      <li key={c} className="flex gap-4 text-on-surface-variant leading-relaxed">
                        <span className="text-primary mt-2">—</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="lg:col-span-5 space-y-10">
                <div className="space-y-4">
                  <span className={`${label} text-xs`}>Outcomes</span>
                  <div className="space-y-4">
                    {p.deepDive.outcomes.map((o) => (
                      <div key={o} className="p-5 rounded-xl bg-surface-container-low border border-white/5">
                        <p className="text-on-surface text-sm leading-relaxed">{o}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <span className={`${label} text-xs`}>Tech Stack</span>
                  <div className="flex flex-wrap gap-2">
                    {p.deepDive.stack.map((s) => (
                      <span key={s} className="text-xs font-semibold px-3 py-1.5 rounded-full bg-surface-container-high text-on-surface">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function DeepBlock({ label: l, body }: { label: string; body: string }) {
  return (
    <div className="space-y-3">
      <span className={`${label} text-xs`}>{l}</span>
      <p className="text-on-surface-variant leading-relaxed">{body}</p>
    </div>
  );
}

function About() {
  const pillars = [
    ["Product Strategy", "Defining product vision and roadmaps for meaningful growth and user adoption."],
    ["Design Systems", "Building scalable UI frameworks that maintain consistency across platforms."],
    ["AI Engineering", "Implementing machine learning solutions into functional product features."],
    ["Human Factors", "Optimizing interfaces for cognitive load and accessibility."],
  ];
  const experience = [
    ["Associate Product Manager", "Wiseyak", "2025 — Present"],
    ["Product Design Intern", "Lightweb Group", "2025"],
    ["Graphic Designer", "Hyperce Inc.", "2024"],
    ["Computer Engineering", "Pulchowk Campus", "2021 — 2025"],
  ];
  return (
    <section id="about" className="py-[160px] bg-surface-container-low">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
          <div className="space-y-12">
            <div className="space-y-8">
              <span className={label}>About</span>
              <h2 className={`${display} text-5xl md:text-6xl leading-[1.05]`}>
                Bridging design <br />and engineering.
              </h2>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                I believe technology should feel invisible, yet powerful. My approach blends user-centered design principles with deep engineering insights to build products that aren't just intelligent, but genuinely helpful.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-4">
              {pillars.map(([t, d]) => (
                <div key={t} className="space-y-3">
                  <p className="font-bold text-lg">{t}</p>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-20">
            <div className="space-y-10">
              <h3 className={`${label} text-xs`}>Experience Log</h3>
              <div className="divide-y divide-white/5">
                {experience.map(([role, org, when]) => (
                  <div key={role} className="py-6 flex justify-between items-start gap-6">
                    <div>
                      <p className="font-bold text-xl">{role}</p>
                      <p className="text-on-surface-variant">{org}</p>
                    </div>
                    <span className="text-sm font-semibold opacity-60 whitespace-nowrap">{when}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-8">
              <h3 className={`${label} text-xs`}>Recognition</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-6">
                  <Icon name="award_star" className="opacity-40" />
                  <div>
                    <p className="font-bold">Advent of Multimodal AI — Global Runner-up</p>
                    <p className="text-xs text-on-surface-variant">2nd Place Globally out of 1000+ entries</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <Icon name="stars" className="opacity-40" />
                  <div>
                    <p className="font-bold">Global IME Bank AI Hackathon</p>
                    <p className="text-xs text-on-surface-variant">4th Runner-Up — FinTech Innovation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-[160px]">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-10">
            <span className={label}>Get in touch</span>
            <h2 className={`${display} text-5xl md:text-[88px] leading-[1.0] tracking-[-0.04em]`}>
              Let's build <br />meaningful <br />
              <span className="text-gradient">products.</span>
            </h2>
            <p className="text-lg text-on-surface-variant max-w-md">
              Always open to discussing new projects, design systems, or AI implementations.
            </p>
            <div className="pt-6 space-y-4">
              <p className="text-on-surface-variant flex items-center gap-4">
                <Icon name="alternate_email" className="text-sm" /> saashish1746@gmail.com
              </p>
              <p className="text-on-surface-variant flex items-center gap-4">
                <Icon name="location_on" className="text-sm" /> Lalitpur, Nepal
              </p>
            </div>
          </div>
          <div className="bg-surface-container rounded-2xl p-8 md:p-12 border border-white/5">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Field label="Name" type="text" placeholder="Full Name" />
                <Field label="Email" type="email" placeholder="Email Address" />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Inquiry Type</label>
                <select className="w-full bg-transparent border-b border-white/20 py-3 focus:border-white transition-all outline-none">
                  <option className="bg-surface">New Collaboration</option>
                  <option className="bg-surface">Product Strategy</option>
                  <option className="bg-surface">Design System</option>
                </select>
              </div>
              <div className="space-y-3">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Message</label>
                <textarea
                  rows={4}
                  placeholder="How can I help?"
                  className="w-full bg-transparent border-b border-white/20 py-3 focus:border-white transition-all outline-none resize-none"
                />
              </div>
              <button className="w-full bg-white text-background py-5 rounded-full font-bold text-lg hover:bg-primary transition-all flex items-center justify-center gap-3">
                Send Message <Icon name="north_east" className="text-lg" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label: l, type, placeholder }: { label: string; type: string; placeholder: string }) {
  return (
    <div className="space-y-3">
      <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">{l}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-white/20 py-3 focus:border-white transition-all outline-none"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 py-20">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="space-y-2 text-center md:text-left">
            <div className="font-bold text-lg tracking-tighter">AASHISH SHRESTHA</div>
            <p className="text-on-surface-variant text-sm opacity-60">© 2025. Designed &amp; Developed by Aashish Shrestha.</p>
          </div>
          <div className="flex gap-10">
            <a className="text-sm font-medium hover:text-white transition-colors" href="https://linkedin.com/in/aashish1746">LinkedIn</a>
            <a className="text-sm font-medium hover:text-white transition-colors" href="#">Twitter</a>
            <a className="text-sm font-medium hover:text-white transition-colors" href="#">Dribbble</a>
            <a className="text-sm font-medium hover:text-white transition-colors" href="#">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
