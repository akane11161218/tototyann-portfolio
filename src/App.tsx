import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages";
import Oyatu from "./pages/oyatu";

function App() {
  return (
    <Router>
      <div>
        {/* ルーティングの定義 */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/oyatu" element={<Oyatu />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
