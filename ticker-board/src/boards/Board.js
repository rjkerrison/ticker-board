import { NON_BREAKING_SPACE } from '../utils/constants'
import TickerRow from '../components/TickerRow'
import { appendItemsUpToLength } from '../utils/array'

class Board {
  constructor(element, { count, size, delay, theme }) {
    this.options = {
      delay: delay || 250,
      theme,
    }
    this.messages = new Array(count).fill(''.padEnd(size, NON_BREAKING_SPACE))
    this._createElement(element)
    this._createTickers(size)
    this.update()
  }

  _createElement(element) {
    const boardElement = document.createElement('ul')
    boardElement.classList.add('board')
    if (typeof element === 'string') {
      element = document.querySelector(element)
    }
    if (element instanceof HTMLElement) {
      element.replaceWith(boardElement)
    }
    if (typeof this.options.theme === 'string') {
      const { theme } = this.options
      console.log({ theme, boardElement })
      boardElement.setAttribute(theme, true)
    }
    this.element = boardElement
  }

  _createTickers(size) {
    this.tickers = this.messages.map((_, i) => this.setupTicker(size, i))
  }

  setupTicker(size, i) {
    const ticker = new TickerRow(
      size,
      this.messages[i].padEnd(size, NON_BREAKING_SPACE)
    )
    this.element.appendChild(ticker.element)
    return ticker
  }

  update() {
    this.tickers.forEach((ticker, i) => {
      this.messages[i] = (this.messages[i] || '').padEnd(
        this.size,
        NON_BREAKING_SPACE
      )
      setTimeout(
        () => ticker.updateMessage(this.messages[i]),
        i * this.options.delay
      )
    })
  }

  updateMessages(messages) {
    this.messages = appendItemsUpToLength(messages, '', this.tickers.length)
    this.update()
  }
}

export default Board
