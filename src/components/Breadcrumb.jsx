import { Link } from "react-router-dom";

export default function Breadcrumb({ paths }) {
  return (
    <nav className="text-sm text-gray-600 mb-6">
      <ol className="list-reset flex">
        {paths.map((p, i) => (
          <li key={i} className="flex items-center">
            {p.to ? (
              <Link to={p.to} className="text-pink-600 hover:underline">
                {p.label}
              </Link>
            ) : (
              <span>{p.label}</span>
            )}
            {i < paths.length - 1 && (
              <span className="mx-2 text-gray-400">/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
