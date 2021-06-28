const board = document.getElementById('board')
const twoRowBoard = document.getElementById('two-row-board')
const messages = Array.from(document.getElementById('messages').children).map(
  (x) => x.innerText
)

new RotationBoard(board, {
  messages,
  count: 1,
  size: 24,
})

new RotationBoard(twoRowBoard, {
  messages,
  count: 2,
  size: 24,
})
