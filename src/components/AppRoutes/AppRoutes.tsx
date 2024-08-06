import { Route, Routes } from 'react-router-dom'
import { FC } from 'react'
import { ROUTES } from '../../utils/routes'
import SingleProduct from '../SingleProduct/SingleProduct'
import Profile from '../Profile/Profile'
import Home from '../Home/Home'
import SingleCategory from '../SingleCategory/SingleCategory'
import Cart from '../Cart/Cart'

const AppRoutes:FC = () => {
  return (
    <Routes>
        <Route index element={<Home />}/>
        <Route path={ROUTES.product} element={<SingleProduct />}/>
        <Route path={ROUTES.profile} element={<Profile />}/>
        <Route path={ROUTES.category} element={<SingleCategory />}/>
        <Route path={ROUTES.cart} element={<Cart />}/>
    </Routes>
  )
}

export default AppRoutes
