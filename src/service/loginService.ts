import { $host } from './index'
import Cookies from 'universal-cookie'

export const cookies = new Cookies()

class Auth {
	public async login(login: string, password: string) {
		try {
			const response = await $host.post('/api/auth/singIn', {
				login: login,
				password: password
			})
			const { token, id } = response.data
			//Set cookie
			cookies.set('jwt_authorization', token)
			return id
		} catch (e) {
			return false
		}
	}
}

export default new Auth()
