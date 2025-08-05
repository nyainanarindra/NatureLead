import { useLocation, useNavigate } from "react-router-dom"
import { Fragment, useEffect } from "react";
import { ICeo } from "../../Types/ceo";
import "./Detail.css"


const CeoDetails = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const data : ICeo = location.state ;
    const imageBaseUrl = import.meta.env.VITE_BASE_URL ;
  
    useEffect(() => {
      data == null || data == undefined ? navigate("/") : null;
    }, []);
  
  return (
    <div>
      
      <div className="page-title dark-background py-10 text-center"
      style={{ 
        backgroundImage: `url(${imageBaseUrl + data.image.formats.large?.url} )` ,
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
      }}>
        <div className="container relative">
          <h1 className="text-4xl font-bold">{data.title}</h1>
        </div>
      </div>

      <div className="container mx-auto py-10 px-4" style={{padding:'40px 0px'}}>
        <article className="max-w-3xl mx-auto">
          <div className="content space-y-6">
            {
              data.description.map((desc , i)=>(
                <div style={{ display: "flex", flexDirection: "row", gap: "30px" }}>
                    {desc.type == "paragraph" && (
                        <div 
                        style={{paddingBottom:"20px"}}
                        key={i}>
                            {desc.children.map((chl , j)=>(
                                <Fragment key={j}>
                                <span style={{fontWeight: chl.bold ? "bold" : ''}}>{chl.text}</span> 
                                {
                                chl.type == 'link' &&  chl.children?.map((cl)=>
                                <a href={chl.url} style={{color:"blue", cursor:'pointer'}}>{cl.text} </a>)
                                }
                                </Fragment>
                             )
                        )}</div>)
                    }  
                </div>
              ))
            }
          </div>
        </article>
      </div>
    </div>
  );
};

export default CeoDetails;
