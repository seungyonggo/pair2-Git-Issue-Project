import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getIssue } from '../../reducer/issue'
import Pagination from './components/Pagination'
import { useParams } from 'react-router-dom' // 추가
import ItemList from './components/ItemList'

const MainPage = () => {
	const dispatch = useDispatch()
	const [isLoading, setIsLoading] = useState(true)
	const [limit, setLimit] = useState(10)
	const { page } = useParams() // 추가

	const res = useSelector(state => state.issue.issue)
	console.log('index Main', res)

	useEffect(() => {
		dispatch(getIssue({ page: page || 1, limit })) // page가 정의되지 않은 경우 기본값 1 사용
	}, [page, limit, dispatch])

	return (
		<>
			<ItemList data={res} />
			{/* {res.map(item => (
				<ItemList data={item} />
			))} */}
			<Pagination limit={limit} pages={10} />
		</>
	)
}
export default MainPage
