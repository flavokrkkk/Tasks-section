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

//Задача номер 5 ====================================================

function upRegister(str) {
    return str.trim().split(/\s+/).map(w => {
        return w[0].toUpperCase() + w.substring(1).toLowerCase()
    }).join(' ')
}

console.log(upRegister('привЕт мирРРРРРРР'))

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
  
const subArrayMax = (arr) => arr.map(i => Math.max(...i))

console.log(subArrayMax([[1, 2, 3], [4, 5], [6, 7, 8, 9]]))

// Задача номер 10  ====================================================

const func = (n, arr) => {
   if (n <= 0) {
      return arr
   } else {
      arr.push(n)
      return func(n - 1, arr)
   }
}

console.log(func(5, []))

//Задача номер 6 ========================================================

const copyElByArray = (arr1, arr2, n) => arr2.toSpliced(n, 0, ...arr1)

console.log(copyElByArray([1, 2, 3], [4, 5], 1))

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

const arrStr = ["amry", "army"]

const arrStrComparsion = (arr) => arr[1].toLowerCase() == arr[1].toLowerCase().split('').map(i => {return arr[0].toLowerCase().split('').find(j => j === i)}).join('')

console.log(arrStrComparsion(arrStr))

//Задача номер 9 =========================================================

// Написать функцию, которая на вход принимает масссив и целое число. Функция
// должна разбить массив (первый аргумент) на группы длиной size (второй агрумент) и
// вернуть их в виде двумерного массива


//Напишите функцию, которая проверяет, является ли данная строка (без учета регистра) палиндромом .





