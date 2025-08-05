import React, { useContext, useEffect, useState } from "react";
import "./About.css"
import { AppContext } from "../../Context/AppContext";
import { IAboutUs } from "../../Types/about";

  const About = () => {

    const context = useContext(AppContext);
    if (!context) {
      return <div>Chargement...</div>;
    }
    const {aboutUs} = context;
    const [aboutUsD, setAboutUsD] = useState<IAboutUs>();
    const imageBaseUrl = import.meta.env.VITE_BASE_URL ;
      
    useEffect(() => {
      if (aboutUs != null) {
          setAboutUsD(aboutUs);
          console.log('AboutUsD :',aboutUsD);
      }
    }, [aboutUs]);

    return (
      <section id="About us" className="about section">
        <div className="container section-title" data-aos="fade-up">
          <h2>About Us</h2>
          <p>We are NatureLEAD</p>
        </div>
  
        <div className="container">
          <div className="row gy-4">
            <div className="row">
              <div className="col-lg-6 text-center"
              style={{ 
                backgroundImage: `url(${imageBaseUrl + (aboutUsD?.image.formats.large?.url)})` ,
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}>
                {/* <img
                  src={aboutUsD.imageUrl}
                  alt="About us"
                  className="img-fluid"
                /> */}
              </div>

              <div className="col-lg-6 mt-3 mt-lg-0">
                <h3>{aboutUsD?.title}</h3>
                {aboutUsD?.description.map((content, i) => (
                  <React.Fragment key={i}>
                    {content.type === "paragraph" &&
                      content.children.map((para: any, j: number) => (
                        <p key={`${i}-${j}`}>{para.text}</p>
                      ))}

                    {content.type === "list" && (
                      <ul>
                        {content.children.map((listItem: any, h: number) => (
                          <li key={`${i}-${h}`}>
                            <i className="bi bi-check2-all"></i>
                            {listItem.children.map((item : any, z : number)=> <span key={`${i}-${h}-${z}`}>{item.text}</span>)}
                          </li>
                        ))}
                      </ul>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
  