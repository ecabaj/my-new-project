
const button = document.querySelector("button")
const body = document.querySelector("body")

const colors =["red", "green","pink", "blue", "yellow", 
//              0       1       2       3       4
// colors [2]

body.style.backgroundColor = "orange"]

button.addEventListener("click", changeBackground)

function changeBackground() {
const colorIndex = Math.floor(Math.random() * colors.length)
body.style.backgroundColor = colors[colorIndex]
}
