import React, { Component } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

class Avis extends Component {
  render() {
    return (
      <div className="Avis">
      <h2> Les Avis </h2>
        <CarouselProvider
          className="carousel"
          naturalSlideWidth={100}
          naturalSlideHeight={10}
          totalSlides={4}
        >
          <Slider className="slide">
            <Slide index={0}>I am the first Slide.</Slide>
            <Slide index={1}>I am the second Slide.</Slide>
            <Slide index={2}>I am the third Slide.</Slide>
            <Slide index={3}>I am the forth Slide.</Slide>
          </Slider>
          <ButtonBack>Back</ButtonBack>
          <ButtonNext>Next</ButtonNext>
        </CarouselProvider>
      </div>
    );
  }
}

export default Avis;
// import "./Avis.css"
// import React, { useState } from "react";
// import ReactDOM from "react-dom";
// import Left from "../images/ICON_CAROUSEL/fleche-gauche.png"
// import Right from "../images/ICON_CAROUSEL/fleche-droite.png"

// const CARDS = 10;
// const MAX_VISIBILITY = 3;

// const Card = ({ title, content }) => {
//   <div className="card">
//     <h2>{title}</h2>
//     <p>{content}</p>
//   </div>;
// };

// const Carousel = ({ children }) => {
//   const [active, setActive] = useState(2);
//   const count = React.Children.count(children);

//   return (
//     <div className="carousel">
//       {active > 0 && (
//         <button className="nav_left" onClick={() => setActive((i) => i - 1)}>
//           <Left/>
//         </button>
//       )}
//       {React.Children.map(children, (child, i) => (
//         <div
//           className="card-container"
//           style={{
//             "--active": i === active ? 1 : 0,
//             "--offset": (active - i) / 3,
//             "--direction": Math.sign(active - i),
//             "--abs-offset": Math.abs(active - i) / 3,
//             "pointer-events": active === i ? "auto" : "none",
//             opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
//             display: Math.abs(active - i) >= MAX_VISIBILITY ? "none" : "block",
//           }}
//         >
//           {child}
//         </div>
//       ))}
//       {active < count - i && (
//         <button className="nav_right" onClick={() => setActive((i) => i + 1)}>
//           <Right />
//         </button>
//       )}
//     </div>
//   );
// };

// const App = () => (
//   <div className="app">
//     <Carousel>
//       {[...new Array(CARDS)].map((_, i) => (
//         <Card
//           title={"Card" + (i + 1)}
//           content = "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker."
//         />
//       ))}
//     </Carousel>
//   </div>
// );

// ReactDOM.render(<App />, document.body)
