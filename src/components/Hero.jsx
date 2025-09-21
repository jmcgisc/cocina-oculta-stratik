export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-pink-200 via-pink-50 to-pink-100 px-6">
      <h2 className="text-5xl md:text-6xl font-extrabold text-pink-700 mb-6 leading-tight">
        Postres & Platillos <br /> a Domicilio
      </h2>
      <p className="text-lg md:text-xl text-gray-700 max-w-2xl mb-8">
        Disfruta la magia de la repostería artesanal con <strong>Cocina Oculta Qro</strong>.  
        Hecho con amor, directo a tu puerta 🚚✨
      </p>
      <a
        href="#menu"
        className="px-8 py-4 bg-pink-600 text-white rounded-xl shadow-lg hover:bg-pink-700 transition text-lg"
      >
        Ver Menú
      </a>
    </section>
  );
}
