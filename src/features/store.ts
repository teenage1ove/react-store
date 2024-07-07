import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './api/apiSlice'
import categoriesSlice from './categories/categoriesSlice'
import productsSlice from './products/productsSlice'
import userSlice from './user/userSlice'
// ...

export const store = configureStore({
	reducer: {
		categories: categoriesSlice,
		products: productsSlice,
		user: userSlice,
		[apiSlice.reducerPath]: apiSlice.reducer,
	},
	middleware: getMiddleWare => getMiddleWare().concat(apiSlice.middleware),
	devTools: true,
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
