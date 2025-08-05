
import { useContext, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// @ts-ignore
import PureCounter from "@srexi/purecounterjs";
import "./Stat.css";
import { AppContext } from "../../Context/AppContext";
import { Objective } from "../../Types/stat";

const Stat = () => {

  const context = useContext(AppContext);
  if (!context) {
     return <div>Chargement...</div>;
  }
  const {objective} = context;
  const [objectiveD, setObjectiveD] = useState<Objective[]>([]);
      
  useEffect(() => {
      if (objective.length > 0) {
         setObjectiveD(objective);
         console.log('Objective :',objective);
         
        AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
        new PureCounter();
      }
  }, [objective]);
  
  return (
    <>
    {
      objectiveD.length > 0 && (
      <>
      <section className="stat-title">
        <div className="container section-title" data-aos="fade-up">
          <h2></h2>
          <p>Our objectives 2030</p>
        </div>
      </section>

      <section id="stats" className="stats section dark-background">
        <img src="/img/stats-bg.jpg" alt="" data-aos="fade-in" />

        <div className="container position-relative" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            {objectiveD.map((stat, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div className="stats-item text-center w-100 h-100">
                  <div className="d-flex flex-row align-items-end justify-content-center">
                    {stat.objective_number!== null ? (
                      <>
                        <span
                          data-purecounter-start="0"
                          data-purecounter-end={parseInt(stat.objective_number) }
                          data-purecounter-duration="1"
                          className="purecounter"
                        ></span>
                        {/* <span>{stat.unit}</span> */}
                      </>
                    ) : (
                      // <span>{stat.unit}</span>
                      <span></span>
                    )}
                  </div>
                  <p>{stat.objective_text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </>
      )
    }
    </>
  );
};

export default Stat;
