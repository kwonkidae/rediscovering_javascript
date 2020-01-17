class Person {
  constructor(firstName, lastName) {
    console.log('initializeing Person fields');
    this.firstName = firstName;
    this.lastName = lastName;
  }

  toString() {
    return `Name: ${this.firstName} ${this.lastName}`;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  get surname() {
    return this.lastName;
  }
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
  }
}

const rP = new ReputablePerson('kwon', 'kidae', 5);
// console.log(rP.toString());

const printPrototypeHierarchy = function(instance) {
  if (instance != null) {
    console.log(instance);
    printPrototypeHierarchy(Reflect.getPrototypeOf(instance));
  }
};

// printPrototypeHierarchy(rP);

const alan = new ReputablePerson('Alan', 'Turing', 5);
class ComputerWiz {}
Reflect.setPrototypeOf(Reflect.getPrototypeOf(alan), ComputerWiz.prototype);

console.log('...after change of prototype...');
// printPrototypeHierarchy(alan);

const ada = new ReputablePerson('Ada', 'Lovelace', 5);
printPrototypeHierarchy(ada);

// default constructors
class AwesomePerson extends Person {
  get fullName() {
    return `Awesome ${super.fullName}`;
  }
}

const ball = new AwesomePerson('Lucille', 'Ball');
console.log(ball.fullName);
