class Person {
	constructor(firstName, lastName) {
		console.log('initializeing Person fields');
		this.firstName = firstName;
		this.lastName = lastName;
	}

	toString() {
		return `Name: ${this.firstName} ${this.lastName}`;
	}

	get fullName() { return `${this.firstName} ${this.lastName}`; }

	get surname() { return this.lastName; }
}

const person = new Person('kwon', 'kidae');
// console.log(person.toString(), person.fullName, person.surname);

class ReputablePerson extends Person {
	constructor(firstName, lastName, rating) {
		console.log('creating a ReputablePerson');
		super(firstName, lastName);
		this.rating = rating;
	}
	toString() {
		super.toString();
		console.log('toString');
		return "this";
	}
}

const rP = new ReputablePerson('kwon', 'kidae', 5);
console.log(rP.toString());