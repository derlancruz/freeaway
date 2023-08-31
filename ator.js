//ator
let yAtor = 369;
let xAtor = 150;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
    image(imagemDoAtor, xAtor, yAtor, 30, 30);
  }

function  movimentaAtor(){
    if(keyIsDown(UP_ARROW)){
        yAtor -= 2;
    }
    if(keyIsDown(DOWN_ARROW)){        
        if(podeMover()){
            yAtor += 2;
        }
    }
    if(keyIsDown(RIGHT_ARROW)){
        xAtor += 1;
    }
    if(keyIsDown(LEFT_ARROW)){
        xAtor -= 1;
    }

  }

  function verificaColisao(){

    for (let i = 0; i < imagemCarros.length; i++){
        colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
        if(colisao){
            voltaParaOInicio();
            somDaColisao.play();
            if(pontosMaiorQueZero()){
                meusPontos -= 1;
            }
        }
    }
  }

  function voltaParaOInicio(){
    yAtor = 366;
  }

  function incluiPontos(){

    textAlign(CENTER);
    textSize(25);
   fill(color(255, 250, 100))
    text(meusPontos, width / 4, 26);
  }

  function marcaPonto(){
    if(yAtor < 15){
        meusPontos += 1;
        somDoPonto.play();
        voltaParaOInicio();
    }

  }

  function pontosMaiorQueZero(){
    return meusPontos > 0;
    
  }

function podeMover(){
    return yAtor < 366;
}