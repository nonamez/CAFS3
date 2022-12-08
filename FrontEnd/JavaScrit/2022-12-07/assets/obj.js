// for-in
// Sukurkite objektą green: žalia, red: raudona, blue: mėlyna. Parodykite šio objekto raktus ir elementus.

let colors = {
	green: 'žalia',
	red: 'raudona',
	blue: 'mėlyna'
};

console.log(colors);

for (let key in colors) {
	console.log('key: ', key, ' value:', colors[key]);
}

// Sukurkite objektą su raktais Mantas, Paulius, Mindaugas ir reikšmėm 200, 300, 300.
// Parodykite eilutes tokiu formatu: Mantas - 200 EU atlyginimas.

let users = {
	Mantas: 200,
	Paulius: 300,
	Mindaugas: 300,
}

for (let name in users) {
	console.log(`${name} - ${users[name]} EU atlyginimas`);
}

// Sukurkite objektą su savaitės dienomis. 
// Raktai jame turėtų būti dienų skaičiai nuo savaitės pradžios 
// (1 -> pirmadienis ir t.t.). 
// Parodykite dabartinę savaitės dieną.

let week = {
	1: 'Monday',
	2: 'Tuesday',
	3: 'Wednesday',
	4: 'Thursday',
	5: 'Friday',
	6: 'Saturday',
	0: 'Sunday'
}

console.log(week[(new Date).getDay()]);