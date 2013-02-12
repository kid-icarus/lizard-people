var colorscheme = 5;
var setup = function() {
  var x = 0;
  var y = 0;
  var frameRate = 1000/300;
  var AUTUMN = 255;
  var SEA = 5;
  colorscheme_opaque = 0;
  colorscheme_transparent = 0;
  var canvas = document.getElementById('dacanvas');
  var clicker = 0;
  var transp = 0;
  canvas.width = document.width;
  canvas.height = document.height;

  var ctx = canvas.getContext('2d');
  canvas.onclick = function() {
    clicker = (clicker + 1) % 2;
    transp = (transp + 1) % 3;
    if (colorscheme == AUTUMN) {
      colorscheme_opaque = 4000;
      colorscheme_transparent = 255;
      colorscheme = SEA;
    }
    else {
      colorscheme = AUTUMN;
      colorscheme_opaque = 1000;
      colorscheme_transparent = 2;
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
    var filly = '#'+Math.floor((Math.random()*1000)+colorscheme_opaque).toString(16);
    ctx.beginPath();
    ctx.arc(randX, randY, randSize, 0, Math.PI*2, false);  
    ctx.closePath();
    ctx.fillStyle = filly;
    ctx.fill();
    if (rand <= 100) {
      if (transp) {
        var filly = 'rgba(' + Math.floor((Math.random()*100) + colorscheme_transparent ) + ', ' + Math.floor((Math.random()*255)) + ', ' + Math.floor((Math.random()*255)) + ', .5)';
      }
      else {
        var filly = '#'+Math.floor((Math.random()*1000)+colorscheme_opaque).toString(16);
      }
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
