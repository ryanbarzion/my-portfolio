import { education, experience, person, projects, skills } from "./content";
import type { Project } from "./content";

const nav = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  return (
    <div className="relative z-10 flex-1">
      <Header />
      <main className="mx-auto w-full max-w-5xl px-6 sm:px-8">
        <Hero />
        <Section id="work" label="Selected work">
          <div className="space-y-20">
            {projects.map((p) => (
              <ProjectEntry key={p.title} project={p} />
            ))}
          </div>
        </Section>
        <Section id="experience" label="Experience">
          <ol className="divide-y divide-line border-t border-line">
            {experience.map((e) => (
              <li key={e.org + e.role} className="grid gap-2 py-6 sm:grid-cols-[8.5rem_1fr] sm:gap-8">
                <div className="font-mono text-xs text-ink-muted pt-1">{e.period}</div>
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-3">
                    <h3 className="text-lg font-medium">{e.org}</h3>
                    <span className="text-ink-muted">{e.role}</span>
                  </div>
                  <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-ink-muted">{e.note}</p>
                </div>
              </li>
            ))}
          </ol>
        </Section>
        <Section id="about" label="About">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h3 className="font-serif text-3xl leading-tight">{education.school}</h3>
              <p className="mt-3 text-ink">{education.degree}</p>
              <p className="text-ink-muted">{education.graduation}</p>
              <ul className="mt-4 space-y-1 text-sm text-ink-muted">
                {education.notes.map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
              <p className="eyebrow mt-8 mb-3">Coursework</p>
              <p className="max-w-md text-sm leading-relaxed text-ink-muted">{education.coursework.join(" · ")}</p>
            </div>
            <div className="space-y-8">
              {skills.map((s) => (
                <div key={s.group}>
                  <p className="eyebrow mb-3">{s.group}</p>
                  <ul className="flex flex-wrap gap-x-4 gap-y-1.5 text-sm">
                    {s.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Section>
        <Contact />
      </main>
    </div>
  );
}

function Header() {
  return (
    <header className="mx-auto flex w-full max-w-5xl flex-col items-start gap-4 px-6 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-8">
      <a href="#" className="whitespace-nowrap font-mono text-xs tracking-[0.14em] uppercase">
        {person.name}
      </a>
      <nav className="flex gap-5 font-mono text-xs tracking-[0.1em] uppercase text-ink-muted sm:gap-8">
        {nav.map((n) => (
          <a key={n.href} href={n.href} className="transition-colors hover:text-ink">
            {n.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="pt-20 pb-28 sm:pt-28 sm:pb-36">
      <p className="eyebrow mb-8">{person.location}</p>
      <h1 className="font-serif text-[2.75rem] leading-[1.02] tracking-[-0.01em] sm:text-7xl md:text-[5.25rem]">
        Aerospace engineering student at Berkeley, and founder of{" "}
        <a href="#work" className="italic text-accent">
          AutoArch
        </a>
        .
      </h1>
      <div className="mt-12 grid gap-10 md:grid-cols-[1fr_16rem] md:gap-16">
        <p className="max-w-xl text-lg leading-relaxed text-ink-muted">
          AutoArch turns a raw intraoral scan into a print-ready orthodontic model in about ten seconds. It is a
          paid product used by dental practices, and I built and run every part of it: the geometry pipeline, the
          machine-learning segmentation, the browser 3D editor, billing, and the server it lives on.
        </p>
        <ul className="space-y-2 text-sm md:pt-1">
          {person.emails.map((e) => (
            <li key={e}>
              <a href={`mailto:${e}`} className="link">
                {e}
              </a>
            </li>
          ))}
          <li>
            <a href={person.linkedin.href} target="_blank" rel="noopener noreferrer" className="link arrow-link">
              LinkedIn
            </a>
          </li>
          <li>
            <a href={person.github.href} target="_blank" rel="noopener noreferrer" className="link arrow-link">
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

function Section({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-line py-16 sm:py-20">
      <div className="grid gap-8 md:grid-cols-[10rem_1fr] md:gap-12">
        <h2 className="eyebrow md:pt-1">{label}</h2>
        <div>{children}</div>
      </div>
    </section>
  );
}

function ProjectEntry({ project }: { project: Project }) {
  return (
    <article className="grid gap-6">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
        <h3 className="font-serif text-4xl leading-none sm:text-5xl">
          <span className="mr-3 font-mono text-xs text-ink-faint align-middle">{project.index}</span>
          {project.title}
        </h3>
        <div className="font-mono text-xs text-ink-muted">
          {project.role} · {project.period}
        </div>
      </div>

      <p className="text-[13px] font-medium text-accent">{project.status}</p>

      <p className="max-w-2xl text-[17px] leading-relaxed">{project.summary}</p>

      {project.stats && (
        <dl className="grid grid-cols-3 gap-4 border-y border-line py-5 sm:max-w-2xl">
          {project.stats.map((s) => (
            <div key={s.label}>
              <dt className="font-serif text-3xl leading-none sm:text-4xl">{s.value}</dt>
              <dd className="mt-2 text-xs text-ink-muted">{s.label}</dd>
            </div>
          ))}
        </dl>
      )}

      <ul className="max-w-2xl space-y-3 text-[15px] leading-relaxed text-ink-muted">
        {project.details.map((d) => (
          <li key={d} className="flex gap-3">
            <span className="mt-[0.7em] h-px w-3 shrink-0 bg-ink-faint" aria-hidden />
            <span>{d}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-4 pt-2">
        <ul className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-[11px] tracking-wide text-ink-muted">
          {project.stack.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <div className="flex gap-6 text-sm">
          {project.links.map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="link arrow-link">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

function Contact() {
  return (
    <footer id="contact" className="scroll-mt-24 border-t border-line py-16 sm:py-20">
      <div className="grid gap-8 md:grid-cols-[10rem_1fr] md:gap-12">
        <h2 className="eyebrow md:pt-1">Contact</h2>
        <div>
          <p className="font-serif text-4xl leading-tight sm:text-5xl">
            Open to internships, research, and interesting problems.
          </p>
          <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm">
            {person.emails.map((e) => (
              <li key={e}>
                <a href={`mailto:${e}`} className="link">
                  {e}
                </a>
              </li>
            ))}
            <li>
              <a href={person.linkedin.href} target="_blank" rel="noopener noreferrer" className="link arrow-link">
                {person.linkedin.label}
              </a>
            </li>
          </ul>
          <p className="mt-16 font-mono text-[11px] text-ink-faint">
            © {new Date().getFullYear()} {person.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
