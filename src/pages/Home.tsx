

import { useEffect } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function Home() {
  // Basic SEO without extra deps
  useEffect(() => {
    const prev = document.title;
    document.title = "Gerard — Software Engineer (React + Spring)";
    return () => { document.title = prev; };
  }, []);

  const topProjects = projects.slice(0, 3);

  return (
    <section className="space-y-12">
      {/* HERO */}
      <header className="text-center mt-6">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Construyo productos con <span className="opacity-90">React</span> &amp; <span className="opacity-90">Spring</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg opacity-80">
          Ingeniero de software orientado a impacto: frontend sólido, backend mantenible y despliegues sin drama.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Link
            to="/projects"
            className="rounded-md border px-4 py-2 text-sm font-medium shadow-sm hover:opacity-90"
          >
            Ver proyectos
          </Link>
          <Link
            to="/contact"
            className="rounded-md border px-4 py-2 text-sm font-medium shadow-sm hover:opacity-90"
          >
            Hablemos
          </Link>
        </div>
      </header>

      {/* QUICK FACTS / TAGS */}
      <div className="flex flex-wrap justify-center gap-2 text-xs">
        {["React","TypeScript","Tailwind","Vite","Spring Boot 3","WebFlux","Docker","Kubernetes","Cypress"].map((t) => (
          <span key={t} className="border rounded-full px-3 py-1 opacity-80">{t}</span>
        ))}
      </div>

      {/* RECENT PROJECTS */}
      <section className="max-w-5xl mx-auto">
        <div className="flex items-end justify-between mb-4">
          <h2 className="text-2xl font-semibold">Proyectos recientes</h2>
          <Link to="/projects" className="text-sm underline">Ver todos</Link>
        </div>

        {topProjects.length === 0 ? (
          <p className="opacity-70">Aún no hay proyectos publicados. Vuelve pronto 👀</p>
        ) : (
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {topProjects.map((p) => (
              <li key={p.title} className="border rounded-2xl p-4 shadow-sm flex flex-col">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm opacity-80">{p.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tech?.map((t) => (
                      <span key={t} className="text-[11px] border rounded px-2 py-0.5">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="mt-4 flex gap-4 text-sm">
                  {p.repo && (
                    <a className="underline" href={p.repo} target="_blank" rel="noreferrer">Repo</a>
                  )}
                  {p.url && (
                    <a className="underline" href={p.url} target="_blank" rel="noreferrer">Live</a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* CALL TO ACTION */}
      <section className="text-center">
        <p className="opacity-80 max-w-xl mx-auto">
          ¿Buscas a alguien que entregue rápido sin sacrificar calidad? Puedo ayudarte con frontend en React, backend en Spring y
          pipelines de CI/CD.
        </p>
        <div className="mt-4 flex justify-center gap-3">
          <Link to="/contact" className="rounded-md border px-4 py-2 text-sm font-medium shadow-sm hover:opacity-90">
            Cuéntame tu idea
          </Link>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-md border px-4 py-2 text-sm font-medium shadow-sm hover:opacity-90"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* JSON-LD minimal for the organization/person */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Gerard",
            jobTitle: "Software Engineer",
            knowsAbout: [
              "React","TypeScript","Spring Boot","WebFlux","Docker","Kubernetes","Cypress"
            ],
          }),
        }}
      />
    </section>
  );
}