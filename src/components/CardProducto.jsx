export default function CardProducto({ img, title, desc }) {
  return (
    <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
      <img
        src={img}
        alt={title}
        className="rounded-lg mb-4 w-full h-48 object-cover"
      />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-500">{desc}</p>
    </div>
  );
}
