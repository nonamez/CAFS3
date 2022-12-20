// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest
function loadPostsViaXMLHttpRequest() {
	console.log('loadPostsViaXMLHttpRequest');

	let xhr = new XMLHttpRequest();

	// https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event
	xhr.addEventListener('load', function() {
		// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
		if (this.readyState === XMLHttpRequest.DONE) {
			// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/status
			if (this.status == 200) {
				// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseText
				let data = JSON.parse(this.responseText);

				console.log(data);
			}
		}
	});

	xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');

	xhr.send();
}