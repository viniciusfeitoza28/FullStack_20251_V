const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const img = new Image();
img.src = "nave.webp"; 

const nave = {
    x:280,
    y:500,
    largura:50,
    altura:50,
    img: new Image()
}

function desenhar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
    ctx.drawImage(img, nave.x, nave.y, nave.largura, nave.altura);
  }

let mouseX = 150;
let mouseY = 150;
const imgW = 50;
const imgH = 50;

document.addEventListener('keydown', function(evento){
    let tecla = evento.key;
    console.log(tecla);

    let velocidade = 5;
    if(tecla == 'w'){ nave.y -= velocidade}
    if(tecla == 's'){ nave.y += velocidade}
    if(tecla == 'a'){ nave.x -= velocidade}
    if(tecla == 'd'){ nave.x += velocidade}

    desenhar();
    
})

img.onload = desenhar;


function gameLoop() {
    desenhar();
    requestAnimationFrame(gameLoop);
}

Gameloop ();

