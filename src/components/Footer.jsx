import { FaInstagram, FaFacebook, FaWhatsapp, FaHeart, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300 py-16 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-4xl">🍰</div>
        <div className="absolute top-1/3 right-20 text-3xl">🍩</div>
        <div className="absolute bottom-20 left-1/4 text-4xl">🧁</div>
        <div className="absolute bottom-10 right-10 text-3xl">🎂</div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          
          {/* Logo y descripción */}
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Cocina Oculta Qro
            </h2>
            <p className="text-gray-400 mb-6 max-w-md">
              Repostería artesanal hecha con amor ❤️  
              Postres y platillos a pedido en Querétaro. 
              Endulzamos tus momentos especiales con el mejor sabor.
            </p>
            
            {/* Información de contacto */}
            <div className="space-y-3">
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-pink-400 mr-3" />
                <span className="text-gray-400">Querétaro, México</span>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-pink-400 mr-3" />
                <span className="text-gray-400">+52 442 123 4567</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-pink-400 mr-3" />
                <span className="text-gray-400">hola@cocinaoculta.com</span>
              </div>
            </div>
          </div>

          {/* Links rápidos */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 pb-2 border-b border-pink-500/30 inline-block">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Menú", href: "#menu" },
                { name: "Promociones", href: "#promociones" },
                { name: "Eventos", href: "#eventos" },
                { name: "Galería", href: "#galeria" },
                { name: "FAQ", href: "#faq" },
                { name: "Contacto", href: "#contacto" },
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href} 
                    className="text-gray-400 hover:text-pink-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-pink-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Redes sociales y horario */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 pb-2 border-b border-pink-500/30 inline-block">
              Síguenos
            </h3>
            <div className="flex space-x-4 mb-8">
              {[
                { icon: <FaInstagram />, href: "https://instagram.com/cocinaocultaqro", color: "hover:text-pink-400" },
                { icon: <FaFacebook />, href: "https://facebook.com", color: "hover:text-blue-400" },
                { icon: <FaWhatsapp />, href: "https://wa.me/5214421234567", color: "hover:text-green-400" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 text-2xl p-3 bg-gray-800 rounded-full transition-all duration-300 ${social.color} hover:bg-gray-700 hover:scale-110`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            
            <div>
              <h4 className="text-md font-medium text-white mb-3">Horario de atención</h4>
              <p className="text-gray-400 text-sm">Lunes a Sábado: 9:00 - 20:00</p>
              <p className="text-gray-400 text-sm">Domingo: 10:00 - 18:00</p>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-gray-800/50 rounded-2xl p-6 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0 md:mr-6">
              <h3 className="text-xl font-bold text-white mb-2">¡No te pierdas nuestras novedades!</h3>
              <p className="text-gray-400">Suscríbete para recibir promociones y nuevas recetas.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <input 
                type="email" 
                placeholder="Tu correo electrónico" 
                className="px-4 py-3 bg-gray-700 border border-gray-600 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium rounded-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5">
                Suscribirme
              </button>
            </div>
          </div>
        </div>

        {/* Línea inferior */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Cocina Oculta Qro. Todos los derechos reservados.
          </div>
          <div className="flex items-center text-gray-500 text-sm">
            Hecho con <FaHeart className="text-pink-500 mx-1" /> en Querétaro
          </div>

        </div>

        {/* Derechos reservados y Powered by */}
          <div className="mt-6 text-center text-xs text-gray-400 dark:text-gray-600">
            <p className="mt-1 text-[11px] italic text-indigo-200"> Powered by 
              <a href="https://stratik.com.mx" target="_blank" rel="noopener noreferrer" className="font-semibold text-indigo-500 transition"> STRATIK </a>
            </p>
          </div>
      </div>
    </footer>
  );
}
