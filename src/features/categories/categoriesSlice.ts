import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { BASE_URL } from '../../utils/constants'



interface IInitialState {
    list: string[]
    isLoading: boolean
}

const initialState: IInitialState = {
    list: [],
    isLoading: false
}

export const getCategories = createAsyncThunk('categories', async (_, thunkAPI) => {
    try {
        const res = await axios(`${BASE_URL}/products/categories`)
        return res.data
    } catch (error) {
        console.log(error)
        return thunkAPI.rejectWithValue(error)
    }
})

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCategories.fulfilled, (state, action) => {
                state.list = action.payload
                state.isLoading = false
            }),
        builder
            .addCase(getCategories.pending, (state) => {
                state.isLoading = true
            })
        builder
            .addCase(getCategories.rejected, (state) => {
                state.isLoading = false
            })
    }
})

export default categoriesSlice.reducer