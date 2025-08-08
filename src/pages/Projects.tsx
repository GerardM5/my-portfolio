import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
    return (
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
                <ProjectCard
                    key={p.title}
                    title={p.title}
                    description={p.description}
                    tech={p.tech}
                    repo={p.repo}
                    url={p.url}
                    image={p.image}
                />
            ))}
        </section>
    );
}