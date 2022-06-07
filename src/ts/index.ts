import '../scss/base.scss'
import '../scss/game.scss'

import getDifficulty from './getDifficulty'
import Minesweeper from './Minesweeper'
import Renderer from './Renderer'

const difficulty = getDifficulty()

const { numberOfRows, numberOfCols, numberOfMines } = difficulty

const game = new Minesweeper(numberOfRows, numberOfCols, numberOfMines)

const gameContainer = <HTMLElement>document.getElementById('gameContainer')
const numberOfMinesSPAN = <HTMLElement>document.getElementById('numberOfMines')
const flagsSPAN = <HTMLElement>document.getElementById('flags')
const timerSPAN = <HTMLElement>document.getElementById('timer')

const renderer = new Renderer(
  game,
  gameContainer,
  numberOfMinesSPAN,
  flagsSPAN,
  timerSPAN
)
renderer.render()

renderer.cellsHTML.forEach((cell, index) => {
  cell.addEventListener('click', () => {
    // reveal cell and render the game
    game.revealCell(index)
    renderer.render()
  })

  cell.addEventListener('contextmenu', (e) => {
    // prevent context menu from opening
    e.preventDefault()

    // flag cell and render the game
    game.flagCell(index)
    renderer.render()
  })
})
