let userArr = [
	'Kiril', // Name
	'Klaipeda', // City
	31 // Age
];

let userArrFromNew = new Array('Kiril', 'Klaipeda', 31);

console.log(userArr, userArrFromNew, userArr[0], userArrFromNew[0]);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types

// Literal Object
let userObj = {
	name: 'Kiril',
	age: 31,
	city: 'Klaipeda',

	sayHelloWorld: function() {
		return 'Hello World';
	},

	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions
	greetings() {
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
		return `Hello, my name is ${this.name}`;
	}
};

userObj.name = 'Andrius';
userObj.getKeys = function() {
	return Object.keys(this);
};

console.log(userObj, userObj.name);
console.log(userObj.sayHelloWorld());
console.log(userObj.greetings());
console.log(userObj.getKeys());
