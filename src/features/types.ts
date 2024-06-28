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
    image?: string;
    quantity?: number;
    rating: {
      rate: number;
      count: number;
    };
  }
  
  export interface Category {
    id: number;
    name: string;
    image: string;
  }