const canvas = document.querySelector('#game')
const game = canvas.getContext('2d')
const btnUp = document.querySelector('#up')
const btnLeft = document.querySelector('#left')
const btnRight = document.querySelector('#right')
const btnDown = document.querySelector('#down')

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
  game.textAlign = "end";

  const map = maps[0];
  const mapRows = map.trim().split('\n');
  const mapRowsCol = mapRows.map(row => row.trim().split(''));
  console.log({map, mapRows, mapRowsCol});

  mapRowsCol.forEach((row, rowI) => {
    row.forEach((col, colI) => {
      const emoji = emojis[col];
      const posX = elementsSize * (colI + 1)
      const posY = elementsSize * (rowI + 1)
      game.fillText(emoji, posX, posY)
    })
  }) ;

  // for (let row = 1; row <= 10; row++) {
  //   console.log(row)
  //   for (let col = 0; col <= 9; col++) {
  //     game.fillText(emojis[mapRowsCol[row - 1][col]], elementsSize * col , elementsSize * row );
  //     console.log(col  )
  //   }
  // }
  // game.fillRect(50,0,100,100)

 /*  game.font = '25px Verdana'
  game.fillStyle = 'purple'
  game.textAlign = 'left'
  game.fillText('Platzi', 25, 25) */
}
window.addEventListener('keydown', moveByKeys)
btnUp.addEventListener('click', moveUp)
btnLeft.addEventListener('click', moveLeft)
btnRight.addEventListener('click', moveRight)
btnDown.addEventListener('click', moveDown)

function moveByKeys(event) {
  if (event.key == 'ArrowUp') moveUp();
  else if (event.key == 'ArrowLeft') moveLeft();
  else if (event.key == 'ArrowRight') moveRight();
  else if (event.key == 'ArrowDown') moveDown();
}

function moveUp() {
  console.log('Me muevo hacia arriba')
}
function moveLeft() {
  console.log('Me muevo hacia la izquierda')
}
function moveRight() {
  console.log('Me muevo hacia la derecha')
}
function moveDown() {
  console.log('Me muevo hacia abajo')
}