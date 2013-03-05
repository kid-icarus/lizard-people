window.onload = function(){
  var frame = 1000/60;
  var canvas = document.getElementById('dacanvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  var ctx = canvas.getContext('2d');
  var icon = new Image();
  var i = 0;
  var randX = 0;
  randY = (Math.random() * canvas.height) + 1;
  icon.onload = setInterval(function(){
    i += 7;
    if (i >= window.innerWidth) {
      i = 0;
      blah();
    }
    ctx.clearRect(randX + i, randY, icon.width + 1000, icon.height);
    ctx.drawImage(icon, randX + i, randY );
    canvas.onclick = function(event) {
      var minX = randX + i - 20;
      var maxX = randX + i + icon.width;
      // Y axis goes from 0-infinity, more = lower
      var minY = randY;
      var maxY = randY + icon.height;
      if (event.pageX < maxX && event.pageX > minX ) {
        if (event.pageY < maxY && event.pageY > minY) {
          i -= 190;
        }
      }
    };
  },frame);
  icon.src = 'icon' + Math.floor(Math.random() * 4 + 1) + '.svg';
  var blah = function() {
    randY = (Math.random() * 300) + 1;
    var new_rand_icon = 'icon' + Math.floor(Math.random() * 3 + 1) + '.svg';
    if ('http://' + window.location.hostname + '/' + new_rand_icon != icon.src) {
      icon.src = new_rand_icon;
    }
    else {
      blah();
    }
  };
};
