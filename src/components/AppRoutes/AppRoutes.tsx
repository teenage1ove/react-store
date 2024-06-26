import { Route, Routes } from 'react-router-dom'
import Home from '../Home/Home'
import { FC } from 'react'
import { ROUTES } from '../../utils/routes'
import SingleProduct from '../SingleProduct/SingleProduct'

const AppRoutes:FC = () => {
  return (
    <Routes>
        <Route index element={<Home />}/>
        <Route path={ROUTES.product} element={<SingleProduct />}/>
    </Routes>
  )
}

export default AppRoutes
