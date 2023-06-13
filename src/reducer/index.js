import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
	data: dataSlice.reducer,
})
