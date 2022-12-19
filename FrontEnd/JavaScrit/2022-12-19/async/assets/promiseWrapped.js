function randomIntFromInterval(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

const networkRequestUserCreate = (name, email, callback) => {
	const seconds = randomIntFromInterval(2, 5);

	console.log('networkRequest STARTED', {seconds});

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

		callback(false, response);

		console.log('networkRequest after resolve');
	}, seconds * 1000);
}

document?.querySelector('button').addEventListener('click', async function() {
	let userCreatePromise = new Promise(function(resolve, reject) {
		networkRequestUserCreate('Kiril', 'hello@nonamez.name', function(err, response) {
			if (err) {
				console.error(err);
				return;
			}

			// email send
			(function() {
				response.function_1 = true;

				// email verification
				(function() {
					response.function_2 = true;

					if (response.status == 201) {
						resolve(response);
					} else {
						reject(response);
					}
				})();
			})();
		});
	});

	// userCreatePromise.then(response => {
	// 	console.log('then => ', response);
	// }).catch(err => {
	// 	console.err(err);
	// });
	// 
	const userResponse = await userCreatePromise;

	console.log(userResponse);
});
