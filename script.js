var numberOfSquares = 81;
for (var i = 0; i < numberOfSquares; i++) {
    var div = document.createElement('div');
    div.style.backgroundColor = 'black';
    div.style.width = '11.1%';
    div.style.cssFloat = 'left';
    div.style.paddingBottom = '11.1%';
    if (i % 2 !== 0) {
      div.style.backgroundColor = 'red';
    }
    document.body.appendChild(div);
}
