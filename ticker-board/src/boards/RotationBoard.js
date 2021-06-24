import Board from './Board'

class RotationBoard extends Board {
  constructor(element, options) {
    super(element, options)

    this.defaultMessage = new Array(options.size).fill('\xa0').join('')
    this.originalMessages = options.messages
    this.delay = options.delay || 8000
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
    this.updateMessages(newMessages)
  }
}

export default RotationBoard
