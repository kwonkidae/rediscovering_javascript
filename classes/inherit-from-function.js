function LegacyClass(value) {
  this.value = value;
}

class NewClass extends LegacyClass {}

console.log(new NewClass(1));
