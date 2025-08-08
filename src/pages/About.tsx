// src/pages/About.tsx
export default function About() {
    return (
        <section className="prose dark:prose-invert max-w-3xl">
            <h1>Sobre mí</h1>

            <p className="lead">
                Ingeniero de software (React + Spring) orientado a impacto: productos mantenibles,
                rendimiento y DX. Actualmente en SOC y formándome en pentesting.
            </p>

            <h2>Qué me diferencia</h2>
            <ul>
                <li>Arquitectura limpia (hexagonal) y testing serio (unit + integration + e2e/Cypress).</li>
                <li>Rendimiento front: Vite/Tailwind, recursos mínimos y TTI mejorado.</li>
                <li>Back reactivo con Spring WebFlux cuando aporta valor real.</li>
                <li>CI/CD en Azure/GitHub Actions: builds rápidos y despliegues a Kubernetes.</li>
            </ul>

            <h2>Stack</h2>
            <div className="grid sm:grid-cols-3 gap-3 text-sm">
                <div>
                    <h3 className="m-0">Frontend</h3>
                    <ul className="m-0">
                        <li>React, TypeScript</li>
                        <li>Tailwind / MUI</li>
                        <li>Vite, React Router</li>
                        <li>Cypress</li>
                    </ul>
                </div>
                <div>
                    <h3 className="m-0">Backend</h3>
                    <ul className="m-0">
                        <li>Java 17, Spring Boot 3</li>
                        <li>WebFlux, JPA</li>
                        <li>H2 / PostgreSQL</li>
                    </ul>
                </div>
                <div>
                    <h3 className="m-0">DevOps</h3>
                    <ul className="m-0">
                        <li>Docker, Kubernetes (ACR)</li>
                        <li>GitHub Actions / Azure Pipelines</li>
                    </ul>
                </div>
            </div>

            <h2>Hitos</h2>
            <ul>
                <li><strong>2025</strong> — eJPTv2. Preparando eCPPTv3 (examen antes del 24/11/2025).</li>
                <li><strong>2024</strong> — Migración a Spring Boot 3 y Java 17 en varios servicios.</li>
                <li><strong>2023</strong> — Automatización e2e con Cypress en React + TS.</li>
            </ul>

            <h2>Cómo trabajo</h2>
            <p>
                Requisitos claros, PRs pequeñas, cobertura útil, métricas de performance y despliegues
                repetibles. Comunicación directa y foco en negocio.
            </p>

            <h2>Un poco más</h2>
            <p>
                Vivo en Castellón. Juego al pádel (revés diestro) y me pierden las rutas de naturaleza.
                Cafeína: cafetera italiana.
            </p>

            <div className="mt-6 flex gap-3">
                <a href="/cv.pdf" className="btn btn-primary">Descargar CV</a>
                <a href="mailto:tu-email@correo.com" className="btn">Contactar</a>
            </div>
        </section>
    );
}