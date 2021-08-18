
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
    document.getElementById("resultado1").innerHTML = "chegando na porta percebe que ela é de metal e pesada, ao empurrar ela para abrir faz alguns ruídos, então começa a ouvir passos chegando perto desta sala, procurando alguma forma de se esconder ou fugir heroi vê que nessa nova sala tem um armario e um pequena saída de ar ";
    }
    else {
    document.getElementById("resultado1").innerHTML = texto1 }
    
    ocultarBotao("escolha1");
    mostrarBotao("escolha2")
  }
    
 var texto1 = "Chegando nas pessoas nota que eles realmente estão mortas, fazendo um pequena revista nos corpos é encotrado um celular, mas está sem sinal e com os botoes do volume quebrados, mas tem uma mensagem de audio tentado a ouvir mas com receio do barulho ele toma sua decisão"