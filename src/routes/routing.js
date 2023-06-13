import Layout from '../components/Layout'
import { createBrowserRouter } from 'react-router-dom'
import MainPage from '../pages/main'

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <MainPage />,
			},
		],
	},
])

export default router
