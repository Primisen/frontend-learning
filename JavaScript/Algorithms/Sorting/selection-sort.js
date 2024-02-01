const numbers = [2, 5, 7, 4, 1, 0, -99, -3, 3];

function sort(array) {

    for (let i = 0; i < array.length; i++) {

        let indexOfMinElement = i;

        for (let j = i; j < array.length; j++) {
            if (array[indexOfMinElement] > array[j]) {
                indexOfMinElement = j;
            }
        }

        if (indexOfMinElement != i) {
            let swap = array[indexOfMinElement];
            array[indexOfMinElement] = array[i];
            array[i] = swap;
        }
    }

    return array;
}

console.log("Unsorted Array: " + numbers);
console.log("Sorted Array: " + sort(numbers));
