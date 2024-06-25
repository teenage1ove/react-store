import { FC, useEffect } from 'react'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import AppRoutes from '../AppRoutes/AppRoutes'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import { getCategories } from '../../features/categories/categoriesSlice'
import { getProducts } from '../../features/products/productsSlice'
import './App.css'

const App:FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getCategories())
    dispatch(getProducts())
  }, [dispatch])

  return (
    <div className='app'>
      <Header />

      <div className="container">
        <Sidebar />
        <AppRoutes />
      </div>

      <Footer />
    </div>
  )
}

export default App
