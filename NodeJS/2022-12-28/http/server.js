// https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/
// https://nodejs.org/api/http.html

const http = require('node:http');
const fs = require('node:fs');
const fsPromises = require('node:fs/promises');

console.log('Hello World!');

const server = http.createServer(async (request, response) => {
	console.log(request.url, request.headers.referer, request.headers);

	if (request.url == '/text') {
		// https://nodejs.org/api/http.html#responsewriteheadstatuscode-statusmessage-headers
		response.writeHead(200, {
			'Content-Type': 'text/plain'
		});

		// https://nodejs.org/api/http.html#responsewritechunk-encoding-callback
		response.write('Hello World!');
	} else if (['/pricing', '/html'].includes(request.url)) {
		// https://nodejs.org/docs/latest-v18.x/api/fs.html#fsreadfilesyncpath-options
		const data = fs.readFileSync('./pricing.html');

		// https://nodejs.org/api/http.html#responsewriteheadstatuscode-statusmessage-headers
		response.writeHead(200, {
			'Content-Type': 'text/html'
		});

		// https://nodejs.org/api/http.html#responsewritechunk-encoding-callback
  		response.write(data);
	} else if (request.url == '/json') {
		const data = await fsPromises.readFile('./users.json');

		// https://nodejs.org/api/http.html#responsewriteheadstatuscode-statusmessage-headers
		response.writeHead(200, {
			'Content-Type': 'application/json'
		});

		// https://nodejs.org/api/http.html#responsewritechunk-encoding-callback
  		response.write(data); 
	} else {
		// https://nodejs.org/api/http.html#responsewriteheadstatuscode-statusmessage-headers
		response.writeHead(404, {
			'Content-Type': 'text/plain'
		});

		// https://nodejs.org/api/http.html#responsewritechunk-encoding-callback
  		response.write('404 Not Found\n');
	}

	response.end();
});

server.listen(80);