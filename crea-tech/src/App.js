/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/jsx-pascal-case */
import "./App.css";
import A_propos from "./components/A_propos/A_propos";
import Accueil from "./components/Accueil/Accueil";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AllServices from "./components/AllServices/AllServices";
import Contact from "./components/Contact/Contact";
import Avis from "./components/Avis/Avis";
import MentionLegale from "./components/MentionLegale/MentionLegale";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/services" element={<AllServices />} />
          <Route path="/a-propos" element={<A_propos />} />
          <Route path="/avis" element={<Avis />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentions-legales" element={<MentionLegale />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
