import { Image } from "./Image";

export type IVisionMission = {
    id: number;
    documentId: string;
    title: string;
    description: IVMDescription[];
    locale: string;
    image : Image ;
  };

export type IVisionMission2 = {
    id: number;
    documentId: string;
    title: string;
    description: IVMDescription[][];
    locale: string;
    image : Image ;
  };
  

export type IVMDescription = Heading | Paragraph;
  
  type Heading = {
    type: "heading";
    level: number;
    children: TextElement[];
  };
  
  type Paragraph = {
    type: "paragraph";
    children: TextElement[];
  };
  
  type TextElement = {
    bold?: boolean;
    text: string;
    type: "text";
  };
  