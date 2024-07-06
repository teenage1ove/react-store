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
    address?: Address;
    id?: number;
    email?: string;
    username?: string;
    password?: string;
    name?: Name;
    phone?: string;
    __v?: number;
  }
  
  export interface Name {
    firstname: string;
    lastname: string;
  }
  
  export interface Address {
    geolocation: Geolocation;
    city: string;
    street: string;
    number: number;
    zipcode: string;
  }
  
  export interface Geolocation {
    lat: string;
    long: string;
  }