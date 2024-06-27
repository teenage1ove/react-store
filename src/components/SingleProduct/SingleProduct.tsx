import { useNavigate, useParams } from 'react-router-dom'
import { useGetProductQuery } from '../../features/api/apiSlice'
import { useEffect } from 'react'
import { ROUTES } from '../../utils/routes'
import Product from '../Product/Product'

const SingleProduct = () => {
  const {id} = useParams()
  const {data, isLoading, isFetching, isSuccess} = useGetProductQuery({id})
  const navigate = useNavigate()

  useEffect(() => {
    if (!isFetching && !isLoading && !isSuccess) {
      navigate(ROUTES.home)
    }
  }, [isFetching, isLoading, isSuccess])
  console.log(data)

  return (!data) ? (
    <section className='preloader'> Loading...</section> 
  ) : (
    <Product {...data}/>
  )
}

export default SingleProduct
