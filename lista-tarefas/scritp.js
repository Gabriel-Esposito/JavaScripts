function add(){
    const tarefa = document.getElementById('tarefa')
    const lista = document.querySelector("#lista")
    if(tarefa.value == ""){
        alert("digite uma tarefa válida!")
    }else {
        lista.innerHTML += `<li><i class="fa fa-check-circle check"></i><span>${tarefa.value}</span><i class="fa fa-trash-o close"></i></li>`
        tarefa.value = ""
    }

    const close = document.querySelectorAll(".close")
    for(let i = 0; i < close.length; i++){
        close[i].addEventListener("click",function(){
            close[i].parentElement.remove()
        })
    }

    lista.addEventListener("click",function(e){
        e.target.parentElement.querySelector(".check").style.color = "#349223"
        e.target.parentElement.querySelector("span").style.textDecoration = "line-through"
    })
}