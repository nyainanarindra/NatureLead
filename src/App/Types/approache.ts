import { Image } from "./Image";

export type IApproaches = {
    id: number;
    documentId: string;
    title: string;
    description: Description[];
    locale: string;
    image : Image[];
  };

type Description = {
    type: string;
    children: DescriptionChild[];
};

type DescriptionChild = {
    text: string;
    type: string;
  };
  

  
  