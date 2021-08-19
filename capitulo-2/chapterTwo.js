//Função prompt para escolher a opção do usuario
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

//função para esconder um determinado botão
function ocultarBotao(x){
    document.getElementById(x).style.display = "none";
}
//função para mostrar um determinado botão
function mostrarBotao (y){
    document.getElementById(y).style.display = "flex";
}
//função que compara o valor dado pelo usuario e escreve na tela o texto correspondente
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

  var texto1 = "Sem muito tempo para pensar o você se arrasta pela passagem pequena e consegue fugir da situação da qual estava sem olhar para trás"

  var texto2 = "Ao tentar entrar no armário para se esconder você percebe que ele está emperrado por estar com as portas tortas, logo atrás surge uma figura magra com roupas e cartola vermelha e sem dizer nada aqui acaba sua jornada"