export default function HowItWorks() {
  const pasos = [
    { emoji: "🍩", titulo: "1. Elige tu postre", desc: "Explora nuestro menú y selecciona tu favorito." },
    { emoji: "📱", titulo: "2. Haz tu pedido", desc: "Pide fácilmente por WhatsApp o desde nuestra web." },
    { emoji: "🚚", titulo: "3. Recíbelo en casa", desc: "Disfruta tu pedido fresco y directo a tu puerta." },
  ];

  return (
    <section id="como-funciona" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-pink-600 mb-12">¿Cómo funciona?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {pasos.map((p, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
              <div className="text-5xl mb-4">{p.emoji}</div>
              <h3 className="text-xl font-semibold text-pink-700 mb-2">{p.titulo}</h3>
              <p className="text-gray-600">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
