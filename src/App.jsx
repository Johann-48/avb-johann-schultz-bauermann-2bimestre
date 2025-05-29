import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CountryDetails from "./pages/CountryDetails";
import CountryCard from "../components/CountryCard";
import { FavoritesProvider } from "./context/FavoritesContext";
import './index.css';

function App() {
  return (
    <FavoritesProvider>
      <Router>
        <nav className="p-4 bg-gray-100">
          <Link to="/" className="mr-4">Home</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:code" element={<CountryDetails />} />
        </Routes>
      </Router>
    </FavoritesProvider>
  );
}

export default App;
