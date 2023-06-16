import styled from 'styled-components'

const OneItem = ({ data }) => {
	const { number, title, updated_at, user, comments, created_at } = data
	// console.log('oneitem', data)
	return (
		<S.Wrapper>
			<S.Number>넘버 : {'#' + number}</S.Number>
			<S.Title>제목 : {title}</S.Title>
			<S.User>유저 이름 : {user.login}</S.User>
			<S.comments>댓글 수 : {comments}</S.comments>
			<S.created_at>생성 날짜 : {created_at}</S.created_at>
			<S.UpdatedAt>업데이트 날짜 : {updated_at}</S.UpdatedAt>
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
const comments = styled.div``
const created_at = styled.div``

const S = {
	Wrapper,
	Number,
	Title,
	UpdatedAt,
	User,
	comments,
	created_at,
}
