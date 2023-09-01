// implémentationde l'API 

const HEADERS = {
	'Content-Type': 'application/json',
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Headers':
		'Origin, X-Requested-With, Content-Type, Accept',
};
const API_BASE_URL =
	/*process.env.NEXT_PUBLIC_API_BASE_URL ??*/ 'http://localhost:8080';
//
const post = async (url: string, body: object, token = '') => {
	const res = await fetch(`${API_BASE_URL}/${url}`, {
		method: 'POST',
		headers: token ? { ...HEADERS, Authorization: `Bearer ${token}` } : HEADERS,
		body: JSON.stringify(body),
	});
	return await res.json();
};

const put = async (url: string, body: object, token = '') => {
	const res = await fetch(`${API_BASE_URL}/${url}`, {
		method: 'PUT',
		headers: token ? { ...HEADERS, Authorization: `Bearer ${token}` } : HEADERS,
		body: JSON.stringify(body),
	});
	return await res.json();
};

const get = async (url: string, token = '') => {
	const res = await fetch(`${API_BASE_URL}/${url}`, {
		method: 'GET',
		headers: token ? { ...HEADERS, Authorization: `Bearer ${token}` } : HEADERS,
	});
	return await res.json();
};

export { post, get, put };