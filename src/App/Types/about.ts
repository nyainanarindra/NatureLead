import { Image } from "./Image";

  
export interface IAboutUs {
    id: number;
    documentId: string;
    title: string;
    description: Paragraph[];
    image : Image;
    locale: string;
}
  

interface TextNode {
    text: string;
    type: "text";
  }
  
  interface Paragraph {
    type: "paragraph" | "list";
    children: any;
  }
