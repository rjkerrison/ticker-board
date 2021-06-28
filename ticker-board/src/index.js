import { Board, TickerBoard, RotationBoard } from './boards/index.js'
import './ticker.css'

// for ease-of-use, we expose these classes in window
if (window) {
  window.Board = Board
  window.TickerBoard = TickerBoard
  window.RotationBoard = RotationBoard
}

export { Board, TickerBoard, RotationBoard }
