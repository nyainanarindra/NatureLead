
import { useContext, useEffect, useState } from "react";
import "./Mission.css"
import { AppContext } from "../../Context/AppContext";
import { IVisionMission, IVisionMission2, IVMDescription } from "../../Types/visionEtMission";

  const Mission = () => {

    const context = useContext(AppContext);
    if (!context) {
      return <div>Chargement...</div>;
    }
    const {visionMission} = context;
    const [visionMissionD, setVisionMissionD] = useState<IVisionMission2 | null>(null);
    const imageBaseUrl = import.meta.env.VITE_BASE_URL ;
      
    useEffect(() => {
      if (visionMission != null) {
        setVisionMissionD(processVM(visionMission));
          console.log('Mission&Vision :',visionMission);
        }
    }, [visionMission]);

    const processVM = (document: IVisionMission): IVisionMission2 => {
      return {
        ...document,
        description: transformDescription(document.description),
      };
    }

    const transformDescription = (description: IVMDescription[]): IVMDescription[][]  =>{
      const result: IVMDescription[][] = [];
      let currentGroup: IVMDescription[] = [];
    
      for (const element of description) {
        if (element.type === "heading") {
          if (currentGroup.length > 0) {
            result.push(currentGroup);
          }
          currentGroup = [element];
        } else if (element.type === "paragraph" && currentGroup.length > 0) {
          currentGroup.push(element);
        }
      }
    
      if (currentGroup.length > 0) {
        result.push(currentGroup);
      }
    
      return result;
    }

    return (
      <>
      {visionMissionD != null && (
          <section id="Vision & Mission and Objectives" className="mission-vision section">
          <div className="container">
            <div className="row gy-4">
              <div className="row">
                {visionMissionD?.description.map((item, index) => (
                  <div key={index} className="col-lg-6 mt-3 mt-lg-0">
                    <div className="p-5 wrapp-ms position-relative">
                      <div className={`${(item[0].children[0].text).toLowerCase()} bg-wrap`} />
                      <div className="content-ms">
                        <h3>{item[0].children[0].text}</h3>
                        <p className="fst-italic">
                          {
                            item[1].children.map((tx,i)=> (
                              <span style={{fontWeight : tx.bold ? 'bold' : ''}} key={i}>{tx.text}</span> 
                            ))
                          }
                        </p>
                        {/* <ul>
                          {item.content[1].map((point, i) => (
                            <li key={i}>
                              <i className="bi bi-check2-all"></i>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                        <p>{item.content[2]}</p> */}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
      </>
    );
  };
  
  export default Mission;
  