import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Header = () => {
	const navigate = useNavigate()
	const MainNavigater = () => {
		navigate('/')
	}

	return (
		<S.Wrapper>
			<S.LogoContainer onClick={MainNavigater}>
				<S.Logo src="/image/logo.png" />
				<S.Title src="/image/titleLogo.png" />
			</S.LogoContainer>
		</S.Wrapper>
	)
}

export default Header

const Wrapper = styled.div`
	height: 100px;
	width: 100%;
	background-color: black;
	border-bottom: 1px solid white;
	display: flex;
	justify-content: space-between;
`

const Logo = styled.img`
	width: 60px;
	filter: invert(100%);
`

const Title = styled.img`
	height: 30px;
	filter: invert(100%);
`
const LogoContainer = styled.div`
	margin-left: 20px;
	width: 200px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
`

const S = {
	Wrapper,
	LogoContainer,
	Title,
	Logo,
}
