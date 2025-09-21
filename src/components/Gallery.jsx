export default function Gallery() {
  const fotos = [
    "https://source.unsplash.com/400x400/?cake",
    "https://source.unsplash.com/400x400/?cheesecake",
    "https://source.unsplash.com/400x400/?cookies",
    "https://source.unsplash.com/400x400/?cupcake",
    "https://source.unsplash.com/400x400/?brownies",
    "https://source.unsplash.com/400x400/?dessert",
  ];

  return (
    <section id="galeria" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-pink-600 mb-6">
          Galería de Cocina Oculta
        </h2>
        <p className="text-gray-600 mb-10">
          Mira algunos de nuestros postres y platillos más recientes 🍰✨
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {fotos.map((foto, i) => (
            <a
              key={i}
              href="https://instagram.com/cocinaocultaqro"
              target="_blank"
              rel="noopener noreferrer"
              className="overflow-hidden rounded-xl shadow hover:shadow-lg transition transform hover:scale-105"
            >
              <img
                src={foto}
                alt={`Postre ${i + 1}`}
                className="w-full h-40 object-cover"
              />
            </a>
          ))}
        </div>
        <div className="mt-8">
          <a
            href="https://instagram.com/cocinaocultaqro"
            target="_blank"
            className="inline-block px-6 py-3 bg-pink-600 text-white rounded-lg shadow hover:bg-pink-700 transition"
          >
            Ver más en Instagram 📸
          </a>
        </div>
      </div>
    </section>
  );
}
