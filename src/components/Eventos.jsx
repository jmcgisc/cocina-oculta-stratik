import { motion } from "framer-motion";

const servicios = [
  {
    titulo: "Mesas de Postres",
    descripcion:
      "Diseñamos mesas dulces únicas para tus eventos, con variedad de postres artesanales que impresionan a tus invitados.",
    imagen: "images/servicios/mesa-postres.jpg",
    tag: "Eventos sociales",
  },
  {
    titulo: "Pasteles Personalizados",
    descripcion:
      "Creamos pasteles exclusivos para bodas, cumpleaños y ocasiones especiales, hechos a tu medida y estilo.",
    imagen: "images/servicios/pasteles-personalizados.jpg",
    tag: "Personalización",
  },
  {
    titulo: "Toppers y Decoración",
    descripcion:
      "Agrega un toque único a tus postres con toppers temáticos y decoraciones creativas para resaltar cada detalle.",
    imagen: "images/servicios/decoracion.jpg",
    tag: "Detalles únicos",
  },
];

export default function Eventos() {
  return (
    <section id="eventos" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-pink-600 mb-6">
          Servicios Especiales
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Endulza tus celebraciones con experiencias únicas diseñadas para
          sorprender y deleitar. ✨
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {servicios.map((s, i) => (
            <motion.div
              key={i}
              className="bg-gray-50 rounded-xl shadow hover:shadow-lg overflow-hidden border border-gray-100 transition"
              whileHover={{ scale: 1.03 }}
            >
              <div className="relative">
                <img
                  src={s.imagen}
                  alt={s.titulo}
                  className="w-full h-56 object-cover"
                />
                <span className="absolute top-4 left-4 bg-pink-600 text-white text-xs px-3 py-1 rounded-full shadow">
                  {s.tag}
                </span>
              </div>
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-pink-700 mb-3">
                  {s.titulo}
                </h3>
                <p className="text-gray-600 mb-4">{s.descripcion}</p>
                <a
                  href="#contacto"
                  className="inline-block px-5 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition"
                >
                  Cotizar
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
