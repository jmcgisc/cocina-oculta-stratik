export default function Testimonials() {
  const testimonios = [
    {
      nombre: "Mariana G.",
      texto: "El cheesecake estaba increíble, se notaba que era artesanal y llegó rapidísimo.",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      nombre: "Carlos R.",
      texto: "Pedí un pastel de chocolate para el cumpleaños de mi hijo y fue un éxito total 🎂",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      nombre: "Lucía P.",
      texto: "Las galletas están espectaculares, pedí para un evento y todos me preguntaron dónde las conseguí.",
      img: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ];

  return (
    <section id="testimonios" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-pink-600 mb-12">Lo que dicen nuestros clientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonios.map((t, i) => (
            <div key={i} className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition text-left">
              <div className="flex items-center mb-4">
                <img src={t.img} alt={t.nombre} className="w-12 h-12 rounded-full mr-4" />
                <h3 className="font-semibold text-pink-700">{t.nombre}</h3>
              </div>
              <p className="text-gray-600">“{t.texto}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
