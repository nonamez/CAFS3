function randomIntFromInterval(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

const networkRequestUserCreate = (name, email) => {
	const seconds = randomIntFromInterval(2, 5);

	console.log('networkRequest STARTED', {seconds});

	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
	return new Promise(function(resolve, reject) {
		console.log('networkRequest Promise enetered', {seconds});

		setTimeout(() => {
			const status = Math.random() < 0.5;

			console.log('networkRequest ENDED', {seconds, status});

			const response = {
				data: {
					id: 5,
					name,
					email
				},
				status: status ? 201 : 500,
				message: status ? 'User created seccesfully' : 'Error',
				timestamp: (new Date).toISOString().replace('T', ' ')
			};

			console.log('networkRequest before resolve');

			if (status) {
				resolve(response); // => then
			} else {
				reject(response); // => catch
			}

			console.log('networkRequest after resolve');
		}, seconds * 1000);
	});
}


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
document?.querySelector('button').addEventListener('click', async function() {
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await
	const response = await networkRequestUserCreate('Kiril', 'hello@nonamez.name');

	if (response.status == 201) {
		console.log('success', response);
	} else {
		console.log('other', response);
	}
});
