import Layout from '../components/Layout'
import { createBrowserRouter } from 'react-router-dom'
import MainPage from '../pages/main'
import PageDetail from '../pages/main/components/PageDetail'

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <MainPage />,
			},
			{
				path: '/page/:page',
				element: <MainPage />,
			},
			{
				path: '/pageDetail/:id',
				element: <PageDetail />,
			},
		],
	},
])

export default router
