window.onload = function () {
  var button = document.getElementById('dealwithit')
  button.addEventListener('click', derp)
}

function derp() {
  var boombap = document.getElementById('boombap'),
      slogan = document.getElementById('slogan')
  boombap.setAttribute('class', 'derp')
  slogan.setAttribute('class', 'jerp')
  var real = document.getElementById('real')
  real.play()
}
