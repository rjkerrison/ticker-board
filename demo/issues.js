;(function () {
  // https://github.com/rjkerrison/ticker-board/issues/1
  const board = new Board('#issue-1', { delay: 50, count: 3 })
  board.updateMessages(['Apple', 'Banana', 'Cherry'])

  const workaroundBoard = new Board('#issue-1-workaround', {
    delay: 50,
    count: 3,
    size: 7,
  })
  workaroundBoard.updateMessages(['Apple', 'Banana', 'Cherry'])
})()
