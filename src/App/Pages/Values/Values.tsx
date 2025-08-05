import { useContext, useEffect, useState } from "react";
import "./Values.css"
import { AppContext } from "../../Context/AppContext";
import { IValue } from "../../Types/values";

const Value = () => {

    const bgWhite = "rgba(255,255,255,1)";
    const bgBlack = "rgba(0,0,0,1)";

    const context = useContext(AppContext);
    if (!context) {
      return <div>Chargement...</div>;
    }
    const {values} = context;
    const [valuesD, setValuesD] = useState<IValue[]>([]);

    useEffect(() => {
        if (values.length > 0) {
          setValuesD(values);
          console.log('Value :',values);
        }
    }, [values]);

    return (
      <>
      {
        valuesD.length > 0 && (
          <section id="values" className="bg-black values section">
          <div className="container section-title" data-aos="fade-up">
            <h2></h2>
            <p>Values</p>
          </div>
          <div className="container">
            <div className="row gy-4">
              {valuesD.map((value, index) => (
                <div key={index} className="col-lg-3 mt-3 mt-lg-0">
                  <div
                    className={`p-5 ${index % 2 ? 'col-black' : 'h-100'}`}
                    style={{ backgroundColor: index % 2 ? bgBlack : bgWhite }}
                  >
                    <h4>{value.title}</h4>
                    <p>{value.description[0].children[0].text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        )
      }
      </>
    );
  };
  
  export default Value;
  