import { axiosInstance } from './core'

export const mainApi = {
	getApi() {
		return axiosInstance.get(
			'/repos/angular/angular-cli/issues?page=5&per_page=10',
		)
	},
}
