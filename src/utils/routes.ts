interface IRoutes {
    home: string
    cart: string
    category: string
    product: string
}

export const ROUTES:IRoutes = {
    home: '/', 
    cart: '/cart',
    category: '/category/:id',
    product: '/products/:id'
}