import { useState } from "react";
import axios from "axios";
import AdviceCard from "../../components/AdviceCard";

export default function Advice() {
  const [advice, setAdvice] = useState(
    "Clique no botão para receber um conselho!"
  );
  const [loading, setLoading] = useState(false);

  const fetchAdvice = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://api.adviceslip.com/advice");
      setAdvice(response.data.slip.advice);
    } catch (error) {
      console.error(error);
      setAdvice("Erro ao buscar conselho. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4 text-center">
      <AdviceCard advice={advice} />
      <button
        onClick={fetchAdvice}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        disabled={loading}
      >
        {loading ? "Carregando..." : "Novo Conselho"}
      </button>
    </div>
  );
}
