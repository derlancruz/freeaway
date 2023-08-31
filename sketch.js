







function setup() {
    createCanvas(700, 400);
    somDaTrilha.loop();

  }
  
  function draw() {
    background(imagemDaEstrada);
    mostraAtor();
    mostraCarro();
    movimentaCarro();
    movimentaAtor();
    voltaPosicaoInicial();
    verificaColisao();
    incluiPontos();
    marcaPonto();
    
  }

  

  
