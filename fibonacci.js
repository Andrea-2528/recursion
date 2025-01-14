function fibs(num) {
	const fibSequence = [];
	fibSequence[0] = 0;
	fibSequence[1] = 1;
	for (let i = 2; i <= num; i++) {
		fibSequence[i] = fibSequence[i - 1] + fibSequence[i - 2];
	}
	return fibSequence;
}

// Returns an array containing the fibonacci sequence until the "num"th number
function fibsRec(num) {
    if (num === 0) {
        return [0];
    } else if (num === 1) {
        return [0, 1];
    } else {
        const sequence = fibsRec(num - 1);                                                  // build sequence until previous element
        sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);       // use last two element to calculate (and push) new element
        return sequence;
    }
}

console.log(fibs(5));
console.log(fibsRec(5));
