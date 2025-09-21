import Hero from "../components/Hero";
import CardProducto from "../components/CardProducto";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import Gallery from "../components/Gallery";
import Recetas from "../components/Recetas";
import Promociones from "../components/Promociones";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Menú */}
      {/* ... */}

      {/* Cómo funciona */}
      <HowItWorks />

      {/* Opiniones */}
      <Testimonials />

      {/* Recetas */}
      <Recetas />

      {/* Galería */}
      <Gallery />

      {/* Promociones */}
      <Promociones />
    </>
  );
}
