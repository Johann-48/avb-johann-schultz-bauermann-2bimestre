import { useFavorites } from "../../context/FavoritesContext";
import CountryCard from "../../components/CountryCard";

export default function Favorites() {
  const { favorites } = useFavorites();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Países Favoritos</h1>
      {favorites.length === 0 ? (
        <p>Nenhum país favoritado ainda.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {favorites.map((country) => (
            <CountryCard key={country.cca3} country={country} />
          ))}
        </div>
      )}
    </div>
  );
}
