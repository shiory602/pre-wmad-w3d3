// loop through the numbers 1 -100
// if the number is a multiple of 5 console.log "fizz"
// if the number is a multiple of 3 console.log "buzz"
// if its a multiple of both console.log "fizzbuzz"
// if its a multiple of neither 3 nor 5 we simply print the number itself.

let number = "";

for (i = 1; i <= 100; i++) {

// if ((i % 5 === 0) && (i % 3 === 0)) {
if (i % 15 === 0) {
	// console.log("fizzbuzz");
	number = "fizzbuzz";
} else if (i % 5 === 0) {
	// console.log("fizz");
	number = "fizz";
} else if (i % 3 === 0) {
	// console.log("buzz");
	number = "buzz";
} else {
	// console.log(i);
	number = i;
}

console.log(number);
}