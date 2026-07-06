import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import chefVideo from "../assets/chef.mp4";
import tacVideo from "../assets/tac.mp4";
import bioVideo from "../assets/bio.mp4";
import modulxVideo from "../assets/modulx.mp4";
import solarVideo from "../assets/solar.mp4";
import partyVideo from "../assets/party.mp4";
import {
  Film,
  Plane,
  Radio,
  Award,
  MonitorPlay,
  Zap,
  MessageSquare,
  Building2,
  Sparkles,
  Instagram,
  Linkedin,
  Facebook,
  Youtube,
  MapPin,
  ArrowUpRight,
  Play,
  Check,
  Volume2,
  VolumeX,
  CameraOff,
  Camera,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const nav = [
  { label: "Services", href: "#services" },
  { label: "Films", href: "#films" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    icon: Film,
    title: "Videography",
    items: [
      "Promotional Videos",
      "Brand Films",
      "Corporate Films",
      "Commercials",
      "Event Coverage",
    ],
  },
  {
    icon: Plane,
    title: "Drone Cinematography",
    items: [
      "Aerial Videography",
      "Real Estate",
      "Construction Progress",
      "Industrial Documentation",
    ],
  },
  {
    icon: Camera,
    title: "Photography",
    items: [
      "Wedding Photoshoots",
      "Product Photography",
      "Baby Photoshoots",
      "House Warming Photoshoots",
      "Construction Photography",
    ],
  },
  {
    icon: Radio,
    title: "Live Streaming",
    items: [
      "Conferences",
      "Product Launches",
      "Corporate Meetings",
      "Religious Events",
      "Multi-camera Streaming",
    ],
  },
];

// Films — drop your own MP4 URLs into `src`. Videos play inline on this page.
// `src` can be a direct .mp4/.webm URL (e.g. hosted on your CDN or /public folder).
const films = [
  { title: "Chef Supplies", tag: "Corporate Video", src: chefVideo },
  { title: "TAC", tag: "Corporate Video", src: tacVideo },
  { title: "Bio Organics", tag: "Corporate Video", src: bioVideo },
  { title: "ModdulX", tag: "Corporate Video", src: modulxVideo },
  { title: "Solora Fresh", tag: "Corporate Video", src: solarVideo },
  { title: "Party Warehouse", tag: "Corporate Video", src: partyVideo },
];

const advantages = [
  { icon: Award, title: "Premium Equipment", copy: "Cinema-grade cameras, lenses, lighting and audio." },
  { icon: MonitorPlay, title: "4K & High-Resolution Delivery", copy: "Broadcast-quality masters ready for every channel." },
  { icon: Plane, title: "Drone Operations", copy: "Transport Canada compliant, fully insured." },
  { icon: Radio, title: "Professional Live Streaming", copy: "Multi-camera setups with reliable uplinks." },
  { icon: Zap, title: "Fast Turnaround", copy: "Clear timelines, on-time delivery, every project." },
  { icon: MessageSquare, title: "Reliable Communication", copy: "One point of contact, responsive throughout." },
  { icon: Building2, title: "Corporate Experience", copy: "Trusted by teams from startups to enterprise." },
  { icon: Sparkles, title: "Creative Storytelling", copy: "Visuals engineered to move your brand forward." },
];

const testimonials = [
  {
    quote:
      "Ashwin's team delivered a corporate reel that raised the bar for our brand. Crisp visuals, effortless communication, on-time delivery.",
    author: "Marketing Director",
    company: "Enterprise SaaS, Toronto",
  },
  {
    quote:
      "The drone footage of our construction site became the centerpiece of our investor deck. Truly exceptional work.",
    author: "VP Operations",
    company: "Construction Firm, Mississauga",
  },
  {
    quote:
      "Multi-camera live stream of our annual conference ran flawlessly. Attendees remotely felt like they were in the room.",
    author: "Head of Events",
    company: "Financial Services, Ottawa",
  },
];

const clients = ["ModdulX", "Champion Products", "Chef Supplies", "TAC", "Bio Organics", "Party Warehouse", "Solora Fresh"];

/* ------------------------------------------------------------------ */
/* Motion helpers                                                      */
/* ------------------------------------------------------------------ */

const EASE = [0.22, 1, 0.36, 1] as const;
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
} as const;

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

function Index() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV ----------------------------------------------------------- */}
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-xl bg-background/80 border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="container-x flex h-16 items-center justify-between md:h-20">
          <a href="#top" className="flex items-center gap-2 group">
            <span
              className={`h-2 w-2 rounded-full bg-brand transition-transform group-hover:scale-125 ${
                scrolled ? "" : "shadow-[0_0_12px_var(--brand)]"
              }`}
            />
            <span
              className={`font-display text-base font-semibold tracking-tight ${
                scrolled ? "text-foreground" : "text-white"
              }`}
            >
              FRAMES BY ASHWIN INC.
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className={`text-sm transition-colors ${
                  scrolled
                    ? "text-slate hover:text-foreground"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className={`hidden md:inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition-all ${
              scrolled
                ? "border-foreground bg-foreground text-background hover:bg-brand hover:border-brand"
                : "border-white/30 text-white hover:bg-white hover:text-foreground"
            }`}
          >
            Book Consultation
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-black">
  <img
    src="/hero.jpg"
    alt="Hero Background"
    className="h-full w-full object-cover opacity-70"
  />

  <div
    aria-hidden
    className="absolute inset-0"
    style={{
      background:
        "radial-gradient(120% 80% at 20% 10%, rgba(255,255,255,0.06), transparent 60%), radial-gradient(80% 60% at 90% 100%, rgba(var(--brand-rgb,20 90 240)/0.25), transparent 60%), linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.55) 40%, rgba(0,0,0,0.9) 100%)",
    }}
  />
</div>
        <div className="container-x relative z-10 flex min-h-[100svh] flex-col justify-end pb-24 pt-32 md:pb-32">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="eyebrow text-white/70"
          >
            Ontario, Canada
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: EASE }}
            className="mt-6 max-w-5xl text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5.5rem]"
          >
            Capturing Stories.
            <br />
            <span className="text-white/60">Creating </span>
            <span className="italic font-light">Impact.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 max-w-2xl text-base text-white/75 md:text-lg"
          >
            Cinematic Videography, Professional Photography, Drone Cinematography and Live
            Streaming for businesses and events across Ontario.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-foreground transition-all hover:bg-brand hover:text-white"
            >
              Book a Consultation
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#films"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10"
            >
              Watch Showreel
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-16 flex items-end justify-between border-t border-white/15 pt-6 text-white/60"
          >
            <div className="text-xs uppercase tracking-[0.22em]"></div>
            <div className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.22em]">
              <span>Video</span>
              <span>Photo</span>
              <span>Drone</span>
              <span>Live</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CLIENTS ------------------------------------------------------- */}
      <section className="border-b border-border bg-card">
        <div className="container-x py-14 md:py-16">
          <Reveal>
            <p className="eyebrow text-center">Trusted by businesses across Ontario</p>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 items-center gap-x-8 gap-y-6 opacity-70 sm:grid-cols-3 md:grid-cols-7">
            {clients.map((c, i) => (
              <Reveal key={c} delay={i * 0.05}>
                <div className="text-center font-display text-sm font-semibold tracking-[0.24em] text-slate">
                  {c}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES ------------------------------------------------------ */}
      <section id="services" className="py-24 md:py-32">
        <div className="container-x">
          <SectionHeader
            eyebrow="Services"
            title={
              <>
                Full-spectrum visual production,
                <br className="hidden md:block" />
                <span className="text-slate">built for business.</span>
              </>
            }
            copy="Every engagement is scoped for corporate outcomes — from a single headshot session to multi-day productions across sites."
          />

          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05}>
                <div className="group relative flex h-full flex-col bg-background p-8 transition-colors hover:bg-card">
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-border text-foreground transition-all group-hover:border-brand group-hover:text-brand">
                      <s.icon className="h-5 w-5" strokeWidth={1.6} />
                    </div>
                    <span className="font-display text-xs text-slate">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-8 font-display text-2xl font-semibold">
                    {s.title}
                  </h3>
                  <ul className="mt-6 space-y-2.5">
                    {s.items.map((it) => (
                      <li key={it} className="flex items-start gap-2 text-sm text-slate">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FILMS --------------------------------------------------------- */}
      <section id="films" className="border-t border-border bg-card py-24 md:py-32">
        <div className="container-x">
          <SectionHeader
            eyebrow="Cinematic Films"
            title={
              <>
                Motion that
                <span className="italic font-light text-slate"> moves markets.</span>
              </>
            }
            copy="A selection of recent work — play any film below directly on this page."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {films.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 0.06}>
                <FilmCard film={f} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY ----------------------------------------------------------- */}
      <section className="border-y border-border bg-foreground text-background">
        <div className="container-x py-24 md:py-32">
          <SectionHeader
            eyebrow="Why Frames by Ashwin"
            title={
              <>
                From Precious Moments to
                <br className="hidden md:block" />
                <span className="text-background/60">Powerful Brand Stories.</span>
              </>
            }
            copy=""
            invert
          />
          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map((a, i) => (
              <Reveal key={a.title} delay={(i % 4) * 0.05}>
                <div className="flex h-full flex-col gap-4 bg-foreground p-8">
                  <a.icon className="h-5 w-5 text-brand" strokeWidth={1.7} />
                  <h3 className="font-display text-lg font-semibold">{a.title}</h3>
                  <p className="text-sm leading-relaxed text-background/60">
                    {a.copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT --------------------------------------------------------- */}
      <section id="about" className="py-24 md:py-32">
        <div className="container-x">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <p className="eyebrow">About</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-5xl">
                About Frames by Ashwin
              </h2>
            </Reveal>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-slate md:text-lg">
              <Reveal delay={0.1}>
                <p>
                  At Frames by Ashwin, we believe every moment has a story worth preserving. 
                  Based in Ontario, Canada, we provide professional photography and videography 
                  services that capture life's most meaningful memories—from weddings and family 
                  celebrations to corporate events and commercial projects. We help businesses 
                  create powerful visual content that leaves a lasting impression.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p>
                  From elegant weddings and intimate family moments to corporate events and 
                  commercial projects, our team combines creativity, technical expertise, and 
                  attention to detail to deliver timeless visuals that you'll cherish for years to come.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p>
                  Whether personal or professional, every moment is crafted with care, creativity, 
                  and precision—preserving your story with elegance and lasting impact.
                </p>
              </Reveal>
              <Reveal delay={0.25}>
                <p>
                  <strong>
                      <em>At Frames by Ashwin, every frame tells a story—let us tell yours.</em>
                  </strong>
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.25}>
              <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
                {[
                  { k: "350+", v: "Clients worked with" },
                  { k: "8+", v: "Years Experience" },
                  { k: "4K", v: "Master Delivery" },
                ].map((s) => (
                  <div key={s.v}>
                    <div className="font-display text-3xl font-semibold md:text-4xl">
                      {s.k}
                    </div>
                    <div className="mt-1 text-xs uppercase tracking-[0.18em] text-slate">
                      {s.v}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS -------------------------------------------------- */}
      <section className="border-t border-border bg-card py-24 md:py-32">
        <div className="container-x">
          <SectionHeader
            eyebrow="Testimonials"
            title={
              <>
                Trusted for Every Celebration
                <br className="hidden md:block" />
                <span className="text-slate">and Every Story.</span>
              </>
            }
            copy=""
          />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.author} delay={i * 0.08}>
                <figure className="flex h-full flex-col justify-between rounded-2xl border border-border bg-background p-8">
                  <blockquote className="font-display text-lg leading-snug text-foreground">
                    <span className="text-brand">“</span>
                    {t.quote}
                    <span className="text-brand">”</span>
                  </blockquote>
                  <figcaption className="mt-8 border-t border-border pt-5">
                    <div className="text-sm font-semibold text-foreground">
                      {t.author}
                    </div>
                    <div className="text-xs uppercase tracking-[0.18em] text-slate">
                      {t.company}
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA ----------------------------------------------------------- */}
      <section className="relative overflow-hidden bg-foreground text-background">
        <div className="container-x relative py-24 md:py-32">
          <Reveal>
            <p className="eyebrow text-background/60">Get in touch</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 max-w-4xl font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              Let's create something{" "}
              <span className="italic font-light text-background/70">
                exceptional.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-background/70 md:text-lg">
              Whether you're planning a corporate event, launching a new product
              or looking for premium visual content, we'd love to work with you.
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <a
              href="#contact"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-brand px-7 py-4 text-sm font-medium text-white transition-all hover:bg-brand-strong"
            >
              Book Your Project
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
      </section>

      {/* CONTACT ------------------------------------------------------- */}
      <section id="contact" className="py-24 md:py-32">
        <div className="container-x grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <p className="eyebrow">Contact</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-5xl">
                Tell us about your project.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 text-base leading-relaxed text-slate">
                We reply within one business day with a scoped proposal and next
                steps.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-10 space-y-4">
                <div className="flex items-center gap-3 text-sm text-foreground">
                  <MapPin className="h-4 w-4 text-brand" />
                  Ontario, Canada.
                </div>
                <div className="hairline" />
                <div className="flex items-center gap-3 pt-2">
                  {[
                    { icon: Instagram, label: "Instagram" },
                    { icon: Linkedin, label: "LinkedIn" },
                    { icon: Facebook, label: "Facebook" },
                    { icon: Youtube, label: "YouTube" },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href="#"
                      aria-label={s.label}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-slate transition-all hover:border-brand hover:text-brand"
                    >
                      <s.icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal className="md:col-span-7" delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      {/* FOOTER -------------------------------------------------------- */}
      <footer className="border-t border-border bg-card">
        <div className="container-x flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="font-display text-base font-semibold">
              Frames by Ashwin
            </div>
            <div className="mt-1 text-xs uppercase tracking-[0.22em] text-slate">
              Videography · Photography · Drone Cinematography · Live Streaming
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-xs text-slate">
            <span>© {new Date().getFullYear()} Frames by Ashwin. All rights reserved.</span>
            <a href="#" className="hover:text-foreground">Privacy Policy</a>
          </div>
        </div>
      </footer>

    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Sub-components                                                      */
/* ------------------------------------------------------------------ */

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      custom={delay * 16}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  copy,
  align = "left",
  invert = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  copy?: string;
  align?: "left" | "center";
  invert?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <Reveal>
        <p className={`eyebrow ${invert ? "text-background/60" : ""}`}>{eyebrow}</p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
          {title}
        </h2>
      </Reveal>
      {copy && (
        <Reveal delay={0.14}>
          <p
            className={`mt-6 max-w-2xl text-base leading-relaxed md:text-lg ${
              invert ? "text-background/60" : "text-slate"
            } ${align === "center" ? "mx-auto" : ""}`}
          >
            {copy}
          </p>
        </Reveal>
      )}
    </div>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  const services = [
    "Photography",
    "Videography",
    "Drone Services",
    "Live Streaming",
    "Multiple / Not sure",
  ];
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="rounded-2xl border border-border bg-card p-6 md:p-10"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Name" id="name" required />
        <Field label="Company" id="company" />
        <Field label="Email" id="email" type="email" required />
        <Field label="Phone" id="phone" type="tel" />
        <div className="md:col-span-2">
          <label htmlFor="service" className="mb-2 block text-xs uppercase tracking-[0.18em] text-slate">
            Service required
          </label>
          <select
            id="service"
            className="w-full appearance-none rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-brand"
          >
            {services.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>
        <div className="md:col-span-2">
          <label htmlFor="message" className="mb-2 block text-xs uppercase tracking-[0.18em] text-slate">
            Project details
          </label>
          <textarea
            id="message"
            rows={5}
            className="w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-brand"
            placeholder="Tell us about the project, dates, location and deliverables you need."
          />
        </div>
      </div>
      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <p className="text-xs text-slate">
          By submitting, you agree to be contacted about your inquiry.
        </p>
        <button
          type="submit"
          disabled={sent}
          className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-all hover:bg-brand disabled:opacity-70"
        >
          {sent ? (
            <>
              <Check className="h-4 w-4" />
              Message received
            </>
          ) : (
            <>
              Send inquiry
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  id,
  type = "text",
  required = false,
}: {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-xs uppercase tracking-[0.18em] text-slate">
        {label} {required && <span className="text-brand">*</span>}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-brand"
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Inline film player card                                             */
/* ------------------------------------------------------------------ */

function FilmCard({ film }: { film: { title: string; tag: string; src: string } }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  return (
    <div className="group relative overflow-hidden rounded-xl border border-border bg-black">
      <div className="relative aspect-video w-full overflow-hidden">
        {film.src ? (
          <>
            <video
              ref={videoRef}
              src={film.src}
              muted={muted}
              playsInline
              controls={playing}
              preload="metadata"
              onEnded={() => setPlaying(false)}
              className="h-full w-full object-cover"
            />
            {!playing && (
              <button
                type="button"
                onClick={togglePlay}
                aria-label={`Play ${film.title}`}
                className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors hover:bg-black/20"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 text-foreground shadow-2xl transition-transform group-hover:scale-110">
                  <Play className="h-6 w-6 translate-x-0.5" fill="currentColor" />
                </span>
              </button>
            )}
            {playing && (
              <button
                type="button"
                onClick={toggleMute}
                aria-label={muted ? "Unmute" : "Mute"}
                className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur transition-colors hover:bg-black/80"
              >
                {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
              </button>
            )}
          </>
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-neutral-900 to-neutral-800 text-center text-white/70">
            <Play className="h-8 w-8 opacity-60" />
            <div className="font-display text-base font-semibold text-white/90">
              {film.title}
            </div>
            <p className="max-w-[80%] text-xs text-white/50">
              Video coming soon
            </p>
          </div>
        )}
      </div>
      <div className="flex items-center justify-between border-t border-border bg-background p-5">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-slate">
            {film.tag}
          </p>
          <h3 className="mt-1.5 font-display text-lg font-semibold">
            {film.title}
          </h3>
        </div>
      </div>
    </div>
  );
}
