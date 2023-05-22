import { $host } from './index'
import { cookies } from './loginService'

class Photo {
	public async uploadPhotos(albumId: string, images: Array<any>) {
		try {
			const token = cookies.get('jwt_authorization')
			const data = await $host.post(
				'/info/addPhoto',
				{
					imageNames: images
				},
				{
					headers: {
						Authorization: `Bearer ${token}`
					},
					params: {
						albumID: albumId
					}
				}
			)
			return data.data[0]
		} catch (e) {
			console.log(e)
		}
	}

	public async getAll(albumId: string) {
		try {
			const token = cookies.get('jwt_authorization')
			const data = await $host.get('/info/photos', {
				headers: {
					Authorization: `Bearer ${token}`
				},
				params: {
					albumID: albumId
				}
			})

			return data
		} catch (e) {
			console.log(e)
		}
		return
	}

	public async getOne(photoID: string) {
		try {
			const token = cookies.get('jwt_authorization')
			const image = await $host.get('/info/getPhoto', {
				headers: {
					Authorization: `Bearer ${token}`
				},
				params: {
					photoID: photoID
				}
			})
			return image.data
		} catch (e) {}
	}

	public async addPerson(photoID: string, phoneNumbers: string) {
		try {
			const token = cookies.get('jwt_authorization')
			const phoneArr = phoneNumbers
				.trim()
				.split(/[^\d]+/)
				.filter((el) => el.length > 1)
			console.log(photoID, phoneArr)
			const response = await $host.post(
				'/info/addUsers',
				{
					phones: phoneArr
				},
				{
					headers: {
						Authorization: `Bearer ${token}`
					},
					params: {
						photoID: photoID
					}
				}
			)
			console.log({ response })
			return response
		} catch (e) {}
	}
}

export default new Photo()
