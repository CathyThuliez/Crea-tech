import "./App.css";
import A_propos from "./components/A_propos";
import Accueil from "./components/Accueil";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projets from "./components/Projets";
import Services from "./components/Services";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Accueil />
      <Services />
      <A_propos />
      <Projets />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
