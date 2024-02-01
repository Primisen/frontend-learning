function sort(array) {

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j + 1] < array[j]) {
                const swap = array[j];
                array[j] = array[j + 1];
                array[j + 1] = swap;
            }
        }
    }

    return array;
}

let numbers = [-13, -9, 4, 0, -3, 1, -2, 9, 7, -13];

console.log("Unsorted array: " + numbers);
console.log("Sorted array: " + sort(numbers));
