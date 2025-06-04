import { useFavorites } from "../../context/FavoritesContext";
import CountryCard from "../../components/CountryCard";

export default function Favorites() {
  const { favorites } = useFavorites();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Países Favoritos</h1>

      {favorites.length === 0 ? (
        <p>Nenhum país favoritado ainda.</p>
      ) : (
        <div className="flex flex-wrap gap-6">
          {favorites.map((country) => (
            <div key={country.cca3} className="w-64">
              <CountryCard country={country} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
