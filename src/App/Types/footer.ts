export type IFooter = {
    id: number;
    documentId: string;
    text: {
      type: "paragraph";
      children: { text: string; type: "text" }[];
    }[];
}
  