import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function CountryDetails() {
  const { code } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${code}`)
      .then((res) => res.json())
      .then((data) => setCountry(data[0]));
  }, [code]);

  if (!country) return <p>Carregando...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{country.name.common}</h1>
      <p><strong>Capital:</strong> {country.capital?.[0]}</p>
      <p><strong>Região:</strong> {country.region}</p>
      <p><strong>População:</strong> {country.population}</p>
      <img src={country.flags.svg} alt={`Bandeira de ${country.name.common}`} className="w-64 mt-4" />
    </div>
  );
}
