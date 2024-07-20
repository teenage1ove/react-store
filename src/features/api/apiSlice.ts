import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../../utils/constants'
import { IProductItem } from '../types'


export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    tagTypes: ['Product'],
    endpoints: (builder) => ({
        getProduct: builder.query<IProductItem, any>({
            query: ({id}) => `/products/${id}`,
            providesTags: ['Product']
        }),

        getProducts: builder.query<IProductItem[], any>({
            query: () => `/products/`,
            providesTags: ['Product']
        })
    })
})

export const {useGetProductQuery, useGetProductsQuery} = apiSlice