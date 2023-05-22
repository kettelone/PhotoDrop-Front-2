import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice/userSlice'
import modalReducer from './modalSlice/modalSlice'
import albumReducer from './allAlbumsSlice/allAlbumsSlice'
import oneAlbumReducer from './oneAlbumSlice/oneAlbumSlice'

export const store = configureStore({
	reducer: {
		userUpdate: userReducer,
		modalUpdate: modalReducer,
		albumsUpdate: albumReducer,
		oneAlbumUpdate: oneAlbumReducer
	}
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
