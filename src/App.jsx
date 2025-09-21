import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import RecetasPage from "./pages/RecetasPage";
import RecetaDetail from "./pages/RecetaDetail";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  return (
    <Router>
      <Navbar />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recetas" element={<RecetasPage />} />
          <Route path="/recetas/:slug" element={<RecetaDetail />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton /> {/* Botón flotante */}
    </Router>
  );
}
