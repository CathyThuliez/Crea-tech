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

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <h2> Avis 1 </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, blanditiis? Corporis recusandae voluptate delectus soluta nobis mollitia vel quos corrupti maiores itaque id ipsa nihil debitis, non praesentium sit in?
          Totam quidem error earum neque aperiam enim magni magnam doloremque, vitae facere, laborum debitis saepe quibusdam odio. Enim ratione molestias exercitationem est, placeat magnam labore cum ex voluptatibus quaerat voluptas.
          Animi, assumenda corporis? Harum vel fuga, quasi possimus ut non laboriosam? Similique possimus, ab dicta corporis praesentium obcaecati saepe veniam deleniti blanditiis placeat dolorum quos quo nisi cum architecto inventore?
          Minima, ratione! Ipsum officiis excepturi accusantium eaque. </p>
        </SwiperSlide>
        <SwiperSlide>
        <h2> Avis 2 </h2>
          <p> Avis 2 </p>
        </SwiperSlide>
        <SwiperSlide>
          <p> Avis 3 </p>
        </SwiperSlide>
        <SwiperSlide>
          <p> Avis 4 </p>
        </SwiperSlide>
        <SwiperSlide>
          <p> Avis 5 </p>
        </SwiperSlide>
        <SwiperSlide>
          <p> Avis 6 </p>
        </SwiperSlide>
      </Swiper>
    </>
  );
}


