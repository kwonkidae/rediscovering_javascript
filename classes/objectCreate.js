let a = {
  a: function() {
		return "abcd";
	}
};

let aC = Object.create(a);
a.b = function() {
	this.a = 'asdf';
	console.log("b");
};
aC.b();

function ga() {
	// console.log(this);
	console.log(this === global);
	function gb() {
		console.log(this === global);
	}
	gb();
}
ga();
function gb() {
	// console.log('a',this);
	gc();
}

function gc() {
	console.log('c', this);
}
