const opcoes = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
let vez = 0
let jogo = ["","","","","","","","",""]
let jogador1 = [] 
let jogador2 = []
let fim = true
function iniciar(){
    let btn = document.getElementById("btn")
    let bloco = document.querySelectorAll('h3')
    let win = document.getElementById('win')
    jogo.fill("")
    jogador1 = []
    jogador2 = []
    fim = false
    bloco.forEach(element => {
      element.innerText = ""  
    });
    win.innerText = ""
    btn.style.display = "none"
}
function game(id){
    if(fim != true){
        marcar(id)
    }
}
function marcar(id){
    let bloco = document.querySelectorAll('h3')
    let jogador = document.getElementById('vez')
    if (vez == 0 && jogo[id] == ""){
        jogador.innerHTML = "Vez do jogador: <span id='blue'>O</span>"
        jogador1.push(id)
        jogo[id] = "X"
        bloco[id].innerHTML = "<span id='red'>X</span>"
        vez++
    }else if (vez == 1 && jogo[id] == ""){
        jogador.innerHTML = "Vez do jogador: <span id='red'>X</span>"
        jogador2.push(id)
        jogo[id] = "O"
        bloco[id].innerHTML = "<span id='blue'>O</span>"
        vez--
    }
    ganhar()
}
function ganhar(){
    let btn = document.getElementById("btn")
    for(let p = 0; p < opcoes.length; p++){
        let x = 0
        let o = 0
        for(let i = 0; i < opcoes[p].length; i++){
            if(jogo[opcoes[p][i]] == "X"){
                x++
            }else if(jogo[opcoes[p][i]] == "O"){
                o++
            }
        }
        if(resultado(x,o) == 1){
            fim = true
            btn.style.display = "block"
            break
        }
    }
}
function resultado(x,o){
    let parabens = document.querySelector('audio')
    let win = document.getElementById('win')
    if (x == 3 || o == 3){
        if(x == 3){
            win.innerHTML ="Jogador <span id='red'>X</span> ganhou!"
        }else{
            win.innerHTML ="Jogador <span id='blue'>O</span> ganhou!"
        }
        parabens.play()
        return 1
    }else if((jogador1.length + jogador2.length) == jogo.length){
        win.innerText ="Os jogadores empataram!"
        return 1
    }
}