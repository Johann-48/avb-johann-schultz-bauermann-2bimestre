import { useEffect, useState } from "react";
import CountryCard from "../../components/CountryCard";

export default function Home() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Lista de Países</h1>

      {/* Flex container with wrapping: */}
      <div className="flex flex-wrap gap-6">
        {countries.map((country) => (
          // Wrap each CountryCard in a fixed-width container
          <div key={country.cca3} className="w-64">
            <CountryCard country={country} />
          </div>
        ))}
      </div>
    </div>
  );
}
