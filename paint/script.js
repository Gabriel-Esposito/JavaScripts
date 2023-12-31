var cores = ["white","black","red","blue","green","yellow","orange","purple","brown","gray","lightgray","darkgray","darkred","lightblue","darkblue","pink","rgb(255,75,75)","rgb(196,109,2)","aqua","lightgreen","darkgreen","burlywood","cyan","rgb(255,191,73)","darkcyan","beige",""]
var atual = 0

function EscolherCor(id){
    atual = id
    VerCor()
}

function Colorir(idBloco){
    let bloco = document.getElementsByClassName("pixel")[idBloco]

    bloco.style.background = cores[atual]
}

function rgb(){
    let r = document.getElementById("r")
    let g = document.getElementById("g")
    let b = document.getElementById("b")

    let rgb = `rgb(${Number(r.value)},${Number(g.value)},${Number(b.value)})`
    
    cores[27] = rgb
    atual = 27
    VerCor()
}

function VerCor(){
    let coratual = document.getElementById("atual")
    let name = document.getElementById("name")

    coratual.style.background = cores[atual]
    name.innerText = cores[atual]
}

function Apagar(){
    for (let id = 0; id <= 255; id++){
        let bloco = document.getElementsByClassName("pixel")[id]

        bloco.style.background = "white"
    }
}