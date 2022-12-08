function pluPlusUsingFor(number, times) {
	for (let i = 0; i < times; i++) {
		number++;
	}

	return number;
}

console.log(pluPlusUsingFor(10, 3));

function pluPlusUsingWhile(number, times) {
	let i = 0;

	while (i < times) {
		i++;

		number = number + 1;
	}

	return number;
}

console.log(pluPlusUsingWhile(10, 3));

function pluPlusUsingDoWhile(number, times) {
	let i = 0;

	do {
		i++;

		number += 1;
	} while (i < times);

	return number;
}

console.log(pluPlusUsingWhile(10, 3));

function pluPlusUsingRecursion(number, times) {
	if (parseInt(times) === times && times >= 1) {
		number++;

		number = pluPlusUsingRecursion(number, --times);
	}

	return number; 
}

console.log(pluPlusUsingRecursion(10, 0));
console.log(pluPlusUsingRecursion(10, 'a'));