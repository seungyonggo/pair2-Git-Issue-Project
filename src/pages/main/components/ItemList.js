import OneItem from './OneItem'
import styled from 'styled-components'

const ItemList = ({ data }) => {
	console.log('itemList', data)

	return (
		<S.Wrapper>
			{/* {data.map(item => {
				return <OneItem key={Math.floor(Math.random() * 1000000)} item={itme} />
			})} */}
			{data.map(item => {
				return <OneItem key={item.id} data={item} />
			})}
			{/* <OneItem data={data}></OneItem> */}
		</S.Wrapper>
	) // number , title, update_at, user.login,
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
