export interface Menu {
    id: number;
    documentId: string;
    title: string;
    locale: string;
    parent?: {
      id: number;
    } | null;
  }
  
export type MenuItem = {
  id: number;
  documentId: string;
  title: string;
  locale: string;
  children: MenuItem[];
};