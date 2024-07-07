import { FC, useEffect } from 'react'
import Poster from '../Poster/Poster'
import Products from '../Products/Products'
import { useAppSelector } from '../../hooks/useAppSelector'
import Categories from '../Categories/Categories'
import Banner from '../Banner/Banner'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { filterByPrice } from '../../features/products/productsSlice'
import { shuffle } from '../../utils/common'

const Home:FC = () => {
  const dispatch = useAppDispatch()
  const categories = useAppSelector(state => state.categories)
  const products = useAppSelector(state => state.products)

  useEffect(() => {
    if (!products.list.length) return

    dispatch(filterByPrice(100))
  }, [dispatch, products.list.length])

  return (
    <>
      <Poster />
      <Products products={shuffle(products.list)} isLoading={products.isLoading} amount={10} title='Trending'/>
      <Categories products={categories.list} isLoading={categories.isLoading} amount={4} title='Worth seeing'/>
      <Banner />
      <Products products={shuffle(products.filtered)} isLoading={products.isLoading} amount={5} title='Less then 100$'/>
    </>
  )
}

export default Home
