// src/pages/AllCountriesPage.jsx
import { useEffect, useState } from "react";
import { CountryCard } from "../components/CountryCard";

export const AllCountriesPage = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then(setCountries);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {countries.map((country) => (
        <CountryCard key={country.cca3} country={country} />
      ))}
    </div>
  );
};

export default AllCountriesPage;