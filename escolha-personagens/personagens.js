
//pegar o valor do personagem escolhido e armazena localmente na pagina de escolha
function escolherPersonagem(x){
    var personagem = x
   localStorage.setItem("text1",personagem)
}

//função onclick para mostrar o final do personagem escolhido
function mostrarFinal (y){
    document.getElementById(y).style.display = "flex";
}

//na ultima pagina busca o valor armazenado na seleção de persoangens faz uma comparação e mostra na tela o final correspondente ao persoangem escolhido
function escolhido(){
    var x = localStorage.getItem("text1")
    
    if(x==='Lucy'){
        mostrarFinal('lucy')
    }
    else if(x==='Kate'){
        mostrarFinal('kate')
    }
    else if(x==='Bryce'){
        mostrarFinal('bryce')
    }
}


