const container = document.querySelector('.container')

let counter = 1
function add() {

    const gridItem = document.createElement('div')
    counter++
    gridItem.innerText = counter
    gridItem.setAttribute('class', `card item-${counter}`)
    gridItem.setAttribute('onmouseenter', 'add()')

    container.appendChild(gridItem)
}


function remove() {
    const gridItem = document.querySelector(`.item-${counter}`)
    if (gridItem) {
        gridItem.remove()
        counter--   
    }
}


document.body.addEventListener('keypress', ({ target, key }) => {
    switch (key) {
        case ' ':
            add()
            break

        case 'r':
            remove()
            break
    }
})