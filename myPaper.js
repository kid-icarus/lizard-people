// Create a Paper.js Path to draw a line into it:
var path = new Path();

// Give the stroke a color
path.strokeColor = 'black';

var start = new Point();

// Move to start and draw a line from there
path.moveTo(start);
path.add(new Point(100, 50));
path.add(new Point(0, 150));
path.closed = true;
path.smooth();
path.fillColor = 'red';

var symbol = new Symbol(path);

var count = 50;
// Place the instances of the symbol:
for (var i = 0; i < count; i++) {
  // The center position is a random point in the view:
  var center = Point.random() * view.size;
  var placedSymbol = symbol.place(center);
  // Randomize the size a bit.
  placedSymbol.scale(i / count);
}

function onFrame(event) {
  // Run through the active layer's children list and change
  // the position of the placed symbols:
  for (var i = 0; i < count; i++) {
    var item = project.activeLayer.children[i];
    
    // Move the item 1/20th of its width to the right. This way
    // larger circles move faster than smaller circles:
    item.position.x += item.bounds.width / 2;
    item.rotate(3);
    path.fillColor.hue += 1;

    // If the item has left the view on the right, move it back
    // to the left:
    if (item.bounds.left > view.size.width) {
      item.position.x = -item.bounds.width;
    }
  }

  //path.rotate(3);
  //path.position += 5;
  //path.fillColor.hue += 5;
}
