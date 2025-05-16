import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Advice from "./pages/Advice";

function App() {
  return (
    <Router>
      <nav className="p-4 bg-gray-100">
        <Link to="/" className="mr-4">
          Home
        </Link>
        <Link to="/advice">Advice</Link>
      </nav>
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/advice" element={<Advice />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
