import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Video de fondo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 hidden md:block"
      >
        <source src="/video-hero.mp4" type="video/mp4" />
        Tu navegador no soporta video HTML5.
      </video>

      {/* Versión móvil (más ligera) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 md:hidden"
      >
        <source src="/video-hero-mobile.mp4" type="video/mp4" />
        Tu navegador no soporta video HTML5.
      </video>

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Contenido principal */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center bg-white/10 backdrop-blur-md rounded-full px-6 py-3 mb-8 border border-white/20 shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="w-3 h-3 bg-pink-500 rounded-full mr-3 animate-pulse"></span>
            <span className="text-white font-medium">
              🚚 Envío gratis en tu primer pedido
            </span>
          </motion.div>

          {/* Título */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white drop-shadow-lg"
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
            Descubre la experiencia <strong>Cocina Oculta Qro</strong> –  
            repostería artesanal de alta calidad entregada directamente en tu puerta
          </motion.p>

          {/* Botones */}
          <motion.div
            className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <motion.a
              href="#menu"
              className="px-8 py-4 bg-gradient-to-r from-pink-600 to-pink-500 text-white rounded-xl shadow-2xl hover:shadow-pink-500/30 transition text-lg font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explorar Menú →
            </motion.a>

            <motion.a
              href="#contacto"
              className="px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-xl border-2 border-white/20 hover:border-white/40 shadow-lg hover:shadow-white/20 transition text-lg font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Pedir Ahora
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
