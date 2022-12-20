// https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX

window.addEventListener('DOMContentLoaded', (event) => {
	
	document.querySelectorAll('button[data-type]').forEach(b => {
		b.addEventListener('click', function() {	
			switch (b.getAttribute('data-type')) {
				case 'XMLHttpRequest':
					loadPostsViaXMLHttpRequest();
				break;
				case 'fetch':
					loadPostsViaFetch();
				break;
				case 'jQueryV1':
					loadPostsViajQueryV1();
				break;
				case 'jQueryV2':
					loadPostsViajQueryV2();
				break;
				case 'jQueryV3':
					loadPostsViajQueryV3();
				break;
				case 'axiosV1':
					loadPostsViaAxiosV1();
				break;
				case 'axiosV2':
					loadPostsViaAxiosV2();
				break;
				case 'axiosV3':
					loadPostsViaAxiosV3();
				break;
			}
		});
	});
});