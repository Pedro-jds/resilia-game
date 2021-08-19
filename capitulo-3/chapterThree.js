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
    ocultarBotao("escolha2")
    mostrarBotao("gameOver")
    }
    else {
    document.getElementById("resultado1").innerHTML = texto2 
    ocultarBotao("escolha1")
    mostrarBotao("escolha2")
    }
    
    
  }

  var texto1 = "Você lê em voz alta com muito medo, a figura lhe olha e diz: sua vida acaba aqui"

  var texto2 = "Você rasga o verso pois lembrou de uma antiga lenda sobre ele, que dizia que o homem torto matava quem o lia, a figura assustadora abre passagem e abre espaço para sua fuga"

  