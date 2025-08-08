import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
    return (
        <BrowserRouter>
            <div className="min-h-screen flex flex-col">
                <header className="border-b">
                    <nav className="container mx-auto flex gap-6 p-4">
                        {["/", "/projects", "/about", "/contact"].map((path, i) => (
                            <NavLink key={path} to={path} className={({isActive}) =>
                                `uppercase text-sm ${isActive ? "font-bold" : "opacity-70"}`
                            }>
                                {["Home","Projects","About","Contact"][i]}
                            </NavLink>
                        ))}
                    </nav>
                </header>
                <main className="container mx-auto flex-1 p-6">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <footer className="border-t p-4 text-center text-sm opacity-70">
                    © {new Date().getFullYear()} Gerard
                </footer>
            </div>
        </BrowserRouter>
    );
}