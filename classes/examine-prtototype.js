class Counter{
	data() {
		this.arr.push(4);
	}
}

Counter.prototype.count = 0;
Counter.prototype.arr = [];
Counter.prototype.increment = function() { this.count += 1; this.arr.push(1); };

const counter1 = new Counter();
const counter2 = new Counter();

const counter1Prototype = Reflect.getPrototypeOf(counter1);
const counter2Prototype = Reflect.getPrototypeOf(counter2);

console.log(`Prototype has : ${Object.keys(Reflect.getPrototypeOf(counter1))}`);
console.log(`Before increment instance has: ${Object.keys(counter1)}`);
counter1.increment();
console.log(`After increment instance has: ${Object.keys(counter1)}`);
counter2.increment();
counter1.data();
console.log(counter1 === counter2);
console.log(counter1Prototype === counter2Prototype);
console.log(counter1Prototype);
console.log(counter1.arr);
console.log(Counter.prototype.data);