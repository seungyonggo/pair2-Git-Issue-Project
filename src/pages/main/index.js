import { useEffect, useState } from 'react'
import ItemList from './components/ItemList'
import { mainApi } from '../../apis/MainApi'

const MainPage = () => {
	const [data, setData] = useState()
	const [isLoading, setIsLoading] = useState(true)

	const useMainApi = async () => {
		try {
			const res = await mainApi.getApi()
			setData(res.data)
			console.log('getApi', res.data)
			setIsLoading(false)
		} catch (err) {
			console.log(err)
			setIsLoading(false)
		}
	}

	useEffect(() => {
		useMainApi()
	}, [])
	return !isLoading && data && <ItemList data={data}></ItemList>
}
export default MainPage
