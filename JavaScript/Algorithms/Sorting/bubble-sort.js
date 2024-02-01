function sort(array) {

    for (let i = 0; i < array.length; i++) {
        
        let indexOfMinElement = i;

        for (let j = i + 1; j < array.length; j++) {
            if (array[indexOfMinElement] > array[j]) {
                indexOfMinElement = j;
            }
        }

        if (indexOfMinElement != i) {

            let min = array[indexOfMinElement];
            
            for (let j = indexOfMinElement; j > i; j--) {
                array[j] = array[j -1];
            }

            array[i] = min;
        }
    }

    return array;
}

let numbers = [-13, -9, 4, 0, -3, 1, -2, 9, 7, -13];

console.log("Unsorted array: " + numbers);
console.log("Sorted array: " + sort(numbers));
