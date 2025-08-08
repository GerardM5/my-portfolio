import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  message: string;
  // honeypot field to reduce spam bots
  company?: string;
};

type SubmitStatus =
  | { type: "idle" }
  | { type: "submitting" }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

const initialState: FormState = { name: "", email: "", message: "", company: "" };

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<SubmitStatus>({ type: "idle" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (data: FormState) => {
    const e: Record<string, string> = {};
    if (!data.name.trim()) e.name = "Introduce tu nombre";
    if (!data.email.trim()) e.email = "Introduce tu email";
    else if (!/^\S+@\S+\.\S+$/.test(data.email)) e.email = "Email no válido";
    if (!data.message.trim()) e.message = "Cuéntame en 3-4 líneas qué necesitas";
    return e;
  };

  const onChange = (
    ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = ev.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const onSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    // If the honeypot is filled, silently succeed to avoid giving hints to bots
    if (form.company && form.company.trim().length > 0) {
      setStatus({ type: "success", message: "Gracias, te respondo en breve." });
      setForm(initialState);
      return;
    }

    const v = validate(form);
    if (Object.keys(v).length > 0) {
      setErrors(v);
      return;
    }

    setStatus({ type: "submitting" });

    try {
      // Replace this with your real endpoint or a provider like Formspree/EmailJS
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
      });

      if (!res.ok) throw new Error(`Request failed with ${res.status}`);

      setStatus({ type: "success", message: "¡Mensaje enviado! Te responderé muy pronto." });
      setForm(initialState);
    } catch (err) {
      console.error(err);
      setStatus({
        type: "error",
        message:
          "No he podido enviar el mensaje desde la web. Puedes usar el botón de email directo más abajo.",
      });
    }
  };

  const mailtoHref = () => {
    const subject = encodeURIComponent("Contacto desde mi portfolio");
    const body = encodeURIComponent(`Hola Gerard,\n\n${form.message}\n\n— ${form.name} (${form.email})`);
    return `mailto:tu-email@correo.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="max-w-2xl mx-auto">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold">Contacto</h1>
        <p className="mt-2 opacity-80">
          ¿Tienes un proyecto o una idea? Escríbeme y te respondo en menos de 24 h laborables.
        </p>
      </header>

      <form onSubmit={onSubmit} className="grid gap-5" noValidate>
        {/* Honeypot (hidden to users) */}
        <div className="hidden">
          <label htmlFor="company">Company</label>
          <input id="company" name="company" value={form.company} onChange={onChange} />
        </div>

        <div>
          <label htmlFor="name" className="block text-sm font-medium">Nombre</label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={onChange}
            className={`mt-1 w-full rounded-md border p-2 outline-none focus:ring ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Tu nombre"
          />
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={onChange}
            className={`mt-1 w-full rounded-md border p-2 outline-none focus:ring ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="tu@email.com"
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium">Mensaje</label>
          <textarea
            id="message"
            name="message"
            rows={6}
            value={form.message}
            onChange={onChange}
            className={`mt-1 w-full rounded-md border p-2 outline-none focus:ring ${
              errors.message ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Cuéntame brevemente qué necesitas…"
          />
          {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={status.type === "submitting"}
            className="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium shadow-sm hover:opacity-90 disabled:opacity-60"
          >
            {status.type === "submitting" ? "Enviando…" : "Enviar"}
          </button>

          <a
            href={mailtoHref()}
            className="text-sm underline"
            onClick={(e) => {
              // If required fields missing, block accidental empty emails
              if (!form.name || !form.email || !form.message) {
                e.preventDefault();
                setErrors((prev) => ({ ...prev, message: "Completa el formulario antes de enviar por email." }));
              }
            }}
          >
            O envía un email directo
          </a>
        </div>

        {status.type === "success" && (
          <p role="status" className="text-green-700 text-sm">{status.message}</p>
        )}
        {status.type === "error" && (
          <p role="status" className="text-red-700 text-sm">{status.message}</p>
        )}
      </form>

      {/* JSON-LD for contact info (SEO) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Gerard",
            email: "mailto:tu-email@correo.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Castellón, España",
            },
            url: typeof window !== "undefined" ? window.location.origin : undefined,
          }),
        }}
      />
    </section>
  );
}