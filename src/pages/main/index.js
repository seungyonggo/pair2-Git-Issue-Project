import { useEffect, useState } from 'react'
import ItemList from './components/ItemList'
import { useDispatch } from 'react-redux'
import { getIssue } from '../../reducer/issue'
const MainPage = () => {
	const dispatch = useDispatch()
	const [isLoading, setIsLoading] = useState(true)
	const [limit, setLimit] = useState(10)
	const [page, setPage] = useState(1)

	useEffect(() => {
		dispatch(getIssue(page, limit))
	}, [])

	return !isLoading && <ItemList />
}
export default MainPage
