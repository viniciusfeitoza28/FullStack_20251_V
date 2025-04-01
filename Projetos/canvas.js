let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

function desenhar_quadrado(color1,x1,y1,w1,h1){
   
ctx.beginPath();
ctx.fillStyle = color1;
ctx.fillRect(x1,y1,w1,h1);
ctx.closePath()

}

desenhar_quadrado('blue',0,0,70,70)
