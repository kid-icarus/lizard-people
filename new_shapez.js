var setup = function() {
  var x = 0;
  var y = 0;
  var frameRate = 1000/300;
  var canvas = document.getElementById('dacanvas');
  canvas.width = 600;
  canvas.height = 600;

  var ctx = canvas.getContext('2d');
  var drawSquare = function() {
    x = 0;
    y = 0;
    var randX = (Math.random() * 600) + 1;
    var randY = (Math.random() * 600) + 1;
    var randSize = (Math.random() * 80) + 1;
    var rand = (Math.random() * 200) + 1;
    var filly = '#'+Math.floor(Math.random()*16777215).toString(16);
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
