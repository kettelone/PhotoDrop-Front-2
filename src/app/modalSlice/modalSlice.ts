import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

const initialState = {
	isModalOpen: false
}

export const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		open: (state) => {
			state.isModalOpen = true
		},
		close: (state) => {
			state.isModalOpen = false
		}
	}
})

export const { close, open } = modalSlice.actions

export const selectModal = (state: RootState) => state.modalUpdate

export default modalSlice.reducer
