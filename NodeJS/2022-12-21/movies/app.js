const Movie = require('./Classes/Movie.js');

console.log(Movie.getFilmProductionCompanies());

const movies = [
	new Movie('Bullet Train ', 85900000, 239268602),
	new Movie(' The Batman', 200000000, 770836163),
	new Movie('   Joker   ', 75000000, 1074458282),
];

movies[2].budget = 55000000;

for (let movie of movies) {
	console.log(movie.name, movie.profit, movie.getProfit(), movie);
}

console.log(movies[2].nonStaticMethod());
console.log(Movie.staticMethod());
