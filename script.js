var numberOfSquares = 81;
for (var i = 0; i < numberOfSquares; i++) {
    var div = document.createElement('div');
    var random1 = Math.floor(Math.random() * 255);
    var random2 = Math.floor(Math.random() * 255);
    var random3 = Math.floor(Math.random() * 255);

    div.style.backgroundColor = 'rgb(' + random1 + ',' + random2 + ',' + random3 + ')';
    div.style.width = '11.1%';
    div.style.cssFloat = 'left';
    div.style.paddingBottom = '11.1%';
    document.body.appendChild(div);
}

// from 0 to 255
// rgb(209, 198, 35)
//rgb(Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), )
// Math.floor(Math.random() * 255)
