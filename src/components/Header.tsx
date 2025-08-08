import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/projects", label: "Projects" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="border-b sticky top-0 bg-white dark:bg-gray-900 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link to="/" className="text-lg font-bold">Gerard</Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex gap-6">
          {navItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `uppercase text-sm ${isActive ? "font-bold" : "opacity-70 hover:opacity-100"}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden inline-flex items-center justify-center p-2 border rounded hover:bg-gray-100 dark:hover:bg-gray-800"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <nav className="sm:hidden border-t px-4 py-3 space-y-2 bg-white dark:bg-gray-900">
          {navItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block uppercase text-sm ${isActive ? "font-bold" : "opacity-70 hover:opacity-100"}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
