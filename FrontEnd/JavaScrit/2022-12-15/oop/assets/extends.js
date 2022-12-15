class Animal {
	constructor(name, sound) {
		this.name = name;
		this.sound = sound;
	}

	getName() {
		return this.name;
	}

	getSound() {
		return this.sound;
	}
}

class Cat extends Animal {
	constructor(name) {
		super(name, 'miau');
	}
}

class Dog extends Animal {
	constructor(name) {
		super(name, 'auauau');
	}
}

class Parrot extends Animal {
	
}

class Psittacus extends Parrot {
	
}

let animals = [
	new Cat('Pukis'),
	new Dog('Reksas', 'au'),
	new Parrot('Alfis', 'cirik'),
	new Psittacus('Baris', 'Hello World'),
];

for (let animal of animals) {
	console.log(animal.getName(), animal.getSound());
}