import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { SERVER_URL } from '../../utils/constants'
import { PayloadAction } from '@reduxjs/toolkit/react'
import { ICurrentUser, IProductItem, IResponseLogin } from '../types'
import { IUserSignupForm } from '../../components/User/UserSignupForm'
import { IUserLoginForm } from '../../components/User/UserLoginForm'

// export interface ICart extends IProductItem{
//     quantity: number
// }


interface IInitialState {
    currentUser: ICurrentUser | null,
    cart: IProductItem[],
    isLoading: boolean
    showForm: boolean
    formType: string
    error?: string | null
}


const initialState: IInitialState = {
    currentUser: null,
    cart: [],
    isLoading: false,
    formType: 'signup',
    showForm: false,
    error: null
}

export const createUser = createAsyncThunk<ICurrentUser, IUserSignupForm>('users/createUser', async (payload, {rejectWithValue}) => {
        try {
            const response = await axios.post(`${SERVER_URL}/user/register`, payload)
            console.log(response)
            if (response.status !== 200) {
                console.log(response.data.error)
                return response.data.error
            }
            return response.data
        } catch (error) {
            return rejectWithValue(error)
        }
})

export const loginUser = createAsyncThunk<IResponseLogin, IUserLoginForm>('users/loginUser', async (payload, {rejectWithValue}) => {
        try {
            const response = await axios.post(`${SERVER_URL}/user/login`, payload)
            console.log(response)
            if (response.status !== 200) {
                console.log(response.data.error)
                return response.data.error
            }
            return response.data
        } catch (error) {
            return rejectWithValue(error)
        }
})


export const updateUser = createAsyncThunk<IResponseLogin, IUserLoginForm>('users/updateUser', async (payload, {rejectWithValue}) => {
    try {
        const response = await axios.post(`${SERVER_URL}/user/update`, payload)
        console.log(response)
        if (response.status !== 200) {
            console.log(response.data.error)
            return response.data.error
        }
        return response.data
    } catch (error) {
        return rejectWithValue(error)
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
        },
        toggleFormType: (state, action: PayloadAction<string>) => {
            state.formType = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createUser.fulfilled, (state, action: PayloadAction<ICurrentUser>) => {
                state.error = null
                state.currentUser = action.payload
            })
            builder
            .addCase(createUser.rejected, (state, action: PayloadAction<any>) => {
                state.error = action.payload.response.data.message
            })

            .addCase(loginUser.fulfilled, (state, action: PayloadAction<ICurrentUser>) => {
                state.error = null
                state.currentUser = action.payload
            })
            .addCase(loginUser.rejected, (state, action: PayloadAction<any>) => {
                state.error = action.payload.response.data.message
            })

            .addCase(updateUser.fulfilled, (state, action: PayloadAction<ICurrentUser>) => {
                state.error = null
                state.currentUser = action.payload
            })
            .addCase(updateUser.rejected, (state, action: PayloadAction<any>) => {
                state.error = action.payload.response.data.message
            })
        }
})
export const {addItemToCart, toggleForm, toggleFormType} = userSlice.actions
export default userSlice.reducer