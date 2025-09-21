import recetas from "../data/recetas";
import CardReceta from "../components/CardReceta";

export default function RecetasPage() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-pink-600 mb-6">Recetas Caseras</h2>
        <p className="text-gray-600 mb-10">Aprende a preparar algunos de nuestros postres favoritos ✨</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recetas.map((r) => (
            <CardReceta key={r.id} receta={r} />
          ))}
        </div>
      </div>
    </section>
  );
}
