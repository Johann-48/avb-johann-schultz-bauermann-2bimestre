import { useEffect, useState } from "react";
import CountryCard from "../../components/CountryCard";
import { Link } from "react-router-dom";

<Link to="/favorites" className="text-blue-500 underline">
  Ver Favoritos
</Link>


export default function Home() {
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
}
