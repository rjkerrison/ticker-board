const NON_BREAKING_SPACE = `\xa0`

// Prototype adjustments
String.prototype.sliceAt = function (character) {
  return this.slice(this.indexOf(character) + 1)
}
String.prototype.sliceTo = function (character) {
  return this.slice(0, this.indexOf(character) + 1)
}
Array.prototype.getRandomChoice = function () {
  const i = Math.floor(Math.random() * this.length)
  return this[i]
}
Array.prototype.getRandomFilterChoice = function (filter) {
  return this.filter(filter).getRandomChoice()
}
Array.prototype.getRandomSlice = function (n) {
  const i = Math.floor(Math.random() * this.length)
  return this.slice(i, i + (n || 1))
}
Array.prototype.padStart = function (item, length) {
  if (length <= this.length) {
    return this
  }
  return new Array(length - this.length).fill(item).concat(this)
}
Array.prototype.padEnd = function (item, length) {
  if (length <= this.length) {
    return this
  }
  return this.concat(new Array(length - this.length).fill(item))
}

// Ticker board effect
class TickerCard {
  acceptableCodes = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz,'-\xa0`

  constructor(letter) {
    this.targetLetter = this.visibleLetter = letter
    this.createElement()
  }

  createElement() {
    this.element = document.createElement('li')
    this.element.classList.add('ticker')
    this.element.innerHTML = `<span>${this.targetLetter}</span>`
  }

  changeCharacter(letter) {
    this.visibleLetter = letter
    this.render()
  }

  update(letter) {
    if (this.targetLetter === letter) {
      return
    }
    const letters = (this.acceptableCodes + this.acceptableCodes)
      .sliceAt(this.targetLetter)
      .sliceTo(letter)

    Array.from(letters).forEach((l, i) => {
      setTimeout(() => this.changeCharacter(l), i * 25)
    })
    this.targetLetter = letter
  }

  render() {
    window.requestAnimationFrame(() => {
      this.element.firstElementChild.innerText = this.visibleLetter
      this.element.firstElementChild.classList.toggle('enter')
    })
  }
}

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
      setTimeout(() => card.update(newMessage[i]), i * this.delay)
    })
  }

  createCards() {
    return new Array(this.size)
      .fill('')
      .map(() => new TickerCard(NON_BREAKING_SPACE))
  }

  render() {
    const element = document.createElement('ul')
    element.classList.add('board')
    this.cards.forEach((card) => {
      element.appendChild(card.element)
    })
    return element
  }
}

class Board {
  constructor(element, count, size, options) {
    this.element = element
    this.messages = new Array(count).fill(''.padEnd(size, NON_BREAKING_SPACE))
    this.createTickers(size)
    this.options = {
      delay: 250,
      ...options,
    }
    this.update()
  }

  createTickers(size) {
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
    this.messages = messages.padEnd('', this.tickers.length)
    this.update()
  }
}
