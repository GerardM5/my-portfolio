// src/components/CompanyCarousel.tsx
import { useMemo } from "react";
import type { Company } from "../data/companies";

type Props = {
    items: Company[];
    speedMs?: number; // total scroll duration (más grande = más lento)
};

export default function CompanyCarousel({ items, speedMs = 20000 }: Props) {
    // Duplicamos la lista para crear un loop infinito sin saltos
    const loopItems = useMemo(() => [...items, ...items], [items]);

    return (
        <section aria-label="Empresas con las que he trabajado" className="py-8">
            <h2 className="text-center text-2xl font-semibold mb-4">Empresas con las que he trabajado</h2>

            <div
                className="relative overflow-hidden group"
                // pausa animación si el usuario prefiere reducir movimientos
                style={{ ["--duration" as any]: `${speedMs}ms` }}
            >
                {/* Gradientes sutiles a los lados */}
                <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10" />
                <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10" />

                {/* Pista animada */}
                <ul
                    className="
            flex items-center gap-10
            animate-[scroll_var(--duration)_linear_infinite]
            group-hover:[animation-play-state:paused]
            motion-reduce:animate-none
            px-6
          "
                    // role="list" para screen readers
                    role="list"
                >
                    {loopItems.map((c, i) => (
                        <li key={`${c.name}-${i}`} className="shrink-0">
                            <a
                                href={c.url}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={`Ir al sitio oficial de ${c.name}`}
                                className="block opacity-80 hover:opacity-100 focus:outline-none focus:ring rounded"
                                title={c.name}
                            >
                                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                                <img
                                    src={c.logo}
                                    alt={c.name}
                                    className="h-12 sm:h-14 md:h-16 w-auto object-contain"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}