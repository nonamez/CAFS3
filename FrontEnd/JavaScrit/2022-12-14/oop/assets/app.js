const userUsingClassK = new UserUsingClass('Kiril', 'Klaipeda', 31);

// console.log(userUsingClassK, userUsingClassK.name, userUsingClassK.city, userUsingClassK.age, userUsingClassK.shout(), userUsingClassK.getBirthdayYear());

const userUsingClassA = new UserUsingClass('Andrius', 'Vilnius', 30);

// console.log(userUsingClassA, userUsingClassA.name, userUsingClassA.city, userUsingClassA.age, userUsingClassA.shout(), userUsingClassA.getBirthdayYear());

let userUsingFunctionM = new UserUsingFunction('Mykolas', 'Nida', 40);

let users = [
	userUsingClassK,
	userUsingClassA,
	new UserUsingClass('Bronius', 'Pasvalis', 50),
	new UserUsingFunction('Darius', 'Kaunas', 40),
	userUsingFunctionM
];

for (let u of users) {
	console.log(u, u.name, u.city, u.age, u.shout(), u.getBirthdayYear());
}