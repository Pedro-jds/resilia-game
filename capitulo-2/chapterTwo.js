
function escolha(){

    var num = parseInt(window.prompt("digite 1 ou 2 para decidir"),10) 
    
    while(true){
    
    if(num===1 || num ===2) {
        return num
    }
    else  { 
    alert("Opção incorreta digite 1 ou 2")
        escolha()
    }
    break
    }
}

function ocultarBotao(x){
    document.getElementById(x).style.display = "none";
}

function mostrarBotao (y){
    document.getElementById(y).style.display = "flex";
}

function resultado() {
    
    if(escolha()===1){
    document.getElementById("resultado1").innerHTML = texto1;
    ocultarBotao("escolha1")
    mostrarBotao("escolha2")
    }
    else {
    document.getElementById("resultado1").innerHTML = texto2 
    ocultarBotao("escolha1")
    ocultarBotao("escolha2")
    mostrarBotao("gameOver")
    }
    
    
  }

  var texto1 = "Sem muito tempo para pensar o heroi se arrasta pela passagem pequena e consegue fugir da situação da qual estava sem olhar para trás"

  var texto2 = "Ao tentar entrar no armário para se esconder heroi percebe que ele está emperrado por estar com as portas tortas, logo atrás surge uma figura magra com roupas e cartola vermelha e sem dizer nada a vida de heroi acaba"