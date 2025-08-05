import React, { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import "./swiper/swiper-bundle.min.css"
import "../../../assets/css/swiper-bundle.min.css"
import "./Approaches.css";
import { AppContext } from "../../Context/AppContext";
import { IApproaches } from "../../Types/approache";

const Approaches: React.FC = () => {

      const context = useContext(AppContext);
      if (!context) {
        return <div>Chargement...</div>;
      }
      
      const imageBaseUrl = import.meta.env.VITE_BASE_URL ;
      const {approches} = context;
      const [approchesD, setApprochesD] = useState<IApproaches[]>([]);
  
      useEffect(() => {
          if (approches.length > 0) {
            setApprochesD(approches);
            console.log('Approches :',approches);
          }
      }, [approches]);

  return (
    <>
    {
      approchesD.length > 0 && (
        <section id="approuche" className="approuche section">
        <div className="container section-title" data-aos="fade-up">
          <h2></h2>
          <p>Approaches</p>
        </div>
  
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <Swiper
            loop={true}
            speed={600}
            autoplay={{ delay: 5000 }}
            slidesPerView="auto"
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay]}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 40 },
              1200: { slidesPerView: 3, spaceBetween: 10 },
            }}
            className="init-swiper"
          >
            {approchesD.map((approach, index) => (
              <SwiperSlide key={index}>
                <div className="approuche-item">
                  <figure style={{ 
                  backgroundImage: `url(${imageBaseUrl + (approach.image[0].formats.large?.url)})` ,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}>
                    {/* <img
                      src={`url(${imageBaseUrl + approach.image[0].formats.large?.url})`}
                      className="approuche-img"
                      alt={approach.title}
                    /> */}
                  </figure>
                  <h3>{approach.title}</h3>
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    {approach.description[0].children[0].text}
                    <i className="bi bi-quote quote-icon-right"></i>
                  </p>
                </div>
              </SwiperSlide>
            ))}
            <div className="swiper-pagination"></div>
          </Swiper>
        </div>
      </section>
      )
    }
    </>
  );
};

export default Approaches;
