import { useParams } from "react-router-dom";
import recetas from "../data/recetas";
import Breadcrumb from "../components/Breadcrumb";

export default function RecetaDetail() {
  const { slug } = useParams();
  const receta = recetas.find((r) => r.slug === slug);

  if (!receta) {
    return <p className="text-center py-20">Receta no encontrada ❌</p>;
  }

  return (
    <div className="container mx-auto px-6 py-20">
      {/* Breadcrumb */}
      <Breadcrumb
        paths={[
          { label: "Inicio", to: "/" },
          { label: "Recetas", to: "/recetas" },
          { label: receta.titulo }, // sin "to", porque es la actual
        ]}
      />

      <div className="bg-white rounded-xl shadow p-6">
        <img
          src={receta.img}
          alt={receta.titulo}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <h1 className="text-4xl font-bold text-pink-700 mb-4">
          {receta.titulo}
        </h1>
        <div className="prose max-w-none">
          <pre className="whitespace-pre-wrap text-gray-700">
            {receta.contenido}
          </pre>
        </div>
      </div>
    </div>
  );
}
