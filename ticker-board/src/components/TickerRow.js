import { NON_BREAKING_SPACE } from '../utils/constants'
import TickerCard from './TickerCard'

class TickerRow {
  constructor(size, message) {
    this.size = size
    this.message = message.padEnd(size, NON_BREAKING_SPACE)
    this.delay = 200
    this.cards = this.createCards()
    this.element = this.render()
  }

  updateMessage(message) {
    this.message = message.padEnd(this.size, NON_BREAKING_SPACE)
    this.changeMessage()
  }

  changeMessage() {
    let newMessage = this.message.replace(/\s/g, NON_BREAKING_SPACE)

    this.cards.forEach((card, i) => {
      setTimeout(() => card.animateTo(newMessage[i]), i * this.delay)
    })
    this.screenReaderElement.innerText = this.message
  }

  createCards() {
    return new Array(this.size)
      .fill('')
      .map(() => new TickerCard(NON_BREAKING_SPACE))
  }

  render() {
    const element = document.createElement('li')
    const innerElement = document.createElement('div')
    this.screenReaderElement = document.createElement('div')

    innerElement.setAttribute('aria-hidden', 'true')
    innerElement.classList.add('ticker-row')
    this.screenReaderElement.classList.add('sr-only')

    this.cards.forEach((card) => {
      innerElement.appendChild(card.element)
    })
    element.append(this.screenReaderElement, innerElement)
    return element
  }
}

export default TickerRow
