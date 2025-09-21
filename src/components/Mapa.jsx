import { motion } from "framer-motion";
import { useState } from "react";

export default function Mapa() {
  const [selectedZone, setSelectedZone] = useState("centro");

  const deliveryZones = [
    {
      id: "centro",
      name: "Centro Histórico",
      colonies: ["Centro", "Santa Rosa", "San Francisquito", "La Cruz"],
      deliveryTime: "20-30 min"
    },
    {
      id: "norte",
      name: "Zona Norte",
      colonies: ["Juriquilla", "Santa Teresa", "Paseos del Marqués", "Villas del Mesón"],
      deliveryTime: "30-40 min"
    },
    {
      id: "sur",
      name: "Zona Sur",
      colonies: ["El Pueblito", "San Pedro Mártir", "Lomas de Casa Blanca", "Real del Sol"],
      deliveryTime: "25-35 min"
    },
    {
      id: "este",
      name: "Zona Este",
      colonies: ["El Mirador", "Lomas de Querétaro", "Carrillo Puerto", "Azteca"],
      deliveryTime: "35-45 min"
    },
    {
      id: "oeste",
      name: "Zona Oeste",
      colonies: ["Cerrito Colorado", "Prados de la Capilla", "Vista Real", "Lomas de San Pedrito"],
      deliveryTime: "30-40 min"
    }
  ];

  const currentZone = deliveryZones.find(zone => zone.id === selectedZone);

  return (
    <section id="mapa" className="py-20 bg-gradient-to-b from-white to-pink-50 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-pink-200 rounded-full opacity-20 blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-amber-200 rounded-full opacity-20 blur-xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-amber-600">
              Zonas de Entrega
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Llevamos nuestros postres a toda la ciudad de Querétaro 🚚✨
            <br />
            Confirma tu colonia antes de hacer tu pedido.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start max-w-6xl mx-auto">
          {/* Mapa */}
          <motion.div 
            className="rounded-2xl shadow-2xl overflow-hidden border-4 border-white"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3734.674586828947!2d-100.3898885!3d20.5887936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d35a7d93c054d7%3A0x1a5b6de8876d17f5!2sQuer%C3%A9taro!5e0!3m2!1ses!2smx!4v1699999999999!5m2!1ses!2smx"
              width="100%"
              height="450"
              style={{ border: 0, filter: "saturate(1.2) contrast(1.1)" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Zonas de entrega Cocina Oculta Qro"
              className="rounded-xl"
            ></iframe>
          </motion.div>

          {/* Información de zonas */}
          <motion.div 
            className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <svg className="w-6 h-6 text-pink-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Zonas de Entrega
            </h3>

            {/* Selector de zonas */}
            <div className="mb-6">
              <label className="block text-gray-700 mb-2 font-medium">Selecciona tu zona:</label>
              <select 
                value={selectedZone}
                onChange={(e) => setSelectedZone(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-400 focus:border-transparent outline-none transition-all duration-300"
              >
                {deliveryZones.map(zone => (
                  <option key={zone.id} value={zone.id}>{zone.name}</option>
                ))}
              </select>
            </div>

            {/* Información de la zona seleccionada */}
            {currentZone && (
              <motion.div 
                className="bg-pink-50 rounded-xl p-5 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-bold text-pink-700">{currentZone.name}</h4>
                  <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                    {currentZone.deliveryTime}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-3">Colonias incluidas:</p>
                <div className="grid grid-cols-2 gap-2">
                  {currentZone.colonies.map((colony, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-pink-400 rounded-full mr-2"></div>
                      <span className="text-sm text-gray-700">{colony}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Información adicional */}
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Horario de entrega</p>
                  <p className="text-gray-600">Todos los días de 10:00 AM a 9:00 PM</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Envío gratis</p>
                  <p className="text-gray-600">En pedidos mayores a $300 en zona centro</p>
                </div>
              </div>
            </div>

            {/* Mensaje de contacto */}
            <div className="mt-8 p-4 bg-gray-50 rounded-xl border border-gray-200">
              <p className="text-gray-700 text-sm">
                <strong>¿No encuentras tu colonia?</strong> Contáctanos para confirmar disponibilidad 📱
              </p>
              <a 
                href="https://wa.me/5214421234567?text=Hola,%20quiero%20confirmar%20si%20hacen%20envíos%20a%20mi%20colonia"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-3 px-4 py-2 bg-green-500 text-white rounded-lg text-sm font-medium hover:bg-green-600 transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Contactar por WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}