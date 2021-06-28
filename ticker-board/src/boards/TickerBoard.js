class TickerBoard {
  constructor(selector, { size }) {
    const selectedElements = document.querySelectorAll(selector)
    this.boards = Array.from(selectedElements).map((selected) => {
      const messages = Array.from(selected.children).map((m) => m.innerText)
      const boardElement = document.createElement('ul')
      selected.replaceWith(boardElement)

      const board = new RotationBoard(boardElement, {
        count: messages.length,
        size: size || Math.max(...messages.map((x) => x.length)),
        messages,
      })

      boardElement.addEventListener('click', () => board.advance())

      return board
    })
  }

  advance(index) {
    this.boards[index].advance()
  }
}

export default TickerBoard
