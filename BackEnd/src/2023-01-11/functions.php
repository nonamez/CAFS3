<?php

$name = 'Kiril';

// https://www.php.net/manual/en/functions.user-defined.php
function square($number) {
	// var_dump($name); // Warning: Undefined variable

	$squareOfNumber = $number * $number;

	return $squareOfNumber;
}

echo square(7);

echo "<br>\n";

// https://www.php.net/manual/en/functions.anonymous.php
$anonymousVarDump = function($value) {
	var_dump($value);
};

$anonymousVarDump($name);

$workers = [
	[
		'name' => 'Antanas',
		'salary' => 410
	],

	[
		'name' => 'Bronius',
		'salary' => 420
	],

	[
		'name' => 'Česlovas',
		'salary' => 430
	]
];

var_dump($workers);

$bonus = 300;

// https://www.php.net/manual/en/function.array-map.php
$workersWithBonus = array_map(function($worker) use($bonus) {
	$worker['salary'] += $bonus;

	return $worker;
}, $workers);

var_dump($workersWithBonus);

// https://www.php.net/manual/en/functions.arrow.php
$workersWithBonusArrow = array_map(fn($worker) => $worker['salary'] += $bonus, $workers);

var_dump($workersWithBonusArrow);

// https://www.php.net/manual/en/functions.arguments.php#functions.named-arguments

function createUser($name, $surname = null, $address = null, $city = null, $email = null, $phone = null)
{
	// https://www.php.net/manual/en/function.compact.php
	return compact('name', 'surname', 'address', 'city', 'email', 'phone');
}

var_dump(createUser('Kiril', null, null, null, 'hello@nonamez.name'));
var_dump(createUser('Kiril', 'hello@nonamez.name'));
var_dump(createUser('Kiril', email: 'hello@nonamez.name'));
var_dump(createUser('Kiril', phone: '+370612345678'));