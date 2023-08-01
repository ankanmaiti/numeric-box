const container = document.getElementById('container')
const starterMessage = document.getElementById('starter-message')

let counter = 0


function add() {

    const gridItem = document.createElement('div')
    gridItem.innerText = ++counter
    gridItem.classList.add('card', `item-${counter}`)
    gridItem.addEventListener('mouseenter', add)

    container.append(gridItem)
}


function remove() {
    const gridItem = document.querySelector(`.item-${counter}`)

    if (!gridItem) return

    gridItem.removeEventListener('mouseenter', add)
    gridItem.remove()
    counter--

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



function updateStarterMessage() {
    starterMessage.style.display = counter > 0 ? 'none' : 'block'
}


const containerObserver = new MutationObserver(updateStarterMessage)
containerObserver.observe(container, { childList: true })