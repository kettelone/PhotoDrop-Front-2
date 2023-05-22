import { $host } from './index'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

class Album {
	public async getAlbums() {
		const token = cookies.get('jwt_authorization')
		try {
			const { data } = await $host.get('/api/albums', {
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
			console.log(data)
			return data
		} catch (e) {
			console.log(e)
		}
		return
	}

	public async createAlbum(name: string, location: string, date: string) {
		const token = cookies.get('jwt_authorization')
		try {
			const response = await $host.post(
				'/api/albums',
				{
					albumName: name,
					location: location,
					date: date
				},
				{
					headers: {
						Authorization: `Bearer ${token}`
					}
				}
			)
		} catch (e) {
			console.log(e)
		}
	}
}

export default new Album()
