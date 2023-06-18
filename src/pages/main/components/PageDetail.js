import { useDispatch, useSelector } from 'react-redux'
import { getIssueDetail } from '../../../reducer/issue'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

const PageDetail = () => {
	const dispatch = useDispatch()
	const { number } = useParams()
	const issueDetail = useSelector(state => state.issue.issueDetail)
	const { title, user, created_at, updated_at, body, comments } =
		issueDetail || {}

	console.log('pageDetail', issueDetail)

	useEffect(() => {
		dispatch(getIssueDetail(number))
	}, [dispatch, number])

	return (
		<Wrapper>
			<Title>Title: {title}</Title>
			<Comments>comments: {comments}</Comments>
			<Created_at>created_at:{created_at}</Created_at>
			<Updated_at>updated_at:{updated_at}</Updated_at>
			<ReactMarkdown>{body || ''}</ReactMarkdown>
			<Bar></Bar>
			<UserWrapper>
				<UserAvata src={user?.avatar_url} />
				<UserId>{user.login}</UserId>
			</UserWrapper>
		</Wrapper>
	)
}

export default PageDetail

const Wrapper = styled.div`
	background-color: #1a1a1a;
	width: 100%;
	height: 100%;
	color: white;
	padding-left: 30px;
	padding-top: 30px;
`

const Title = styled.p`
	font-size: 40px;
	margin-top: 80px;
`

const Created_at = styled.div`
	margin-bottom: 10px;
`

const Updated_at = styled.div`
	margin-bottom: 150px;
`
const UserAvata = styled.img`
	width: 100px;
	border-radius: 60px;
	margin: 0 64px 0 64px;
`

const Bar = styled.div`
	width: 90%;
	height: 1px;
	margin: 30px;
	background-color: gray;
`

const UserWrapper = styled.div`
	display: flex;
	margin-top: 120px;
	padding-bottom: 80px;
`

const UserId = styled.div`
	margin-right: 30px;
	font-size: 48px;
`

const Comments = styled.div`
	font-size: 22px;
	margin-bottom: 20px;
`
