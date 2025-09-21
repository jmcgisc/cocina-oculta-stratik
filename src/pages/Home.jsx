import Hero from "../components/Hero";
import ProductosDestacados from "../components/ProductosDestacados";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import Gallery from "../components/Gallery";
import Recetas from "../components/Recetas";
import Promociones from "../components/Promociones";
import Eventos from "../components/Eventos";
import Mapa from "../components/Mapa";
import SobreNosotros from "../components/SobreNosotros";
import FAQ from "../components/FAQ";
import Contacto from "../components/Contacto";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductosDestacados />
      <HowItWorks />
      <Testimonials />
      <Recetas />
      <Gallery />
      <Promociones />
      <Eventos />
      <Mapa />
      <SobreNosotros />
      <FAQ />
      <Contacto />
    </>
  );
}
