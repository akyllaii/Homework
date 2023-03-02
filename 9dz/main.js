// const task = (arr) => {
//     return arr.map((item) => {
//         return item * 2
//     })
// }
// console.log(task([1, 2, 3]))

// const task = (arr) => {
//     return arr.filter((item,idx) => {
//         return idx % 2 === 0
//     })
// }
// console.log(task([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

// const task3 = (arr) => {
//     return arr.map((item) => {
//         if (item === 0) {
//             return item
//         }
//         return item * -1
//     })
// }
// console.log(task3([1, -2, 3, -4, 5, 0]))

// const task4 = (arr,num) => {
//     return arr.filter((item, idx) => {
//         return idx < num
//     })
// }
//
// console.log(task4([0, 1, 2, 3, 5, 8, 13], 5))

// const task5 = (arr) => {
//     return arr.filter((item,idx) => {
//         return item % idx === 0
//     })
// }
// console.log(task5([22, -6, 32, 82, 9, 25]))

// const task6 = (arr) => {
//     return arr.map((item) => {
//         if (typeof item === "string") {
//             return item = null
//         }
//         return item
//     })
// }
// console.log(task6([4, 6, 'Ivan', 5, 'Denis '] ))

// const task7 = (arr) => {
//     return arr.filter((item) => {
//         return item.length <= 5
//     })
// }
// console.log(task7(['Евдоким','Ivan', 'Игнат', 'Denis']))

// const task8 = (arr) => {
//     return arr.map((item) => {
//         if (item % 3 === 0 && item % 5 === 0) {
//             return item = 0
//         }
//         return item * item * item
//     })
// }
// console.log(task8([7, 8, 15, 30, 2]))

// const task9 = (arr) => {
//     return arr.map((item) => {
//         return item.length
//     })
// }
// console.log(task9(['Термос', 'Ураган', 'Земля', 'Комбо', 'Корень']))

// const task10 = (arr) => {
//     return arr.map((item) => {
//         return `<div>${item}</div>`
//     })
// }
// console.log(task10([1, 2, 3, 4, 5 ]))

// const task11 = (arr) => {
//     return arr.filter((item) => {
//         return item.length % 2 === 0
//     })
// }
// console.log(task11(['ab', 'abc', 'abcd']))