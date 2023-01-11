<?php

// Sukurkite dvimatį masyvą. Pirmieji du raktai yra lt ir en.
// Raktai turi savaitės dienų vardų masyvus lietuviškai ir angliškai.
// Naudodamiesi šiuo masyvu, pirmadienį parodykite lietuvių kalba, o trečiadienį - anglų kalba.
// Sukurkite kintamuosius lang (reikšmės lt arba en) ir parodykite dieną

$names = [
	'en' => [
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
		'Sunday'
	],
	'lt' => [
		'Pirmadienis', 
		'Antradienis', 
		'Trečiadienis', 
		'Ketvirtadienis', 
		'Penktadienis', 
		'Šeštadienis',
		'Sekmadienis'
	]
];

function getLangName($names) {
	$langs = array_keys($names);

	return $langs[array_rand($langs)];
}

function getDay() {
	return rand(0,6);
}

$rand = true;

if ($rand) {
	$lang = getLangName($names);
	$day = getDay();
} else {
	$lang = 'lt';
	$day = date('N') - 1;
}

echo $names[$lang][$day];
