import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = [
	{
		issues: [],
		getIssue: {
			loading: false,
			done: false,
			err: null,
		},
	},
]

export const issueSlice = createSlice({
	name: 'issue',
	initialState,
	extraReducers: builder => {
		builder.getCase(getIssue.pending, state => {
			state.getIssue.loading = true
			state.getIssue.done = false
			state.getIssue.err = null
		})
	},
})

export const getIssue = createAsyncThunk('issue/getIssue', async({}))
