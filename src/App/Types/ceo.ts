import { Image } from "./Image";

export type ICeo = {
    id: number;
    documentId: string;
    title: string;
    description: Paragraph[];
    locale: string;
    image : Image ;
  };
  
  type Paragraph = {
    type: string;
    children: TextElement[];
  };
  
  type TextElement = {
    bold?: boolean;
    text?: string;
    url?: string;
    type: string;
    children?: {
      text: string;
      type: string;
    }[];
  } ;
  
//   | {
//     url: string;
//     type: "link";
//     children: TextElement[];
//   }