const body = document.body
const container = document.getElementById('container')

function createGrid (col, rows) {
    for(let i = 0; i < (col * rows); i++) {
    let newDiv = document.createElement('div')
    newDiv.style.backgroundColor = "white"
    container.style.gridTemplateColumns = `repeat(${col}, 1fr)`
    container.style.gridTemplateRows = `repeat(${col}, 1fr)`
    container.appendChild(newDiv).classList.add('box')
    }
}
createGrid(16, 16)

const btnBlack = document.createElement("button");
const btnRgb = document.createElement("button");
const buttonsContainer = document.querySelector(".buttons")
const btnRefresh = document.querySelector(".refresh")
const btnClear = document.createElement("button")
const boxes = document.querySelectorAll('.box')

// annoying if you draw straight away
/*window.onload = () => {
    const boxes = document.querySelectorAll(".box")
    boxes.forEach(box => box.addEventListener('mouseover', () => {
        box.style.background = "black"
    }))
}*/

function black() {
    const boxes = document.querySelectorAll(".box")
    btnBlack.textContent = "Black"
    btnBlack.addEventListener('click', () => {
        boxes.forEach(box => box.addEventListener('mouseover', () => {
            box.style.background = "black"
        }))
    })
    buttonsContainer.appendChild(btnBlack).classList.add('btn')
}
black()

function rgb() {
    const boxes = document.querySelectorAll(".box")
    btnRgb.textContent = "Rainbow"
    btnRgb.addEventListener('click', () => {
        boxes.forEach(box => box.addEventListener('mouseover', () => {
            let R = Math.floor(Math.random() * 256)
            let G = Math.floor(Math.random() * 256)
            let B = Math.floor(Math.random() * 256)
            const rgb = `rgb(${R},${G},${B}`;
            box.style.background = rgb
        }))
    })
    buttonsContainer.appendChild(btnRgb).classList.add('btn')
}
rgb()

function clear() {
    const boxes = document.querySelectorAll(".box")
    btnClear.textContent = "Clear"
    btnClear.addEventListener('click', () => {
        boxes.forEach(box => {
            box.style.background = "white"
        })
    })
    buttonsContainer.appendChild(btnClear).classList.add("btn")
}
clear()

function remove() {
    const boxes = container.querySelectorAll(".box")
    boxes.forEach(box => {
        box.remove()
    })
}


    btnRefresh.addEventListener('click', () => {
        
    let newGridSize = prompt("How big should you canvas be? Currently it's 16x16. (max. 100)")
    if(newGridSize === null || newGridSize < 1 || newGridSize > 100) {
        remove()
        createGrid(16, 16)
        black()
        rgb()
        clear()
    }else{
        remove()
        createGrid(newGridSize, newGridSize)
        black()
        rgb()
        clear()
    }
    }
    )















