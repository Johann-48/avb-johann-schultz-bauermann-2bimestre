// src/pages/FavoritesPage.jsx
import { useFavorites } from "../context/FavoritesContext";
import { CountryCard } from "../components/CountryCard";

export const FavoritesPage = () => {
  const { favorites } = useFavorites();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {favorites.map((country) => (
        <CountryCard key={country.cca3} country={country} />
      ))}
    </div>
  );
};
