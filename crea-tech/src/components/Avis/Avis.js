// import React from "react";
// import {
//   CarouselProvider,
//   Slider,
//   Slide,
//   ButtonBack,
//   ButtonNext,
// } from "pure-react-carousel";

// const Avis = () => {
//   return (
//     <CarouselProvider className="carousel"
//       naturalSlideWidth={6}
//       naturalSlideHeight={1}
//       totalSlides={6}
//     >
//       <Slider className="slide">
//         <Slide index={0}>Avis 1</Slide>
//         <Slide index={1}>Avis 2</Slide>
//         <Slide index={2}>Avis 3</Slide>
//         <Slide index={3}>Avis 4</Slide>
//         <Slide index={4}>Avis 5</Slide>
//         <Slide index={5}>Avis 6</Slide>
//       </Slider>
//       <ButtonBack>Précédent</ButtonBack>
//       <ButtonNext>Suivant</ButtonNext>
//     </CarouselProvider>
//   );
// };

// export default Avis;

// Import Swiper React components
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Avis.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import img10 from "../images/IMG_AVIS/boats-2378150_1280.jpg";
import img20 from "../images/IMG_AVIS/darling-4077123_1280.jpg";
import img30 from "../images/IMG_AVIS/flower-field-250016_1280.jpg";
import img40 from "../images/IMG_AVIS/forest-438432_1280.jpg";
import img50 from "../images/IMG_AVIS/night-2458342_1280.jpg";
import img60 from "../images/IMG_AVIS/rainbow-5372890_1280.jpg";
import Gauche from "../images/ICON_CAROUSEL/fleche-gauche.png";
import Droite from "../images/ICON_CAROUSEL/fleche-droite.png";

const Avis = () => {
  return (
    <div className="container">
      <h1 className="heading">Image Gallery</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={img10} alt="slider1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img20} alt="slider2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img30} alt="slider3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img40} alt="slider4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img50} alt="slider5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img60} alt="slider6" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <img src={Gauche} alt="" srcset="" />
          </div>
          <div className="swiper-button-next slider-arrow">
            <img src={Droite} alt="" srcset="" />
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default Avis;
