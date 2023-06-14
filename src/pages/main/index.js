import { useEffect, useState } from 'react'
import ItemList from './components/ItemList'
import { useDispatch, useSelector } from 'react-redux'
import { getIssue } from '../../reducer/issue'
import Pagination from './components/Pagination'
import { useParams } from 'react-router-dom' // 추가

const MainPage = () => {
	const dispatch = useDispatch()
	const [isLoading, setIsLoading] = useState(true)
	const [limit, setLimit] = useState(10)
	const { page } = useParams() // 추가

	const issue = useSelector(state => state.issue.issue)

	useEffect(() => {
		dispatch(getIssue(page || 1, limit)) // page가 정의되지 않은 경우 기본값 1 사용
	}, [page, limit, dispatch])

	return (
		<>
			{!isLoading && <ItemList />}
			<Pagination limit={limit} pages={10} data={issue} />
		</>
	)
}
export default MainPage
