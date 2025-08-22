export type Project = {
    title: string; description: string; tech: string[]; url?: string; repo?: string;
    image?: string;
};
export const projects: Project[] = [
    { title: "Asset Manager", description: "Hexagonal architecture demo.",
        tech: ["Spring Boot","React","PostgreSQL"], repo: "https://github.com/..." },
    { title: "Barber Shop", description: "Pagina web funcional para gestionar reservas de una barbería.",
        tech:["Spring Boot", "PostgreSQL", "React", "Tailwind CSS"], url: "https://barberia-web-hazel.vercel.app/", repo: "https://github.com/..."},
];