import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { BASE_URL } from '../../utils/constants'
import { PayloadAction } from '@reduxjs/toolkit/react'
import { IProductItem } from '../types'

// export interface ICart extends IProductItem{
//     quantity: number
// }

export interface ICurrentUser {
    id: number
}

interface IInitialState {
    currentUser: ICurrentUser[],
    cart: IProductItem[],
    isLoading: boolean
}

const initialState: IInitialState = {
    currentUser: [],
    cart: [],
    isLoading: false
}

// export const getCategories = createAsyncThunk('categories', async (_, thunkAPI) => {
//     try {
//         const res = await axios(`${BASE_URL}/categories`)
//         return res.data
//     } catch (error) {
//         console.log(error)
//         return thunkAPI.rejectWithValue(error)
//     }
// })

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addItemToCart: (state, action:PayloadAction<IProductItem>) => {
            let newCart = [...state.cart]
            const found = state.cart.find(item => item.id === action.payload.id)

            if (found) {
                newCart = newCart.map(item => {
                    return item.id === action.payload.id
                    ? {...item, quantity: action.payload.quantity || item.quantity! + 1} : item;
                })

            } else {
                newCart.push({...action.payload, quantity: 1})
            }

            state.cart = newCart
        }
    },
    extraReducers: (builder) => {
        // builder
        //     .addCase(getCategories.fulfilled, (state, action) => {
        //         state.list = action.payload
        //         state.isLoading = false
        //     }),
        // builder
        //     .addCase(getCategories.pending, (state) => {
        //         state.isLoading = true
        //     })
        // builder
        //     .addCase(getCategories.rejected, (state) => {
        //         state.isLoading = false
        //     })
    }
})
export const {addItemToCart} = userSlice.actions
export default userSlice.reducer