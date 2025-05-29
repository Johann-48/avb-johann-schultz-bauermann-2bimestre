import { createContext, useContext, useState } from "react";

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (country) => {
    if (!favorites.find((c) => c.cca3 === country.cca3)) {
      setFavorites([...favorites, country]);
    }
  };

  const removeFavorite = (cca3) => {
    setFavorites(favorites.filter((c) => c.cca3 !== cca3));
  };

  const isFavorite = (cca3) => {
    return favorites.some((c) => c.cca3 === cca3);
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);
