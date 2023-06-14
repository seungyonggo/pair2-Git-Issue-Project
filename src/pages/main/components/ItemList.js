import OneItem from './OneItem'
import styled from 'styled-components'

const ItemList = ({ data }) => {
	console.log(data)

	return (
		<S.Wrapper>
			{data.map(item => {
				return <OneItem key={Math.floor(Math.random() * 1000000)} item={item} />
			})}
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

// import React from 'react'
// import OneItem from './OneItem'
// import styled from 'styled-components'

// const ItemList = ({ data, limit, page }) => {
// 	console.log(data)
// 	const startIndex = (page - 1) * limit
// 	const endIndex = startIndex + limit
// 	const slicedData = data.slice(startIndex, endIndex)

// 	return (
// 		<Wrapper>
// 			{data.length > 0 ? (
// 				slicedData.map(item => (
// 					<OneItem key={Math.floor(Math.random() * 1000000)} item={item} />
// 				))
// 			) : (
// 				<div>No items to display</div>
// 			)}
// 		</Wrapper>
// 	)
// }

// const Wrapper = styled.div`
// 	margin: 0 auto;
// 	width: 80%;
// 	display: flex;
// 	flex-direction: column;
// 	justify-content: center;
// 	align-items: center;
// `

// // const S = {
// // 	Wrapper,
// // }

// export default ItemList
// const ItemList = ({ data, limit, page }) => {
// 	console.log(data)
// 	const startIndex = (page - 1) * limit
// 	const endIndex = startIndex + limit
// 	const slicedData = data.slice(startIndex, endIndex)
// 	return (
// 		<S.Wrapper>
// 			{slicedData.map(item => {
// 				return <OneItem key={Math.floor(Math.random() * 1000000)} item={item} />
// 			})}
// 		</S.Wrapper>
// 	) // number , title, update_at, user.login,
// }
