let cor;                          // para crir variáveis usa-se let
let posicaoHorizontal;    // posição X
let posicaoVertical;     // posição Y

function setup() {               //preparo para criar
  
  createCanvas(600, 600);  //Cria fundo de trabalho (largura, comprimenbto)
  
  background(color(100, 0, 0));  // cor do fundo de tela - RGB(red, green, blue)
  
  cor = color(random(0, 255), random(0, 255), random(0, 255));  //determina aleatoridade da cor 
  posicaoHorizontal = 200;      // determina posição inicial do círculo
  posicaoVertical = 200;
}

function draw() {         //preparar para desenhar
  fill(cor);             //prepara para preencher
  circle(posicaoHorizontal, posicaoVertical, 100); //cria círculo (posição x, posição y, raio)

  if (mouseX < posicaoHorizontal) {
    posicaoHorizontal = posicaoHorizontal - 1;   //determina a movimentação do objeto(círculo) horizontalmente
  }

  if (mouseX > posicaoHorizontal) {
    posicaoHorizontal = posicaoHorizontal + 1;
  }

  if (mouseY < posicaoVertical) {        //determina a movimentação do objeto(círculo) verticalmente
    posicaoVertical--;
  }

  if (mouseY > posicaoVertical) {
    posicaoVertical++;
  }
  if (mouseIsPressed) {
    cor = color(random(0, 255), random(0, 255), random(0, 255), random(0, 100));           //determina aleatoriedade da cor ao clicar com o mause
  }
}
