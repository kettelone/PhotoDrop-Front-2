import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserDefaultState, UserAction } from './interface'
import { RootState } from '../store'

const initialState: UserDefaultState = {
	id: 0,
	isLoggedIn: false
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		update: (state, { payload: { id } }: PayloadAction<UserAction>) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.id = id
			state.isLoggedIn = true
		}
	}
})

export const { update } = userSlice.actions

export const selectUser = (state: RootState) => state.userUpdate

export default userSlice.reducer
