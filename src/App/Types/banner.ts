import { Image } from "./Image";

export type Banner = {
      id: number;
      documentId: string;
      title: string;
      description: string | null;
      locale: string;
      images: Image[];
  };

