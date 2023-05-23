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
			return data.albums
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
					date: new Date(date).toLocaleDateString('en-GB')
				},
				{
					headers: {
						Authorization: `Bearer ${token}`
					}
				}
			)
			console.log(response)
			if (response.status === 200) {
				return true
			}
			return false
		} catch (e) {
			console.log(e)
		}
	}
}

export default new Album()
