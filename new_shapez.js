var setup = function() {
  var x = 0;
  var y = 0;
  var frameRate = 1000/300;
  var AUTUMN = 4000;
  var SEA = 1000;
  var colorscheme = SEA;
  var canvas = document.getElementById('dacanvas');
  var clicker = 0;
  canvas.width = document.width;
  canvas.height = document.height;

  var ctx = canvas.getContext('2d');
  canvas.onclick = function() {
    clicker = (clicker + 1) % 2;
    if (colorscheme == AUTUMN) {
      colorscheme = SEA;
    }
    else {
      colorscheme = AUTUMN;
    }
    var snd = new Audio('geese.wav');
    snd.play();
  }
  var drawSquare = function() {
    if(clicker) {
    }
    x = 0;
    y = 0;
    var randX = (Math.random() * canvas.width) + 1;
    var randY = (Math.random() * canvas.height) + 1;
    var randSize = (Math.random() * canvas.height / 20) + 1;
    var rand = (Math.random() * 200) + 1;
    var filly = '#'+Math.floor((Math.random()*1000)+colorscheme).toString(16);
    ctx.beginPath();
    ctx.arc(randX, randY, randSize, 0, Math.PI*2, false);  
    ctx.closePath();
    ctx.fillStyle = filly;
    ctx.fill();
    if (rand <= 100) {
      for(var i = 0; i < 30; i++) {
        // 1/1 slope.
        ctx.beginPath();
        if (rand <= 50) {
          ctx.arc(randX + x, randY + y, randSize, 0, Math.PI*2, false);  
          x += 10;
          y += 10;
        }
        else {
          ctx.arc(randX - x, randY - y, randSize, 0, Math.PI*2, false);  
          x -= 10;
          y -= 10;
        }
        ctx.closePath();
        ctx.fillStyle = filly;
        ctx.fill();
        }
      }
    }
  var slamsloosh = function() {
    setInterval(drawSquare, frameRate);
  }();
}

document.onload = setup();
