import { NON_BREAKING_SPACE } from '../utils/constants'
import TickerRow from '../components/TickerRow'
import { appendItemsUpToLength } from '../utils/array'
import { padNonBreakingSpace } from '../utils/string'

class Board {
  constructor(element, { count, size, delay, theme }) {
    this.options = {
      delay: delay || 250,
      theme,
    }
    this.size = size
    this.messages = new Array(count).fill(
      ''.padEnd(this.size, NON_BREAKING_SPACE)
    )
    this._createElement(element)
    this._createTickers()
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
      boardElement.setAttribute(theme, true)
    }
    this.element = boardElement
  }

  _createTickers() {
    this.tickers = this.messages.map((_, i) => this.setupTicker(i))
  }

  updateCount(count) {
    if (count === this.tickers.length) {
      return
    }
    while (count > this.tickers.length) {
      this.messages.push(''.padEnd(this.size, NON_BREAKING_SPACE))
      this.tickers.push(this.setupTicker(this.tickers.length))
    }
    while (count < this.tickers.length) {
      this.tickers.pop()
    }
  }

  setupTicker(i) {
    const ticker = new TickerRow(
      this.size,
      this.messages[i].padEnd(this.size, NON_BREAKING_SPACE)
    )
    this.element.appendChild(ticker.element)
    return ticker
  }

  update() {
    this.tickers.forEach((ticker, i) => {
      this.messages[i] = padNonBreakingSpace(this.messages[i], this.size)
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
