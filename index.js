//Задача номер 1 ================================================

const factorial = (n) => {
    if (n <= 1) {
        return 1
    }

    return n * factorial(n - 1)
}

console.log(factorial(-1))



//Задача номер 2 ================================================

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

// const str = 'usfh jsjfjjfs jsjf'
// console.log(str.split(' '))




//Задача номер 5 =================================================

// const str = 'hello bob'

// console.log(str.trim().split(/\s+/).map(w => {
//     return w[0].toUpperCase() + w.substring(1)
// }).join(' ')) 


function upRegister(str) {
    return str.trim().split(/\s+/).map(w => {
        return w[0].toUpperCase() + w.substring(1)
    }).join(' ')
}

console.log(upRegister('привет боб'))





//Задача номер 4 ================================================

function testTask(str, num) {
    const newStr = str.length // получаем длину строки 

    if (newStr > num) {
        
        return str.slice(0, num) + '...' // извлекаем часть строки и тем самым делаем ограничение
    } else {
        return str
    }
    
}

console.log(testTask('sdsdsds', 3))

//Задача номер 3 ================================================

let inp = prompt("введите количество подмассивов")
    let arr = []
    for (let i = 0; i < inp; i ++){ //создаем массив с массивами
        arr.push([])
    }
    for (let i = 0; i < inp; i ++){
        let inpN = prompt(`введите количество чисел в  ${i} массиве`) //узнаем сколько элементов в каждом массиве и пушим их 
        for (let j = 0; j < inpN; j ++){
            let inpN = prompt(`введите ${j} элемент массива`)
            arr[i].push(inpN) //на выходе получаем готовый array
        }
    }
    
    let newArr = [] 
    for (let i = 0; i < inp; i ++){ 
        let max = -Infinity
        for (let j = 0; j < arr[i].length; j ++){ //последовательно ходим по значениям каждого подмассива и сравниваем с max
            if (arr[i][j] > max){
                max = arr[i][j]
            }
        }
        newArr.push(max) //на выходе получаем newArr с готовыми значениями
    }


// Задача номер 10  ================================================

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