let title = document.querySelector('#title')
console.log(title)

let texts = document.querySelectorAll('.text')
console.log(Array.from(texts))

let listItems = document.querySelectorAll('.list-item')
console.log(Array.from(listItems))

let lists = document.querySelectorAll('li')
Array.from(lists).forEach((item,idx) => {
    item.style.listStyleType = 'decimal'
    item.textContent = `${item.textContent} PINK VENOM`
    item.style.textDecoration = 'underline'
    item.style.color = 'grey'
    item.style.cursor = 'pointer'
})
console.log(lists)

let info = document.querySelectorAll('.info')
Array.from(info).forEach((item,idx) => {
    if (idx % 2 === 0) {
        item.style.color = 'red'
    } else {
        item.style.color = 'green'
    }
})
console.log(info)