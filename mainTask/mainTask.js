//Решил: 1, 2, 3, 4, 5, 10, 6
//Остались: 7, 8, 9

//Задача номер 1 ================================================

const factorial = (n) => {
    if (n <= 1) {
        return 1
    }

    return n * factorial(n - 1)
}

console.log(factorial(-1))



//Задача номер 2 ================================================

function stringLength(str) {
    let newArr = str.split(' ')
    let max = 0

    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i].length > max) {
            max = newArr[i].length
        }
    }
    return max
}

console.log(stringLength('dwdwd wdwd sfsf as'))

// const stringLength = (str) => {
//     str.split().map(el => {
//         console.log(el.length)
//     })

// }

// stringLength('Привет sss ss')

// const str = 'Привет asax sas'
// console.log(str.split)

// function stringLength() {
//     let str = 'wudhwud wfwofo ofef'
//     let max = 0
//     let now = 0

//     for(let i = 0; i < str.length() - 1; i++){
//         if (str[i] != ' '){
//             now++
//         } else {
//             if (now > max) {
//                 max = now
//             }
//             now = 0
//         }
//         if(now > max) {

//         }
//     }
// }

// const str = 'usfh jsjfjjfs jsjf'
// console.log(str.split(' '))



//Задача номер 5 ====================================================

function upRegister(str) {
    return str.trim().split(/\s+/).map(w => {
        return w[0].toUpperCase() + w.substring(1).toLowerCase()
    }).join(' ')
}

console.log(upRegister('привЕт мирРРРРРРР'))


// const str = 'hello bob'

// console.log(str.trim().split(/\s+/).map(w => {
//     return w[0].toUpperCase() + w.substring(1)
// }).join(' ')) 


//Задача номер 4 ====================================================

function testTask(str, num) {
    const newStr = str.length // получаем длину строки 

    if (newStr > num) {
        
        return str.slice(0, num) + '...' // извлекаем часть строки и тем самым делаем ограничение
    } else {
        return str
    }
    
}

console.log(testTask('sdsdsds', 3))

//Задача номер 3 =====================================================
  
// const subArray = (arr) => {
//     let result = []
//     for(let i = 0; i < arr.length; i++) {
//         let currentEl = arr[i]
//         for(let j = 0; j < currentEl.length; j++) {
//             let maxEl = j 
//             console.log(currentEl[j])
//             if(currentEl[maxEl] < currentEl[j + 1]) {
//             } else {
//                 result.push(currentEl[j])
//             }
//         }
//     }

// return result
// }


  
// const subArray = (array) => {
//    let item = array.map(gav => Math.max(gav))
//    return item
// }



// console.log(subArray([[1, 2, 3, 11], [4,  5, 6], [6, 7, 8, 9]]))

//Задача - найти наибольший/наименьший элемент в массиве

const arr = [-5, 2, 3,11111, 1, 4, 104440, 102, 1222]

// const selectionSort = (arr) => {
//     let max = arr[0]
//     for(let i = 0; i < arr.length; i++) {
//         if(max < arr[i]) {
//             max = arr[i]
//         }
//     }
//     return [max]
// }

const arrMax = (arr) => {
   

const result = arrMax(arr)
console.log(result)


// Задача номер 10  ====================================================

let array = []

const func = ([],n) => {
   if (n <= 0) {
      return 1
   } else {
      array.push(n)
      return func(n - 1)
   }
}

func(10)
console.log(array)

//Задача номер 6 ========================================================

const copyElByArray = () => {
    let arr = [[], []]
    for(let i = 0; i < 2; i++) {
        let enterNum = prompt(`Введите кол-во чисел в ${i} массиве`)
        for(let j = 0; j < enterNum; j++) {
            let enterNum = prompt(`Введите ${j} элемент массива`)
            arr[i].push(enterNum) // на выходе получаем готовый массив
        }
    }
    let enterNum = prompt(`Введите с какого индекса должна происходить вставка`)
    arr.push(enterNum)

    let newArr = [...arr[1].slice(0, arr[2]), ...arr[0], ...arr[1].slice(arr[2])]
    console.log(newArr)
}


// function recurse(n) {
//     let arr = []
//     count = 0
//     if ( n <= 0 ) {
//         return 1
//     }

//     count++
//     return recurse()
// }
// console.log(recurse(5))

// const str = 'Hello'
// console.log(str.slice(0, 4))

// console.log(str.substring(0, 9))

//Задача номер 7 =========================================================

const arrFalseValue = ['hello', 0, '', false, 54, undefined ,'Egor', -0, 77, null, NaN]

const removeFalseValue = (arr) => {
    let trueValue = []
    for(let i = 0; i < arr.length; i++) {
        if(arr[i]) {
            trueValue.push(arr[i])
        }
    }
    return trueValue
}

console.log(removeFalseValue(arrFalseValue))

//Задача номер 8 =========================================================

// Написать функцию, которая на вход принимает массив, состоящий из двух строк. 
// Функция должна вернуть true, если строка в первом элементе массива содержит все
// буквы строки во втором элементе массива (регистр игнорируется).

const arrStr = ['heLlo', 'HeLlo']

const arrStrComparsion = (arr) => {
    for(let i = 0; i < arr.length - 1; i++) {
            if (arr[i].toLowerCase() === arr[i + 1].toLowerCase()) {
                return true
            }
            // console.log(arr[i + 1].toLowerCase(), arr[i].toLowerCase())
    }
    return arr
}

console.log(arrStrComparsion(arrStr))

//Задача номер 9 =========================================================

// Написать функцию, которая на вход принимает масссив и целое число. Функция
// должна разбить массив (первый аргумент) на группы длиной size (второй агрумент) и
// вернуть их в виде двумерного массива

const arrSmash = ['hello', 123, 33, 'Egor', 99]

const arrSmashFunc = (arr, n) => {
    let arrTwo = []
    let sizesArr = n // указываем размер двумерного массива(сколько групп будет в нем)
    for(let i = 0; i < sizesArr ; i++) {
        arrTwo.push(arr.slice(i, i + sizesArr + n ))
    }

    return arrTwo
}

console.log(arrSmashFunc(arrSmash, 4))

