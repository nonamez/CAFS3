<?php

// Kintamųjų interpoliacija yra procesas, pakeičiantis kintamųjų reikšmes į eiluteje esančias rezervavimo ženklus. Pvz., Jei turite šabloną, kaip pasisveikinti su žmogumi, pvz., „Sveiki (vardas), malonu susipažinti!“. Norėtumėte pakeisti asmens vardo vietos rezervatorių tikruoju vardu. Šis procesas vadinamas eilutės interpoliacija.

$capital = 'Vilnius';

echo 'The capital of Lithuania is ', $capital, "\n";
echo "The capital of Lithuania is $capital\n";
echo 'The capital of Lithuania is $capital\n';

echo "\n";

$text = 'news';

// echo "Where is my $textpaper \n"; // Warning: Undefined variable $textpaper
echo "Where is my {$text}paper \n";

// https://www.php.net/manual/en/function.sprintf.php
echo sprintf('The capital of Lithuania is %s', $capital);
echo "\n";
echo sprintf('Where is my %spaper', $text);

echo "\n";

// https://www.php.net/manual/en/function.printf.php
printf('The capital of Lithuania is %s', $capital);
echo "\n";
printf('Where is my %spaper', $text);

echo "\n";

// https://www.php.net/manual/en/language.variables.variable.php
$apples = 5;
$fruit = 'apples';

echo 'Obolių skaičius: ', $$fruit, "\n";
echo "Obolių skaičius: {${$fruit}}\n";