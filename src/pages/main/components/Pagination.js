import { useState } from 'react'
import { useParams, useNavigate, useSearchParams } from 'react-router-dom'

const Pagination = ({ pages }) => {
	const pageNumbers = Array.from({ length: 10 }, (_, i) => i + 1) // Example: for pages=5, [1, 2, 3, 4, 5]
	const navigate = useNavigate()
	const { page: currentPage = '1' } = useParams()
	const [searchParams, setSearchParams] = useSearchParams()
	const limit = searchParams.get('limit') || 10
	const sort = searchParams.get('sort') || 'updated_at'
	const handlePageChange = page => {
		navigate(`/page/${page}?sort=${sort}&limit=${limit}`)
	}

	const [currentPageGroup, setCurrentPageGroup] = useState(
		Math.ceil(currentPage / 10),
	)
	console.log('currentPage', currentPage)

	const onPreviousPageGroup = () => {
		if (currentPageGroup === 1) {
			return
		}
		return setCurrentPageGroup(currentPageGroup - 1)
	}
	console.log(currentPageGroup)

	const onNextPageGroup = () => {
		if (currentPageGroup === 2) {
			return
		}
		return setCurrentPageGroup(currentPageGroup + 1)
	}

	const onMaxNext = () => {
		if (currentPage < pages) {
			// 맨끝 페이지 버튼
			navigate(`/page/${pages.length}`)
		}
	}
	return (
		<div>
			<button onClick={onPreviousPageGroup}>{'<'}</button>
			{pageNumbers.map((page, index) => {
				let pageNumber
				if (currentPageGroup === 1) {
					pageNumber = index + 1
				} else {
					pageNumber = index + 11
				}
				return (
					<button key={page} onClick={() => handlePageChange(pageNumber)}>
						{pageNumber}
					</button>
				)
			})}
			<button onClick={onNextPageGroup}>{'>'}</button>
		</div>
	)
}

export default Pagination
