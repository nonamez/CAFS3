class Movie {
	constructor(name, budget, income) {
		this.name   = name;

		this.budget = budget;
		this.income = income;
	}

	getProfit() {
		return this.income - this.budget;
	}

	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
	get profit() {
		return this.income - this.budget;
	}
	
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
	get name() {
		return this.customName;
	}

	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set
	set name(value) {
		if (value) {
			this.customName = value.trim();
			// this.customName = this.customName.toUpperCase();
		}
	}

	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static
	static getFilmProductionCompanies() {
		return [
			'Warner Bros.',
			'20th century fox',
			'Pixar'
		];
	}

	static staticMethod() {
		return {
			method: 'staticMethod',
			this: this
		}
	}

	nonStaticMethod() {
		return {
			method: 'nonStaticMethod',
			this: this
		}
	}
}

module.exports = Movie;