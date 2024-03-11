//Стек - последним пришел, первым вышел
//Очередь - первым пришел, первым ушел



// 1) Flatten через стек

// const flatten = (...stack) => {
//     let result = []
//     while(stack.length){
//         const el = stack.shift()
//         if(Array.isArray(el)){
//             stack.unshift(...el)
//             continue;
//         }

//         result.push(el)
//     }   

//     return result
// }

// console.log(flatten(1, [2, [[[3]]]], [[[4, 5]], [6, [7]]]))
// console.log(flatten('a', ['b', 2], 3, null, [[4], ['c']]))

// const flattenRecursion = (...args) => {
//     let result = []
//     for(let i = 0; i < args.length; i++) {
//         let currentEl = args[i]
//         if(Array.isArray(currentEl)){
//             result.push(...flattenRecursion(...currentEl))
//         } else {
//             result.push(currentEl)
//         }
//     }

//     return result
// }

// console.log(flattenRecursion(1, [2, [[[3]]]], [[[4, 5]], [6, [7]]]))
// console.log(flattenRecursion('a', ['b', 2], 3, null, [[4], ['c']]))


//2) Польская нотация через стек


//  console.log(calculate('+ 3 5'), 8)
//  console.log(calculate('* + 2 2 3'), 12)
//  console.log(calculate('/ + 3 5 * 2 2'), 2)
 

// const flattenRecursions = (...data) => {
//     let result = []

//     for(let i = 0; i < data.length; i++ ) {
//         let currentEl = data[i]
//         if (Array.isArray(currentEl)) {
//             result.push(...flattenRecursions(...currentEl))
//         } else {
//             result.push(currentEl)
//         }
//     }
//     return result
// }


// console.log(flattenRecursions(1, [[2, [[[3]]]], [[[4, [5]]], [[6, [7]]]]]))
// console.log(flattenRecursions('a', ['b', 2], 3, null, [[4], ['c']]))

// switch case

// let x = 'value1'

// switch(x) {
//     case 'value':
//         console.log('Мы попали в case!')
//         break;
//     case 'valueOf':
//         console.log('Мы попали в case!!')
//         break;
//     case 'value1': 
//         console.log('Мы попали в case!!aa')
//         break;
// }

// class Stack {
//     constructor() {
//         this.items = []
//     }

//     push (value) {
//         this.items.push(value)
//     }

//     pop() {
//         return this.items.pop()
//     }

//     isEmpty() {
//         return this.items.length == 0
//     }
// }

// let stack = new Stack()
// const expression = '3 2 + 4 5 + *';
// const lexems = expression.split(' ')

// for (let lexem of lexems) {
//     let a;
//     let b;
//     switch (lexem) {
//         case '+':
//             b = stack.pop()
//             a = stack.pop()
//             stack.push(a + b)
//             break;
//         case '-':
//             b = stack.pop()
//             a = stack.pop()
//             stack.push(a - b)
//             break;
//         case '*':
//             b = stack.pop()
//             a = stack.pop()
//             stack.push(a * b)
//             break;
//         case '/':
//             a = stack.pop()
//             b = stack.pop()
//             stack.push(a / b)
//             break;
//         default:
//             stack.push(parseFloat(lexem))
//     }
// }

// console.log(stack.pop())



// class Stack{
//     constructor() {
//         this.items = []
//     }

//     push (value) {
//         this.items.push(value)
//     }

//     pop () {
//        return this.items.pop()
//     }

//     isEmpty() {
//         this.items.length == 0
//     }
// }

// let stack = new Stack()
// const expression = '3 2 + 4 5 + *' //наше выражение
// const lexems = expression.split(' ') //разделим все выржаение на массив с элементами

// for(let lexem of lexems) {
// // с помощью цикла пробегаемся по массиву и цепляем все элементы из него
//     let a;
//     let b;
//     switch(lexem) {
//         case '+':
//             b = stack.pop()
//             a = stack.pop()
//             stack.push(a + b)
//             break;
//         case '-':
//             b = stack.pop()
//             a = stack.pop()
//             stack.push(a - b)
//             break;
//         case '*':
//             b = stack.pop()
//             a = stack.pop()
//             stack.push(a * b)
//             break;
//         case '/':
//             b = stack.pop()
//             a = stack.pop()
//             stack.push(a / b)
//             break;
//         default: 
//             stack.push(parseFloat(lexem))
//     }
// }

// console.log(stack.pop())

//Завтра продолжить - параграф накопление и отправка изменений, стек и очередь
// досмотреть видео, которое недосмотрел и оттчачить решение польской нотации
// бинарный список - начать 

//pop - удаляет последний элемент массива и возвращает его
//push - добавляет новый элемент в конец массива и возвращает новую длинну
//shift - удаляет первый элемент массива и возвращает его
//unshift - добавляет новый элемент в начало массива и возвращает новую длинну массива

//Задача флаттен через стек

// const flatten = (...stack) => {
//     const result = [] // - результирующий массив
//     while(stack.length){
//         const el = stack.shift() // - цепляем перый элемент массива
//         if(Array.isArray(el)){
//             stack.unshift(...el) // разворачиваем массив и добавляем значение обратно в стек и так по кругу
//             continue;
//         } 
//         result.push(el) // добавляем элемент в результирующий массив
//     }

//     return result // возвращаем его
// }

// console.log(flatten(1, [[2, [[[3]]]], [[[4, [5]]], [[6, [7]]]]]))
// console.log(flatten('a', ['b', 2], 3, null, [[4], ['c']]))




// решить флаттен двумя способами

// 1-й способ - рекурсия

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


// 2-й способ - стек и очередь

// const flatten = (...stack) => {
//     let result = []
//     while(stack.length){
//         let currentEl = stack.shift()
//         if(Array.isArray(currentEl)){
//             stack.unshift(...currentEl)
//             continue;
//         }
//         result.push(currentEl)
//     }
//     return result
// }   

// console.log(flatten(1, [[2, [[[3]]]], [[[4, [5]]], [[6, [7]]]]]))
// console.log(flatten('a', ['b', 2], 3, null, [[4], ['c']]))


// Польская нотация

//pop - удаляет последний элемент массива и возвращает его
//push - добавляет новый элемент в конец массива и возвращает новую длинну
//shift - удаляет первый элемент массива и возвращает его
//unshift - добавляет новый элемент в начало массива и возвращает новую длинну массива

// const calculate = (expression) => {
//         const arr = expression.split(' ') //получаем массив с элементами наших значений
//         const stack = [] //массив в который будем сохранять результат

//         while(arr.length) {
//             const el = arr.pop() // цепляем значения из массива
//             const numberedEl = Number(el) // подставляем каждый елемент в Number и делаем проверку

//             if (!isNaN(numberedEl)) {
//                 stack.push(numberedEl) // если число, то пушим его в стек
//                 continue;
//             }

//             const firstNum = stack.pop()
//             const secondNum = stack.pop()

//             switch (el) {
//                 case '+' :
//                     stack.push(firstNum + secondNum)
//                     break
//                 case '-':
//                     stack.push(firstNum - secondNum)
//                     break;
//                 case '/':
//                     stack.push(firstNum / secondNum)
//                     break;
//                 case '*':
//                     stack.push(firstNum *   secondNum)
//                     break;
//             }
//         }
//         return stack[0]
// }

// console.log(calculate('+ 3 5'), 8)
// console.log(calculate('* + 2 2 3'), 12)
// console.log(calculate('/ + 3 5 * 2 2'), 2)


// //Цикл while

// let x = 0

// while(x < 5) {
//     console.log(x)
//     x++
//     continue;
// }


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


// console.log(flatten(1, [[2, [[[3]]]], [[[4, [5]]], [[6, [7]]]]]))
// console.log(flatten('a', ['b', 2], 3, null, [[4], ['c']]))

