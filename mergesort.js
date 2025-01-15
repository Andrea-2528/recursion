function Merge(arrA, arrB) {
	let i = 0,
		j = 0;
	let arrC = [];
	while (i <= arrA.length - 1 && j <= arrB.length - 1) {
		if (arrA[i] < arrB[j]) {
			arrC.push(arrA[i]);
			i++;
		} else if (arrA[i] > arrB[j]) {
			arrC.push(arrB[j]);
			j++;
		} else {
			arrC.push(arrA[i]);
			arrC.push(arrB[j]);
			i++;
			j++;
		}
	}
	while (i <= arrA.length - 1) {
		arrC.push(arrA[i]);
		i++;
	}
	while (j <= arrB.length - 1) {
		arrC.push(arrB[j]);
		j++;
	}
	return arrC;
}

function MergeSort(arr) {
	if (arr.length <= 1) {
		return arr;
	}
	let mid = Math.floor(arr.length / 2);
	let left = MergeSort(arr.slice(0, mid));
    let right = MergeSort(arr.slice(mid));

    return Merge(left, right);
}

let example1 = [3, 2, 1, 13, 8, 5, 0, 1];
let example2 = [105, 79, 100, 110];
let example3 = [2, 543, 23, -3, 0, 1, -1, 103, -100];
let example4 = [0.34, 0.99, 0.14, 0.36, 0.82, 0.41];

console.log(MergeSort(example1));
console.log(MergeSort(example2));
console.log(MergeSort(example3));
console.log(MergeSort(example4));