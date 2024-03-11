const array = [0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9]

const selectedSort = (array) => {
    for(let i = 0; i < array.length - 1; i++){
        let indexMin = i
        for(let j = i + 1; j < array.length; i++) {
            if (indexMin < array[j]) {
                indexMin = j
            }
        }
            let tmp = array[indexMin]
            array[i] = array[indexMin]
            array[indexMin] = tmp

    }
    return array
} 

console.log(selectedSort(array))