import { useNavigate, useParams } from 'react-router-dom'
import { useGetProductQuery } from '../../features/api/apiSlice'
import { useEffect } from 'react'
import { ROUTES } from '../../utils/routes'
import Product from '../Product/Product'
import Products from '../Products/Products'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { getRelatedProducts } from '../../features/products/productsSlice'
import { useAppSelector } from '../../hooks/useAppSelector'

const SingleProduct = () => {
  const dispatch = useAppDispatch()
  const {related, list} = useAppSelector(state => state.products)
  const {id} = useParams()
  const {data, isLoading, isFetching, isSuccess} = useGetProductQuery({id})
  const navigate = useNavigate()

  useEffect(() => {
    if (!isFetching && !isLoading && !isSuccess) {
      navigate(ROUTES.home)
    }
  }, [isFetching, isLoading, isSuccess])
 
  useEffect(() => {
    if (!data || !list.length) return
    
    dispatch(getRelatedProducts(data.category!))
    
  }, [data, list.length, dispatch])

  return (!data) ? (
    <section className='preloader'> Loading...</section> 
  ) : (
    <>
      <Product {...data}/>
      <Products products={related} amount={5} title='Related products'/>
    </>
  )
}

export default SingleProduct
