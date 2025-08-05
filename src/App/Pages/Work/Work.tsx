import { useContext, useEffect, useState } from "react";
import "./Work.css";
import { AppContext } from "../../Context/AppContext";
import { IWork } from "../../Types/our-work";
import { useNavigate } from "react-router-dom";

const Work = () => {

        const navigate = useNavigate();
        const context = useContext(AppContext);
        if (!context) {
          return <div>Chargement...</div>;
        }
        
        const imageBaseUrl = import.meta.env.VITE_BASE_URL ;
        const {ourWork} = context;
        const [ourWorkD, setOurWorkD] = useState<Record<string, IWork[]>>({});

        const handleClick = (state : IWork) => {
          navigate("/workDetails", { state: state });
        };
    
        useEffect(() => {
            if (ourWork.length > 0) {
              setOurWorkD(groupByCategory(ourWork));
              console.log();
              
              console.log('OurWork :',ourWork);
            }
        }, [ourWork]);

        const groupByCategory = (documents: IWork[]): Record<string, IWork[]> => {
          return documents.reduce((acc, doc) => {
            const categoryTitle = doc.category.Title;
            if (!acc[categoryTitle]) {
              acc[categoryTitle] = [];
            }
            acc[categoryTitle].push(doc);
            return acc;
          }, {} as Record<string, IWork[]>);
        }

  return (
    <>
    {
      ourWorkD != null  && (
        <section id="Our works" className="our-works section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Our Works</h2>
        </div>
  
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          {Object.entries(ourWorkD).map(([category, documents]) => (
            <div key={category} className="container-ourworks">
              <h3 className="mb-3">{category}</h3>
              <div className="work-container">
                <ul>
                  {documents.map((item, idx) => (
                    <li key={idx}>
                      <a onClick={() => handleClick(item)}>
                        <figure
                        style={{ 
                          backgroundImage: `url(${imageBaseUrl + (item.cover.formats.large?.url || '/uploads/large_DSC_4882_869a4303a4.jpg')})` ,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat'
                        }}>
                          {/* <img src={item.img} alt={item.alt} /> */}
                          <figcaption>{item.title}</figcaption>
                        </figure>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
         
        </div>
      </section>
      )
    }
    </>
  );
};

export default Work;
