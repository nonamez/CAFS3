// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
console.log('before-try');

try {
	console.log('inside-try-before');
	
	nonExistentFunction();

	console.log('inside-try-after');
} catch (error) {
	console.log('catch');
	
	console.error(error);
}

console.log('after-try');