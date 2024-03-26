//Рекурсия и стек

// let count = 0

// function recurse () {
//    if (count === 5) {
//         return 'done'
//    } 
//    count++ 
//    return recurse()
// }

// console.log(recurse())
// console.log('count: ', count)




// function pow(x, y) {
//    if (y === 0) {
//          return 1
//    }

//    return x * pow(x, y - 1)
// }


// const result = pow(5, 3)


// function factorial(n) {
//    if (n <= 0) {
//       return 1
//    }

//    return n * factorial(n - 1)
// }


// console.log(factorial(5))







// const arr = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven']


// function printArr (arr, index = 0) {
//    console.log(arr[index])
//    if (index < arr.length) {
//       printArr(arr, index + 1)
//    }
   
// }  

// printArr(arr)





// for(let i = 0; i < arr.length; i++) {
//    console.log(arr[i])
// }

// for(let key in arr) {
//    console.log(arr[key])
// } 


// function factorial(n) {
//       if (n <= 0) {
//          return 1
//       }

//       return n * factorial(n - 1)
// }


// console.log(factorial(4))

//Рекурсия 

// let t = 0

// const myFn = () => {
//    t++
//    console.log(t)
//    if (t === 100) {
//       return 1
//    }
//    else {
//       myFn()
//    }
// }

// myFn()


//Аналог рекурсии с помощью стека

// const myFn2 = () => {
//    let out = ''
//    for (let i = 1; i <= 30; i++) {
//       out += i + ' '
//    }
//    console.log(out)
// }

// myFn2()

//Пример с рекурсией 

// let i = 0 
// out = ''

// const myFn3 = () => {
//    i++
//    out += i + ' '

//    if (i >= 20) {
//       return 1
//    } else {
//       return myFn3()
//    }
// }

// myFn3()
// console.log(out)

// let arr = []


// for (let i = 10; i > 0; i--) {
//    console.log(i)
// }

// let g = 10

// const myFn5 = () => {
//    g--
//    if (g <= 0) {
//       return 1
//    } else {
//    console.log(g)
//    return myFn5()
//    }
// }

// myFn5()

//Решение 10-й задачи  


// const func = (array = [], n) => {
//    if (n <= 0) {
//       return 1
//    } else {
//       func(n-1)
//       console.log(n)
//       array.push(n)
//    }
// }

// func([], 5)
// console.log(array)



// const func = (arraay = [], n) => {
//    if (n <= 0) {
//       return 1
//    }
//    func(n - 1) 
//    console.log(n)
//    return arraay.push(n)
// }

// console.log(func([], 5))



// const func = (arr4, n) => {
//    if (n <= 0) {
//       return 1
//    } else {
//       console.log(n)
//       arr4.push(n)
//        func([], n - 1)
//        console.log(arr4)
//    }
// }

// func([], 9)
// console.log(newArr)


// let i = 21
// let out = ' '

// const func = () => {
//       i--
//       out += i + ' '
//    if (i <= 0) {
//       return 
//    } else {
//       return func()
//    }
// }

// func()
// console.log(out)


//Задача поиграться

// function randomInteger(min, max) {
//    let rand = min + Math.random() * (max + 1 - min)
//    return Math.floor(rand)
// }


// let s1 = 0

//На рекурсии

// function theMoneyRecursion() {
//    if (s1 >= 300) {
//       return
//    }
//    let m = randomInteger(0, 100)
//    console.log('add: ' + m)
//    s1 += m
//    console.log('capital: ', s1)
//    theMoneyRecursion()
// }

// theMoneyRecursion()

// const factorial = (n) => {
//       if (n <= 0) {
//          return 1
//       }

//       //Будет вызываться до тех пор пока n не будет === 1
//       return n * factorial(n - 1)
// }

// console.log(factorial(8))


//Числа Фибоначи - 1, 1, 2, 3, 5, 8, 13, 21

// const factorial = (n) => {

//    if (n <= 0) {
//       console.error('Factorial вызван с неподходящим значением!')
//    }  else {
//       return n * factorial(n - 1)
//    }
// }

// console.log(factorial(-4))

// const fibonachi = (n) => {
//    if (n === 1 || n === 2) {
//       return 1
//    } else {
//       return fibonachi( n - 1 ) + fibonachi( n - 2 )
//    }
// }

// console.log(fibonachi(3))

// const fibonachi = (n) => {
//    if (n === 1 || n === 2) {
//       return 1;
//    } else {
//       return fibonachi(n - 1) + fibonachi(n - 2)
//    }
// }

// console.log(fibonachi(8))

// const fibonachi = (n) => {
//    if (n === 1 || n === 2) {
//       return 1
//    } else {
//       return fibonachi( n - 1 ) + fibonachi( n - 2 )
//    }
// }

// console.log(fibonachi(8))



// const fibonachi = (n) => {
//    if (n === 1 || n === 2) {
//       return 1
//    } else {
//       return fibonachi(n - 1) + fibonachi(n - 2)
//    }
// }

// console.log(fibonachi(8))

// const factorial = (n) => {
//    return n <= 0 ? 1 : n * factorial( n - 1 ) 
// }

// console.log(factorial(5))



//Задача с подмассивами

// function flatten(...data) {
//    console.log(data)
//    const result = []
//    for(let i = 0;i < data.length; i++){
//          const currentEl = data[i]
//          if (Array.isArray(currentEl)){
//             result.push(...flatten(...currentEl))
//          } else {
//             result.push(currentEl)
//          }
//    }
//    return result
// }

// console.log(flatten(1, [2, [[3]]], 4, 5, [6, [7]]))
// console.log(flatten('a', ['b', 2], 3, null, [[4], ['c']]))




//Оценка сложности алгоритмов

// 1) Константы

const arr = [1, 2, 3, 4]
function func() {

}

// 2) Линейная сложность O(N)

let c = 0
// const array = [1, 2, 3, 4]

for (let i = 0; i < array.length; i++){
      c += array[i]
}
 
console.log(c)

// 3) Квадратичная сложность O(N^2)

// const array = [1, 2, 3, 4]

for (let i = 0; i < array.length; i++) {
      for(let j = 0; j < array.length; j++) {
            console.log(array[i])
      }
}

// 4) Сложность O(A * B)
const arr1 = [[1, 2, 5], [2, 3], [8, 9]]
let sum = 0

for (let i = 0; i < arr1.length; i++) {
   for(let j = 0; j < arr1[i].length; j++) {
         console.log(arr1[i][j])
   }
}

console.log(sum)

// 5) Отрбрасывание не доминантных функций O(2 * N) --> O(N)

const arr2 = [1, 2, 3, 4]

for (let i = 0; i < arr2.length; i++ ) {

}

for (let i = 0; i < arr2.length; i++ ) {
   
}

// Сложность O(N^2 + N) --> O(N^2)

for (let i = 0; i < arr2.length; i++ ) {
   for (let j = 0; j < arr2.length; j++ ) {
   
   }
}

for (let i = 0; i < arr2.length; i++ ) {
   
}


//6) O(log N)

const sortedArr = [1, 2, 5, 7, 100, 201]

// 7) O(2^N)

function myRecursion(n) {
   if (n <= 0) {
      return 1
   }

   return myRecursion(n - 1) + myRecursion(n - 1)

}


// Spread и Rest

// Spread - 'Распаковывает' массив
// Rest - Объединяет значения в массив и возвращает массив


// const arrr1 = [1, 2, 3, 4]
// const arrr2 = [5, 6, 7, 8]

// const res = [...arrr1, ...arrr2]

// console.log(res)

// const A = {
//    a: 'default',
//    b: 'just_test'
// }

// const B = {
//    a: 'value_from_b'
// }

// const C = {
//    ...A,
//    ...B,
// }

// console.log(C)

// const yaly = ( arg1, arg2, ...rest) => {
//    console.log(arg1, arg2, rest)
// }


// yaly(1, 2, 3, 4, 5, 6, 7, 8, 9, 11)



// const flattenOne = (...data) => {
//    let result = []
//    for(let i = 0; i < data.length; i++) {
//       let currentEl = data[i]
//       if (Array.isArray(currentEl)) {
//          result.push(...flattenOne(...currentEl))
//       } else {
//          result.push(currentEl)
//       }
//    }
//    return result
// }

// console.log(flattenOne(1, [2, [[3]]], 4, 5, [6, [7]]))
// console.log(flattenOne('a', ['b', 2], 3, null, [[4], ['c']]))


// const factorial = (n) => {
//    if (n <= 0) {
//       return 1
//    } else {
//       return n * factorial(n - 1)
//    }
// }

// console.log(factorial(4))

// const fibonachi = (n) => { 
//    if(n === 1 || n ===2) {
//       return 1
//    } else {
//       return fibonachi(n - 1) + fibonachi(n - 2)
//    }
// }

// console.log(fibonachi(8))


// const copyElByArray = (arr1, arr2, n) => {
//       arr2.splice(n, 0, ...arr1)
//       return arr
// }

// console.log(copyElByArray([1, 2, 3], [4, 5], 1))


// let ar1 = [1, 2, 3]

// let ar2 = [4, 5]
// ar2.splice(1,0, ...ar1)
// console.log(ar2)


// const arrSmash = ['hello', 123, 33, 'Egor', 99, 'dddfs']

// const arrSmashFunc = (arr, n) => {
//     let arrTwo = []
//     let sizesArr = n // указываем размер двумерного массива(сколько групп будет в нем)
//     arr.map(el => arrTwo.splice(n, n, el))
//     return arrTwo
// }

// console.log(arrSmashFunc(arrSmash, 2))

// const isPalindrome = (x) => {
//     let arr = x.split('')
//     for(let i = 0; i < arr.length; i++) {
//         let currentEl = arr[i]
//         if(currentEl.toLowerCase() !== arr[arr.length - 1 - i].toLowerCase()) {
//             return false
//         }
//     }
//     return true
// }

// console.log(isPalindrome('madam'))



// const isPalindrom = (x) => x.toLowerCase() === x.toLowerCase().split('').reverse().join('')
// console.log(isPalindrom('madam'))



// const isPalindrom = (x) => {
//       let arr = x.split('')
//       for(let i = 0; i < arr.length; i++) {
//             let currentEl = arr[i]
//             if(currentEl !== arr[arr.length - 1 - i]) {
//                   return false
//             }
//       }
//       return true
// }

// console.log(isPalindrom('123321'))

// const isPalindromm = x => x.toLowerCase() === x.toLowerCase().split('').reverse().join('')
// console.log(isPalindromm('madam'))
// console.log(isPalindromm(123321))


// let count = 0

// const isPalindrom = (x) => {
//       let arr = x.toLowerCase()
//       .replace(/[^\w\s]|_/g, '')
//       .replaceAll(' ', '')
//       .split('')
//       console.log(arr)
//       for(let i = 0; i < arr.length; i++) {
//             count += 1
//             let currentEl = arr[i]
//             if(currentEl !== arr[arr.length - 1 - i] ) {
//                   return false
//             }
//       }
//       return true
// }

// console.log(isPalindrom('! !      ,,*  ** ::                     :&&№           №#   ##--___  *@" "`       `~~$;                  > >+       =++ .a   d$$@                @        %%      ^^da.,,       !!'))
// console.log('count:' + count)              


// const str = 'm,Ada,m'
// console.log(str.toLowerCase().replace(/\W/g, '').split(''))


// if(!isNaN(arr[i]) && typeof(arr[i]) !== 'string' && currentEl !== arr[arr.length - 1 - i]) 

// const twiceAsOld = (dadYearsOld, sonYearsOld) => {
//       return Math.abs(dadYearsOld - sonYearsOld * 2)
// }

// isAgDiffeerence(37, 15)

//15 // 25
//40 // 50

//2024 - 15
//2024 + 15 //
//2024 + 40
//2024 - 40


//13 //
//44 //

// const squareDigits = (num) => {
//       const arr = ('' + num).split('').map(el => el * el)
//       return Number(arr.join(''))

// }
// console.log(squareDigits(9119))


// const isIsogram = (str) => {
//       let arr = str.toLowerCase().split('')
//       arr.filter(a => a)
// }

//  console.log(isIsogram('Dermatoglyphics'))
 
//  const isIsogram = (str) => !!str.toLowerCase().split``.filter((h => v => (h[v] = (h[v] || 0) + 1) === 2)({})).length;


//  console.log(isIsogram('Анастасия'));
//  console.log(isIsogram('Андрей'));


// const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const binarySearch = (arr, value) => {
//       let start = 0
//       let end = arr.length - 1
//       while(start <= end) {
//       let middle = Math.floor((start + end) / 2)
//       if(value === arr[middle]) {
//             return value
//       }
//       if(value < arr[middle]) {
//             end = middle - 1
//       } else {
//             start = middle + 1
//       }
      
//       }
//       return false
// }

// console.log(binarySearch(array1, 10))

// const array2 = [2, 6, 7, -1, 22, 8]

// const selectedSort = (arr) => {
//       for(let i = 0; i < arr.length - 1; i++) {
//             let minIndex = i
//             for(let j = i + 1; j < arr.length; j++){
//                   if(arr[minIndex] > arr[j]) {
//                         minIndex = j
//                   }
//             }

//             const tmp = arr[i]
//             arr[i] = arr[minIndex]
//             arr[minIndex] = tmp
//       }
//       return arr
// }

// console.log(selectedSort(array2))

// const array3 = [2, 6, 7, -1, 22, 8]

// const bubbleSort = (arr) => {
//       for(let i = 0; i < arr.length; i++) {
//             for(let j = 0; j < arr.length; j++){
//                   if(arr[j + 1] < arr[j]) {
//                         const tmp = arr[j]
//                         arr[j] = arr[j + 1]
//                         arr[j + 1] = tmp
//                   }
//             }

//       }
//       return arr
// }

// console.log(bubbleSort(array3))


// const array4 = [2, 6, 7, -1, 22, 8]

// const quickSort = (arr) => {
//       if(arr.length < 1) {
//             return arr
//       }

//       let pivotIndex = Math.floor((arr.length / 2))
//       let pivot = arr[pivotIndex]
//       let less = []
//       let greater = []

//       for(let i = 0; i < arr.length; i++) {
//             if(i === pivotIndex)
//             continue
            
//             if(arr[i] < pivot) {
//                   less.push(arr[i])
//             } else {
//                   greater.push(arr[i])
//             }
//       }
//       return [...quickSort(less), pivot, ...quickSort(greater)]
// }

// console.log(quickSort(array4))

// const isPalindroms = (str) => {
//       return str.toLowerCase() === str.toLowerCase().split('').reverse().join('')
// }

// console.log(isPalindrom('madam'))

// const array3 = [2, 6, 7, -1, 22, 8]

// const bubbleSort = (array) => { 
//       for(let i = 0; i < array.length; i++) {
//             for(let j = 0; j < array.length; j++) {
//                   if (array[j + 1] < array[j]) {
//                         const tmp = array[j]
//                         array[j] = array[j + 1]
//                         array[j + 1] = tmp
//                   }                  
//             }
//       }
//       return array
// }

// console.log(bubbleSort(array3))

// const array4 = [2, 6, 7, -1, 22, 8]

// const selectedSort = (arr) => {
//       for(let i = 0; i < arr.length - 1; i++) {
//             let minIndex = i
//             for(let j = i + 1; j < arr.length; j++) {
//                   if(arr[j] < arr[minIndex]) {
//                         minIndex = j
//                   }
//             }
//             const tmp = arr[i]
//             arr[i] = arr[minIndex]
//             arr[minIndex] = tmp
//       }
//       return arr
// }

// console.log(selectedSort(array4))


// const array5 = [2, 6, 7, -1, 22, 8]

// const quickSorted = (arr) => {
//       if (arr.length < 1) {
//             return arr
//       }

//       let pivotIndex = Math.floor(arr.length / 2)
//       let pivot = arr[pivotIndex]
//       let less = []
//       let greater = []

//       for(let i = 0; i < arr.length; i++) {
//             if(pivotIndex === i) 
//             continue;
            
//             if (arr[i] < pivot) {
//                   less.push(arr[i]) 
//             } else {
//                   greater.push(arr[i])
//             }
//       }
//       return [...quickSorted(less), pivot, ...quickSorted(greater)]
// }

// console.log(quickSorted(array5))


// const binarySearch = (arr, value) => {
//       if(arr.length <= 1) {
//             return arr
//       }
//       let start = 0
//       let end = arr.length - 1
//       while(start <= end) {
//             let middle = 0
//             if (arr[middle] === value) return true

//             if(arr[middle] > value) {
//                   start = middle + 1
//             } else {
//                   end =  middle - 1
//             }

//       }
//       return arr
// } 

// console.log(binarySearch(quickSorted(), 22))



// const number = [[10,0],[3,5],[5,8]]

// const numBusPeople = (arr) => {
//       let newArr = arr
//       let sss = newArr.map(el => {
//             for(let i =0; i < arr.length; i++) {
//                   return el[i] - el[i + 1]
//             }
            
//       })
//       return sss.reduce((a, b) => a + b)
// }
// numBusPeople(number)


// const numberw = [[10,0],[3,5],[5,8]]

// const ddd = (arr) => {
//      return 
// }

// console.log(ddd(numberw))

// const numberw = [[10,0],[3,5],[5,8]]

// const numBusScale = (arr) => arr.reduce((sale, [up, down]) => sale += up - down, 0)

// console.log(numBusScale(numberw))

// const validatePIN = (pin) => {
//       if(!isNaN()) {
//             return false
//       }
//       if (/(?=.*\d)(?=.*[a-z])/i.test(pin) || /[^\w\s]|_/g.test(pin) || /\s+/g.test(pin) ) {
//             return false
//       }
//       let str = pin.split('').join('')
//       return str.length  === 4 || str.length  === 6 ? true : false
// }

// console.log(validatePIN('123  4'))

//Банкоматы допускают использование 4- или 6-значных PIN-кодов, а PIN-коды не могут содержать ничего, кроме ровно 4 или ровно 6 цифр.

// Если функции передана действительная строка PIN-кода, return true, иначе return false.

// Примеры ( Ввод -> Вывод)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

// const arrayIs = [2, 3, -6, 10, 13, 7, -1]

// const bubbleSort = (arr) => {
//       for(let i = 0; i < arr.length; i++){
//             for(let j = 0; j < arr.length; j++) {
//                   if (arr[j + 1] < arr[j]) {
//                         const tmp = arr[j]
//                         arr[j] = arr[j + 1]
//                         arr[j + 1] = tmp
//                   }
                  
//             }
//       }
//       return arr
// }

// console.log(bubbleSort(arrayIs))

// const arrayIs = [2, 3, -6, 10, 13, 7, -1]

// const selectedSort = (arr) => {
//       for(let i = 0; i < arr.length - 1; i++ ) {
//             let minEl = i
//             for(let j = i + 1; j < arr.length; j++ ) {
//                   if (arr[minEl] > arr[j]) {
//                         minEl = j
//                   }
//             }
//             const tmp = arr[i]
//             arr[i] = arr[minEl]
//             arr[minEl] = tmp
//       }
//       return arr
// }

// console.log(selectedSort(arrayIs))

// const arrayIs = [2, 3, -6, 10, 13, 7, -1]

// const quickSort = (arr) => {
//       if (arr.length  <= 1) {
//             return arr
//       }

//       let pivotIndex = Math.floor(arr.length / 2)
//       let pivot = arr[pivotIndex]
//       let less = []
//       let greater = []

//       for(let i = 0; i < arr.length; i++) {
//             if (pivotIndex === i) 
//             continue;

//             if (pivot > arr[i]) less.push(arr[i])
//             else greater.push(arr[i])
//       }

//       return [...quickSort(less), pivot, ...quickSort(greater)]

// }
// console.log(quickSort(arrayIs))


// const regEx = () => {
//       let dd  = 'aaasdsdAds'
//       return dd.replace(/a/gi, '')
// }
// console.log(regEx())

// const funcStr = (str) => {
//       let a = str.length
//       let b = a - str.replace(/[n-z]/gmi, '').length
//       return `${b}/${a}`
// }

// funcStr('aaaxbbbbyyhwawiwjjjwwm')

// let ddd = 'asdfgthgcdx'
// console.log(ddd.replace(/[a-m]/gi, ''))

// const binarySearch = (arr, value) => {
//       let start = 0
//       let end = arr.length - 1
//       while(start <= 1) {
//             let middle = Math.floor((start + end) / 2)
//             if (value === arr[middle]) {
//                   return `found the needle at position ${middle}`
//             }

//             if(value < arr[middle]) {
//                   end = middle - 1
//             } else {
//                   start = middle + 1
//             }
//       }
//       return false
// }

// console.log(binarySearch([1, 2, 3, 4, 5], 3))


// const findNeedle = arr => arr.filter(value => value === 'needle'  ? clg`found the needle at position ${value}` : false)

// console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] ))

// const findNeedle = (arr) => `found the needle at position ${arr.findIndex(value => value === 'needle')}`

// console.log(findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]))




// const friend = (friends) => friends.filter(c => c.length === 4)


// console.log(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]))

// const strCount = (str, letter) => {  
//       let count = 0
//       for(let i = 0; i < str.length; i++) {
//             if (str[i] === letter) {
//                   count += 1
//             }
//       }
//       return count
// }


// strCount("Hello", 'o')

// const strCount = (str, letter) => {
//       return str.split(letter).filter(f => f === letter).length
// }

// console.log(strCount('Hello', 'l'))


// function getCount(str) {
//       let count = 0
//       for(let i = 0; i < str.length; i++) {
//             if (str[i] === 'a') {
//                   count +=1
//             } else if (str[i] === 'e') {
//                   count += 1
//             } else if (str[i] === 'i') {
//                   count += 1
//             }

//             else if (str[i] === 'o') {
//                   count += 1
//             }

//             else if (str[i] === 'u') {
//                   count += 1
//             }
//       }
//       return count
// }

// console.log(getCount('xjouzm bra jra p'))


// const getCount = (str) => str.replace(/[qwrtplkjhgfdszxcvbnmy]/g, '').replaceAll(' ', '').length


// getCount('xjouzm bra jra p')



// const longest = (s1, s2) => {
//       let newArr = (s1 + s2).split('')
//       return newArr.filter((item, index) => newArr.indexOf(item) === index).sort().join('')
// } 

// longest("aretheyhere", "yestheyarehere")


// const aarr = [3, 3, 4, 1, 6, 4, 1, 7, 8, 5, 1, 1, 2]


// const ggg = (aarr) => aarr.filter((v, i) => i === aarr.indexOf(v))

// console.log(ggg(aarr))


// function towerBuilder(nFloors) {
//       let stars = nFloors** 2
//       let start = []
//       for(let i = 0; i < 9; i++) {
//              start.push('*')
//       }
//       return start

// }

// console.log(towerBuilder(3))
// // каждое число + 2 звезды

//Работа с объектами 

// const user = {
//      name: 'Egor',
//      age: 17,
// }

// const newArray = Object.entries(user).map((item) => {
//       return ['key-prefix: ' + item[0], 'values-prefix: ' + item[1]]
// })

// const newObject = Object.fromEntries(newArray)

// console.log(user)
// console.log(newObject)




// const bubbleSort = (arr) => {
//       for(let i = 0; i < arr.length; i++) {
//             for(let j = 0; j < arr.length; j++) {
//                   if(arr[j] > arr[j + 1]) {
//                         const tmp = arr[j]
//                         arr[j] = arr[j + 1]
//                         arr[j + 1] = tmp
//                   }
//             }
//       }
//       return arr
// }

// console.log(bubbleSort(arrayOne))


// const selectedSort = (arr) => {
//       for(let i = 0; i < arr.length - 1; i++) {
//             let minEl = i
//             for(let j = i + 1; j < arr.length; j++) {
//                   if (arr[minEl] > arr[j]) {
//                         minEl = j
//                   }
//             }
//             const tmp = arr[i]
//             arr[i] = arr[minEl]
//             arr[minEl] = tmp
//       }
//       return arr
// }

// console.log(selectedSort(arrayOne))


// const arrayOne = [3, 4, 6, 1, 8]

// const quickSort = (arr) => {
//       if(arr.length <= 1) {
//             return arr
//       }

//       let pivotIndex = Math.floor(arr.length / 2)
//       let pivot = arr[pivotIndex]
//       let less = []
//       let greater = []

//       for(let i = 0; i < arr.length; i++) {
//             if(pivotIndex === i) 
//             continue;
            
//             if(pivot > arr[i]) {
//                   less.push(arr[i])
//             }else {
//                   greater.push(arr[i])
//             }
           
//       }

//       return [...quickSort(less), pivot, ...quickSort(greater)]
// }

// console.log(quickSort(arrayOne))

// const arrayTwo = [1, 2, 3, 4, 5, 6, 7, 8]

// const binarySearch = (arr, value) => {
//       let start = 0
//       let end = arr.length - 1
//       while(start <= end) {
//             let middle = Math.floor((start + end) / 2)
//             if (value === arr[middle]) {
//                   return true
//             } 
//             if(value < arr[middle]) {
//                   end = middle - 1
//             } else {
//                   start = middle + 1
//             }
//        }

//        return false
// }

// console.log(binarySearch(arrayTwo, 71))

//Промисы



// setTimeout(() => {
//       console.log('Preparing data...')

//       const backendData = {
//             server: 'aws',
//             port: 5000,
//             status: 'Working!'
//       }

//       setTimeout(() => {
//             backendData.modified = true
//             console.log('Data received', backendData)
//       }, 2000);
// }, 2000)



const p = new Promise((resolve, reject) => {
      setTimeout(() => {
            console.log('Preparing data...')

            const backendData = {
                  server: 'aws',
                  port: 5000,
                  status: 'Working!'
            }
            resolve()
      }, 2000)
}).then(() => console.log('Promise resolve...'))
