import "./App.css";
import APropos from "./components/APropos/APropos";
import Accueil from "./components/Accueil/Accueil";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AllServices from "./components/AllServices/AllServices";
import Contact from "./components/Contact/Contact";
import Avis from "./components/Avis/Avis";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cookie from "./components/Cookie/Cookie";
import MentionLegale from "./components/MentionsLegales/MentionLegale";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/mentionlegales" element={<MentionLegale />} />

          <Route
            path="/"
            element={
              <div>
                <Header />
                <Accueil />
                <AllServices />
                <APropos />
                <Avis />
                <Contact />
                <Footer />
                <Cookie />
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
