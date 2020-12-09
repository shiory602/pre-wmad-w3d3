// write me a loop, which counts up starting at 30 until it reaches 75
// every loop, if the number is even, console.log "the number __ is even "
// if its odd, console.log "the number __ is odd "
// you will have to use the %(remainder) operator

for (let i = 30; i <= 75; i++) {
	if (i % 2 === 0) {
		console.log("the number " + i + " is even.");
	} else if (i % 2 === 1) {
		console.log("the number " + i + " is odd.");
	};
};