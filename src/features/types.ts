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
    category?: string;
    image?: string;
    quantity?: number;
    rating: {
      rate: number;
      count: number;
    };
  }
  
  export interface ICurrentUser {
    id?: number;
    email?: string;
    username?: string;
    password?: string;
  }
  
