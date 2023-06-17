import styled from 'styled-components'

const Header = () => {
	return (
		<S.Wrapper>
			<S.LogoContainer>
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
`

const S = {
	Wrapper,
	LogoContainer,
	Title,
	Logo,
}
