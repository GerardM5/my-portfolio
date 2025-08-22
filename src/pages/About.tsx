// src/pages/About.tsx
export default function About() {
    return (
        <section className="max-w-3xl mx-auto px-4 py-10">
            <div className="space-y-8">
                <header className="text-center">
                    <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Sobre mí</h1>
                    <p className="mt-3 text-base sm:text-lg opacity-80">
                        Desarrollo y optimizo productos web con React + Spring para que entregues más rápido, con menos bugs y mejor rendimiento. Me enfoco en ROI: entregables claros, ciclos cortos y métricas que mejoran.
                    </p>
                </header>

                <div className="border rounded-2xl p-5 shadow-sm bg-white/60 dark:bg-gray-900/60">
                    <h2 className="text-xl font-semibold">Qué me diferencia</h2>
                    <ul className="list-disc pl-5 mt-3 space-y-2">
                      <li className="pl-1"><strong>Enfoque a negocio</strong>: priorizo lo que mueve el KPI (MRR, conversión, tiempo‑a‑mercado).</li>
                      <li className="pl-1"><strong>Calidad sin fricción</strong>: tests útiles (unit + integration + e2e/Cypress) y PRs pequeñas → menos regresiones.</li>
                      <li className="pl-1"><strong>Rendimiento real</strong>: budgets de performance y optimización de carga (Vite/Tailwind, lazy, code‑split).</li>
                      <li className="pl-1"><strong>Escalable y mantenible</strong>: arquitectura limpia (hexagonal), contratos bien definidos y CI/CD estable.</li>
                    </ul>
                </div>

                <div className="border rounded-2xl p-5 shadow-sm bg-white/60 dark:bg-gray-900/60">
                    <h2 className="text-xl font-semibold">Stack</h2>
                    <div className="grid sm:grid-cols-3 gap-4 text-sm">
                        <div>
                            <h3 className="font-medium m-0">Frontend</h3>
                            <ul className="m-0 space-y-1">
                                <li>React, TypeScript</li>
                                <li>Tailwind / MUI</li>
                                <li>Vite, React Router</li>
                                <li>Cypress</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-medium m-0">Backend</h3>
                            <ul className="m-0 space-y-1">
                                <li>Java 17, Spring Boot 3</li>
                                <li>WebFlux, JPA</li>
                                <li>H2 / PostgreSQL</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-medium m-0">DevOps</h3>
                            <ul className="m-0 space-y-1">
                                <li>Docker, Kubernetes (ACR)</li>
                                <li>GitHub Actions / Azure Pipelines</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Servicios orientados a resultados para potenciales clientes */}
                <div className="border rounded-2xl p-5 shadow-sm bg-white/60 dark:bg-gray-900/60">
                  <h2 className="text-xl font-semibold">Servicios que ofrezco</h2>
                  <ul className="list-disc pl-5 mt-3 space-y-2 text-sm">
                    <li><strong>Frontend React/TypeScript</strong>: desarrollo de features, diseño de componentes, accesibilidad y estado.</li>
                    <li><strong>Backend Spring Boot</strong>: APIs REST/Reactive (WebFlux), seguridad básica, persistencia (JPA), documentación (OpenAPI).</li>
                    <li><strong>Integración y automatización</strong>: pipelines en GitHub Actions/Azure, Docker y despliegue a Kubernetes.</li>
                    <li><strong>Testing end‑to‑end</strong>: Cypress + fixtures/mocks para detectar fallos antes de producción.</li>
                    <li><strong>Performance & DX</strong>: auditorías rápidas (Lighthouse, Web Vitals) y mejoras con impacto.</li>
                    <li><strong>Consultoría puntual</strong>: sesiones de 60–120 min para desbloquear arquitectura o bugs críticos.</li>
                  </ul>
                </div>

                <div className="border rounded-2xl p-5 shadow-sm bg-white/60 dark:bg-gray-900/60">
                    <h2 className="text-xl font-semibold">Hitos</h2>
                    <ul className="mt-3 space-y-2">
                      <li><strong>2025</strong> — Desarrollo de soluciones web con React + Spring, optimización de rendimiento y foco en ROI.</li>
                      <li><strong>2024</strong> — Migración de proyectos a Spring Boot 3 y Java 17, modernización de pipelines y despliegue en Kubernetes.</li>
                      <li><strong>2023</strong> — Automatización e2e con Cypress en proyectos React + TypeScript, mejora de calidad de entregables.</li>
                      <li><strong>2022</strong> — Primeros proyectos profesionales en consultoría tecnológica, aplicando buenas prácticas y entrega continua.</li>
                    </ul>
                </div>

                <div className="border rounded-2xl p-5 shadow-sm bg-white/60 dark:bg-gray-900/60">
                    <h2 className="text-xl font-semibold">Cómo trabajo</h2>
                    <p className="opacity-90">
                        Requisitos claros, PRs pequeñas, cobertura útil, métricas de performance y despliegues
                        repetibles. Comunicación directa y foco en negocio.
                    </p>
                </div>

                <div className="border rounded-2xl p-5 shadow-sm bg-white/60 dark:bg-gray-900/60">
                    <h2 className="text-xl font-semibold">Un poco más</h2>
                    <p>
                        Vivo en Castellón. Juego al pádel (revés diestro) y me pierden las rutas de naturaleza.
                        Cafeína: cafetera italiana.
                    </p>
                </div>
            </div>

            <footer className="pt-2">
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href="/cv.pdf" className="btn btn-primary">Descargar CV</a>
                  <a href="mailto:gerardmartinezalcocer@gmail.com" className="btn">Contactar por email</a>
                  <a href="https://www.linkedin.com/in/gerard-martinez-alcocer/" target="_blank" rel="noreferrer" className="btn">LinkedIn</a>
                </div>
            </footer>
        </section>
    );
}