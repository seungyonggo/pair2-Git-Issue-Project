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

	const pageCount = () => {
		return Math.ceil(res.length / limit)
	}

	const handleLimitChange = event => {
		const newLimit = parseInt(event.target.value, 10)
		setLimit(newLimit)
	}

	useEffect(() => {
		dispatch(getIssue({ page: page || 1, limit })) // page가 정의되지 않은 경우 기본값 1 사용
	}, [page, limit, dispatch])

	return (
		<>
			{<ItemList data={res} />}
			<select value={limit} onChange={handleLimitChange}>
				<option value={10}>10</option>
				<option value={20}>20</option>
				<option value={30}>30</option>
			</select>
			{/* Inside the return statement of MainPage component */};
			{/* {res.map(item => (
			<ItemList data={item} />
		))} */}
			<Pagination limit={limit} pages={10} />
		</>
	)
}
export default MainPage
// import { useEffect, useState } from 'react'
// import ItemList from './components/ItemList'
// import { useDispatch, useSelector } from 'react-redux'
// import { getIssue } from '../../reducer/issue'
// import Pagination from '../../components/Pagination'
// const MainPage = () => {
// 	const dispatch = useDispatch()
// 	const [isLoading, setIsLoading] = useState(true)
// 	const [limit, setLimit] = useState(10)
// 	const [page, setPage] = useState(1)
// 	const [totalItems, setTotalItems] = useState(0)
// 	const issue = useSelector(state => state.issue.issue)

// 	useEffect(() => {
// 		dispatch(getIssue(page, limit))
// 			.then(response => {
// 				setTotalItems(response.total || 0)
// 				setIsLoading(false)
// 			})
// 			.catch(error => {
// 				setIsLoading(false)
// 			})
// 	}, [page, limit])

// 	return (
// 		<>
// 			{!isLoading && <ItemList data={issue} limit={limit} page={page} />}
// 			<Pagination
// 				total={totalItems}
// 				limit={limit}
// 				page={page}
// 				setPage={setPage}
// 			/>
// 		</>
// 	)
// }
// export default MainPage
