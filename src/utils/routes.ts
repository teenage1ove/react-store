interface IRoutes {
    home: string
    cart: string
    category: string
    product: string
    profile: string
}

export const ROUTES:IRoutes = {
    home: '/', 
    cart: '/cart',
    category: '/category/:category',
    product: '/products/:id',
    profile: '/profile'
    
}