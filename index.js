//Задача номер 1

const factorial = (n) => {
    if (n <= 1) {
        return 1
    }

    return n * factorial(n - 1)
}

console.log(factorial(-1))



//Задача номер 2

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

console.log(stringLength('Привет я ар мении прибытddь'))

// const str = 'usfh jsjfjjfs jsjf'
// console.log(str.split(' '))


//Задача номер 5

function rar(arr) {

}
