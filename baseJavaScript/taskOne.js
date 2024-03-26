//1) Прототипы - это определенный объект, который присутствует у родительских элементов

// const person = {
//     name: 'Egor',
//     age: 17,
//     greet: () => {
//         console.log('Greet!')
//     }
// }

//Созание объекта с помощью класса Object
// const person = new Object({
//         name: 'Egor',
//         age: 17,
//         greet: () => {
//             console.log('Greet!')
//         }
//     }
// )

//Создание метода на уровне прототипа
// Object.prototype.sayHello = () => {
//         console.log('Hello Greet!')
// }


// // const andry = Object.create(person)
// // andry.name = 'Andry'
// // andry.age = 18


// // const str = 'I am string'
// const str  = new String('I am string!')

// Object.prototype.notAssring = (ob) => {
//     console.log(obj.age)
// }

// //Object.create - создать новый объект, экземпляром от 

// const obj = {
//     name: 'Egor',
//     age: 17,
//     greet: () => {
//         console.log('Hello Egor!')
//     }
// }

// const obj1 = {
//     name: 'Andry',
//     age: 19,
//     greet: () => {
//         console.log('Hello Andry!')
//     }
// }

// const obj2 = {
//     name: 'Bob',
//     age: 20,
//     greet: () => {
//         console.log('Hello Bob!')
//     }
// }

// const obj3 = {
//     name: 'Harry',
//     age: 18,
//     greet: () => {
//         console.log('Hello Harry!')
//     }
// }

// const egor = Object.create(obj)
// const andry = Object.create(obj1)
// const bob = Object.create(obj2)
// const harry = Object.create(obj3)

// Object.prototype.toMeetGreet = () => {
//     console.log('Привет мир!')
// }

// const str = new String('I am string')
// String.prototype.grow = () => {
//     console.log('Привет мир!')
// }

// const obj = {}
// Object.prototype.hlow = () => {
//     console.log('Пока мир!')
// }


//ОСНОВНОЙ JavaScript
//1) Работа с числами

//toString

// let num = 255
// console.log(num.toString(16)) // представляет число в той или иной системе счисления
// console.log(num.toString(8)) // представляет число в той или иной системе счисления
// console.log(num.toString(2)) // представляет число в той или иной системе счисления

// // Math

// let numOneFloor = Math.floor(5.8) //Math.floor - округление в меньшую сторону
// let numTwoFloor = Math.floor(2.2)
// let numThreeFloor = Math.floor(-2.2)

// console.log(numOne)
// console.log(numTwo)
// console.log(numThree)

// let numOneCeil = Math.ceil(5.8) //Math.ceil - округление в большую сторону
// let numTwoCeil = Math.ceil(2.2)
// let numThreeCeil = Math.ceil(-2.2)

// console.log(numOneCeil)
// console.log(numTwoCeil)
// console.log(numThreeCeil)

// let numOneRound = Math.round(5.845) //Math.round - округление до ближайшего целого
// console.log(numOneRound)

// let numOneFixed = 5.845 // toFixed - округление до
// console.log(numOneFixed.toFixed())

// let numOne = Math.round(1.005 * 100) / 100
// console.log(numOne)

// let numTwo = 12.35
// console.log(numTwo.toFixed(1))


//Math.ceil - округляет в большую сторону
//Math.floor - округляет в меньшую сторону
//Math.round - окгругляет до ближайшего целого числа


//Проверка isNaN

// console.log(Number(25 + 'Привет!'))

// if (isNaN(32)) {
//     console.log('я строка')
// } else {
//     console.log('я число')
// }


//Проверка isFinite - преобразует аргумент в число и возвращает true если оно число

// console.log(isFinite('25'))
// console.log(isFinite('Привет'))
// console.log(isFinite(10 / 0))


//Math

// console.log(Math.random())

// console.log(Math.abs(-58)) - возвращает модуль числа

// console.log(Math.pow(4, 2)) - возводит в степень

// console.log(Math.max(10, 58, 39, -150, 0))

// console.log(58.858.toFixed(0))
// console.log(Math.floor(58.858))


//2)Работа со строками

// let single = 'single-text'
// let double = "double-text"
// let backticks = `backticks`


// console.log(`${single} ${backticks}`)

// let anyText = `string 1
//     string2
//     string3
// `

// console.log(anyText)

// let anyText = `Hello World`


// console.log(anyText.charAt(1)) - ищет определенный символ в строке
// console.log(anyText[anyText.length - 1])

// anyText[1] = anyText[0] + 'E'

// console.log(anyText)

//Поиск подстроки
 
// let anyText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus culpa quam sed perferendis quae in deserunt incidunt! Perspiciatis, blanditiis animi error similique consequatur labore alias quidem ab ex exercitationem odit.'

// console.log(console.log(anyText.slice(6, 2)))



//Методы строк

const nameIs = 'Alice and Bob' 

console.log('1 :', nameIs.includes('and', )) // - поиск подстроки в строке

// console.log('2 :', nameIs.indexOf('Alice')) // поиск подстроки в строке - возвращает индекс

// console.log('3 :', nameIs.lastIndexOf('and')) // возвращает индекс последней найденной подстроки

// console.log('4 :', nameIs.repeat(3)) // повторяет строку указанное количество раз

// console.log('5 :', nameIs.replace(/and/g, 'love')) // заменяет указанную подстроку

// console.log('6 :', nameIs.slice(4, -1)) // удаляет все буквы элементы кроме выбранного промежутка

// console.log('6 :', nameIs.split(' ')[0]) //возвращает массив из строки

// console.log('7: ', nameIs.trim())


//3) Работа с массивами

const arr_1 = [1, 2, 3, 4, 5]

// 1. forEach - перебор элементов массива

// const newArr = arr.forEach((item, index, arr) => {
//     console.log('element: ', item, 'index: ', index, 'arr: ', arr)
// })

// console.log(arr)



// 2. map - перебор элементов массива и возврат нового массива

// const newArr = arr.map((item, index, arr) => item * 2)

// console.log(arr)
// console.log(newArr)

// 3. reduce - перебор элементов массива и возврат новой структуры данных

// const something = arr.reduce((acc, item, index, array) => {
//         acc += item    
//         return acc
// }, 0)

// console.log(something)

// const array = ['Егор', 'Влад', 'Андрей']

// const newArr = array.reduce((acc, item, index) => {
//     return {
//         ...acc,
//         [index]: item
//     }
// }, {})

// console.log(newArr)

// 4. find - позволяет найти элемент по условию и сразу его возвращает

// const arr_2 = ['Egor', 'Vlad', 'Andry', 'Pavel']

// const searchVal = arr_2.find((item) => {
//     return item === 'Pavel'
// })

// console.log(searchVal)

// 5. findIndex - aналогичен find, только возвращает индекс найденного элемента
// const arr_2 = ['Egor', 'Vlad', 'Andry', 'Pavel']

// const searchByIndex = arr_2.findIndex((item) => {
//     return item === 'Pavel'
// })

// console.log(searchByIndex)

// const searchByIndeFind = arr_2.findIndex((item) => {
//     return item === 'Egor'
// })

// console.log(searchByIndeFind)


// 6. filter - возврщает новый массив по истинному условию

// const arr_3 = [1234, 1235, 1236, 1237, 1238]

// const filtered = arr_3.filter((item) => {
//         return item !== 1234
// })
// console.log(filtered)


// 7. push - вставляет элементы в конец массива и мутирует его

// const arr_3 = [1234, 1235, 1236, 1237, 1238]

// arr_3.push(1239, 1240,1241)
// console.log(arr_3)


// 8. unshift - вставляет элементы в начало массива и мутирует его

// const arr_3 = [1234, 1235, 1236, 1237, 1238]

// const newLength = arr_3.unshift(1231, 1232, 1233)
// console.log(arr_3)
// console.log(newLength)

// 9. pop - удаляет элемент из конца массива и одновременно возвращает его
// const arr_3 = [1234, 1235, 1236, 1237, 1238]

// const lastEl = arr_3.pop()
// console.log(lastEl)

// 10. shift - удаляет элемент из начала массива

// const arr_3 = [1234, 1235, 1236, 1237, 1238]

// const firstEl = arr_3.shift()

// console.log(firstEl)

// const arr = [1, 2, 3, 4, 5, 6]

//удаляет последний элемент массива
// arr.pop()
// console.log('pop', arr)

//добавляет новый элемент в конец массива
// arr.push(7, 8, 9)
// console.log('push', arr)

//добавляет новый элемент в начало массива
// arr.unshift(0)
// console.log('unshift', arr)

//удаляет первый элмент массива
// arr.shift()
// console.log('shift', arr)


// const solution = (str, ending) => str.substring(Math.floor(str.length / 2)).includes(ending)
 
// console.log(solution('samurai', 'ra'))

// const solution = (str, ending) => {
//     let newStr = str.slice(str.length - ending.length)
//     return newStr === ending
// }   

// solution('samurai', 'ra')

// const solution = (str, ending) => str.slice(str.length - ending.length) === ending

// solution('abcde', 'abc')

// let a = 'abcde'
// let b = 'cde'
 
// console.log(a.endsWith(b))

// console.log(Math.sqrt(25) % 1 === 0 )

// const isSquare = (n) => Math.sqrt(n) % 1 === 0
// console.log(isSquare(25))

// const bmi = (weight, height) => {
//     let bmi = weight/height ** 2
//     console.log(bmi)
//     switch(true) {
//         case bmi <= 18.5 :
//             return  "Underweight"
//         case bmi <= 25.0 :
//             return   "Normal"
//         case bmi <= 30 :
//             return   "Overweight"
//         case bmi > 30 :
//             return   "Obese"
//     }
// }
// bmi(58, 1.80)


// class Kata {
//     static getVolumeOfCuboid(length, width, height) {
//         return length * width * height
//     }
//   }

//   console.log(Kata.getVolumeOfCuboid(1, 2, 2))

// const miMax = (arr) => [Math.min(...arr), Math.max(...arr)]

// console.log(miMax([1, 2, 3, 4, 5]))


// const minMax = (arr) => {
//     let max = arr[0]
//     let min = arr[0]
//     for(let i = 0; i < arr.length; i++) {
//         if(max < arr[i]) {
//            max = arr[i]
//         }
//         if(min > arr[i]) {
//             min = arr[i]
//         }
//     }
//     return [m]
// }
// console.log(minMax( [ 1, 5]))


// 10. concat - создает новый массив с переданными значениями в конце

// const arr_3 = [1234, 1235, 1236, 1237, 1238]

// const newArr = arr_3.concat(1230, 1231, 1232, 1233)
// console.log(newArr)

// 11. join - позволяет соединить массив в строку

// const str = 'Hello'
// const strArr = str.split('')
// console.log(strArr.join('-'))

// 12. sort - позволяет отсортировать массив
// const arr = [2, 4, 6, 1, 8, 3]

// const sortArr = arr.sort()
// console.log(sortArr)

// 13. splice - позволяет удалять и вставлять элементы
// const arr = [2, 4, 6, 1, 8, 3]

// arr.splice(1, 3)
// console.log(arr)


// 14. slice - позволяет вернуть новый подмассив из переданного
// const arr_3 = [1234, 1235, 1236, 1237, 1238]
 
// const newArr = arr_3.slice(-arr_3.length)

// console.log(newArr)


// 15. indexOf - возвращает индекс массива

// const arr_3 = [1234, 1235, 1236, 1237, 1238]

// const foundId = arr_3.indexOf(1235)

// console.log(foundId)


// 16. includes - возвращает true либо false при нахождении

// const arr_3 = [1234, 1235, 1236, 1237, 1238]
// const checkArr = arr_3.includes(12362)
// console.log(checkArr)

// const setAlarm = (employed, vacation) => {
//     if (vacation && employed) {
//         return false
//     } else if (employed && !vacation){
//         return true
//     } else if (!employed && vacation){
//        return false
//     } else if (!employed && !vacation){
//         return false
//     }
// }
// setAlarm(true, false)

// const litres = (time) => Math.floor(time * 0.5)

// litres(3)

// const hero = (bullets, dragons) => dragons * 2 > bullets ? false : true
// hero(100, 40)

// console.log(10 > 5 * 2|| 10)
// console.log(7 % 4)
// console.log(100 % 40)
// console.log(1500 % 751)
    

// const filter_list = (l) => {
//     const newArr = []
//     for(let i = 0; i < l.length; i++) {
//         if(typeof(l[i]) !== 'string') {
//             newArr.push(l[i])
//         }
//     }
//     return newArr
// }

// filter_list([1,2,"aasf","1","123",123])

// const sss = (list) => list.map(el => !isNaN(el) ? el : )
// console.log(sss([1,2,'a','b']))

// console.log(typeof('12233') === 'string')