export default function ProductosDestacados() {
  const productos = [
    {
      titulo: "Pastel de Chocolate",
      desc: "Suave, húmedo y delicioso 🍫",
      img: "images/productos/pastel-chocolate.jpg",
      tag: "Más vendido",
    },
    {
      titulo: "Cheesecake",
      desc: "Clásico con base crujiente 🧀",
      img: "images/productos/cheesecake.jpg",
      tag: "Favorito de la casa",
    },
    {
      titulo: "Galletas",
      desc: "Recién horneadas y crujientes 🍪",
      img: "images/productos/galletas.jpg",
      tag: "Nuevo lanzamiento",
    },
  ];

  return (
    <section id="productos-destacados" className="py-20 bg-gray-50">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-4xl font-bold text-pink-600 mb-6">Productos Destacados</h2>
        <p className="text-gray-600 mb-10">
          Descubre lo más popular entre nuestros clientes ✨
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {productos.map((p, i) => (
            <div key={i} className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
              <img
                src={p.img}
                alt={p.titulo}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left">
                <span className="inline-block bg-pink-100 text-pink-600 px-3 py-1 text-xs font-medium rounded-full mb-3">
                  {p.tag}
                </span>
                <h3 className="text-xl font-semibold text-pink-700 mb-2">{p.titulo}</h3>
                <p className="text-gray-600 mb-4">{p.desc}</p>
                <a
                  href="#pedidos"
                  className="inline-block px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition"
                >
                  Ordenar ahora
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
