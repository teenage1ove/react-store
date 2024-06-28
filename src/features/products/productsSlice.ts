import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { BASE_URL } from '../../utils/constants'
import { IProductsItem } from '../../components/Products/Products'
import { shuffle } from '../../utils/common'



interface IInitialState {
    list: IProductsItem[]
    isLoading: boolean
    filtered: IProductsItem[]
    related: IProductsItem[]
}

const initialState: IInitialState = {
    list: [],
    isLoading: false,
    filtered: [],
    related: []
    
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
        filterByPrice: (state, {payload}: PayloadAction<number>) => {
            state.filtered = state.list.filter(product => product.price < payload)
        },
        getRelatedProducts: (state, {payload}: PayloadAction<string>) => {
            const list = state.list.filter(product => product.category.includes(payload))
            state.related = shuffle(list)
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
export const {filterByPrice, getRelatedProducts} = productsSlice.actions
export default productsSlice.reducer