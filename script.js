var numberOfSquares = 81;
var gradient = 255;

for (var i = 0; i < numberOfSquares; i++) {
    var div = document.createElement('div');
    div.style.width = '11.1%';
    div.style.cssFloat = 'left';
    div.style.paddingBottom = '11.1%';
    if (i % 2 !== 0) {
      div.style.backgroundColor = 'rgb(0, 0, ' + gradient + ')';
    } else {
      div.style.backgroundColor = 'rgb(' + gradient + ', 0, 0)';
    }
    gradient -= 2;
    document.body.appendChild(div);
}
