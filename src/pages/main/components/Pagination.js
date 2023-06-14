import { useParams, useNavigate } from 'react-router-dom'

const Pagination = ({ pages, limit }) => {
	const pageNumbers = Array.from({ length: pages }, (_, i) => i + 1) // Example: for pages=5, [1, 2, 3, 4, 5]
	const navigate = useNavigate()
	const { page } = useParams()

	const handlePageChange = page => {
		// page번호를 useParams로 받아와서 그걸 navigate 인자로 받아온다
		navigate(`/page/${page}`)
	}
	// const useNavigate = (page) =>{
	//   navigator()
	// }

	return (
		<div>
			{pageNumbers.map(page => (
				<button key={page} onClick={() => handlePageChange(page)}>
					{page}
				</button>
			))}
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
