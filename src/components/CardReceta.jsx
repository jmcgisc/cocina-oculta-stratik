import { Link } from "react-router-dom";

export default function CardReceta({ receta }) {
  return (
    <div className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
      <img src={receta.img} alt={receta.titulo} className="w-full h-48 object-cover rounded-t-xl" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-pink-700 mb-2">{receta.titulo}</h3>
        <p className="text-gray-600 mb-4">{receta.descripcion}</p>
        <Link
          to={`/recetas/${receta.slug}`}
          className="inline-block text-pink-600 font-medium hover:underline"
        >
          Ver receta →
        </Link>
      </div>
    </div>
  );
}
