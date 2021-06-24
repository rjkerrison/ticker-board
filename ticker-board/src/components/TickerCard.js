import { sliceBetween } from '../utils/string'

class TickerCard {
  acceptableCodes = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789:,'-\xa0`
  delayInMilliseconds = 25

  constructor(letter) {
    this.visibleLetter = letter
    this.createElement()
  }

  createElement() {
    this.element = document.createElement('span')
    this.element.classList.add('ticker')
    this.element.innerText = this.visibleLetter
  }

  changeCharacter(letter) {
    this.visibleLetter = letter
    this.render()
  }

  animateTo(letter) {
    if (this.visibleLetter === letter) {
      return
    }
    const letters = sliceBetween(
      this.acceptableCodes,
      this.visibleLetter,
      letter
    )

    let start
    const updateLetter = (timestamp) => {
      if (start === undefined) {
        start = timestamp
      }
      const elapsed = timestamp - start
      const letterIndex = Math.floor(elapsed / this.delayInMilliseconds)

      if (letterIndex < letters.length) {
        this.changeCharacter(letters[letterIndex])
        window.requestAnimationFrame(updateLetter)
      } else {
        this.changeCharacter(letter)
        this.element.classList.remove('animating')
      }
    }

    this.element.classList.add('animating')
    window.requestAnimationFrame(updateLetter)
  }

  render() {
    this.element.innerText = this.visibleLetter
  }
}

export default TickerCard
