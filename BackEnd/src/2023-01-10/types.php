<?php
// https://www.php.net/manual/en/language.types.php

// https://www.php.net/manual/en/language.types.boolean.php
$bool = true;
$bool = false;
$bool = True;
$bool = FALSE;
$bool = FALSE;

// https://www.php.net/manual/en/language.types.integer.php
$int = 1;
$int = 100;
$int = 123;
$int = 1_234_567; // as of PHP 7.4.0

var_dump($int);

// https://www.php.net/manual/en/language.types.float.php
$a = 1.234; 
$b = 1.2e3; 
$c = 7E-10;
$d = 1_234.567; // as of PHP 7.4.0

var_dump($a, $b, $c, $d);

// https://www.php.net/manual/en/language.types.string.php
$str = 'Hello World';
$str = "Hello World";
$str = '123'; // https://www.php.net/manual/en/language.types.numeric-strings.php

// https://www.php.net/manual/en/language.types.null.php
$var = NULL; 