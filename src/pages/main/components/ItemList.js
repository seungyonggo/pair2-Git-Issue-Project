import OneItem from './OneItem'
import styled from 'styled-components'
const ItemList = () => {
	return (
		<S.Wrapper>
			<OneItem />
			<OneItem />
			<OneItem />
			<OneItem />
			<OneItem />
			<OneItem />
			<OneItem />
			<OneItem />
			<OneItem />
			<OneItem />
		</S.Wrapper>
	)
}

export default ItemList

const Wrapper = styled.div`
	margin: 0 auto;
	width: 80%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

const S = {
	Wrapper,
}
