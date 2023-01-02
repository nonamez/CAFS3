const notifier = require('node-notifier');

for (let i = 1; i <= 3; i++) {
	setTimeout(() => {
		const message = 'My number: ' + i;

		console.log(message);

		notifier.notify({
			title: 'Notification',
			message,
		});
	}, i * 1000);
}