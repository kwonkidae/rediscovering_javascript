class MyString extends String {}
class MyArray extends Array {}

const concString = new MyString().concat(new MyString());
const concArray = new MyArray().concat(new MyArray());

console.log(`instanceof MyString?: ${concString instanceof String}`);
console.log(`instanceof MyArray?: ${concArray instanceof MyArray}`);

console.log(new String() instanceof String);
