class TickerBoard {
  constructor(selector) {
    const selectedElements = document.querySelectorAll(selector)
    this.boards = Array.from(selectedElements).map((selected) => {
      const messages = Array.from(selected.children).map((m) => m.innerText)
      const boardElement = document.createElement('div')
      selected.replaceWith(boardElement)

      const board = new RotationBoard(boardElement, {
        count: messages.length,
        size: 24,
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

class RotationBoard extends Board {
  constructor(element, options) {
    super(element, options)

    this.defaultMessage = new Array(options.size).fill('\xa0').join('')
    this.originalMessages = options.messages
    this.delay = options.delay || 3500
    this.initialDelay = options.initialDelay || 1000
    this.rotate()
  }

  rotate() {
    setTimeout(() => {
      this.advance()
      this.interval = setInterval(this.advance.bind(this), this.delay)
    }, this.initialDelay)
  }

  cancel() {
    clearInterval(this.interval)
  }

  advance() {
    const newMessages = Array.from(this.messages)
    newMessages.shift()

    if (this.originalMessages.indexOf(this.messages[0]) > -1) {
      newMessages.push(this.defaultMessage)
    } else {
      const indexToAdd =
        this.originalMessages.indexOf(
          this.messages[this.originalMessages.length - 1]
        ) + 1

      newMessages.push(this.originalMessages[indexToAdd])
    }
    console.log('advance', this.messages, this.originalMessages, newMessages)
    this.updateMessages(newMessages)
  }
}
