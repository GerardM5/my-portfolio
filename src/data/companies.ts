// src/data/companies.ts
export type Company = {
    name: string;
    url: string;      // official site
    logo: string;     // path to /public/logos/*.svg|png
};
export const companies: Company[] = [
    { name: "SC Trade Technologies", url: "https://www.sctrade.es", logo: "/logos/sctrade.svg" },
    { name: "Accenture", url: "https://www.accenture.com", logo: "/logos/accenture.svg" },
    { name: "Generalitat de Catalunya", url: "https://web.gencat.cat", logo: "/logos/gencat.svg" },
    { name: "NTT DATA", url: "https://www.nttdata.com", logo: "/logos/nttdata.svg" },
    { name: "IFCO", url: "https://www.ifco.com", logo: "/logos/ifco.svg" },
];