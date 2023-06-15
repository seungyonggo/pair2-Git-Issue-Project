import styled from 'styled-components'

const OneItem = ({ data }) => {
	const { number, title, updated_at, user } = data
	console.log('oneitem', data)
	return (
		<S.Wrapper>
			<S.Number>{'#' + number}</S.Number>
			<S.Title>{title}</S.Title>
			<S.UpdatedAt>{updated_at}</S.UpdatedAt>
			<S.User>{user.login}</S.User>
		</S.Wrapper>
	)
}
export default OneItem

const Wrapper = styled.div`
	width: 750px;
	height: 200px;
	margin-top: 15px;
	margin-bottom: 15px;
	border-radius: 20px;
	border: 0.1rem solid #888;
	padding: 20px;
	color: white;
	font-size: 17px;
	:hover {
		background-color: #444;
	}
`

const Number = styled.div``
const Title = styled.div``
const UpdatedAt = styled.div``
const User = styled.div``

const S = {
	Wrapper,
	Number,
	Title,
	UpdatedAt,
	User,
}
