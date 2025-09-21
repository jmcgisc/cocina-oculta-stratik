import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  
  const heroImages = [
    "/api/placeholder/800/1000?text=Postres+Gourmet",
    "/api/placeholder/800/1000?text=Repostería+Artesanal",
    "/api/placeholder/800/1000?text=Delicias+Dulces"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (

    
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

            {/* Fondo con gradiente y patrón sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-300 via-pink-50 to-amber-100 opacity-95 z-0"></div>
      
      {/* Elementos decorativos */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-pink-200 rounded-full opacity-30 blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-16 w-32 h-32 bg-amber-200 rounded-full opacity-40 blur-xl animate-pulse delay-1000"></div>
      
      {/* Fondos con transición */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "brightness(0.7)"
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-pink-900/20 to-amber-900/20"></div>
      </div>

      {/* Elementos decorativos flotantes */}
      <div className="absolute top-1/4 left-10 animate-float">
        <div className="w-16 h-16 bg-pink-500/20 rounded-full blur-xl"></div>
      </div>
      <div className="absolute bottom-1/3 right-20 animate-float delay-1000">
        <div className="w-20 h-20 bg-amber-400/20 rounded-full blur-xl"></div>
      </div>
      <div className="absolute top-1/2 left-1/4 animate-float delay-2000">
        <div className="w-12 h-12 bg-red-400/20 rounded-full blur-xl"></div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge promocional */}
          <motion.div
            className="inline-flex items-center bg-white/10 backdrop-blur-md rounded-full px-6 py-3 mb-8 border border-white/20 shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="w-3 h-3 bg-pink-500 rounded-full mr-3 animate-pulse"></span>
            <span className="text-white font-medium">🚚 Envío gratis en tu primer pedido</span>
          </motion.div>

          {/* Título principal */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="block">Sabores que</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-amber-300">
              cautivan
            </span>
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Descubre la experiencia <strong>Cocina Oculta Qro</strong> - 
            repostería artesanal de alta calidad entregada directamente en tu puerta
          </motion.p>

          {/* Botones de acción */}
          <motion.div
            className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <motion.a
              href="#menu"
              className="group relative px-8 py-4 bg-gradient-to-r from-pink-600 to-pink-500 text-white rounded-xl overflow-hidden shadow-2xl hover:shadow-pink-500/30 transition-all duration-300 text-lg font-semibold flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center">
                Explorar Menú
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-700 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.a>

            <motion.a
              href="#contacto"
              className="group relative px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-xl border-2 border-white/20 hover:border-white/40 shadow-lg hover:shadow-white/20 transition-all duration-300 text-lg font-medium flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center">
                <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Pedir Ahora
              </span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Tarjetas de características */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          {[
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              title: "Entrega Rápida",
              description: "Recibe en 30-45 minutos"
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 极速快3 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              ),
              title: "Ingredientes Premium",
              description: "Solo lo mejor para ti"
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              ),
              title: "Hecho con Amor",
              description: "Cada postre es una creación única"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:translate-y-2"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
            >
              <div className="text-pink-300 mb-4">{feature.icon}</div>
              <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Indicadores de imagen */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex space-x-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImage ? "bg-white" : "bg-white/30"
            }`}
            onClick={() => setCurrentImage(index)}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Flecha de scroll */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <div className="animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>

      {/* Estilos de animación */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}