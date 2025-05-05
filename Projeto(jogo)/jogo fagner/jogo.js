const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const img = new Image();
img.src = "nave.webp"; 


//cria a nave
const nave = {
    x:280,
    y:500,
    largura:50,
    altura:50,
    img: new Image()
}

//desenha a nave no canvas
function desenhar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
    ctx.drawImage(img, nave.x, nave.y, nave.largura, nave.altura);
  }





//movimentos do WASD
document.addEventListener('keydown', function(evento){
    let tecla = evento.key;
    console.log(tecla);

    let velocidade = 10;
    if(tecla == 'w'){ nave.y -= velocidade}
    if(tecla == 's'){ nave.y += velocidade}
    if(tecla == 'a'){ nave.x -= velocidade}
    if(tecla == 'd'){ nave.x += velocidade}
    if(tecla == 'enter'){missil}



    desenhar();
    
})

//criar misseis
function linha(width,stroke,x,y,x2,y2){
    ctx.beginPath()
    ctx.lineWidth = width
    ctx.strokeStyle = stroke
    ctx.moveTo(x,y)
    ctx.lineTo(x2,y2)
    ctx.stroke()
    ctx.closePath()
}

function disparar(){
    var missil = new linha (280,5,8,10,nave.centerX() -4,nave.y -5);
    missil.y = -8
    linha.push(missil);
    missil.push(missil);
}



img.onload = desenhar;


function gameLoop() {
    desenhar();
    requestAnimationFrame(gameLoop);
}

Gameloop ();

