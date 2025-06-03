import { useFavorites } from "../../context/FavoritesContext";
import CountryCard from "../../components/CountryCard";

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Países Favoritos</h1>
      {favorites.length === 0 ? (
        <p>Nenhum país favoritado ainda.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {favorites.map((country) => (
            <CountryCard key={country.cca3} country={country} />
          ))}
        </div>
      )}
    </div>
  );
}
