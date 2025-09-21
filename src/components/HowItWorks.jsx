export default function HowItWorks() {
  const pasos = [
    { 
      emoji: "🍩", 
      titulo: "1. Elige tu postre", 
      desc: "Explora nuestro menú y selecciona tu favorito.",
      icono: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        </svg>
      )
    },
    { 
      emoji: "📱", 
      titulo: "2. Haz tu pedido", 
      desc: "Pide fácilmente por WhatsApp o desde nuestra web.",
      icono: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    { 
      emoji: "🚚", 
      titulo: "3. Recíbelo en casa", 
      desc: "Disfruta tu pedido fresco y directo a tu puerta.",
      icono: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      )
    },
  ];

  return (
    <section id="como-funciona" className="py-16 bg-gradient-to-br from-pink-50 via-white to-purple-50 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-5 text-6xl animate-float">🍩</div>
        <div className="absolute top-1/3 right-10 text-5xl animate-float" style={{animationDelay: '1s'}}>🍰</div>
        <div className="absolute bottom-1/3 left-1/4 text-4xl animate-float" style={{animationDelay: '2s'}}>🧁</div>
        <div className="absolute bottom-10 right-5 text-6xl animate-float" style={{animationDelay: '1.5s'}}>🎂</div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 mb-4">
            ¿Cómo funciona?
          </h2>
          <p className="text-lg text-gray-600">
            Pedir tus postres favoritos nunca fue tan fácil. En solo 3 simples pasos, 
            tendrás delicias dulces en tu puerta.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {pasos.map((p, i) => (
            <div 
              key={i} 
              className="relative group"
            >
              {/* Línea conectora en desktop */}
              {i < pasos.length - 1 && (
                <div className="hidden md:block absolute top-12 left-3/4 w-full h-0.5 bg-gradient-to-r from-pink-300 to-purple-300 z-0"></div>
              )}
              
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 relative z-10 group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-pink-50">
                {/* Número de paso */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-full flex items-center justify-center">
                  {i+1}
                </div>
                
                <div className="relative z-10">
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-500">
                    {p.emoji}
                  </div>
                  
                  <div className="flex justify-center mb-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full flex items-center justify-center text-pink-500">
                      {p.icono}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors duration-300">
                    {p.titulo}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Llamada a la acción */}
        <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto relative overflow-hidden">
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-pink-500 opacity-5 rounded-full"></div>
          <div className="absolute -left-4 -bottom-4 w-20 h-20 bg-purple-500 opacity-5 rounded-full"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              ¿Listo para endulzar tu día?
            </h3>
            <p className="text-gray-600 mb-6">
              Haz tu pedido ahora y recíbelo en la comodidad de tu hogar
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/5214421234567" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition-colors duration-300 shadow hover:shadow-md"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.49"/>
                </svg>
                Ordenar por WhatsApp
              </a>
              <button className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 shadow">
                Ver Menú Completo
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}