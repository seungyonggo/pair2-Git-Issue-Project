import { useEffect, useState } from 'react'
import ItemList from './components/ItemList'
import { useDispatch } from 'react-redux'
import { getIssue } from '../../reducer/issue'
const MainPage = () => {
	const dispatch = useDispatch()
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		dispatch(getIssue())
	}, [])

	return !isLoading && <ItemList></ItemList>
}
export default MainPage
