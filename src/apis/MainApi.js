import { axiosInstance } from './core'

export const mainApi = {
	//page => 해당페이지, 페이지네이션 버튼을 누르면 page가 숫자를 담고 해당 페이지로 이동
	//limit => 페이지당 몇개의 이슈를 보여줄 건지 => 필터할때 10,20,30개 할때 limit 조정
	getApi(page, limit, sort) {
		return axiosInstance.get(
			`/repos/angular/angular-cli/issues?page=${page}&per_page=${limit}&sort=${sort}`,
		)
	},
	getDetailApi(number) {
		return axiosInstance.get(`/repos/angular/angular-cli/issues/${number}`)
	},
}
