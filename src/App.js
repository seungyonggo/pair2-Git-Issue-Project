import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/routing'
import { Provider } from 'react-redux'
import { store } from './store/Store'
function App() {
	return (
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	)
}

export default App
