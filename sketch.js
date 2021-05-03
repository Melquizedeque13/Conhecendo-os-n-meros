 // variaveis de telas , posições, imagens, altura e largura
var tela = 1; 
var largura = 200; 
var altura = 40;
var xmenu = 205;
var ymenu1 = 236;
var ymenu2 = 284;
var ymenu3 = 333;
var voltarx = 20;
var voltary = 20;
// variaveis de imagens
var img, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12,img13,img15,img16,img17,img18,img19,img20,img21,img22,img23;
var cont = 0, conts = 0,conta=0, x, y=40; //variaveis do contador
// variaveis números
var posximg5 =60;
var posyimg5 =90;
var posximg6 =60;
var posyimg6 =180;
var posximg7 =60;
var posyimg7 =270;
var posximg8 =60;
var posyimg8 =360;
var posximg9 =60;
var posyimg9 =450;
var posximg10 = 200;
var posyimg10 = 90;
var posximg11 = 200;
var posyimg11 = 180;
var posximg12 = 200;
var posyimg12 = 270;
var posximg13 = 200;
var posyimg13 = 360;
var posximg4 = 200;
var posyimg4 = 450;
//variaveis imagens
var posximg15 = 490;
var posyimg15 = 40;
var posximg16 = 490;
var posyimg16 = 145;
var posximg17 = 490;
var posyimg17 = 250;
var posximg18 = 490;
var posyimg18 = 355;
var posximg19 = 490;
var posyimg19 = 460;
var posximg20 = 350;
var posyimg20 = 40;
var posximg21 = 350;
var posyimg21 = 145;
var posximg22 = 350;
var posyimg22 = 250;
var posximg23 = 350;
var posyimg23 = 355;
var posximg14 = 350;
var posyimg14 = 460;
// variaveis de tranparencia e largura de coordenadas
var h = 40;
var t = 70;
// variaveis de sons
var som1,som2,som3,som4,som5;

// função para o mouse
function keyPressed() {
  if (key == "Escape"){
    tela = tela = 1;
  }}
function mousePressed(){
  if(mouseButton === LEFT){
    som1.play();
  }
}
//imagens carregadas

function preload() {
  som1=loadSound('clickmenu.wav');
  som2=loadSound('musicainicial.mp3');
 // som3=loadSound('applause.wav');
  som4=loadSound('gameover.wav');
 // som5=loadSound('accept.mp3');
  img = loadImage('numeros3.jpg');
  img2 = loadImage('melqui.jpg');
  img3 = loadImage('raquel.jpg');
  // imagen de números
  img4 = loadImage('0.jpg');
  img5 = loadImage('1.jpg');
  img6 = loadImage('2.jpg');
  img7 = loadImage('3.jpg');
  img8 = loadImage('4.jpg');
  img9= loadImage('5.jpg');
  img10= loadImage('6.jpg');
  img11= loadImage('7.jpg');
  img12= loadImage('8.jpg');
  img13= loadImage('9.jpg');
  // imagens dos conjuntos
   img14= loadImage('zero0.png');
   img15= loadImage('triangulo1.png');
   img16= loadImage('estrela2.png');
   img17= loadImage('pentagono3.png');
   img18= loadImage('losango4.png');
   img19= loadImage('circulo5.png');
   img20= loadImage('estrela6.png');
   img21= loadImage('estrelas7.png');
   img22= loadImage('quadrado8.png');
   img23= loadImage('exagono9.png');
}
function setup() {
  createCanvas(600, 600);
  frameRate(30);
  som2.loop();

  
}

function draw() {
 
// tela de inicio
  
  if(tela == 1){
 background(0,200,0);
  image(img,0,0);
    fill(10,0,0,180);
    rect(195, 195, 220, 220, 13);
    textStyle(ITALIC);
    textAlign(CENTER);
    textSize(50);
    fill(10,0,0,180);
    rect(15, 15, 573, 60, 13);
    fill(255,255,0,);
    text("Conhecendo os números", 300, 60);
    
  textStyle(ITALIC);
  textAlign(CENTER);
  textSize(30);
     // estruturas condicionais de seleção de menus
  if(mouseX > xmenu && mouseX < xmenu + largura && mouseY > ymenu1 && mouseY < ymenu1 + altura){  
  stroke(240)
  fill(20,0,0)
  rect(xmenu, ymenu1, largura, altura, 13);
    if (mouseIsPressed){
      tela = 2
  }}
  fill(255,255,0);
  noStroke();
  text("Jogar", 300, 265);
  
  if(mouseX > xmenu && mouseX < xmenu + largura && mouseY > ymenu2 && mouseY < ymenu2 + altura){ 
  stroke(240)
  fill(20,0,0)
  rect(xmenu, ymenu2, largura, altura, 13);
    if (mouseIsPressed){
      tela = 3
  }}
  fill(255,255,0);
  noStroke();
  text("Informações", 305, 313);
   
  if(mouseX > xmenu && mouseX < xmenu + largura && mouseY > ymenu3 && mouseY < ymenu3 + altura){   
  stroke(240)
  fill(20,0,0)
  rect(xmenu, ymenu3, largura, altura, 13);
    if (mouseIsPressed){
      tela = 4
  }}
  fill(255,255,0);
  noStroke();
  text("Créditos", 303, 363)
  
  }
  
  // tela jogar
  
  if(tela == 2){
  background(200);
    image(img,0,40);
    textSize(25);
    fill(0,0,250);
    text("Números",150,28);
    text("Conjuntos",450,28);
    // contador de tempo
    conts= parseInt(cont/30);   
    cont=cont+ 1;
    textSize(17);
    text("Tempo restante "+"\n"+ conts,300,18);
    fill(0,255,255);
    //repetição para desenhar os retangulos
   for(x=13;x<=590;x=x+300)
    rect(x,y,275,520,13);
    
   // imagens dos numeros
    image(img5,posximg5,posyimg5);
    image(img6,posximg6,posyimg6);
    image(img7,posximg7,posyimg7);
   // imagens dos conjuntos
    image(img15,420,118,100,100);
    image(img16,420,235,100,100);
    image(img17,420,360,100,100);
 
    fill(255,0,0,t);
    stroke(240);
    // retangulos de associações
    rect(330, 135, 64, 70);
    rect(330, 250, 64, 70);
    rect(330, 375, 64, 70);
 
   // estruturas de condições de clicar e arrastar objetos
    
    if(mouseIsPressed && dist(posximg5+10,posyimg5+10,mouseX,mouseY)< h) {
      posximg5=mouseX;
      posyimg5=mouseY;
      
       }
   else if(mouseIsPressed && dist(posximg6+10,posyimg6+10,mouseX,mouseY)< h) {
      posximg6=mouseX;
      posyimg6=mouseY;
       }
   else if(mouseIsPressed && dist(posximg7+10,posyimg7+10,mouseX,mouseY)< h) {
      posximg7=mouseX;
      posyimg7=mouseY;
       }
    // estruturas condicionais de verdadeiro ou falso
    
    if(posximg5>330&&posximg5<365&&posyimg5>136&&posyimg5<175){
      
      fill(10)
      rect(330, 135, 64, 70);
      fill(255,255,0)
      textSize(60)
      text("1", 358, 190);
      //som3.play();
     }  
    
    if(posximg6>330&&posximg6<365&&posyimg6>245&&posyimg6<275){
      
      fill(10)
      rect(330, 250, 64, 70);
      fill(255,255,0)
      textSize(60)
      text("2", 360, 308);
      
     }  
     if(posximg7>330&&posximg7<365&&posyimg7>370&&posyimg7<400){
      
      fill(10)
      rect(330, 375, 64, 70);
      fill(255,255,0)
      textSize(60)
      text("3", 360, 430);
      
     }  
    // condições de conclusão de nivel e reset de tempo e contadores
    if(posximg5>330&&posximg5<365&&posyimg5>135&&posyimg5<170&&posximg6>330&&posximg6<365&&posyimg6>240&&posyimg6<275&&posximg7>330&&posximg7<365&&posyimg7>370&&posyimg7<400){
      tela = 5;
 posximg5 =60;
 posyimg5 =90;
 posximg6 =60;
 posyimg6 =180;
 posximg7 =60;
 posyimg7 =270;
 posximg8 =60;
 posyimg8 =360;
 posximg9 =60;
 posyimg9 =450;
      cont=0;
      conts=0;
    }
 else if(conts>=31){
   tela=8;
   posximg5 =60;
 posyimg5 =90;
 posximg6 =60;
 posyimg6 =180;
 posximg7 =60;
 posyimg7 =270;
 posximg8 =60;
 posyimg8 =360;
 posximg9 =60;
 posyimg9 =450;
   cont=0;
   conts=0;
 }
    // opções de voltar tela inicial
  textStyle(ITALIC);
  textAlign(CENTER);
  textSize(30);
    if(mouseX > voltarx && mouseX < voltarx + 60 && mouseY > 570 && mouseY < 570 + 20){ 
  stroke(240);
  fill(250);
  rect(20, 570, 60, 20, 13);
     if (mouseIsPressed){
      tela = 1;
     posximg5 =60;
 posyimg5 =90;
 posximg6 =60;
 posyimg6 =180;
 posximg7 =60;
 posyimg7 =270;
 posximg8 =60;
 posyimg8 =360;
 posximg9 =60;
 posyimg9 =450;
   cont=0;
   conts=0;
     }
    }
    
    
     textSize(16);
  fill(0,0,250);
  noStroke();
  text("Voltar",49,586);
  }
  
  // tela de informações do jogo
  
  if(tela == 3){
  background(10);
  textStyle(ITALIC);
  noStroke();
  textAlign(CENTER);
    fill(240);
  textSize(40);
  text("Iformações do Jogo ",290,40);
  textSize(30)
  text("este jogo foi projetado para crianças, "+"\n"+" (alunos) da alfabetização e tem como"+"\n"+" finalidade apresentar os números naturais,"+"\n"+" dando aos alunos os primeiros contatos"+"\n"+" com os números.(EF01MA02)"+"\n"+" inicialmente o aluno vai identificar"+"\n"+" cada número e associar eles a cada"+"\n"+" conjunto apresentado,"+"\n"+" clicando nos números e arrastando"+"\n"+" até aos seu conjuntos correspondentes .", 300, 130);
   // opções de voltar a tela inicial
   if(mouseX > voltarx && mouseX < voltarx + 60 && mouseY > 20 && mouseY < 20 + 20){ 
  stroke(240);
  fill(250,0,0);
  rect(20, 20, 60, 20, 13);
     if (mouseIsPressed){
      tela = 1
  }
   }
     textSize(16);
  fill(220);
  noStroke();
  text("Voltar",49,36);
     
}
  // tela com os creditos aos desenvolvedores
  
  if(tela == 4){
  background(150);
  image(img2,235,180);
  image(img3,235,380);
  textStyle(ITALIC);
  textAlign(CENTER);
  textSize(50);
    text("Créditos",290,50);
    textSize(50);
    text("Aluno:",290,150);
    textSize(20)
    text("MELQUIZEDEQUE BUARQUE WANDERLEY",300, 300);
    textSize(40);
    text("Educador:",290,360);
    textSize(20);
    text("RAQUEL BARBOSA",290, 515);
    // opções de voltar ao menu inicial
  if(mouseX > voltarx && mouseX < voltarx + 60 && mouseY > 20 && mouseY < 20 + 20){ 
  stroke(240);
  fill(200,0,0);
  rect(20, 20, 60, 20, 13);
     if (mouseIsPressed){
      tela = 1
  }
   }
     textSize(16);
  fill(20);
  noStroke();
  text("Voltar",49,36,);
 }
  
  // tela de fim de jogo ao concluir as etapas
  
   if(tela == 6){
  background(10);
  image(img,0,0);
     fill(10,0,0,190)
    rect(120, 175, 360, 220, 13);
  textStyle(ITALIC);
  noStroke();
  textAlign(CENTER);
    fill(255,255,0);
  textSize(40);
  text(" ",290,40);
  textSize(50);
  text("Parabéns "+"\n"+"você ganhou",300,270);
     // opções de voltar a tela menu
   if(mouseX > voltarx && mouseX < voltarx + 60 && mouseY > 20 && mouseY < 20 + 20){ 
  stroke(240);
  fill(200,0,0);
  rect(20, 20, 60, 20, 13);
     if (mouseIsPressed){
      tela = 1
  }
   }
     textSize(16);
  fill(20);
  noStroke();
  text("Menu",49,36);
  
    
}
  
  // segundo nível
  
  if(tela == 5){
  background(200);
    image(img,0,40);
    textSize(25);
    fill(0,0,250);
    text("Números",150,28);
    text("Conjuntos",450,28);
    // contador de tempo
    conts= parseInt(cont/30);   
    cont=cont+ 1;
    textSize(17);
    text("Tempo restante "+"\n"+ conts,300,18);
    fill(0,255,255);
    //repetição para desenhar os retangulos
   for(x=10;x<=590;x=x+297)
    rect(x,y,285,520,13);
     // imagens dos numeros
    image(img5,posximg5,posyimg5);
    image(img6,posximg6,posyimg6);
    image(img7,posximg7,posyimg7);
    image(img8,posximg8,posyimg8);
    image(img9,posximg9,posyimg9);
     // imagens dos conjuntos
    image(img15,posximg15,posyimg15);
    image(img16,posximg16,posyimg16);
    image(img17,posximg17,posyimg17);
    image(img18,posximg18,posyimg18);
    image(img19,posximg19,posyimg19);
      // retangulos de associações
    fill(255,0,0,t);
    stroke(240);
    rect(350, 65, 64, 70);
    rect(350, 160, 64, 70);
    rect(350, 265, 64, 70);
    rect(350, 370, 64, 70);
    rect(350, 475, 64, 70);
   
   // estruturas de condições de clicar e arrastar objetos
    
    if(mouseIsPressed && dist(posximg5,posyimg5,mouseX,mouseY)< h) {
      posximg5=mouseX;
      posyimg5=mouseY;
      
       }
   else if(mouseIsPressed && dist(posximg6,posyimg6,mouseX,mouseY)< h) {
      posximg6=mouseX;
      posyimg6=mouseY;
       }
   else if(mouseIsPressed && dist(posximg7,posyimg7,mouseX,mouseY)< h) {
      posximg7=mouseX;
      posyimg7=mouseY;
       }
   else if(mouseIsPressed && dist(posximg8,posyimg8,mouseX,mouseY)< h) {
      posximg8=mouseX;
      posyimg8=mouseY;
       }
   else if(mouseIsPressed && dist(posximg9,posyimg9,mouseX,mouseY)< h) {
      posximg9=mouseX;
      posyimg9=mouseY;
       }
    else if(mouseIsPressed && dist(posximg10,posyimg10,mouseX,mouseY)< h) {
      posximg10=mouseX;
      posyimg10=mouseY;
       }
    else if(mouseIsPressed && dist(posximg11,posyimg11,mouseX,mouseY)< h) {
      posximg11=mouseX;
      posyimg11=mouseY;
       }
    else if(mouseIsPressed && dist(posximg12,posyimg12,mouseX,mouseY)< h) {
      posximg12=mouseX;
     posyimg12=mouseY;
       }
    else if(mouseIsPressed && dist(posximg13,posyimg13,mouseX,mouseY)< h) {
      posximg13=mouseX;
      posyimg13=mouseY;
       }
    else if(mouseIsPressed && dist(posximg4,posyimg4,mouseX,mouseY)< h) {
     posximg4=mouseX;
     posyimg4=mouseY;
     }
    // estruturas condicionais de verdadeiro ou falso
    
    if(posximg5>350&&posximg5<385&&posyimg5>48&&posyimg5<90){
      // t = 30;
      fill(10)
      rect(350, 65, 64, 70);
      fill(255,255,0)
      textSize(60)
      text("1", 377, 118);
      
     }  
    
    if(posximg6>350&&posximg6<385&&posyimg6>140&&posyimg6<175){
      // t = 30;
      fill(10)
      rect(350, 160, 64, 70);
      fill(255,255,0)
      textSize(60)
      text("2", 377, 213);
      
     }  
     if(posximg7>350&&posximg7<385&&posyimg7>260&&posyimg7<300){
      // t = 30;
      fill(10)
      rect(350, 265, 64, 70);
      fill(255,255,0)
      textSize(60)
      text("3", 380, 318);
      
     }  
    if(posximg8>350&&posximg8<385&&posyimg8>360&&posyimg8<395){
      // t = 30;
      fill(10)
      rect(350, 370, 64, 70);
      fill(255,255,0)
      textSize(60)
      text("4", 378, 422);
      
     }  
    if(posximg9>350&&posximg9<385&&posyimg9>450&&posyimg9<490){
      // t = 30;
      fill(10)
      rect(350, 474, 64, 70);
      fill(255,255,0)
      textSize(60)
      text("5", 378, 528);
      
     }  
     // condições de conclusão de nivel e reset de tempo e contadores
    if(posximg5>350&&posximg5<385&&posyimg5>48&&posyimg5<90&&posximg6>350&&posximg6<385&&posyimg6>140&&posyimg6<175&&posximg7>350&&posximg7<385&&posyimg7>260&&posyimg7<300&&posximg8>350&&posximg8<385&&posyimg8>360&&posyimg8<395&&posximg9>350&&posximg9<385&&posyimg9>450&&posyimg9<490){
      tela = 7;
    posximg5 =60;
    posyimg5 =90;
    posximg6 =60;
    posyimg6 =180;
    posximg7 =60;
    posyimg7 =270;
 posximg8 =60;
 posyimg8 =360;
 posximg9 =60;
 posyimg9 =450;
 posximg10 = 200;
 posyimg10 = 90;
 posximg11 = 200;
 posyimg11 = 180;
 posximg12 = 200;
 posyimg12 = 270;
 posximg13 = 200;
 posyimg13 = 360;
 posximg4 = 200;
 posyimg4 = 450;
  cont=0;
   conts=0;
    }
 else if(conts>=41){
   tela=8;
   posximg5 =60;
    posyimg5 =90;
    posximg6 =60;
    posyimg6 =180;
    posximg7 =60;
    posyimg7 =270;
 posximg8 =60;
 posyimg8 =360;
 posximg9 =60;
 posyimg9 =450;
 posximg10 = 200;
 posyimg10 = 90;
 posximg11 = 200;
 posyimg11 = 180;
 posximg12 = 200;
 posyimg12 = 270;
 posximg13 = 200;
 posyimg13 = 360;
 posximg4 = 200;
 posyimg4 = 450;
   cont=0;
   conts=0;
 }
    // opções de voltar tela inicial
    
  textStyle(ITALIC);
  textAlign(CENTER);
  textSize(30);
    if(mouseX > voltarx && mouseX < voltarx + 60 && mouseY > 570 && mouseY < 570 + 20){ 
  stroke(240);
  fill(250);
  rect(20, 570, 60, 20, 13);
     if (mouseIsPressed){
      tela = 1;
     posximg5 =60;
 posyimg5 =90;
 posximg6 =60;
 posyimg6 =180;
 posximg7 =60;
 posyimg7 =270;
 posximg8 =60;
 posyimg8 =360;
 posximg9 =60;
 posyimg9 =450;
 posximg10 = 200;
 posyimg10 = 90;
 posximg11 = 200;
 posyimg11 = 180;
 posximg12 = 200;
 posyimg12 = 270;
 posximg13 = 200;
 posyimg13 = 360;
 posximg4 = 200;
 posyimg4 = 450;
     }
    }
    
    
     textSize(16);
  fill(0,0,250);
  noStroke();
  text("Voltar",49,586,);
  }
  
  // terceiro nivel
  
   if(tela == 7){
  background(200);
    image(img,0,40);
    textSize(25);
     fill(0,0,250);
    text("Números",150,28);
    text("Conjuntos",450,28);
     // contador de tempo
    conts= parseInt(cont/30);   
    cont=cont+ 1;
    textSize(17);
    text("Tempo restante "+"\n"+ conts,300,18);
    fill(0,255,255);
     //repetição para desenhar os retangulos
   for(x=10;x<=590;x=x+297)
    rect(x,y,285,520,13);
 
     // números 
     
    image(img5,posximg5,posyimg5);
    image(img6,posximg6,posyimg6);
    image(img7,posximg7,posyimg7);
    image(img8,posximg8,posyimg8);
    image(img9,posximg9,posyimg9);
    image(img10,posximg10,posyimg10);
    image(img11,posximg11,posyimg11);
    image(img12,posximg12,posyimg12);
    image(img13,posximg13,posyimg13);
    image(img4,posximg4,posyimg4);
    
     // imagens
     
    image(img14,520,460,70,70);
    image(img15,375,73,70,70);
    image(img16,375,170,70,70);
    image(img17,375,270,70,70);
    image(img18,375,368,70,70);
    image(img19,375,460,70,70);
    image(img20,520,73,70,70);
    image(img21,520,170,70,70);
    image(img22,520,270,70,70);
    image(img23,520,368,70,70);
     // retangulos de associações
    fill(255,0,0,t);
    stroke(240);
    rect(450, 73, 64, 70);
    rect(450, 170, 64, 70);
    rect(450, 270, 64, 70);
    rect(450, 368, 64, 70);
    rect(450, 460, 64, 70);
    rect(308, 73, 64, 70);
    rect(308, 170, 64, 70);
    rect(308, 270, 64, 70);
    rect(308, 368, 64, 70);
    rect(308, 460, 64, 70);
   
   // estruturas de condições de clicar e arrastar objetos
     
    if(mouseIsPressed && dist(posximg5,posyimg5,mouseX,mouseY)< h) {
      posximg5=mouseX;
      posyimg5=mouseY;
      
       }
   else if(mouseIsPressed && dist(posximg6,posyimg6,mouseX,mouseY)< h) {
      posximg6=mouseX;
      posyimg6=mouseY;
       }
   else if(mouseIsPressed && dist(posximg7,posyimg7,mouseX,mouseY)< h) {
      posximg7=mouseX;
      posyimg7=mouseY;
       }
   else if(mouseIsPressed && dist(posximg8,posyimg8,mouseX,mouseY)< h) {
      posximg8=mouseX;
      posyimg8=mouseY;
       }
   else if(mouseIsPressed && dist(posximg9,posyimg9,mouseX,mouseY)< h) {
      posximg9=mouseX;
      posyimg9=mouseY;
       }
    else if(mouseIsPressed && dist(posximg10,posyimg10,mouseX,mouseY)< h) {
      posximg10=mouseX;
      posyimg10=mouseY;
       }
    else if(mouseIsPressed && dist(posximg11,posyimg11,mouseX,mouseY)< h) {
      posximg11=mouseX;
      posyimg11=mouseY;
       }
    else if(mouseIsPressed && dist(posximg12,posyimg12,mouseX,mouseY)< h) {
      posximg12=mouseX;
     posyimg12=mouseY;
       }
    else if(mouseIsPressed && dist(posximg13,posyimg13,mouseX,mouseY)< h) {
      posximg13=mouseX;
      posyimg13=mouseY;
       }
    else if(mouseIsPressed && dist(posximg4,posyimg4,mouseX,mouseY)< h) {
     posximg4=mouseX;
     posyimg4=mouseY;
     }
    // estruturas condicionais de verdadeiro ou falso
     
    if(posximg5>308&&posximg5<335&&posyimg5>70&&posyimg5<103){
      // t = 30;
      fill(10)
      rect(308, 73, 64, 70);
      fill(255,255,0)
      textSize(60)
      text("1", 333, 127);
      
     }  
    
    if(posximg6>308&&posximg6<335&&posyimg6>168&&posyimg6<200){
      // t = 30;
      fill(10)
      rect(308, 170, 64, 70);
      fill(255,255,0)
      textSize(60)
      text("2", 338, 224);
      
     }  
     if(posximg7>308&&posximg7<335&&posyimg7>260&&posyimg7<300){
      // t = 30;
      fill(10)
      rect(308, 270, 64, 70);
      fill(255,255,0)
      textSize(60)
      text("3", 338, 324);
      
     }  
    if(posximg8>308&&posximg8<335&&posyimg8>360&&posyimg8<395){
      // t = 30;
      fill(10)
      rect(308, 368, 64, 70);
      fill(255,255,0)
      textSize(60)
      text("4", 338, 424);
      
     }  
    if(posximg9>308&&posximg9<335&&posyimg9>450&&posyimg9<490){
      // t = 30;
      fill(10)
      rect(308, 460, 64, 70);
      fill(255,255,0)
      textSize(60)
      text("5", 336, 518);
      
     }  
      if(posximg10>450&&posximg10<477&&posyimg10>70&&posyimg10<103){
      // t = 30;
      fill(10)
      rect(450, 73, 64, 70);
      fill(255,255,0)
      textSize(60)
      text("6", 478, 127);
      
     }  
    
    if(posximg11>450&&posximg11<477&&posyimg11>168&&posyimg11<200){
      // t = 30;
      fill(10)
      rect(450, 170, 64, 70);
      fill(255,255,0)
      textSize(60)
      text("7", 478, 224);
      
     }  
     if(posximg12>450&&posximg12<477&&posyimg12>265&&posyimg12<300){
      // t = 30;
      fill(10)
      rect(450, 270, 64, 70);
      fill(255,255,0)
      textSize(60)
      text("8", 478, 324);
      
     }  
    if(posximg13>450&&posximg13<477&&posyimg13>363&&posyimg13<395){
      // t = 30;
      fill(10)
      rect(450, 368, 64, 70);
      fill(255,255,0)
      textSize(60)
      text("9", 478, 424);
      
     } 
     
    if(posximg4>450&&posximg4<477&&posyimg4>450&&posyimg4<490){
      // t = 30;
      fill(10)
      rect(450, 460, 64, 70);
      fill(255,255,0)
      textSize(60)
      text("0", 478, 518);
      
     } 
      // condições de conclusão de nivel e reset de tempo e contadores
    if(posximg5>308&&posximg5<335&&posyimg5>70&&posyimg5<103&&posximg6>308&&posximg6<335&&posyimg6>168&&posyimg6<200&&posximg7>308&&posximg7<335&&posyimg7>260&&posyimg7<300&&posximg8>308&&posximg8<335&&posyimg8>360&&posyimg8<395&&posximg9>308&&posximg9<335&&posyimg9>450&&posyimg9<490&&posximg10>450&&posximg10<477&&posyimg10>70&&posyimg10<103&&posximg11>450&&posximg11<477&&posyimg11>168&&posyimg11<200&&posximg12>450&&posximg12<477&&posyimg12>265&&posyimg12<300&&posximg13>450&&posximg13<477&&posyimg13>363&&posyimg13<395&&posximg4>450&&posximg4<477&&posyimg4>450&&posyimg4<490){
      tela = 6;
 posximg5 =60;
 posyimg5 =90;
 posximg6 =60;
 posyimg6 =180;
 posximg7 =60;
 posyimg7 =270;
 posximg8 =60;
 posyimg8 =360;
 posximg9 =60;
 posyimg9 =450;
 posximg10 = 200;
 posyimg10 = 90;
 posximg11 = 200;
 posyimg11 = 180;
 posximg12 = 200;
 posyimg12 = 270;
 posximg13 = 200;
 posyimg13 = 360;
 posximg4 = 200;
 posyimg4 = 450;
  cont=0;
   conts=0;
    }
 else if(conts>=61){
   tela=8;
   posximg5 =60;
 posyimg5 =90;
 posximg6 =60;
 posyimg6 =180;
 posximg7 =60;
 posyimg7 =270;
 posximg8 =60;
 posyimg8 =360;
 posximg9 =60;
 posyimg9 =450;
 posximg10 = 200;
 posyimg10 = 90;
 posximg11 = 200;
 posyimg11 = 180;
 posximg12 = 200;
 posyimg12 = 270;
 posximg13 = 200;
 posyimg13 = 360;
 posximg4 = 200;
 posyimg4 = 450;
   cont=0;
   conts=0;
 }
     // opções de voltar tela inicial
     
  textStyle(ITALIC);
  textAlign(CENTER);
  textSize(30);
    if(mouseX > voltarx && mouseX < voltarx + 60 && mouseY > 570 && mouseY < 570 + 20){ 
  stroke(240);
  fill(250);
  rect(20, 570, 60, 20, 13);
     if (mouseIsPressed){
      tela = 1;
     posximg5 =60;
 posyimg5 =90;
 posximg6 =60;
 posyimg6 =180;
 posximg7 =60;
 posyimg7 =270;
 posximg8 =60;
 posyimg8 =360;
 posximg9 =60;
 posyimg9 =450;
 posximg10 = 200;
 posyimg10 = 90;
 posximg11 = 200;
 posyimg11 = 180;
 posximg12 = 200;
 posyimg12 = 270;
 posximg13 = 200;
 posyimg13 = 360;
 posximg4 = 200;
 posyimg4 = 450;
     }
    }
    
    
     textSize(16);
  fill(0,0,250);
  noStroke();
  text("Voltar",49,586,);
  }
  
  // tela de fim de jogo, tempo esgotado
  
    if(tela == 8){
  background(10);
  image(img,0,0);
     fill(10,0,0,190)
    rect(100, 175, 400, 240, 13);
  textStyle(ITALIC);
  noStroke();
  textAlign(CENTER);
    fill(255,255,0);
  textSize(40);
  text(" ",290,40);
  textSize(50);
  text("Tempo esgotado! "+"\n"+"tente novamente",300,270);
     
      //opções de voltar ao menu
      
   if(mouseX > voltarx && mouseX < voltarx + 60 && mouseY > 20 && mouseY < 20 + 20){ 
  stroke(240);
  fill(200,0,0);
  rect(20, 20, 60, 20, 13);
     if (mouseIsPressed){
      tela = 1
  }
   }
     textSize(16);
  fill(20);
  noStroke();
  text("Menu",49,36);
    
}
}
