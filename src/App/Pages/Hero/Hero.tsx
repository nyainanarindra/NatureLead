import React, { useContext, useEffect, useState } from 'react';
import "../../../assets/css/animate.min.css"
import "./Hero.css"
import { AppContext } from '../../Context/AppContext';
import { Banner } from '../../Types/banner';


const Hero: React.FC = () => {

    const context = useContext(AppContext);
    if (!context) {
      return <div>Chargement...</div>;
    }
    
    const imageBaseUrl = import.meta.env.VITE_BASE_URL ;
    const description =
      'Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.';
    const link = '#about';

    const { banners} = context;
    const [bannersD, setbannersD] = useState<Banner[]>([]);

    useEffect(() => {
        if (banners.length > 0) {
          setbannersD(banners);
          console.log('Banners',banners);
          
        }
    }, [banners]);

  return (
    <>
    { bannersD.length > 0 && ( 
      <section id="Home" className="hero section dark-background">
      <div
        id="hero-carousel"
        data-bs-interval="5000"
        className="carousel carousel-fade"
        data-bs-ride="carousel"
      >
        {bannersD.map((slide, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? 'active' : ''}`}
          >
            <div
              className="bg-carrousel"
              style={{ 
                backgroundImage: `url(${imageBaseUrl + slide.images[0].formats.large?.url})` ,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            ></div>
            <div className="carousel-container">
              <h2 className="animate__animated animate__fadeInDown">
                {slide.title}
              </h2>
              <p className="animate__animated animate__fadeInUp">
                {slide.description || description}
              </p>
              <a
                href={link}
                className="btn-get-started animate__animated animate__fadeInUp scrollto"
              >
                Read More
              </a>
            </div>
          </div>
        ))}

        <a
          className="carousel-control-prev"
          href="#hero-carousel"
          role="button"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon bi bi-chevron-left"
            aria-hidden="true"
          ></span>
        </a>

        <a
          className="carousel-control-next"
          href="#hero-carousel"
          role="button"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon bi bi-chevron-right"
            aria-hidden="true"
          ></span>
        </a>
      </div>

      <svg
        className="hero-waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="wave-path"
            d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z"
          ></path>
        </defs>
        <g className="wave1">
          <use xlinkHref="#wave-path" x="50" y="3"></use>
        </g>
        <g className="wave2">
          <use xlinkHref="#wave-path" x="50" y="0"></use>
        </g>
        <g className="wave3">
          <use xlinkHref="#wave-path" x="50" y="9"></use>
        </g>
      </svg>
      </section>

    )}
    
    </>
  );
};

export default Hero;
