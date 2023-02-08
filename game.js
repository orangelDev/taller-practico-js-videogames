const canvas = document.querySelector('#game')
const game = canvas.getContext('2d')

let canvasSize;
let elementsSize;

window.addEventListener('load', setCanvasSize)
window.addEventListener('resize', setCanvasSize)

function setCanvasSize() {
  
  if (window.innerHeight > window.innerWidth) {
    canvasSize = window.innerWidth * 0.8;
  } else {
    canvasSize = window.innerHeight * 0.8;
  }

  canvas.setAttribute('width', canvasSize);
  canvas.setAttribute('height', canvasSize);

 elementsSize = (canvasSize / 10) - 1;

  startGame();
}

function startGame() {


  console.log({ canvasSize, elementsSize });

  game.font = elementsSize + "px Verdana";
  game.textAlign = "";

  const map = maps[1];
  const mapRows = map.trim().split('\n');
  const mapRowsCol = mapRows.map(row => row.trim().split(''));
  console.log({map, mapRows, mapRowsCol});

  for (let row = 1; row <= 10; row++) {
    console.log(row)
    for (let col = 0; col <= 9; col++) {
      game.fillText(emojis[mapRowsCol[row - 1][col]], elementsSize * col , elementsSize * row );
      console.log(col  )
    }
  }
  // game.fillRect(50,0,100,100)

 /*  game.font = '25px Verdana'
  game.fillStyle = 'purple'
  game.textAlign = 'left'
  game.fillText('Platzi', 25, 25) */
}