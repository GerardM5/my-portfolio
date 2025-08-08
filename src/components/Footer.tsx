

import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t mt-12 py-6 text-sm">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 px-4">
        <p className="opacity-70">© {year} Gerard</p>

        <nav className="flex flex-wrap justify-center gap-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/projects" className="hover:underline">Projects</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </nav>

        <div className="flex gap-4">
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}