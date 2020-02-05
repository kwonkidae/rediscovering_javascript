class Person {
  constructor(age) {
    this.age = age;
  }

  play() {
    console.log(`The ${this.age} year old is playing`);
  }

  get years() {
    return this.age;
  }
}

const sam = new Person(2);

const propertyName = 'age';

Reflect.set(sam, propertyName, 3);

console.log(Reflect.get(sam, propertyName));
