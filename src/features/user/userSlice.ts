import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { BASE_URL } from '../../utils/constants'
import { PayloadAction } from '@reduxjs/toolkit/react'
import { ICurrentUser, IProductItem } from '../types'
import { IUserSignupForm } from '../../components/User/UserSignupForm'

// export interface ICart extends IProductItem{
//     quantity: number
// }




interface IInitialState {
    currentUser: ICurrentUser | null,
    cart: IProductItem[],
    isLoading: boolean
    showForm: boolean
    formType: string
}

const initialState: IInitialState = {
    currentUser: null,
    cart: [],
    isLoading: false,
    formType: 'signup',
    showForm: false
}

export const createUser = createAsyncThunk<ICurrentUser, IUserSignupForm>('users/createUser', async (payload, thunkAPI) => {
    try {
        const res = await axios.post(`${BASE_URL}/users`, payload)
        
        return res.data
    } catch (error) {
        console.log(error)
        return thunkAPI.rejectWithValue(error)
    }
})

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
        },
        toggleForm: (state, action: PayloadAction<boolean>) => {
            state.showForm = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createUser.fulfilled, (state, action) => {
                state.currentUser = action.payload
            })
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
export const {addItemToCart, toggleForm} = userSlice.actions
export default userSlice.reducer