// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new

let userObj = new Object();

userObj.name = 'Kiril';
userObj.age = 31;
userObj.city = 'Klaipeda';

userObj.sayHelloWorld = function() {
	return 'Hello World';
};

userObj.greetings = function() {
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
	return `Hello, my name is ${this.name}`;
};

userObj.shout = function(someValue) {
	return [
		someValue,
		this.sayHelloWorld(),
		this.greetings()
	];
}

console.log(userObj.shout(123));