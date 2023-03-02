// function type(b) {
//     console.log(`${b} typeof ${typeof b}`)
// }
// type('lemon')

// function calcSquare(a) {
//     if (typeof a === "string") {
//         a = Number(a)
//         console.log(a*a)
//     }
// }
// calcSquare('5')

// function task3(str1,str2,str3) {
//     let arr = []
//     for (let i = 0; i < str1.length || i < str2.length || i < str3.length; i++) {
//         arr = [...arr,str1[i],str2[i],str3[i]]
//     }
//     return arr.join('')
// }
//
// console.log(task3('bm','aa','tn'))

// function task4(c) {
//     let b = c.split('')
//     let a = b[0].charAt(0) + '.' + b[0].charAt(0)
//     console.log(a)
// }
//
// task4('Сергей Семёнов')


// function task5(name,city,region) {
//     return `Привет, ${name[0]} ${name[1]}! Добро пожаловать в ${city}, ${region}`
// }
//
// console.log(task5(['Дмитрий', 'Серебров'], 'Ишим', 'Тюменская обл'))

// function task6(a) {
//     if (a > 0) {
//         return 'positive'
//     } else if (a < 0) {
//         return 'negative'
//     }
//     return 'zero'
// }
// console.log(task6(1))

// let b = ''
// function task7(text) {
//     if (text === text.toUpperCase()) {
//         b = text.toLowerCase()
//     } else {
//         b = text.toUpperCase()
//     }
// }
// task7('hello world')
// console.log(b)

// function getValue(obj) {
//     return obj.id
// }
// console.log(getValue({id:true}))

// function getEven(num) {
//     if (num.name.length % 2 === 0) {
//         return 0
//     }
//     return  1
// }
//
// console.log(getEven({name: 'xxxx'}))

// function task10(a,b) {
//     if (a > b) {
//         return 1
//     } else if (a < b) {
//         return  -1
//     }
//     return 0
// }
//
// console.log(task10(1,2))

// function MasterYoda(num) {
//     if (num % 3 === 0) {
//         return 'Master'
//     } else if (num % 5 === 0) {
//         return 'Yoda'
//     } else if (num % 3 === 0 && num % 5 === 0) {
//         return 'MasterYoda'
//     }
//     return num
// }
//
// console.log(MasterYoda(15))