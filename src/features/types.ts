export interface IResponseCategories {
    id: number;
    name: string;
    image: string;
    creationAt: string;
    updatedAt: string;
  }


  export interface IProductItem {
    id?: string;
    title?: string;
    price?: number;
    description?: string;
    category?: Category;
    images?: string[];
    quantity?: number;
  }
  
  export interface Category {
    id: number;
    name: string;
    image: string;
  }