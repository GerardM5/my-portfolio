
export type ProjectCardProps = {
  title: string;
  description: string;
  tech?: string[];
  url?: string; // Live/demo URL
  repo?: string; // Repository URL
  image?: string; // Optional cover image
  className?: string;
};

export default function ProjectCard({
  title,
  description,
  tech = [],
  url,
  repo,
  image,
  className = "",
}: ProjectCardProps) {
  return (
    <article
      className={`border rounded-2xl shadow-sm overflow-hidden flex flex-col ${className}`}
    >
      {image && (
        <div className="aspect-video w-full overflow-hidden bg-gray-100">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt={`Preview de ${title}`}
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
      )}

      <div className="p-4 flex-1 flex flex-col">
        <header>
          <h3 className="text-lg font-semibold leading-snug">{title}</h3>
          <p className="mt-2 text-sm opacity-80">{description}</p>
        </header>

        {tech?.length > 0 && (
          <ul className="mt-3 flex flex-wrap gap-2">
            {tech.map((t) => (
              <li key={t} className="text-[11px] border rounded px-2 py-0.5">
                {t}
              </li>
            ))}
          </ul>
        )}

        <footer className="mt-4 flex gap-4 text-sm">
          {repo && (
            <a
              className="underline"
              href={repo}
              target="_blank"
              rel="noreferrer"
              aria-label={`Abrir repositorio de ${title}`}
            >
              Repo
            </a>
          )}
          {url && (
            <a
              className="underline"
              href={url}
              target="_blank"
              rel="noreferrer"
              aria-label={`Abrir demo de ${title}`}
            >
              Live
            </a>
          )}
        </footer>
      </div>
    </article>
  );
}