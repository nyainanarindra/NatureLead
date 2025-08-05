import React, { useContext, useEffect, useState } from 'react';
import "./Layout.css";
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { AppContext } from '../../Context/AppContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {

  const appContext = useContext(AppContext);
  const [isLoadedD, setIsLoadedD] = useState<boolean>(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const isLoaded = appContext?.isLoaded ?? false;

  useEffect(() => {
    if (isLoaded) {
      setIsLoadedD(true);
    }
  }, [isLoaded]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  if (!isLoaded) {
    return <div id="preloader"></div>;
  }

  return (
    <div className="index-page">
      <Header />
      <main className="main">{children}</main>
      <Footer />

      {/* Scroll Top */}
      {showScrollTop && (
        <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center">
          <i className="bi bi-arrow-up-short"></i>
        </a>
      )}

      {/* Preloader */}
      {!isLoadedD && <div id="preloader"></div>}
    </div>
  );
};

export default Layout;
