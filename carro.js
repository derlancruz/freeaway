//código do carro
let xCarros = [700, 700, 700, 700, 700, 700];
let yCarros = [40, 97, 149, 212, 264, 318];
let velocidadeCarros = [2, 2.5, 3.2, 3.4, 3, 2.7];
let comprimentoCarro = 50;
let alturaCarro = 36;



  
  
  
function mostraCarro(){
    for(let i = 0; i < imagemCarros.length; i++){
        image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);        
    }
  }

  function movimentaCarro(){
    for(let i = 0; i< imagemCarros.length; i++){
        xCarros[i] -= velocidadeCarros[i];   
    }          
  }

function voltaPosicaoInicial(){
    for(let i = 0; i < imagemCarros.length; i++){
        if(passouTodaATela(xCarros[i])) {
            xCarros[i] = 700;  
        }     
    }
}

function passouTodaATela(xCarros){
    return xCarros < - 60;
}