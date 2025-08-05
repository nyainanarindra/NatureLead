import React, { createContext, useState, useEffect } from 'react';
import apiService from '../Services/api.service';
import { Menu } from '../Types/menu';
import { Banner } from '../Types/banner';
import { IApproaches } from '../Types/approache';
import { IWork } from '../Types/our-work';
import { Objective } from '../Types/stat';
import { Locale } from '../Types/locales';
import { IValue } from '../Types/values';
import { ICeo } from '../Types/ceo';
import { IVisionMission } from '../Types/visionEtMission';
import { IAboutUs } from '../Types/about';
import { IFooter } from '../Types/footer';



interface AppContextType {
  isLoaded : boolean;
  menus: Menu[];
  banners: Banner[];
  locales : Locale[];
  approches : IApproaches[];
  values : IValue[];
  ourWork : IWork[];
  objective : Objective[];
  ceo : ICeo | null;
  visionMission : IVisionMission | null;
  aboutUs : IAboutUs | null;
  footerText : IFooter | null;

}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const [menus, setMenus] = useState<Menu[]>([]);
  const [locales, setLocales] = useState<Locale[]>([]);
  const [banners, setBanners] = useState<Banner[]>([]);
  const [approches, setApproches] = useState<IApproaches[]>([]);
  const [values, setValues] = useState<IValue[]>([]);
  const [ourWork, setOurWork] = useState<IWork[]>([]);
  const [objective, setObjective] = useState<Objective[]>([]);
  const [ceo, setCeo] = useState<ICeo | null>(null);
  const [visionMission, setVisionMission] = useState<IVisionMission | null>(null);
  const [aboutUs, setAboutUs] = useState<IAboutUs | null >(null);
  const [footerText, setFooterTex] = useState<IFooter | null >(null);

  useEffect(() => {
    loadingData();
  }, []);

  const loadingData = async () => {
    setIsLoaded(false);
    setError(null);
  
    try {
      await Promise.allSettled([
        fetchMenus(),
        fetchBanners(),
        fetchLocales(),
        fetchApproaches(),
        fetchOurWork(),
        fetchObjective(),
        fetchValues(),
        fetchCeoEtVisionMission(),
        fetchAboutUs(),
        fetchFooterText(),
      ]).then((results) => {
        const failedRequests = results.filter((result) => result.status === "rejected");
  
        if (failedRequests.length > 0) {
          throw new Error("Une ou plusieurs requêtes ont échoué.");
        }
        else  setIsLoaded(true);
      });
    } catch (err) {
      console.error("Erreur lors du chargement des données.", err);
      setError("Impossible de charger les données. Vérifiez votre connexion.");
      setIsLoaded(false);
    }
  };

  const fetchMenus = async () => {
    try {
      const data = await apiService.getMenus();
      setMenus(data.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des Menus.');
    }
  };

  const fetchLocales = async () => {
    try {
      const data = await apiService.getLocales();
      setLocales(data);
    } catch (error) {
      console.error('Erreur lors de la récupération des bannières.');
    }
  };

  const fetchBanners = async () => {
    try {
      const data = await apiService.getBanners();
      setBanners(data.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des bannières.');
    }
  };

  const fetchApproaches = async () => {
    try {
      const data = await apiService.getApproches();
      setApproches(data.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des Approches.');
    }
  };

  const fetchValues = async () => {
    try {
      const data = await apiService.getValues();
      setValues(data.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des Values.');
    }
  };

  const fetchOurWork = async () => {
    try {
      const data = await apiService.getOurWork();
      setOurWork(data.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des OurWork.');
    }
  };

  const fetchObjective = async () => {
    try {
      const data = await apiService.getObjectives();
      setObjective(data.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des Objective.');
    }
  };

  const fetchCeoEtVisionMission = async () => {
    try {
      const data = await apiService.getPage();
      setCeo(data.data[0]);
      setVisionMission(data.data[1]);
    } catch (error) {
      console.error('Erreur lors de la récupération de About Us.');
    }
  };

  const fetchAboutUs = async () => {
    try {
      const data = await apiService.getAboutUs();
      setAboutUs(data.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des Ceo EtVis.');
    }
  };

  const fetchFooterText = async () => {
    try {
      const data = await apiService.getFooterText();
      setFooterTex(data.data);
    } catch (error) {
      console.error('Erreur lors de la récupération de Footer Text.');
    }
  };


  return (
    <AppContext.Provider value={{ 
      isLoaded ,
      menus , 
      banners , 
      locales , 
      approches , 
      ourWork , 
      objective , 
      values ,
      ceo ,
      visionMission ,
      aboutUs,
      footerText
      }}>
      {children}
    </AppContext.Provider>
  );
};
