export default function Promociones() {
  const promos = [
    {
      titulo: "2x1 en Galletas",
      desc: "Solo este fin de semana 🍪 ¡Endulza tus días con nuestras galletas caseras!",
      img: "images/promociones/galletas.jpg",
      tag: "Promo del mes",
    },
    {
      titulo: "Cheesecake con 15% OFF",
      desc: "Delicioso cheesecake artesanal con descuento especial 🧀",
      img: "images/promociones/pastel-queso.jpg",
      tag: "Oferta limitada",
    },
    {
      titulo: "Pastel de Chocolate Familiar",
      desc: "Perfecto para cumpleaños 🎂 ¡Haz tu pedido ahora y recibe decoración gratis!",
      img: "images/promociones/pastel-chocolate.jpg",
      tag: "Recomendado",
    },
  ];

  return (
    <section id="promociones" className="py-20 bg-gradient-to-r from-pink-50 to-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-pink-600 mb-6">Promociones Especiales</h2>
        <p className="text-gray-600 mb-10">Aprovecha nuestras ofertas limitadas ✨</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {promos.map((p, i) => (
            <div key={i} className="bg-white rounded-xl shadow hover:shadow-lg transition">
              <img
                src={p.img}
                alt={p.titulo}
                className="w-full h-48 object-cover rounded-t-xl"
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
