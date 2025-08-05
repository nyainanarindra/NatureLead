import { Image } from "./Image";

export type IWork = {
    id: number;
    documentId: string;
    title: string;
    locale: string;
    cover : Image;
    category : Category;
    description : {
      type: string;
      children: {
        type : string;
        text : string;
        bold : boolean
      }[];
    }[]
  };

type Category = {
    id: number;
    documentId: string;
    Title: string;
    locale: string;
  };
  