export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-20">
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold">Cocina Oculta Qro 🍰</p>
        <p className="mt-2 text-gray-400">Pedidos al WhatsApp 📱 +52 442 356 8118</p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="https://instagram.com/cocinaocultaqro" target="_blank" className="hover:text-pink-400">Instagram</a>
          <a href="#menu" className="hover:text-pink-400">Menú</a>
          <a href="#contacto" className="hover:text-pink-400">Contacto</a>
        </div>
        <p className="mt-6 text-sm text-gray-500">
          © {new Date().getFullYear()} Cocina Oculta Qro. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
