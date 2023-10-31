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

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
const Carousel = () => {
  return (
    <section>
      <h2>Avis</h2>
      <Swiper
        slidesPerView={4}
        spaceBetween={40}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <h3> Avis 1 </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
            blanditiis? Corporis recusandae voluptate delectus soluta nobis
            mollitia vel quos corrupti maiores itaque id ipsa nihil debitis, non
            praesentium sit in? Totam quidem error earum neque aperiam enim
            magni magnam doloremque, vitae facere, laborum debitis saepe
            quibusdam odio.
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <h3> Avis 2 </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur, inventore?
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <h3> Avis 3 </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ut
            consectetur nobis provident totam recusandae, perferendis at
            consequuntur repudiandae ex est sapiente quibusdam autem, fugit iure
            ipsam veniam quas necessitatibus.
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <h3> Avis 4 </h3>
          <p> Avis 4 </p>
        </SwiperSlide>
        <SwiperSlide>
          <h3> Avis 5 </h3>
          <p> Avis 5 </p>
        </SwiperSlide>
        <SwiperSlide>
          <h3> Avis 6 </h3>
          <p> Avis 6 </p>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
export default Carousel;
