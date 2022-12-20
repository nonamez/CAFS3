// https://api.jquery.com/jquery.ajax/#jQuery-ajax-url-settings

function loadPostsViajQueryV1() {
	console.log('loadPostsViajQueryV1');

	const options = {
		url: 'https://jsonplaceholder.typicode.com/posts',

		beforeSend() {
			console.log('show loader');
		},

		complete() {
			console.log('hide loader');
		},

		success(data) {
			console.log('success', data);
		}
	};

	jQuery.ajax(options);
}

function loadPostsViajQueryV2() {
	console.log('loadPostsViajQueryV2');

	jQuery.ajax({
		url: 'https://jsonplaceholder.typicode.com/posts',
		dataType: 'json'
	}).done(function(data) {
		console.log('done', data);
	});
}

function loadPostsViajQueryV3() {
	console.log('loadPostsViajQueryV3');
	
	jQuery.getJSON('https://jsonplaceholder.typicode.com/posts', function(data) {
		console.log(data);
	});
}