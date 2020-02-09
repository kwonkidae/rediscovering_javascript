class Employee {
  constructor(firstName, lastName, yearOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
  }

  get fullname() {
    return `${this.firstName} ${this.lastName}`;
  }

  get age() {
    return new Date().getFullYear() - this.yearOfBirth;
  }
}

const printInfo = function(employee) {
  console.log(`First name: ${employee.firstName}`);
  console.log(`Fullname: ${employee.fullname}`);
  console.log(`Age: ${employee.age}`);
};

const john = new Employee('John', 'Doe', 2010);

const handler = {
  get: function(target, propertyName, receiver) {
    if (propertyName === 'age') {
      return `It's not polite to ask taht question, dear`;
    }

    return Reflect.get(target, propertyName);
  },
  // get: function(target, propertyName, receiver) {
  //   if (propertyName === 'firstName') {
  //     console.log(`target is john? ${john === target}`);
  //     console.log(`propertyName is ${propertyName}`);
  //     console.log(`receiver is proxyDoe? ${proxyDoe === receiver}`);
  //   }
  //   return Reflect.get(target, propertyName);
  // },
};
const proxyDoe = new Proxy(john, handler);
printInfo(proxyDoe);
