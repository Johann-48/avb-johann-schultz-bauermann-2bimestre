import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

export default function CountryCard({ country }) {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const isFav = isFavorite(country.cca3);

  const toggleFavorite = () => {
    isFav ? removeFavorite(country.cca3) : addFavorite(country);
  };

  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition">
      <h2 className="text-lg font-bold mb-2">{country.name.common}</h2>
      <img
        src={country.flags.svg}
        alt={`Bandeira de ${country.name.common}`}
        className="w-32 h-20 object-cover mb-2"
      />
      <Link
        to={`/country/${country.cca3}`}
        className="text-blue-500 underline block mb-2"
      >
        Ver detalhes
      </Link>
      <button
        onClick={toggleFavorite}
        className={`px-4 py-1 rounded ${isFav ? "bg-red-400" : "bg-blue-400"} text-white`}
      >
        {isFav ? "Remover dos Favoritos" : "Favoritar"}
      </button>
    </div>
  );
}
