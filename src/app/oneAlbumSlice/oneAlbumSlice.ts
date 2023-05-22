import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { OneAlbumAction } from './interfase'
const initialState: { photos: Array<any> } = {
	photos: []
}

export const oneAlbumSlice = createSlice({
	name: 'album',
	initialState,
	reducers: {
		update: (state, { payload }: PayloadAction<Array<OneAlbumAction>>) => {
			state.photos = [ ...payload ]
		}
	}
})

export const { update } = oneAlbumSlice.actions

export const selectAlbums = (state: RootState) => state.oneAlbumUpdate

export default oneAlbumSlice.reducer
