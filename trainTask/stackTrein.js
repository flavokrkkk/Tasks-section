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
//         } else  {
//             result.push(currentEl)
//         } 
//     }
//     return result
// }
// ПОПРОБОВАТЬ МЕТОД МАССИВОВ FILTER ЛИБО FIND
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


// console.log(subArray([[1, 2, 3, 11], [4,  5, 6], [6, 7, 8, 9]]))

// const boolWord = (bool) => {
//     return bool? 'Yes' : 'No'
// }

// console.log(boolWord(true))

// const greet = () => {
//     return 'hello world!'
// }
// console.log(greet())

// const isPalindrom = (number) => {

// }

// console.log(isPalindrom(1001))
// console.log(isPalindrom(12345))
// console.log(isPalindrom(123321))


//Крокетный клуб Western Suburbs имеет две категории членства: старшую и открытую. Им нужна ваша помощь с формой заявки, в которой потенциальным членам будет указано, к какой категории они будут отнесены.

// Чтобы стать старшим, члену должно быть не менее 55 лет и иметь гандикап более 7. В этом крокетном клубе гандикапы варьируются от -2 до +26; чем лучше игрок, тем ниже гандикап.

// Вход
// Входные данные будут состоять из списка пар. Каждая пара содержит информацию об одном потенциальном участнике. Информация состоит из целого числа, обозначающего возраст человека, и целого числа, обозначающего инвалидность человека.

// Выход
// Вывод будет состоять из списка строковых значений (в Haskell и C: Openили Senior), указывающих, должен ли соответствующий член быть помещен в старшую или открытую категорию.

// Пример

// const input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]

// const openOrSenior = (arr) => {
//     let output = []
//     for(let i = 0; i < arr.length; i++) {
//         let currentEl = i
//         if(arr[currentEl][0] < 55){
//             arr[currentEl] = 'Open'
//         } else if(arr[currentEl][1] < 8) {
//             arr[currentEl] = 'Open'
//         } else {
//             arr[currentEl] = 'Senior'
//         }
//     }
//     return output = [...arr]
// }

// openOrSenior(input)

// const input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]

// const openOrSenior = (arr) => arr.map(([age, rang]) => age > 54 && rang > 7 ? 'Senior' : 'Open')
// console.log(openOrSenior(input))

// const input = [-1023, 1, -2]

// const oddOrEven = (arr) => {
//     if(arr.length === 0) {
//         return 'even'
//     }
//     for(let i = 0; i < arr.length; i++) {
//         if(arr.length = 1 && arr[i] % 2 === 0) {
//             return 'even'
//         }
//         let sum = arr[i] + arr[i  + 1]
//         if(sum % 2 === 0) return 'even' 
//         if(sum % 2 !== 0) return 'odd'
//     }
// }

// console.log(oddOrEven(input))
// console.log(typeof(0))

// const input = [-1023, -1, 3]

// const oddOrEven = (arr) => {
//     let sum = 0
//     if(arr.length === 0) {
//         arr.push(0)
//     }
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i]
//     }

//     if(sum === 0) {
//         return 'even'
//      }
//     if(sum % 2 === 0) {
//         return 'even'
//      } else {
//         return 'odd'
//      }
      
// }

// console.log(oddOrEven(input))

// const highAndLow = (number) => {
    
// }


// console.log(highAndLow("42 5 2 11 1 3"));  // return "5 1"

//Панаграммы 

// const isPangram = (string) => {
//     let cleanStringArr = string.replace(/[^A-Za-z]/g, '').toLowerCase().split('')
//     console.log(cleanStringArr)
//     return [...new Set(cleanStringArr)].length === 26 ? true : false
// }

// isPangram("The quick brown fox jumps over the lazy dog.")


// const binaryArrayToNumber = arr => {
//     let str = arr.join('')
//     return parseInt(str, 2)
// }
// binaryArrayToNumber([0, 1, 1, 0])

// console.log(binaryArrayToNumber([1, 0, 0, 1]))

// let num = '1001'

// console.log(parseInt(num, 2))



// let dd = [1, 0, 0, 1]
// let str = dd.join(' ')
// console.log(str === num)
// console.log(parseInt(dd, 2))

// let a = [1, 0, 0, 1].join('')
// console.log(typeof(a))

// console.log(parseInt(a, 2))


// const grow = x => x.reduce((a,b) => a * b)
// grow([1, 2, 3, 4])

// function expandedForm(num) {
//     let arr = num.toString().split('')
//     let newStr
//     for(let i = 0; i < arr.length; i++) {
//         if(arr.length < 3) {
//            newStr = `${arr[0] + 0} + ${arr[1]}`
//         }
//         if (arr.length > 3) {
        
//         }
//     }

//     return newStr
// }

// console.log(expandedForm(70304))
// let n = 70304
// console.log(n.toString().split(''))


// const fff = (num) => {
//     let arr = num.toString().split('')
//     // let f = arr.map(el => 0).join('').slice(0, 2)
//     // console.log(f)
    
//    return arr.reduce((a, b) => {
//      return arr.length < 3 ? `${a + 0} + ${b}` : `${a}${b > 0 ? b = 0 : b} `
//     })
// }

// console.log(fff(780))

// const www = (num) => {
//     let str = num.toString()
//     for(let i = 0; i < str.length; i++) {
//         let nuller = 0
//         if(str.length < 3) {
//             return `${str[0] + 0} + ${str[1]}`
//         }
//         if (str.length === 3) {
//           return `${str[0] + 0 + 0} + ${str[1] + 0} + ${str[str.length - 1]}`
//         }

//         if (str.length === 4) {
//             console.log('sss')
//             return `${str[0] + nuller + nuller + nuller} + ${str[1] + nuller + nuller} + ${str[str.length - 2] + nuller} + ${str[str.length - 1]}`
//           }

//         if (str.length >= 5) {
//             console.log(str[1])
//             return `${str[0] + nuller + nuller + nuller + nuller} + ${str[1] === '0' ? str[2] + nuller + nuller : str[1] + nuller + nuller + nuller} + ${str[3] === '0' ? str[4] : str[3]}`
//         }
//     }
//     return str
// }

// www(70304)


// const disemvowel = (str) => str.replace(/[aouei]/gi, '')
// disemvowel('This website is for losers LOL!')

// const descendingOrder = (n) => n.toString().split('').reverse().join('')
// console.log(descendingOrder(15))

function descendingOrder(n){
    let num = n.toString()
    for(let i = 0; i < num.length; i++) {
         console.log(num[i])
    }
}

console.log(descendingOrder(15))