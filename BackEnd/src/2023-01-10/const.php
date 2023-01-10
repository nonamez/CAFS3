<?php

// https://www.php.net/manual/en/language.constants.php

// https://www.php.net/manual/en/function.define.php
define('PI', 3.14);
// define('PI', 3.15); // Warning: Constant PI already defined

var_dump(PI);

const PI_V2 = PI;

var_dump(PI_V2);

// https://www.php.net/manual/en/reserved.constants.php
var_dump(PHP_VERSION);
var_dump(PHP_OS);

// https://www.php.net/manual/en/language.constants.magic.php
var_dump(__LINE__);
var_dump(__FILE__);
var_dump(__DIR__);