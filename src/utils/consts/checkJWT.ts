import { cookies } from '../../service/loginService'
import jwtDecode from 'jwt-decode'

const checkToken = () => {
	const token = cookies.get('jwt_authorization')
	if (token) {
		const { exp }: { exp: number } = jwtDecode(token)
		const valid = exp * 1000 > Date.now()
		return valid
	}
	return false
}

export default checkToken
