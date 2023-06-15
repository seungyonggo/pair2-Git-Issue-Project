import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getIssue } from '../../reducer/issue'
import Pagination from './components/Pagination'
import { useParams } from 'react-router-dom'
import ItemList from './components/ItemList'
import styled from 'styled-components'

const MainPage = () => {
	const dispatch = useDispatch()
	const [isLoading, setIsLoading] = useState(true)
	const [limit, setLimit] = useState(10)
	const { page } = useParams()

	const res = useSelector(state => state.issue.issue)
	console.log('index Main', res)

	const handleLimitChange = event => {
		const newLimit = parseInt(event.target.value, 10)
		setLimit(newLimit)
	}

	useEffect(() => {
		dispatch(getIssue({ page: page || 1, limit }))
	}, [page, limit, dispatch])

	const totalItems = res.length // Calculate the total number of items based on the length of 'res'
	const totalPages = Math.ceil(totalItems / limit)
	const visiblePages = totalPages > 1 ? Math.min(totalPages, 8) : 1

	const handlePageClick = page => {
		dispatch(getIssue({ page, limit }))
	}

	return (
		<>
			<ItemList data={res} />
			<S.wrapper>
				<S.optionWrapper>
					<S.pageSelect value={limit} onChange={handleLimitChange}>
						<option value={10}>10개</option>
						<option value={20}>20개</option>
						<option value={30}>30개</option>
					</S.pageSelect>
					{limit === 10 && (
						<Pagination limit={limit} pages={10} onClick={handlePageClick} />
					)}
					{limit === 20 && (
						<Pagination limit={limit} pages={10} onClick={handlePageClick} />
					)}
					{limit === 30 && (
						<Pagination limit={limit} pages={8} onClick={handlePageClick} />
					)}
				</S.optionWrapper>
			</S.wrapper>
		</>
	)
}

export default MainPage

const wrapper = styled.div`
	display: flex;

	width: 100%;
	position: fixed;
	justify-content: center;
	bottom: 20px;
`

const optionWrapper = styled.div`
	display: flex;
`

const pageSelect = styled.select`
	margin-right: 10px;
`

const S = {
	wrapper,
	optionWrapper,
	pageSelect,
}
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
