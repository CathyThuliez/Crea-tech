import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import img1 from "../images/IMG_AVIS/boats-2378150_1280.jpg";
import img2 from "../images/IMG_AVIS/darling-4077123_1280.jpg";
import img3 from "../images/IMG_AVIS/flower-field-250016_1280.jpg";
import img4 from "../images/IMG_AVIS/forest-438432_1280.jpg";
import img5 from "../images/IMG_AVIS/night-2458342_1280.jpg";
import img6 from "../images/IMG_AVIS/rainbow-5372890_1280.jpg";

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
          <img src={img1} alt="slider1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="slider2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="slider3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="slider4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="slider5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} alt="slider6" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <i className="ri-arrow-left-line"></i>
          </div>
          <div className="swiper-button-next slider-arrow">
            <i className="ri-arrow-right-line"></i>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default Avis;
