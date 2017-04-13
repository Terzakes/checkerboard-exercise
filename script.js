function makeBoard () {
  var numberOfSquares = 81;

  for (var i = 0; i < numberOfSquares; i++) {
      var div = document.createElement('div');
      var color;
      var random1 = Math.floor(Math.random() * 255);
      var random2 = Math.floor(Math.random() * 255);
      var random3 = Math.floor(Math.random() * 255);

      div.style.backgroundColor = 'rgb(' + random1 + ',' + random2 + ',' + random3 + ')';
      div.style.width = '11.1%';
      div.style.cssFloat = 'left';
      div.style.paddingBottom = '11.1%';

      document.body.appendChild(div);

  }

}


function hideAll () {
  document.body.innerHTML = '';
}


function boardMusic () {
  var music = document.createElement('audio');
  music.innerHTML = '<source src="' + 'Time On Her Side.mp3'+ '" type="audio/mpeg">'
  document.head.appendChild(music);
  music.play();
}

boardMusic();
window.setInterval(makeBoard, 2000);
window.setInterval(hideAll, 1999);




// var audioElement;
// if(!audioElement) {
//   audioElement = document.createElement('audio');
//   audioElement.innerHTML = '<source src="' + '/audio/sound.mp3'+ '" type="audio/mpeg" />'
// }
// audioElement.play();
