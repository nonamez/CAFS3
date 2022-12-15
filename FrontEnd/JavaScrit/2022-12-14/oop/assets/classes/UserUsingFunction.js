function UserUsingFunction(name, city, age) {
	this.name = name;
	this.city = city;
	this.age = age;

	this.sayHelloWorld = function() {
		return 'Hello World';
	}

	this.greetings = function() {
		return `Hello, my name is ${this.name}`;
	}

	this.shout = function(someValue = 'none') {
		return [
			someValue,
			this.sayHelloWorld(),
			this.greetings()
		];
	}

	this.getBirthdayYear = function() {
		return (new Date()).getFullYear() - this.age;
	}
}