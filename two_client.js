$(document).ready(function(){
  var two = new Two({
    fullscreen: true
  }).appendTo(document.body);

  var circle = two.makeCircle(-70, 0, 500);
  var circle2 = two.makeCircle(-60, 0, 400);
  var circle3 = two.makeCircle(-20, 0, 200);
  var rect = two.makeRectangle(70, 0, 100, 100);
  circle.fill = '#FF8000';
  circle2.fill = '#ee7122';
  circle3.fill = '#ae1d0e';
  rect.fill = 'rgba(0, 200, 255, 0.75)';

  var group = two.makeGroup(circle, rect, circle2, circle3);
  group.translation.set(two.width / 2, two.height / 2);
  group.scale = 0;
  group.noStroke();

  // Bind a function to scale and rotate the group
  // to the animation loop.
  var t = (1 - group.scale) * 0.125;
  two.bind('update', function(frameCount) {
    // This code is called everytime two.update() is called.
    // Effectively 60 times per second.
    console.log(two.frameCount);
    console.log(t);
    if (group.scale > 0.9999) {
      console.log('greater');
      group.scale -= t;
      group.rotation -= t * 4 * Math.PI;
      t = (1 - group.scale) * 0.125;
    }
    else {
      console.log('lesser');
      group.scale += t + 0.005;
      group.rotation += t * 4 * Math.PI;
      t = (1 + group.scale) * 0.125;
    }
  }).play();  // Finally, start the animation loop
});
