// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
class UserUsingClass {
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor
	constructor(name, city, age) {
		this.name = name;
		this.city = city;
		this.age = age;
	}

	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions
	sayHelloWorld() {
		return 'Hello World';
	}

	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions
	greetings() {
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
		return `Hello, my name is ${this.name}`;
	}

	shout(someValue = 'none') {
		return [
			someValue,
			this.sayHelloWorld(),
			this.greetings()
		];
	}

	getBirthdayYear() {
		return (new Date()).getFullYear() - this.age;
	}
}