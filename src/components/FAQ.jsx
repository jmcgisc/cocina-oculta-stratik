import { useState } from "react";

const faqs = [
  {
    pregunta: "¿Con cuánta anticipación debo hacer mi pedido?",
    respuesta:
      "Para pasteles grandes te recomendamos pedir con al menos 48 horas de anticipación. Para postres individuales, aceptamos pedidos el mismo día según disponibilidad.",
  },
  {
    pregunta: "¿Tienen opciones sin azúcar o especiales?",
    respuesta:
      "Sí, contamos con opciones sin azúcar, veganas y sin gluten. Solo indícalo al hacer tu pedido para adaptarlo a tus necesidades.",
  },
  {
    pregunta: "¿Cómo puedo pagar mi pedido?",
    respuesta:
      "Aceptamos pagos con tarjeta, transferencias y efectivo contra entrega. También puedes pagar directamente vía WhatsApp al confirmar tu orden.",
  },
  {
    pregunta: "¿Cuál es el costo de envío?",
    respuesta:
      "El costo de envío depende de la zona de Querétaro en la que te encuentres. En pedidos mayores a $500, el envío es gratuito.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-pink-50 to-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Encuentra respuestas a las preguntas más comunes sobre nuestros productos y servicios.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none group"
              >
                <span className="text-lg font-semibold text-gray-800 group-hover:text-pink-600 transition-colors pr-4">
                  {faq.pregunta}
                </span>
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-pink-50 flex items-center justify-center group-hover:bg-pink-100 transition-colors">
                  <svg 
                    className={`w-5 h-5 text-pink-600 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === i ? 'max-h-96' : 'max-h-0'}`}>
                <div className="p-6 pt-0 text-gray-600">
                  <div className="w-12 h-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full mb-4"></div>
                  {faq.respuesta}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">¿No encontraste tu respuesta?</h3>
          <p className="text-gray-600 mb-6">Contáctanos directamente y te responderemos a la brevedad</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/5214421234567" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-3 bg-green-500 text-white font-medium rounded-full hover:bg-green-600 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.49"/>
              </svg>
              Escribir por WhatsApp
            </a>
            <a 
              href="mailto:info@mipostreria.com" 
              className="inline-flex items-center px-5 py-3 bg-pink-500 text-white font-medium rounded-full hover:bg-pink-600 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"/>
              </svg>
              Enviar correo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}