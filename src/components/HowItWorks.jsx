export default function HowItWorks() {
  const pasos = [
    { emoji: "🍩", titulo: "1. Elige tu postre", desc: "Explora nuestro menú y selecciona tu favorito." },
    { emoji: "📱", titulo: "2. Haz tu pedido", desc: "Pide fácilmente por WhatsApp o desde nuestra web." },
    { emoji: "🚚", titulo: "3. Recíbelo en casa", desc: "Disfruta tu pedido fresco y directo a tu puerta." },
  ];

  return (
    <section id="como-funciona" className="py-20 bg-gradient-to-br from-pink-50 to-purple-50 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="absolute top-10% left-5% text-6xl">🍩</div>
        <div className="absolute top-30% right-10% text-5xl">🍰</div>
        <div className="absolute bottom-20% left-15% text-4xl">🧁</div>
        <div className="absolute bottom-10% right-5% text-6xl">🎂</div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
          ¿Cómo funciona?
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Pedir tus postres favoritos nunca fue tan fácil. En solo 3 simples pasos, 
          tendrás delicias dulces en tu puerta.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pasos.map((p, i) => (
            <div 
              key={i} 
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden group"
            >
              {/* Efecto de brillo al pasar el mouse */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-500">
                  {p.emoji}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-pink-600 transition-colors duration-300">
                  {p.titulo}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {p.desc}
                </p>
              </div>
              
              {/* Número decorativo de fondo */}
              <div className="absolute -bottom-8 -right-8 text-[120px] font-bold text-gray-100 opacity-60 z-0">
                {i+1}
              </div>
            </div>
          ))}
        </div>
        
        {/* Llamada a la acción */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
          <p className="text-lg font-semibold text-gray-800 mb-4">
            ¿Listo para endulzar tu día?
          </p>
          <button className="bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold py-3 px-8 rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
            Ordenar Ahora
          </button>
        </div>
      </div>
    </section>
  );
}