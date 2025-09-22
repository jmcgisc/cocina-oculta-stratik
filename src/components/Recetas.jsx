export default function Recetas() {
  const recetas = [
    {
      titulo: "Brownies Caseros",
      desc: "Receta fácil para brownies húmedos y chocolatísimos 🍫",
      img: "images/recetas/brownie.jpg",
    },
    {
      titulo: "Cheesecake sin horno",
      desc: "Suave, cremoso y con base crujiente 🧀",
      img: "images/recetas/cheesecake.jpg",
    },
    {
      titulo: "Galletas de avena",
      desc: "Deliciosas y saludables con un toque de canela 🍪",
      img: "images/recetas/galletas.jpg",
    },
  ];

  return (
    <section id="recetas" className="py-20 bg-gradient-to-b from-pink-50 to-white">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 mb-4">
            Recetas Caseras
          </h2>
          <p className="text-lg text-gray-600">
            Aprende a preparar algunos de nuestros postres favoritos con estas recetas paso a paso ✨
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recetas.map((r, i) => (
            <div key={i} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src={r.img} 
                  alt={r.titulo} 
                  className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-4">
                  <span className="text-white font-medium">Ver receta completa</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-pink-600 transition-colors">
                  {r.titulo}
                </h3>
                <p className="text-gray-600 mb-4">{r.desc}</p>
                
                <div className="flex justify-between items-center mt-6">
                  <div className="flex items-center text-yellow-500">
                    {/* Estrellas de valoración */}
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                    <span className="ml-2 text-sm text-gray-500">(48)</span>
                  </div>
                  
                  <div className="flex items-center text-gray-500">
                    <svg className="w-5 h-5 fill-current mr-1" viewBox="0 0 24 24">
                      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                    </svg>
                    <span className="text-sm">25 min</span>
                  </div>
                </div>
                
                <a 
                  href="#contacto" 
                  className="mt-6 inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium text-pink-600 bg-pink-50 hover:bg-pink-100 transition-colors group-hover:bg-pink-600 group-hover:text-white"
                >
                  Ver receta completa
                  <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">¿Quieres más recetas?</h3>
          <p className="text-gray-600 mb-6">Suscríbete a nuestro newsletter y recibe recetas exclusivas cada semana</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input 
              type="email" 
              placeholder="Tu correo electrónico" 
              className="px-5 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-medium rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
              Suscribirme
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}