
function escolherPersonagem(x){
    var personagem = x
   localStorage.setItem("text1",personagem)
}

function mostrarFinal (y){
    document.getElementById(y).style.display = "flex";
}


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


