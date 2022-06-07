import confetti from 'canvas-confetti'
import Minesweeper from './Minesweeper'

/* It renders the game based on the current game state */
class Renderer {
  /** Representation of a minesweeper game */
  public readonly game: Minesweeper

  /** The HTML element that will contain the game */
  public readonly gameContainer: HTMLElement

  /** The HTML element that will contain the number of mines */
  private readonly numberOfMinesElement: HTMLElement

  /** The HTML element that will contain the number of flags */
  private readonly flagsElement: HTMLElement

  /** The HTML elements that will contain the timer */
  private readonly timerElement: HTMLElement

  /** All cells rendered as HTML elements  */
  public cellsHTML: HTMLDivElement[] = []

  /** Indicates whether the confetti animation already rendered */
  private confettiRendered = false

  /**
   * Initialize the renderer.
   * @param gameContainer - This is the HTML element that will contain the game.
   */
  constructor(
    game: Minesweeper,
    gameContainer: HTMLElement,
    numberOfMinesElement: HTMLElement,
    flagsElement: HTMLElement,
    timerElement: HTMLElement
  ) {
    this.game = game
    this.gameContainer = gameContainer
    this.numberOfMinesElement = numberOfMinesElement
    this.flagsElement = flagsElement
    this.timerElement = timerElement

    window.setInterval(() => this.renderTimer(), 1000)
  }

  /**
   * Renders the game based on the current game state.
   */
  render() {
    this.numberOfMinesElement.innerHTML = this.game.numberOfMines.toString()
    this.flagsElement.innerHTML = this.game.flaggedCells.length.toString()

    switch (this.game.gameState) {
      case 'INITIALIZING':
        if (this.cellsHTML.length === 0) this.renderInitializing()
        break

      case 'PLAYING':
        this.renderPlaying()
        break

      case 'LOST':
        this.renderLost()
        break

      case 'WON':
        this.renderWon()
        break
    }
  }

  /**
   * Renders the timer.
   */
  private renderTimer() {
    const twoDigit = (number: number) =>
      number.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false,
      })

    const seconds = Math.round(this.game.timeElapsed / 1000)
    const minutes = Math.floor(seconds / 60)
    const secondsLeft = seconds % 60

    this.timerElement.innerHTML = `${twoDigit(minutes)}.${twoDigit(
      secondsLeft
    )}`
  }

  /**
   * Reveals all cells of the game and removes the flags.
   */
  private revealAll() {
    this.game.cells.forEach((cell) => {
      const cellHTML = this.cellsHTML[cell.index]

      cellHTML.classList.add('revealed')
      cellHTML.classList.remove('flagged')

      cellHTML.innerHTML = cell.adjacentMines.toString()
      if (cell.isMine) cellHTML.innerHTML = '💣'
    })
  }

  /**
   * Generates the cells and adds them to the gameContainer.
   */
  private renderInitializing() {
    this.gameContainer.style.setProperty(
      '--cols',
      this.game.numberOfCols.toString()
    )
    this.gameContainer.style.setProperty(
      '--rows',
      this.game.numberOfCols.toString()
    )

    this.game.field.flat().forEach(() => {
      const cellHTML = document.createElement('div')

      cellHTML.classList.add('cell')

      this.gameContainer.appendChild(cellHTML)
      this.cellsHTML.push(cellHTML)
    })
  }

  /**
   * Renders all cells based on their properties.
   */
  private renderPlaying() {
    this.game.cells.forEach((cell) => {
      const cellHTML = this.cellsHTML[cell.index]

      if (cell.isRevealed) cellHTML.innerHTML = cell.adjacentMines.toString()
      else if (cell.isFlagged) cellHTML.innerHTML = '🚩'
      else cellHTML.innerHTML = ''

      cellHTML.classList.toggle('mine', cell.isMine)
      cellHTML.classList.toggle('revealed', cell.isRevealed)
      cellHTML.classList.toggle('flagged', cell.isFlagged)
    })
  }

  private renderWon() {
    this.revealAll()

    if (this.confettiRendered) return

    this.confettiRendered = true

    const canvas = document.createElement('canvas')
    canvas.width = document.body.clientWidth
    canvas.height = document.body.clientHeight
    canvas.className = 'confetti-canvas'
    document.body.appendChild(canvas)

    const myConfetti = confetti.create(canvas)

    myConfetti({
      particleCount: 200,
      spread: 100,
    })
      ?.then(() => canvas.remove())
      ?.catch(console.error)
  }

  private renderLost() {
    this.revealAll()
  }
}

export default Renderer
