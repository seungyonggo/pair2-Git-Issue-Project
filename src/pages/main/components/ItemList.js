import OneItem from './OneItem'
import styled from 'styled-components'
<<<<<<< HEAD
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
=======
const ItemList = ({ data }) => {
	console.log(data)

	return (
		<S.Wrapper>
			{data.map(item => {
				return <OneItem key={Math.floor(Math.random() * 1000000)} item={item} />
			})}
		</S.Wrapper>
	) // number , title, update_at, user.login,

	// return (
	// 	<S.Wrapper>
	// 		<OneItem />
	// 		<OneItem />
	// 		<OneItem />
	// 		<OneItem />
	// 		<OneItem />
	// 		<OneItem />
	// 		<OneItem />
	// 		<OneItem />
	// 		<OneItem />
	// 		<OneItem />
	// 	</S.Wrapper>
	// )
>>>>>>> ba6c96a881a295c75049cd793c481cff6154bb82
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
