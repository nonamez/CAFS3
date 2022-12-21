const fs = require('node:fs');
const fsPromises = require('node:fs/promises');
const path = require('node:path');

const EXCLUDE_FILES = ['.git'];

module.exports.EXCLUDE_FILES = EXCLUDE_FILES;

function showFilesRecursiveAsync(targetPath, level = 0) {
	// https://nodejs.org/api/fs.html#fsreaddirpath-options-callback
	fs.readdir(
		targetPath,
		
		{
			withFileTypes: true
		},

		(err, files) => {
			if (err) {
				throw err;
			}

			const t = '\t'.repeat(level);

			level++;

			files.forEach(file => {
				if (EXCLUDE_FILES.includes(file.name)) {
					return;
				}

				// https://nodejs.org/api/path.html#pathjoinpaths
				const currentPath = path.join(targetPath, file.name);

				console.log(t + file.name);

				if (!file.isFile()) {
					showFilesRecursiveAsync(currentPath, level)
				}
			});
		}
	);
}

module.exports.showFilesRecursiveAsync = showFilesRecursiveAsync;

function showFilesRecursiveSync(targetPath, level = 0) {
	// https://nodejs.org/docs/latest-v18.x/api/fs.html#fsreaddirsyncpath-options
	const files = fs.readdirSync(
		targetPath,
		
		{
			withFileTypes: true
		},
	);

	const t = '\t'.repeat(level);

	level++;

	files.forEach(file => {
		if (EXCLUDE_FILES.includes(file.name)) {
			return;
		}

		// https://nodejs.org/api/path.html#pathjoinpaths
		const currentPath = path.join(targetPath, file.name);

		console.log(t + file.name);

		if (!file.isFile()) {
			showFilesRecursiveSync(currentPath, level)
		}
	});
}

module.exports.showFilesRecursiveSync = showFilesRecursiveSync;

async function getFilesRecursiveSync(targetPath, excludeFiles = []) {
	const files = await fsPromises.readdir(
		targetPath,
		
		{
			withFileTypes: true
		},
	);

	let paths = [];

	for (let file of files) {
		if (excludeFiles.includes(file.name)) {
			continue;
		}

		// https://nodejs.org/api/path.html#pathjoinpaths
		const currentPath = path.join(targetPath, file.name);

		if (file.isFile()) {
			paths.push(currentPath);
		} else {
			paths = [...paths, ...(await getFilesRecursiveSync(currentPath, excludeFiles))];
		}
	} 

	return paths;
}

module.exports.getFilesRecursiveSync = getFilesRecursiveSync;