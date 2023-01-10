<?php

// https://www.php.net/manual/en/language.types.array.php

$hello = 'hello';

$arr = [1, 2, 5, 'a', 'c', $hello];

// echo $arr; // Warning: Array to string conversion

var_dump($arr);

$arr[2] = 6;

print_r($arr);

echo $arr[5] . "<br>\n";

$arr = [
	0 => 2,
	2 => 'a',
	5 => 123,
	// 1 => 'w'
];

var_dump($arr);
var_dump(isset($arr[1]) ? $arr[1] : 'undefined array key');
var_dump($arr[1] ?? 'undefined array key');
var_dump($arr[5]);

// Associative arrays
$user = [
	'name' => 'Kiril',
	'surname' => 'Clk',
	'age' => 31,
];

var_dump($user);
var_dump($user['name']);