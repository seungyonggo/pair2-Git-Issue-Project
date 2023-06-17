import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getIssue } from '../../reducer/issue'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import ItemList from './components/ItemList'
import styled from 'styled-components'
import Pagination from './components/Pagination'

const MainPage = () => {
	const dispatch = useDispatch()
	const loading = useSelector(state => state.issue.getIssueState.loading)
	const issues = useSelector(state => state.issue.issue)
	let { page } = useParams()
	const [searchParams, setSearchParams] = useSearchParams()
	const sort = searchParams.get('sort') || 'updated_at'
	const limit = searchParams.get('limit') || 10
	const navigate = useNavigate()

	const res = useSelector(state => state.issue.issue)

	const handleLimitChange = event => {
		const newLimit = parseInt(event.target.value, 10)
		if (page === undefined) {
			return (page = 1)
		}
		navigate(`/page/${page}?sort=${sort}&limit=${newLimit}`)
	}

	useEffect(() => {
		dispatch(getIssue({ page, sort, limit }))
	}, [page, limit, dispatch, sort])

	const handleSortChange = event => {
		const newSort = event.target.value
		if (page === undefined) {
			return (page = 1)
		}
		navigate(`/page/${page}?sort=${newSort}&limit=${limit}`)
	}

	return (
		<>
			{loading ? (
				<S.Loader>🖐로딩중~~~~~🖐</S.Loader>
			) : (
				<ItemList data={issues} />
			)}
			<S.wrapper>
				<S.optionWrapper>
					<S.pageSelect onChange={handleSortChange}>
						<option value="updated_at">업데이트순</option>
						<option value="comments">댓글순</option>
						<option value="created_at">생성순</option>
					</S.pageSelect>
					<S.pageSelect value={limit} onChange={handleLimitChange}>
						<option value={10}>10개</option>
						<option value={20}>20개</option>
						<option value={50}>50개</option>
					</S.pageSelect>
					<Pagination />
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

	@media (max-width: 767px) {
	}
`

const optionWrapper = styled.div`
	display: flex;

	@media (max-width: 767px) {
		align-items: center;
		display: flex;
	}
`

const pageSelect = styled.select`
	margin-right: 10px;

	@media (max-width: 767px) {
		width: 100px;
	}
	@media (max-width: 526px) {
		width: 80px;
	}
`
const Loader = styled.div`
	display: flex;
	justify-content: center;
	color: white;
	align-items: center;
	height: 100vh;
	font-size: 20px;
`

const S = {
	wrapper,
	optionWrapper,
	pageSelect,
	Loader,
}
