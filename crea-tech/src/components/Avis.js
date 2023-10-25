import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";

const Avis = () => {
  return (
    <CarouselProvider
      naturalSlideWidth={2}
      naturalSlideHeight={2}
      totalSlides={6}
    >
      <Slider>
        <Slide index={0}>Avis 1</Slide>
        <Slide index={1}>Avis 2</Slide>
        <Slide index={2}>Avis 3</Slide>
        <Slide index={3}>Avis 4</Slide>
        <Slide index={4}>Avis 5</Slide>
        <Slide index={5}>Avis 6</Slide>
      </Slider>
      <ButtonBack>Précédent</ButtonBack>
      <ButtonNext>Suivant</ButtonNext>
    </CarouselProvider>
  );
};

export default Avis;
