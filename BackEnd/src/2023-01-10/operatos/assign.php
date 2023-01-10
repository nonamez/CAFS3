<?php

// https://www.php.net/manual/en/language.operators.assignment.php

$fruits = 14;

var_dump($fruits);

$n = $m = $p = 3;

var_dump($n, $m, $p);

$m += 5;

var_dump($m);

$m -= 5;

var_dump($m);

// https://www.php.net/manual/en/language.operators.assignment.php#language.operators.assignment.reference

echo "-------<br>\n";

$n = 3;

$m = &$n;
$p = &$m;

$p = 5;

var_dump($n, $m, $p);