import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from '../reducer'

export const store = configureStore({
	reducer: rootReducer,
	devtools: process.env.NODE_ENV === 'development',
	// middleware: defaultMiddleware => {
	// 	if (process.env.NODE_ENV === 'development') {
	// 		return [...defaultMiddleware(), logger]
	// 	}
	// 	return defaultMiddleware
	// },
})
