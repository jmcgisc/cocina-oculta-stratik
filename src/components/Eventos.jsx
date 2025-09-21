export default function Eventos() {
  const eventos = [
    {
      titulo: "Cumpleaños 🎂",
      desc: "Haz que tu fiesta sea inolvidable con pasteles personalizados y postres temáticos.",
      img: "https://source.unsplash.com/600x400/?birthday-cake",
    },
    {
      titulo: "Bodas 💍",
      desc: "Creamos postres elegantes y mesas dulces para tu día especial.",
      img: "https://source.unsplash.com/600x400/?wedding-cake",
    },
    {
      titulo: "Catering 🍽️",
      desc: "Servicio de postres y platillos para eventos empresariales o familiares.",
      img: "https://source.unsplash.com/600x400/?catering-dessert",
    },
  ];

  return (
    <section id="eventos" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-pink-600 mb-6">Eventos Especiales</h2>
        <p className="text-gray-600 mb-10">
          Endulzamos tus momentos más importantes con repostería artesanal hecha a medida ✨
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {eventos.map((e, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={e.img}
                alt={e.titulo}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-pink-700 mb-2">{e.titulo}</h3>
                <p className="text-gray-600 mb-4">{e.desc}</p>
                <a
                  href="#contacto"
                  className="inline-block px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition"
                >
                  Cotizar ahora
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
