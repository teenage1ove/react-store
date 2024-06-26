import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { BASE_URL } from '../../utils/constants'
import { IProductsItem } from '../../components/Products/Products'



interface IInitialState {
    list: IProductsItem[]
    isLoading: boolean
    filtered: IProductsItem[]
}

const initialState: IInitialState = {
    list: [],
    isLoading: false,
    filtered: []
    
}

export const getProducts = createAsyncThunk('products', async (_, thunkAPI) => {
    try {
        const res = await axios(`${BASE_URL}/products`)
        return res.data
    } catch (error) {
        console.log(error)
        return thunkAPI.rejectWithValue(error)
    }
})

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        filterByPrice: (state, {payload}) => {
            state.filtered = state.list.filter(product => product.price < payload)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.fulfilled, (state, action) => {
                state.list = action.payload
                state.isLoading = false
            }),
        builder
            .addCase(getProducts.pending, (state) => {
                state.isLoading = true
            })
        builder
            .addCase(getProducts.rejected, (state) => {
                state.isLoading = false
            })
    }
})
export const {filterByPrice} = productsSlice.actions
export default productsSlice.reducer