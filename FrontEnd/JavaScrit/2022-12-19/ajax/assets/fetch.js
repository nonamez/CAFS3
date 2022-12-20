// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

function loadPostsViaFetch() {
	console.log('loadPostsViaFetch');

	fetch('https://jsonplaceholder.typicode.com/posts')
		// https://developer.mozilla.org/en-US/docs/Web/API/Response/json
		.then(response => response.json())
		.then(data => console.log(data));
}