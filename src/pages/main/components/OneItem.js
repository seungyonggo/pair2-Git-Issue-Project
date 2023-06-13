import styled from 'styled-components'

const OneItem = () => {
	return <S.Wrapper>이슈 들어가는 곳</S.Wrapper>
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

const S = {
	Wrapper,
}
