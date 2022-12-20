function loadPostsViaAxiosV1() {
	console.log('loadPostsViaAxiosV1');

	axios('https://jsonplaceholder.typicode.com/posts').then(response => {
		console.log(response, response.data);
	})
}

function loadPostsViaAxiosV2() {
	console.log('loadPostsViaAxiosV2');

	axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
		console.log(response, response.data);
	});
}

async function loadPostsViaAxiosV3() {
	console.log('loadPostsViaAxiosV3');

	let response = await axios.get('https://jsonplaceholder.typicode.com/posts');

	console.log(response.data);
}

window.addEventListener('DOMContentLoaded', (event) => {
	axios.interceptors.request.use(function (config) {
		console.log('Do something before request is sent');
		return config;
	}, function (error) {
		console.log('Do something with request error');
		return Promise.reject(error);
	});

	// Add a response interceptor
	axios.interceptors.response.use(function (response) {
		console.log('Do something with response data');
		return response;
	}, function (error) {
		console.log('Do something with response error');
		return Promise.reject(error);
	});
});