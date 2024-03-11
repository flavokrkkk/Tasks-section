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


// const stopWords = ['а', 'без', 'ближе', 'браво', 'бы', 'вам', 'вас', 'весь', 'во', 'все', 'всего', 'вы'];
// let count = 0

// const binarySearch = (array, value) => {
//     let first = 0 // индекс начальной позиции массива
//     let end = array.length - 1 // индекс последнего элемента массива
//     let middle; // индекс центральной позиции
//     while(first <= end) {
//         count += 1
//         middle = Math.floor((first + end) / 2) //находим индекс центральной позиции

//         // если значение схоже с серединой сразу получим его
//         if (value === array[middle]) {
//             return value
//         }

//         // пишем условие, чтобы отсеять половину массива для поиска значения
//         if (value < array[middle]) {
//             end = middle - 1
//         }

//         if (value > array[middle]) {
//             first = middle + 1
//         }
//     }

//     return false
// }

// const binary = binarySearch(stopWords, 'вам')
// console.log(binary)
// console.log('count', count)




// const arrayList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]

// const binarySearch = (array, value) => {
//     let first = 0
//     let end = array.length - 1
//     let middle;
//     while(first <= end) {
//         middle = Math.floor((first + end) / 2)
//         if (value === array[middle]){
//             return middle
//         }

//         if (value > array[middle]) {
//             first = middle + 1
//         }

//         if (value < array[middle]) {
//             end = middle - 1
//         }
//     }
//     return -1
// }

// console.log((binarySearch(arrayList, 1)))

// const factorial = (n) => {
//     if (n <= 0) {
//         return 1
//     }

//     return n * factorial(n - 1)
// }

// console.log(factorial(5))


// const fibonachi = (n) => {
//     if (n === 1 || n === 2) {
//         return 1
//     } else {
//         return fibonachi(n - 1) + fibonachi(n - 2)
//     }
// }

// console.log(fibonachi(8))

// const fibonachi = (n) => {
//    if (n === 1 || n === 2) {
//       return 1;
//    } else {
//       return fibonachi(n - 1) + fibonachi(n - 2)
//    }
// }

// console.log(fibonachi(8))


// const flatten = (...data) => {
//     let result = []
//     for(let i = 0; i < data.length; i++) {
//         let currentEl = data[i]
//         if(Array.isArray(currentEl)) {
//             result.push(...flatten(...currentEl))
//         } else {
//             result.push(currentEl)
//         }
//     }
//     return result
// }


// console.log(flatten(1, [2, [[[3]]]], [[[4, 5]], [6, [7]]]))
// console.log(flatten('a', ['b', 2], 3, null, [[4], ['c']]))

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
// console.log(array.length)
// const binarySearch = (arr, value) => {
//     let start = 0
//     let end = arr.length - 1 // 14
//     while(start <= end) {
//         let middle = Math.floor((start + end) / 2)
//         if (value === arr[middle]) {
//             return value
//         } 
//         if (value < arr[middle]){
//             end = middle - 1
//         } else {
//             start = middle + 1
//         }
//     }
//     return false
// }

// console.log(binarySearch(array, 18))


// 3) Сортировка выбором

// const arr = [0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3, 32]

// let count = 0

// const selectionSort = (array) => {
//     for(let i = 0; i < array.length; i++) {
//         let indexMin = i
//         for(let j = i + 1; j < array.length; j++) {
//             if (array[i] < array[indexMin]) {
//                 indexMin = j
//             }
//             count += 1
//         }
//         let tmp = array[i]
//         array[i] = array[indexMin]
//         array[indexMin] = tmp
//     }
//     return array
// }

// console.log(selectionSort(arr))
// console.log('count: ' + count)

// const arr = [0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, -1, 7, 1, -5, 23, 6, 2, 35, 6, 3, 32]

// const seelectionSort = (items) => {
//     for (let i = 0; i < items.length - 1; i += 1) {
//       let indexMin = i;
//       for (let j = i + 1; j < items.length; j += 1) {
//         if (items[j] < items[indexMin]) {
//           indexMin = j;
//         }
//       }
  
//       const temporary = items[i];
//       items[i] = items[indexMin];
//       items[indexMin] = temporary;
//     }

//     return items
//   };

//   console.log(seelectionSort(arr))


// function selectionSort(array) {
//     for(let i = 0; i < array.length; i++) {
//         let indexMin = i
//         for(let j = i + 1; j < array.length; j++) {
//             if (array[i] < array[indexMin]) {
//                 indexMin = j
//             }
//         }
//         let tmp = array[i]
//         array[i] = array[indexMin]
//         array[indexMin] = tmp
//     }
//     return array
// }

// console.log(selectionSort(arr))


// const arr = [0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, -1, 7, 1, -5, 23, 6, 2, 35, 6, 3, 32]
// const arrE = [0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9]

// const selectionSort = (items) => {
//     for (let i = 0; i < items.length - 1; i += 1) {
//         let indexMin = i
//         for(let j = 0; j < items.length; j += 1) {
//             if(items[j] < items[indexMin]){
//                 indexMin = j
//             }
//         }
//         const temporary = items[i]
//         items[i] = items[indexMin]
//         items[indexMin] = temporary
//     }
//     return items
// }

// console.log(selectionSort(arrE))

//Вложенные циклы
 
// for(let i = 0; i < 5; i++) {
//     for(let j = 0; j < 10; j++) {
//         console.log(j)
//     }
//     console.log('==='+ i)
// }

// let out = 0

// for(let i = 0; i < 10; i++) {
//     for(let j = 0; j < 10; j++) {
//         console.log(`${i} * ${j} = ${j * i}`)
//     }
//     console.log('=============================')
// }


// const array = [0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9]

// const selectionSort = (items) => {
//     for(let i = 0; i < items.length - 1; i += 1) {
//         let indexMin = i
//         for(let j = i + 1; j < items.length; j += 1) {
//             console.log('Массив с j: ', items[j])
//             console.log('Минимальный индекс: ' + items[indexMin])
//             if (items[j] < items[indexMin]) {
//                 indexMin = j
//             }
//         }
//         const tmp = items[i]
//         items[i] = items[indexMin]
//         items[indexMin] = tmp

//     }
//     // return items
// }

// console.log(selectionSort(array))


// const array1 = [0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9]

// const selectedSort = (array) => {
//     for(let i = 0; i < array.length - 1; i++) {
//         let indexMin = i
//         for(let j = i + 1; j < array.length; j++) {
//             if (array[j] < array[indexMin]) {
//                 indexMin = j
//             }
//         }

//         const temporary = array[i]
//         array[i] = array[indexMin]
//         array[indexMin] = temporary
//     }
//     return array
// } 

// console.log(-Infinity)
// console.log(selectedSort(array1))


// const array = [0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9]

// const selectionSort = (array) => {
//     for(let i = 0; i < array.length - 1; i++) {
//         let indexMin = i
//         for(let j = i + 1; j < array.length; j++){
//             if(array[indexMin] > array[j]){
//                 indexMin = j
//             }
//         }

//         const tmp = array[i]
//         array[i] = array[indexMin]
//         array[indexMin] = tmp
//     }    
//     return array
// };    

//   console.log(selectionSort(array))

// const arr = [5, 2, 3, 1, 4]

// const selectionSort = (arr, isDesc) => {
//     const {length} = arr
//     for(let i = 0; i < length - 1; i++) {
//         let indexMin = i
//         for(let j = i + 1; j < length; j++) {
//             if(isDesc) {
//                 if(arr[indexMin] > arr[j]){
//                     indexMin = j
//                 }
//             } else {
//                 if(arr[indexMin] < arr[j]){
//                     indexMin = j
//                 }
//             }
            
//         }

//         //Меняем местами
//         if (indexMin !== i ) {
//             const temporary = arr[i]
//             arr[i] = arr[indexMin]
//             arr[indexMin] = temporary
//         }
//     }
//     return arr
// }   
 
// const result = selectionSort
// console.log(result(arr, false))


//Задача - вторым параметром в функцию передавать булеан значение и менять направление сортировки
// const arr = [5, 2, 3, 1, 4]

// const selectedSort = (array, isDesc = true) => {
//     const {length} = array
//     for(let i = 0 ; i < length - 1; i++) {
//         let indexMin = i
//         for(let j = i + 1; j < length; j++) {
//             const condition = isDesc
//              ? arr[indexMin] > array[j] 
//              : arr[indexMin] < array[j]
//             if(condition) {
//                 indexMin = j
//             }
//         }
//         const temporary = array[i]
//         array[i] = array[indexMin]
//         array[indexMin] = temporary
//     }
//     return array
// } 

// console.log(selectedSort(arr, true))

//Задача - отсортировать массив, а затем применить к нему алгоритм бинарного поиска 

// const arrOne = [5, 2, 3, 1, 4]

// const selectedSort = (arr) => {
//     const {length} = arr
//     for(let i = 0; i < length - 1; i++) {
//         let indexMin = i
//         for(let j = i + 1; j < length; j++) {
//             if(arr[indexMin] > arr[j]) {
//                 indexMin = j
//             }
//         }

//         const temporary = arr[i]
//         arr[i] = arr[indexMin]
//         arr[indexMin] = temporary
//     }
//     return arr
// }

// const arrSort = selectedSort(arrOne)

// const binarySearch = (arr, value) => {
//     let start = 0
//     let last = arr.length - 1
//     while(start <= last) {
//         let middle = Math.floor((start + last) / 2)
//         if (value === arr[middle]) {
//             return value
//         }

//         if (value > arr[middle]) {
//             start = middle + 1
//         }

//         if (value < arr[middle]) {
//             last = middle - 1
//         }
//     }
//     return false
// }

// const arrSearch = binarySearch(arrSort, 1)
// console.log(arrSearch)


//Задача - найти наибольший/наименьший элемент в массиве

// const arr = [-5, 2, 3, 1, 4, 100, 102]

// const selectionSort = (arr) => {
//     const {length} = arr
//     let min = arr[0]
//     let max = arr[0]
//     for(let i = 0; i < length; i++) {
//         if (min > arr[i]){
//             min = arr[i]
//         }

//         if(max < arr[i]) {
//             max = arr[i]
//         }
//     }

//     return [min, max]
// }

// const result = selectionSort(arr)
// console.log(result)


//Задача - найти второй наибольший/наименьший элемент в массиве

// const arr = [-5, 2, 3, 0, 1, 4, 100, 104, 102]

// 1-й способ

// const selectedSort = (arr) => {
//     const { length } = arr
//     let min = Infinity
//     let minSecond = arr[0] // 2-е наименьшее значение
//     let max = arr[0]
//     let maxSecond = arr[0] // 2-е наибольшее значение

//     for(let i = 0; i < length - 1; i++) {
//         if (min > arr[i]) {
//             minSecond = min // записываем предыдущее значение min
//             min = arr[i]  // перезаписываем min на новое значение
//         } else if (minSecond > arr[i]) {
//             minSecond = arr[i]
//         }

//         if (max < arr[i]) {
//             maxSecond = max
//             max = arr[i]
//         } else if (maxSecond < arr[i]) {
//             maxSecond = arr[i]
//         }
//     }
//     return [min, minSecond, maxSecond, max]
// }

// console.log(selectedSort(arr))


// 2-й способ
// const selectedSort = (arr) => {
//     const {length} = arr
//     for(let i = 0; i < length - 1; i++) {
//         let indexMin = i
//         for(let j = i + 1; j < length; j++) {
//             if (arr[indexMin] > arr[j]) {
//                 indexMin = j
//             }
//         }
//         const temporary = arr[i]
//         arr[i] = arr[indexMin]
//         arr[indexMin] = temporary
//     }
//     return [arr[0 + 1], arr[arr.length - 2]]
// }

// console.log(selectedSort(arr))


// const array1 = [5, 2, 7, 1]

// const ff = (array) => {
//     const {length} = array
//     for(let i = 0; i < length - 1; i++) {
//         let minSecond = i
//         for(let j = i + 1; j < length; j++) {
//             if(array[minSecond] > array[j]) {
//                 minSecond = j
//             }
//         }
//             const temporary = array[i]
//             array[i] = array[minSecond]
//             array[minSecond] = temporary
//     }
//     return array
// }

// console.log(ff(array1))


// Задача - удалить дубликаты из массива
const arr = [1, 1, 1, 4, 4, 6, 6, 9, 3, 4, 7, 7]

const removeDuplication = (arr) => {
    for(let i = 0; i < arr.length - 1; i++) {
        for(let j = i + 1; i < arr.length; j++) {
            if (arr[j] === arr[i]) {
                arr.splice(j, 1)
                j--
            }
        } 
    }
    return arr
}

const result = removeDuplication(arr)
console.log(...result)