import axios from 'axios';

const url = `api/`;
const config = {
	headers: {
		'Access-Control-Allow-Origin': '*'
	}
};

class Service {
	static getPosts(params = config) {
		return new Promise(async (resolve, rej) => {
			try {
				const res = await axios.get(`${url}posts`, params);
				const data = res.data;
				resolve(
					data.map(item => ({
						...item,
						ttt: 'abc'
					}))
				);

			} catch (err) {
				rej(err);
			}
		})
	}

	static createPost(data, params = config) {
		return axios.post(`${url}posts`, Object.assign(params, data));
	}

	static deletePost(id, params = config) {
		return axios.delete(`${url}posts/${id}`, params);
	}
}

export { Service };