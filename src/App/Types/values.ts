export type IValue = {
    id: number;
    documentId: string;
    title: string;
    description: {
      type: string;
      children: {
        text: string;
        type: string;
      }[];
    }[];
  };