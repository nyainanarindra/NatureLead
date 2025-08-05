
import api from "../Config/axiosInstance";


const MENUS_ROOT = "/api/menus?populate=parent";
const LOCALES_ROOT = "/api/i18n/locales";
const BANNERS_ROOT = "/api/banners?populate=images";
const BANNERS_CAT_ROOT = "/api/banner-categories";
const APPROCHES_ROOT = "/api/approches?populate=image";
const OBJECTIVES_ROOT = "/api/our-2030-objectives";
const OUR_WORK_ROOT = "/api/our-works?populate[0]=category&populate[1]=cover";
const VALUE_ROOT = "/api/values";
const PAGES_ROOT = "/api/pages?populate=image";
const ABOUT_US_ROOT = "/api/about-us?populate=image"
const FOOTER_ROOT = "/api/footer-text"

const apiService = {

    getMenus: async (): Promise<any> => {
        try {
          const response = await api.get<any>(`${MENUS_ROOT}`);
          return response.data;
        } catch (error) {
          console.error("Erreur lors de la récupération des menus :", error);
          throw error;
        }
    },

    getLocales: async (): Promise<any> => {
        try {
          const response = await api.get<any>(`${LOCALES_ROOT}`);
          return response.data;
        } catch (error) {
          console.error("Erreur lors de la récupération des Locales :", error);
          throw error;
        }
    },

    getBanners: async (): Promise<any> => {
        try {
          const response = await api.get<any>(`${BANNERS_ROOT}`);
          return response.data;
        } catch (error) {
          console.error("Erreur lors de la récupération des banners :", error);
          throw error;
        }
    },

    getBannersCategories: async (): Promise<any> => {
        try {
          const response = await api.get<any>(`${BANNERS_CAT_ROOT}`);
          return response.data;
        } catch (error) {
          console.error("Erreur lors de la récupération des Banners Categories :", error);
          throw error;
        }
    },

    getValues: async (): Promise<any> => {
      try {
        const response = await api.get<any>(`${VALUE_ROOT}`);
        return response.data;
      } catch (error) {
        console.error("Erreur lors de la récupération des Values :", error);
        throw error;
      }
    },


    getApproches: async (): Promise<any> => {
      try {
        const response = await api.get<any>(`${APPROCHES_ROOT}`);
        return response.data;
      } catch (error) {
        console.error("Erreur lors de la récupération des Approches :", error);
        throw error;
      }
    },

    getObjectives: async (): Promise<any> => {
      try {
        const response = await api.get<any>(`${OBJECTIVES_ROOT}`);
        return response.data;
      } catch (error) {
        console.error("Erreur lors de la récupération des Objectives :", error);
        throw error;
      }
    },

    getOurWork: async (): Promise<any> => {
      try {
        const response = await api.get<any>(`${OUR_WORK_ROOT}`);
        return response.data;
      } catch (error) {
        console.error("Erreur lors de la récupération des Our-Work :", error);
        throw error;
      }
    },

    getPage: async (): Promise<any> => {
      try {
        const response = await api.get<any>(`${PAGES_ROOT}`);
        return response.data;
      } catch (error) {
        console.error("Erreur lors de la récupération des Pages :", error);
        throw error;
      }
    },

    getAboutUs: async (): Promise<any> => {
      try {
        const response = await api.get<any>(`${ABOUT_US_ROOT}`);
        return response.data;
      } catch (error) {
        console.error("Erreur lors de la récupération de About Us :", error);
        throw error;
      }
    },

    getFooterText: async (): Promise<any> => {
      try {
        const response = await api.get<any>(`${FOOTER_ROOT}`);
        return response.data;
      } catch (error) {
        console.error("Erreur lors de la récupération de Footer text :", error);
        throw error;
      }
    },



};

export default apiService;
