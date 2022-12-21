console.log('Hello World');

const files = require('./files');

const path = '/Users/kiril/Works/code-academy';

// files.showFilesRecursiveAsync(path);
// files.showFilesRecursiveSync(path);

(async function() {
	const listFiles = await files.getFilesRecursiveSync(path, files.EXCLUDE_FILES);

	console.log(listFiles);
})();