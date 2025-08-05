import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../Context/AppContext";
import "./CeoMessage.css"
import { ICeo } from "../../Types/ceo";
import { useNavigate } from "react-router-dom";

const CeoMessage = () => {

      const navigate = useNavigate();
      const context = useContext(AppContext);
      if (!context) {
        return <div>Chargement...</div>;
      }
      const {ceo} = context;
      const [ceoD, setCeoD] = useState<ICeo>();
      const imageBaseUrl = import.meta.env.VITE_BASE_URL ;

      const handleClick = () => {
          navigate("/ceoDetail", { state: ceoD });
      };
          
      useEffect(() => {
          if (ceo != null) {
            setCeoD(ceo);
            console.log('Ceo :',ceo);
          }
      }, [ceo]);
  
    return (
      <>
      { ceoD != null && (
          <section id="CEO message" className="ceo-message section">
        
          <div className="container section-title" data-aos="fade-up">
            <h2></h2>
            <p>{ceoD?.title}:</p>
          </div>
          <div className="container">
            <div className="row gy-4">
  
              <div className="col-lg-6 content" data-aos="fade-up" data-aos-delay="100">
                <div className="citation">
                  <p>
                    {ceoD?.description[4].children[1].text}
                  </p>
                </div>
                <h4>
                  <strong>{ceoD?.description[ceoD?.description.length - 2].children[0].text} -</strong> {ceoD?.description[ceoD?.description.length - 1].children[0].text}
                </h4>
                <a onClick={() => handleClick()} className="read-more" style={{cursor:'pointer'}}>
                  <span>Read More</span>
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
    
              
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                <div className="ceo-photo"
                style={{ 
                  backgroundImage: `url(${imageBaseUrl + (ceoD?.image.formats.large?.url)})` ,
                  backgroundSize: 'cover', 
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}>
                  {/* <img src="/img/ceo.jpeg" alt="CEO" className="img-fluid" /> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      </>
    );
  };
  
  export default CeoMessage;
  