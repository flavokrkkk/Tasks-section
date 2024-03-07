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

const array = [1, 2, 3, 4]

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


function queueTime(customers, n) {

}

console.log(queueTime([], 1), 0)
console.log(queueTime([1, 2, 3, 4], 1), 10)
console.log(queueTime([2, 2, 3, 3, 4, 4], 2), 9)
console.log(queueTime([1, 2, 3, 4, 5], 100), 5)

















