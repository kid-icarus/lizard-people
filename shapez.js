var x = 0;
var y = 0;
var frameRate = 1000/30;

var setup = function() {
  var image = new Image();
  var canvas = document.getElementById('dacanvas');
  canvas.width = 3000;
  canvas.height = 3000;
  var ctx = canvas.getContext('2d');
  console.log(ctx);
  var slamsloosh = function() {
    setInterval(drawSquare, frameRate);
  }
  var drawSquare = function() {
    var randX = (Math.random() * 700) + 1;
    var randY = (Math.random() * 700) + 1;
    var randSize = (Math.random() * 200) + 1;
    var randColor = (Math.random() * 200) + 1;
    ctx.beginPath();
    ctx.arc(randX, randY, randSize, 0, Math.PI*2, false);  
    ctx.closePath();  
    ctx.fillStyle = '#'+Math.floor(Math.random()*16777215).toString(16);
    ctx.fill();  
    ctx.drawImage(image, randX, randY);
    var randX = (Math.random() * 300) + 1;
    var randY = (Math.random() * 300) + 1;
    ctx.drawImage(image, randX, randY);
    ctx.drawImage(image, x+ 40, y + 40);
    ctx.drawImage(image, x+ 60, y + 60);
    x += 10;
    y += 10;
  }
  image.onload = slamsloosh;
  image.src = 'lizard.png';
}

document.onload = setup();
