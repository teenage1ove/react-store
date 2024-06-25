import { Route, Routes } from 'react-router-dom'
import Home from '../Home/Home'
import { FC } from 'react'

const AppRoutes:FC = () => {
  return (
    <Routes>
        <Route index element={<Home />}/>
    </Routes>
  )
}

export default AppRoutes
