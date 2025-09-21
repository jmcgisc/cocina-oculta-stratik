import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cerrar el menú móvil al cambiar de ruta
  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-lg py-2" : "bg-white/95 backdrop-blur-sm py-4"}`}>
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        {/* Logo */}
        <Link 
          to="/" 
          className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-pink-400 bg-clip-text text-transparent hover:from-pink-700 hover:to-pink-500 transition-all duration-300"
        >
          Cocina Oculta
        </Link>

        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li>
            <Link 
              to="/#menu" 
              className="relative group py-2 hover:text-pink-500 transition-colors duration-300"
            >
              Menú
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link 
              to="/recetas" 
              className="relative group py-2 hover:text-pink-500 transition-colors duration-300"
            >
              Recetas
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <a 
              href="#pedidos" 
              className="relative group py-2 hover:text-pink-500 transition-colors duration-300"
            >
              Pedidos
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a 
              href="#eventos" 
              className="relative group py-2 hover:text-pink-500 transition-colors duration-300"
            >
              Eventos
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a 
              href="#contacto" 
              className="relative group py-2 hover:text-pink-500 transition-colors duration-300"
            >
              Contacto
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
        </ul>

        {/* Botón de acción principal */}
        <div className="hidden md:block">
          <button className="bg-pink-600 hover:bg-pink-700 text-white font-medium px-5 py-2 rounded-full transition-all duration-300 shadow hover:shadow-md transform hover:-translate-y-0.5">
            Reservar Mesa
          </button>
        </div>

        {/* Botón Móvil */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 relative focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          <span
            className={`bg-pink-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              open ? "rotate-45 translate-y-1" : "-translate-y-0.5"
            }`}
          ></span>
          <span
            className={`bg-pink-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-1.5 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`bg-pink-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              open ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
            }`}
          ></span>
        </button>
      </div>

      {/* Menú Mobile */}
      <div
        className={`md:hidden bg-white shadow-lg transition-all duration-500 ease-in-out ${
          open ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 overflow-hidden py-0"
        }`}
      >
        <div className="container mx-auto px-4 space-y-4">
          <Link 
            to="/#menu" 
            className="block py-3 px-4 rounded-lg hover:bg-pink-50 transition-colors duration-300 font-medium text-gray-700"
            onClick={() => setOpen(false)}
          >
            Menú
          </Link>
          <Link 
            to="/recetas" 
            className="block py-3 px-4 rounded-lg hover:bg-pink-50 transition-colors duration-300 font-medium text-gray-700"
            onClick={() => setOpen(false)}
          >
            Recetas
          </Link>
          <a 
            href="#pedidos" 
            className="block py-3 px-4 rounded-lg hover:bg-pink-50 transition-colors duration-300 font-medium text-gray-700"
            onClick={() => setOpen(false)}
          >
            Pedidos
          </a>
          <a 
            href="#eventos" 
            className="block py-3 px-4 rounded-lg hover:bg-pink-50 transition-colors duration-300 font-medium text-gray-700"
            onClick={() => setOpen(false)}
          >
            Eventos
          </a>
          <a 
            href="#contacto" 
            className="block py-3 px-4 rounded-lg hover:bg-pink-50 transition-colors duration-300 font-medium text-gray-700"
            onClick={() => setOpen(false)}
          >
            Contacto
          </a>
          <button className="w-full bg-pink-600 hover:bg-pink-700 text-white font-medium px-5 py-3 rounded-full transition-colors duration-300 mt-2">
            Reservar Mesa
          </button>
        </div>
      </div>
    </nav>
  );
}