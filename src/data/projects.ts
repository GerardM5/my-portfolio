export type Project = {
    title: string; description: string; tech: string[]; url?: string; repo?: string;
    image?: string;
};
export const projects: Project[] = [
    { title: "Asset Manager", description: "Hexagonal architecture demo.",
        tech: ["Spring Boot","React","PostgreSQL"], repo: "https://github.com/..." },
];