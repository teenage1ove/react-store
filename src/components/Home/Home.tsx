import { FC } from 'react'
import Poster from '../Poster/Poster'
import Products from '../Products/Products'
import { useAppSelector } from '../../hooks/useAppSelector'

const Home:FC = () => {
  const {list} = useAppSelector(state => state.products)
  return (
    <>
      <Poster />
      <Products products={list} amount={5} title='Trending'/>
    </>
  )
}

export default Home
