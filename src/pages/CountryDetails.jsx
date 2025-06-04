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

  // Helpers para formatar moeda e idiomas (caso existam)
  const formattedCurrencies = country.currencies
    ? Object.values(country.currencies)
        .map((c) => `${c.name} (${c.symbol || c.code || ""})`)
        .join(", ")
    : "–";

  const formattedLanguages = country.languages
    ? Object.values(country.languages).join(", ")
    : "–";

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-6">
      {/* Título centralizado */}
      <h1 className="text-3xl font-bold mb-4 text-center">
        {country.name.common}
      </h1>

      {/* Informações básicas centralizadas */}
      <div className="space-y-2 text-center">
        <p>
          <strong>Nome oficial:</strong> {country.name.official}
        </p>
        <p>
          <strong>Capital:</strong> {country.capital?.[0] || "–"}
        </p>
        <p>
          <strong>Região:</strong> {country.region}
        </p>
        <p>
          <strong>População:</strong> {country.population.toLocaleString()}
        </p>
        <p>
          <strong>Moeda:</strong> {formattedCurrencies}
        </p>
        <p>
          <strong>Idiomas:</strong> {formattedLanguages}
        </p>
      </div>

      {/* Label “Flag” e a imagem, também centralizados */}
      <div className="mt-6 text-center">
        <p className="font-semibold mb-2">Flag:</p>
        <img
          src={country.flags.svg}
          alt={`Bandeira de ${country.name.common}`}
          className="w-64 h-auto rounded shadow-md"
        />
      </div>
    </div>
  );
}
