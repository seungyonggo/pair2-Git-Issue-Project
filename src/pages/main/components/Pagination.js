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
