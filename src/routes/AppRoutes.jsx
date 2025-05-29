// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AllCountriesPage } from "./pages/AllCountriesPage";
import { FavoritesPage } from "./pages/FavoritesPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllCountriesPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
