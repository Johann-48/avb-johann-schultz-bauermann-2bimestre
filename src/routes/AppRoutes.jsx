import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Detalhes from "../pages/Detalhes";
import Advice from "../pages/Advice";

export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/detalhes">Detalhes</Link>
        <Link to="/advice">Conselhos</Link>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detalhes/:id" element={<Detalhes />} />
          <Route path="/advice" element={<Advice />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
