const unsortedNumbers = [2, 5, 7, 4, 1, 0, -99, -3, 3];

function sort(array) {
    let sortedArray = [];
    let unsortedArray = copy(array);

    for(let i = 0; i < unsortedArray.length; i++) {

        let current = unsortedArray[i];
        
        for(let j = i; j < unsortedArray.length; j++) {
            if (current > unsortedArray[j]) {
                let reverse = current;
                current = unsortedArray[j];
                unsortedArray[j] = reverse;
            }    
        }

        sortedArray.push(current);
    }

    return sortedArray;
}

function copy(array) {
    let arrayCopy = [];

    for(let i = 0; i < array.length; i++) {
        arrayCopy[i] = array[i];
    }

    return arrayCopy;
}

const sortedNumbers = sort(unsortedNumbers);

console.log("Unsorted Array: " + unsortedNumbers);
console.log("Sorted Array: " + sortedNumbers);