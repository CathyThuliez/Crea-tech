/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/jsx-pascal-case */
import "./App.css";
import A_propos from "./components/A_propos/A_propos";
import Accueil from "./components/Accueil/Accueil";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Projets from "./components/Projet/Projets";
import Services from "./components/Service/Services";
import Contact from "./components/Contact/Contact";
import Avis from "./components/Avis/Avis";

function App() {
  return (
    <div className="App">
      <Header />
      <Accueil />
      <Services />
      <A_propos />
      <Projets />
      <Avis />
      <br />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
