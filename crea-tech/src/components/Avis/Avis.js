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
        // autoplay={{ delay: 6000, disableOnInteraction: false }} // Défilement automatique avec fade
        className="swiper_container"
      >
        <SwiperSlide className="slide_container">
          <div className="slide-avis">
            <h2>Romanski </h2>
            <h3>Graphiste et plasticien.</h3>
            <p>
              « J'ai fait appel aux services de Créa-Tech et je dois dire que je
              n'ai pas été déçu, un suivi personnalisé et dédié, une grande
              réactivité aux imprévus, aux modifications de dernière minute
              ainsi qu'un sens de l'écoute, force de proposition et grandes
              qualités de développeur. J'ai à présent un beau site moderne,
              fonctionnel et qui s'adapte en fonction de l'écran sur lequel on
              le regarde (téléphone, tablette, pc) Merci et bravo ! »
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide_container">
          <div className="slide-avis">
            <h2>Philippe </h2>
            <h3>Formateur dans la sécurité en entreprise.</h3>
            <p>
              « Très à l'écoute de mes besoins, Créa-tech a très bien compris et
              répondu à ma demande, le site a été réalisé comme je le souhaitais
              : design, fonctionnalités, délai. Bravo et merci pour votre
              professionnalisme ! »
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide_container">
          <div className="slide-avis">
            <h2>Jean-Pascal</h2>
            <h3>
              Directeur Général de Transition secteur énergie-environnement.
            </h3>
            <p>
              « Cathy est une personne à la fois impliquée et dynamique. Elle
              fait activement avancer les projets, avec une grande curiosité et
              ouverture d'esprit. Elle est attachée à la qualité, sait
              identifier des solutions, y compris en donnant les bonnes clés
              pour faciliter des arbitrages difficiles. Pédagogue, elle manie le
              code à la perfection en sachant toujours traduire des choses
              parfois complexes en termes clairs. »
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide_container">
          <div className="slide-avis">
            <h2>Déborah</h2>
            <h3>Pâtissière.</h3>
            <p>
              « C'est avec grand plaisir que j'ai eu l'occasion de travailler
              avec Cathy. Son amabilité et sa souplesse ont été incontournables
              pour comprendre mes besoins et les mettre en forme. Malgré mes
              exigences, quelques peu drastiques, elle a su prendre le recul
              nécessaire et surtout, donner satisfaction à chacun des points
              listés dans le cahier des charges. Impliquée, toujours en
              recherche de l'excellence et du "petit plus", Cathy a su respecter
              mes goûts et mes envies. J'ai désormais un site et un blog au top
              pour toucher mes clients ! Ça a été un plaisir de travailler avec
              elle aussi pour sa bonne humeur et sa joie de vivre communicative.
              Je la recommande sans hésitation ! »
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide_container">
          <div className="slide-avis">
            <h2>Angélique</h2>
            <h3>Graphiste.</h3>
            <p>
              « J'ai suivi la formation aux réseaux sociaux ainsi que la
              formation Wordpress. J'ai beaucoup appris grâce à Créa-tech. J'ai
              particulièrement apprécié le fait que les ateliers étaient adaptés
              à mon niveau. Je recommande les yeux fermés ! »
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide_container">
          <div className="slide-avis">
            <h2>Varthan</h2>
            <h3>Traiteur à domicile.</h3>
            <p>
              « J'ai suivi la formation "Réseaux sociaux" de Crea-Tech . J'ai
              beaucoup apprécié les divers ateliers mais également la patience
              et la gentillesse de Cathy. Merci infiniment 🙏🥰 »
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide_container">
          <div className="slide-avis">
            <h2>Sylviane</h2>
            <h3>Retraitée</h3>
            <p>
              « J'ai participé à plusieurs ateliers sur le numérique animés par
              Cathy et ce fût à chaque fois un véritable plaisir. J'ai apprécié
              le contenu de ces ateliers autant que la pédagogie et la patience
              de Cathy. Je recommande. »
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide_container">
          <div className="slide-avis">
            <h2>Nanny McChlo</h2>
            <h3>Professeure particulier d'anglais</h3>
            <p>
              « Grâce à l'atelier sur les réseaux sociaux, je peux maintenant
              gérer ma page pro sans problème. Un atelier très complet avec une
              formatrice super pro. Merci beaucoup 💚👍 »
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
