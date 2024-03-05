//Рекурсия и стек

let count = 0

function recurse () {
   if (count === 5) {
        return 'done'
   } 
   count++ 
   return recurse()
}

console.log(recurse())
console.log('count: ', count)




function pow(x, y) {
   if (y === 0) {
         return 1
   }

   return x * pow(x, y - 1)
}


const result = pow(5, 3)


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

let t = 0

const myFn = () => {
   t++
   console.log(t)
   if (t === 100) {
      return 1
   }
   else {
      myFn()
   }
}

myFn()


//Аналог рекурсии с помощью стека

const myFn2 = () => {
   let out = ''
   for (let i = 1; i <= 30; i++) {
      out += i + ' '
   }
   console.log(out)
}

myFn2()

//Пример с рекурсией 
let i = 0
let out = ''

function myFn3() {
   i++
   out += i + ' '
   if (i >= 20) {
      return 1
   } else {
      myFn3()
   }
}

myFn3()
