import React, { useContext, useEffect, useState } from 'react';
import './Footer.css';
import { AppContext } from '../../../Context/AppContext';
import { IFooter } from '../../../Types/footer';

const Footer: React.FC = () => {

   const context = useContext(AppContext);
  if (!context) {
    return <div>Chargement...</div>;
  }
  const {footerText} = context;
  const [footerTextD, setFooterTextD] = useState<IFooter | null>(null);
        
  useEffect(() => {
    if (footerText != null) {
      setFooterTextD(footerText);
         console.log('Footer Text:',footerTextD);
      }
  }, [footerText]);

  return (
    <footer id="footer" className="footer dark-background">
      <div className="container">
        <img src="/img/logo.svg" alt="" width="100" />
        <p>
          {footerTextD?.text.map((item , i)=>(
            item.children.map((child , j)=> <span key={""+i+"-"+j}>{child.text}</span> )
          ))}
        </p>
        <div className="container">
          <div className="copyright">
            <span>Copyright</span>
            <strong className="px-1 sitename">NatureLEAD</strong>
            <span>All Rights Reserved</span>
          </div>
          <div className="credits">
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


