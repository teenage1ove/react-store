import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './api/apiSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import categoriesSlice from './categories/categoriesSlice'
import productsSlice from './products/productsSlice'
import userSlice from './user/userSlice'
// ...

const rootReducer = combineReducers({
	categories: categoriesSlice,
	products: productsSlice,
	user: userSlice,
	[apiSlice.reducerPath]: apiSlice.reducer,
})

const persistConfig = {
	key: 'root',
	storage,
  }

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getMiddleWare => getMiddleWare().concat(apiSlice.middleware),
	devTools: true,
})

export const persister = persistStore(store)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
