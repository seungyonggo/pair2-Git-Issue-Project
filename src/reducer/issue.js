import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { mainApi } from '../apis/MainApi'

const initialState = {
	issue: [],
	getIssue: {
		loading: false,
		done: false,
		err: null,
	},
}

export const issueSlice = createSlice({
	name: 'issue',
	initialState,
	extraReducers: builder => {
		builder.addCase(getIssue.pending, state => {
			state.getIssue.loading = true
			state.getIssue.done = false
			state.getIssue.err = null
		})
		builder.addCase(getIssue.fulfilled, (state, action) => {
			state.getIssue.loading = false
			state.getIssue.done = true
			state.getIssue.err = null
			state.issue = action.payload
		})
		builder.addCase(getIssue.rejected, (state, action) => {
			state.getIssue.loading = false
			state.getIssue.done = true
			state.getIssue.err = action.payload
		})
	},
})

export const getIssue = createAsyncThunk('issue/getIssue', async () => {
	try {
		const res = await mainApi.getApi()
		console.log('getApi', res.data)
		return res.data
	} catch (err) {
		console.log(err)
		return err
	}
})
