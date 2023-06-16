import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { mainApi } from '../apis/MainApi'

//api에서 받아온 issue 데이터를 관리하는 state
//issue
const initialState = {
	issue: [], //axios로 데이터가 담김
	getIssueState: {
		//pending, fullfilled, rejected
		loading: false, //T  F  F ==> true => 로딩 페이지를 보여줌(true)
		done: false, //F T T
		err: null, //F F 에러메세지
	},
}

//extraReducer를 사용해 getIssue가 실행되고, axios 상태에 따라
//getIssueState안의 loading, done, err를 바꿔줌
export const issueSlice = createSlice({
	name: 'issue',
	initialState,
	extraReducers: builder => {
		builder.addCase(getIssue.pending, state => {
			state.getIssueState.loading = true
			state.getIssueState.done = false
			state.getIssueState.err = null
		})
		builder.addCase(getIssue.fulfilled, (state, action) => {
			state.issue = action.payload //데이터 담음
			state.getIssueState.loading = false
			state.getIssueState.done = true
			state.getIssueState.err = null
			//성공을 했을 때 => issue데이터가 잘 들어옴 => issue데이터를 넣어줘야함 => usestate x
		})
		builder.addCase(getIssue.rejected, (state, action) => {
			state.getIssueState.loading = false
			state.getIssueState.done = true
			state.getIssueState.err = action.payload
		})
	},
})

//실행될 getIssue 함수
//createAsyncThunk : 첫번째 인자로 준 issue/getIssue에 따라 각각 pending,fulfilled,rejected
//액션 상태를 자동으로 생성한다.
//1. issue/getIssue/pending
//2.issue/getIssue/..
//3.issue/getIssue/...
export const getIssue = createAsyncThunk(
	'issue/getIssue',
	async ({ page, limit, sort }) => {
		console.log('issue', page, limit)
		try {
			const res = await mainApi.getApi(page, limit, sort)
			console.log('getApi', res.data)
			console.log('res', res)
			return res.data
		} catch (err) {
			console.log(err)
			return err
		}
	},
)
// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import { mainApi } from '../apis/MainApi'

// const initialState = {
// 	issue: [],
// 	getIssueState: {
// 		loading: false,
// 		done: false,
// 		err: null,
// 	},
// }

// export const issueSlice = createSlice({
// 	name: 'issue',
// 	initialState,
// 	extraReducers: builder => {
// 		builder.addCase(getIssue.pending, state => {
// 			state.getIssueState.loading = true
// 			state.getIssueState.done = false
// 			state.getIssueState.err = null
// 		})
// 		builder.addCase(getIssue.fulfilled, (state, action) => {
// 			state.getIssueState.loading = false
// 			state.getIssueState.done = true
// 			state.getIssueState.err = null
// 			state.issue = action.payload // load data
// 		})
// 		builder.addCase(getIssue.rejected, (state, action) => {
// 			state.getIssueState.loading = false
// 			state.getIssueState.done = true
// 			state.getIssueState.err = action.payload
// 		})
// 	},
// })
// export const getIssue = createAsyncThunk(
// 	'issue/getIssue',
// 	async ({ page, limit }, thunkAPI) => {
// 		try {
// 			const response = await mainApi.getApi(
// 				`/repos/angular/angular-cli/issues?page=${page}&per_page=${limit}`,
// 			)
// 			return response.data
// 		} catch (error) {
// 			return thunkAPI.rejectWithValue(error.message)
// 		}
// 	},
// )

//api에서 받아온 issue 데이터를 관리하는 state
//issue
// const initialState = {
// 	issue: [], //axios로 데이터가 담김
// 	getIssueState: {
// 		//pending, fullfilled, rejected
// 		loading: false, //T  F  F ==> true => 로딩 페이지를 보여줌(true)
// 		done: false, //F T T
// 		err: null, //F F 에러메세지
// 	},
// }
//extraReducer를 사용해 getIssue가 실행되고, axios 상태에 따라
//getIssueState안의 loading, done, err를 바꿔줌
// export const issueSlice = createSlice({
// 	name: 'issue',
// 	initialState,
// 	extraReducers: builder => {
// 		builder.addCase(getIssue.pending, state => {
// 			state.getIssueState.loading = true
// 			state.getIssueState.done = false
// 			state.getIssueState.err = null
// 		})
// 		builder.addCase(getIssue.fulfilled, (state, action) => {
// 			state.getIssueState.loading = false
// 			state.getIssueState.done = true
// 			state.getIssueState.err = null
// 			//성공을 했을 때 => issue데이터가 잘 들어옴 => issue데이터를 넣어줘야함 => usestate x
// 			state.issue = action.payload //데이터 담음
// 		})
// 		builder.addCase(getIssue.rejected, (state, action) => {
// 			state.getIssueState.loading = false
// 			state.getIssueState.done = true
// 			state.getIssueState.err = action.payload
// 		})
// 	},
// })
//실행될 getIssue 함수
//createAsyncThunk : 첫번째 인자로 준 issue/getIssue에 따라 각각 pending,fulfilled,rejected
//액션 상태를 자동으로 생성한다.
//1. issue/getIssue/pending
//2.issue/getIssue/..
//3.issue/getIssue/...
// export const getIssue = createAsyncThunk(
// 	'issue/getIssue',
// 	async (page, issue) => {
// 		try {
// 			const res = await mainApi.getApi(page, issue)
// 			console.log('getApi', res.data)
// 			console.log('res', res)
// 			return res.data
// 		} catch (err) {
// 			console.log(err)
// 			return err
// 		}
// 	},
// )
