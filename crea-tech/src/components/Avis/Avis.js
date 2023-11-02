import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Avis.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import Gauche from "../images/ICON_CAROUSEL/fleche-gauche.png";
import Droite from "../images/ICON_CAROUSEL/fleche-droite.png";

const Avis = () => {
  return (
    <div className="container" id="avis">
      <h2 className="heading">Les avis de nos clients</h2>
      <Swiper
        effect="fade"
        grabCursor={true}
        centeredSlides={true} 
        loop={true}
        slidesPerView={3}
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
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Défilement automatique avec fade
        className="swiper_container"
      >
        <SwiperSlide className="slide_container">
          <div className="slide-avis">
            <h2>Avis 1</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In odit
              laboriosam illo inventore? 
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide_container">
          <div className="slide-avis">
            <h2>Avis 2</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In odit
              laboriosam illo inventore?
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide_container">
          <div className="slide-avis">
            <h2>Avis 3</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In odit
              laboriosam illo inventore?
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide_container">
          <div className="slide-avis">
            <h2>Avis 4</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In odit
              laboriosam illo inventore?
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide_container">
          <div className="slide-avis">
            <h2>Avis 5</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In odit
              laboriosam illo inventore?
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide_container">
          <div className="slide-avis">
            <h2>Avis 6</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In odit
              laboriosam illo inventore?
            </p>
          </div>
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
      <div className="section-separator"></div>
    </div>
  );
};

export default Avis;
