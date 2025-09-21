export default function Recetas() {
  const recetas = [
    {
      titulo: "Brownies Caseros",
      desc: "Receta fácil para brownies húmedos y chocolatísimos 🍫",
      img: "https://source.unsplash.com/400x300/?brownies",
    },
    {
      titulo: "Cheesecake sin horno",
      desc: "Suave, cremoso y con base crujiente 🧀",
      img: "https://source.unsplash.com/400x300/?cheesecake-dessert",
    },
    {
      titulo: "Galletas de avena",
      desc: "Deliciosas y saludables con un toque de canela 🍪",
      img: "https://source.unsplash.com/400x300/?oatmeal-cookies",
    },
  ];

  return (
    <section id="recetas" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-pink-600 mb-6">Recetas Caseras</h2>
        <p className="text-gray-600 mb-10">
          Aprende a preparar algunos de nuestros postres favoritos ✨
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recetas.map((r, i) => (
            <div key={i} className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
              <img src={r.img} alt={r.titulo} className="w-full h-48 object-cover rounded-t-xl" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-pink-700 mb-2">{r.titulo}</h3>
                <p className="text-gray-600">{r.desc}</p>
                <a href="#contacto" className="inline-block mt-4 text-pink-600 font-medium hover:underline">
                  Ver receta →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
