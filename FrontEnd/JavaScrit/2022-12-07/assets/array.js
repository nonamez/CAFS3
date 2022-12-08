// Sukurkite masyvą a, b, c. Parodykite masyvą naudodami console.log funkciją.
let arr = ['a', 'b', 'c', 'd'];

console.log(arr);

// Naudodamiesi ankstesnės užduoties masyvu, parodykite pirmojo, antrojo ir trečiojo elementų turinį.
// Sukurkite masyvą a, b, c, d ir naudodami jį parodykite eilutė a + b, c + d.

console.log(arr[0] + ' + ' + arr[1] + ',' + arr[2] + ' + ' + arr[3]);

// Sukurkite masyvą su elementais 2, 5, 3, 9. 
// Pirmąjį masyvo elementą padauginkite iš antrojo, o trečiąjį elementą iš ketvirtojo. 
// Sudėkite rezultatus, priskirkite kintamąjam. Parodykite šio kintamojo reikšmę.

let arr = [2, 5, 3, 9];

let result = (arr[0] * arr[1] + arr[2] * arr[3]);

console.log(result);

// Daugialypiai masyvai
// Yra pateiktas masyvas [[1, 2, 3], [4, 5, 6], [7,8,9]]. Parodykite skaičių 4 iš šio masyvo.
let arr = [
	[1, 2, 3],
	[4, 5, 6], 
	[7, 8, 9]
];

console.log(arr[1][0]);

// Duoti du masyvai: 1, 2, 3 ir 4, 5, 6. Sujunkite juos.
let arr_a = [1, 2, 3],
	arr_b = [4, 5, 6];

console.log(arr_a.concat(arr_b));

// Duotas masyvas 1, 2, 3. Iš jo padarykite masyvą 3, 2, 1.
let arr = [1, 2, 3];

console.log(arr.reverse());

// Duotas masyvas 1, 2, 3. Pridėkite elementus 4, 5, 6 į galą ir -1, -2, -3 į priekį.
let arr = [1, 2, 3];

arr.push(4, 5, 6);
arr.unshift(-1, -2, -3);

// Duotas masyvas html, css, js. Parodykite pirmąjį ir paskutinį elementus.

arr = ['html', 'css', 'js', 'php', 'python'];

console.log(arr);

console.log(arr[0]);
console.log(arr[arr.length - 1]);

console.log(arr);

console.log(arr.shift());
console.log(arr.pop());

console.log(arr);

// Duotas masyvas 3, 4, 1, 2, 7. Surūšiuokite jį.

console.log([3, 4, 1, 2, 7].sort());

// Duotas masyvas 1, 2, 3, 4, 5. Konvertuokite masyvą į 1, 2, 3.
console.log([1, 2, 3, 4, 5].slice(0,3))