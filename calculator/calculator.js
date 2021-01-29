function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function sum(arr) {
	return arr.reduce((total, current) => total + current, 0);
}

function multiply(arr) {
	return arr.reduce((total, current) => total * current, 1);
}

function power(a, b) {
	var pow = 1;
	for (var i = 1; i <= b; i++) {
		pow *= a;
	}
	return pow;
}

function factorial(n) {
	var fact = 1;
	for (var i = 1; i <= n; i++) {
		fact *= i;
	}
	return fact;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial
}