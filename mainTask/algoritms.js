// Алгоритм - последовательность каких-либо действий
// O(N) 
// n - кол-во операции


// 1) Линейный поиск
//Сложность O(N)

// let array = [2, 3, 7, 1, 8, 5, 6, 10, 4, 11]
// let count = 0

// const linearSearch = (array, item) => {
//     for(let i = 0; i < array.length; i++) {
//         count += 1
//         if (array[i] === item) {
//             return i
//         } 
//     }
//     return null
// }


// console.log(linearSearch(array, 7))
// console.log('count: ', count)



// 2) Бинарный поиск
// const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
// let count = 0

// const binarySearch = (array, item) => {
//     let start = 0 // позиция первого элемента 
//     let end = array.length // позиция последнего элемента
//     let middle; // позиция среднего элемента
//     let found = false
//     let position = -1 // позиция элемента, которую мы будем возвращать 
//     while(found === false && start <= end) {
//         count = 10
//         middle = Math.floor((start + end) / 2) //находим среднюю позицию
//         if (array[middle] === item) {
//             found = true
//             position = middle
//             return position
//         }
//         if(item < array[middle]) {
//             end = middle - 1
//         } else {
//             start = middle + 1
//         }
//     }
//     return position
// }

// console.log('count', count)
// console.log(binarySearch(array, -17))



// const arrayList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

// const linearSearch = (array, item) => {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === item) {
//             return i
//         }
//     }
//     return null
// }

// console.log(linearSearch(arrayList,7))

// const stopWords = ['ее', 'на', 'по', 'со', 'же', 'браво', 'всего', 'я', 'итого']

// const isStopWords = (item) => {
//     for(let i = 0; i < stopWords.length; i++) {
//         if (stopWords[i] === item) {
//             return i
//         }
//     }
//     return false
// }
// console.log(isStopWords('я'))


//Бинарный поиск, попытка №2

const stopWords = ['апост', 'бпост', 'впост', 'гпост', 'дпост', 'епост', 'ёпост', 'жпост', 'зпост', 'ипост', 'кпост', 'жпост'];


const binarySearch = (array, value) => {
    let first = 0
    let last = array.length - 1
    while(first < last) {
        let middle = Math.floor((first + last) / 2)
        if(value === array[middle]) {
            return true
        }

        if (value < array[middle]) {
           last = middle - 1 
        }

        if (value > array[middle]) {
            first = middle + 1
        }
    }

    return false
}

const binary = binarySearch(stopWords, 'бпост')
console.log(binary)