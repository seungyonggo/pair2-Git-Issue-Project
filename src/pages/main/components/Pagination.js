import { useState } from 'react'
import { useParams, useNavigate, useSearchParams } from 'react-router-dom'

const Pagination = ({ pages }) => {
	const pageNumbers = Array.from({ length: 10 }, (_, i) => i + 1) // Example: for pages=5, [1, 2, 3, 4, 5]
	const navigate = useNavigate()
	const { page: currentPage = '1' } = useParams()
	const [searchParams, setSearchParams] = useSearchParams()
	const limit = searchParams.get('limit') || 10
	// console.log('pagenationLimit', limit)
	const sort = searchParams.get('sort') || 'updated_at'
	const handlePageChange = page => {
		navigate(`/page/${page}?sort=${sort}&limit=${limit}`)
	}

	const [currentPageGroup, setCurrentPageGroup] = useState(
		Math.ceil(currentPage / 10),
	)
	console.log('currentPage', currentPage)
	// const handleLimitChange = event => {
	// 	const newLimit = parseInt(event.target.value, 10)
	// 	if (page === undefined) {
	// 		return (page = 1)
	// 	}
	// 	navigate(`/page/${page}?sort=${sort}&limit=${newLimit}`)
	// }

	const onPreviousPageGroup = () => {
		// 이전 그룹버튼
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
// import styled from 'styled-components'

// function Pagination({ total, limit, page, setPage, number }) {
// 	const numPages = Math.ceil(total / limit)
// 	console.log('lulu', total, limit)

// 	return (
// 		<>
// 			<Nav>
// 				<Button
// 					onClick={() => setPage(page - 1)}
// 					disabled={page === 1}
// 				></Button>
// 				{Array(numPages)
// 					.fill()
// 					.map((_, i) => (
// 						<Button
// 							key={number}
// 							onClick={() => setPage(i + 1)}
// 							aria-current={page === i + 1 ? 'page' : null}
// 						>
// 							{i + 1}
// 						</Button>
// 					))}
// 				<Button onClick={() => setPage(page + 1)} disabled={page === numPages}>
// 					&gt;
// 				</Button>
// 			</Nav>
// 		</>
// 	)
// }

// const Nav = styled.nav`
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	gap: 4px;
// 	margin: 16px;
// `

// const Button = styled.button`
// 	border: none;
// 	border-radius: 8px;
// 	padding: 8px;
// 	margin: 0;
// 	background: black;
// 	color: white;
// 	font-size: 1rem;

// 	&:hover {
// 		background: tomato;
// 		cursor: pointer;
// 		transform: translateY(-2px);
// 	}

// 	&[disabled] {
// 		background: grey;
// 		cursor: revert;
// 		transform: revert;
// 	}

// 	&[aria-current] {
// 		background: deeppink;
// 		font-weight: bold;
// 		cursor: revert;
// 		transform: revert;
// 	}
// `

// export default Pagination
