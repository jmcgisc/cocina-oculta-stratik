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
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl font-bold text-center text-pink-600 mb-12">
          Preguntas Frecuentes
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              >
                <span className="text-lg font-medium text-gray-800">
                  {faq.pregunta}
                </span>
                <span className="ml-4 text-pink-600 text-2xl">
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>
              {openIndex === i && (
                <div className="p-6 pt-0 text-gray-600">{faq.respuesta}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
