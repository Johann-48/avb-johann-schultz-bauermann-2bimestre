import { useNavigate } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

export default function CountryCard({ country }) {
  const navigate = useNavigate(); // 1️⃣ importa o hook
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const isFav = isFavorite(country.cca3);

  const toggleFavorite = () => {
    isFav ? removeFavorite(country.cca3) : addFavorite(country);
  };

  // Função que será chamada quando o usuário clicar no botão “Ver detalhes”
  const goToDetails = () => {
    navigate(`/country/${country.cca3}`);
  };

  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition">
      <h2 className="text-lg font-bold mb-2">{country.name.common}</h2>

      <img
        src={country.flags.svg}
        alt={`Bandeira de ${country.name.common}`}
        className="w-32 h-20 object-cover mb-2"
      />

      {/* 2️⃣ Aqui removemos o <Link> e criamos um <button> */}
      <button
        onClick={goToDetails}
        className="text-white bg-yellow-500 hover:bg-yellow-600 px-3 py-1 rounded mb-2 block"
      >
        Ver detalhes
      </button>

      <button
        onClick={toggleFavorite}
        className={`px-4 py-1 rounded ${
          isFav
            ? "bg-red-400 hover:bg-red-500"
            : "bg-blue-400 hover:bg-blue-500"
        } text-white`}
      >
        {isFav ? "Remover dos Favoritos" : "Favoritar"}
      </button>
    </div>
  );
}
