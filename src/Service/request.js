import fetch from 'isomorphic-fetch';

export function getToken() {
	const info = localStorage.getItem('token');
  // return info ? JSON.parse(info).token : '';
	return info;
}

function checkStatus(response) {
	if (!(response.status >= 200 && response.status <= 300)) {
	} else {
		return response;
	}
	const error = new Error(response.statusText);
	error.response = response;
	Promise.reject(error);
}

function parseJson(response) {
	const jresult = response.json();
	return jresult;
}

export function fetchPost(url, header, params) {
	const options = {
		method: 'POST',
		headers: {
			...header,
			Accept: 'application/json;charset=UTF-8',
			'Content-Type': 'application/json;charset=UTF-8',
		},
		body: JSON.stringify(params),
	};
	return request(url, options);
}

function request(url, options) {
	return Promise.race([
		fetch(url, options)
		.then(checkStatus)
		.then(parseJson),
		new Promise((resolve, reject) => {
			setTimeout(() => reject(new Error('request timeout')), 30 * 1000);
		}),
	]);
}
