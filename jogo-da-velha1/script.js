
let selected = [];
let player = "X"

let positions = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
]

function init(){
    const jogador = document.getElementById('jogador')
    selected = []

    //jogador.innerText = `JOGADOR DA VEZ ${player}`

    document.querySelectorAll(".game button").forEach((item) =>{
        item.innerHTML = ""
        item.addEventListener("click", newMove)
        console.log('foi')
    })
}

init()
function newMove(e){
    const index = e.target.getAttribute("data-i")
    e.target.innerHTML = player
    console.log('foi')
}