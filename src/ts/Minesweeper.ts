import { v4 as uuid } from 'uuid'

interface Cell {
  index: number
  /** Cell id */
  id: string
  /** Row index of the cell */
  row: number
  /** Col index of the cell */
  col: number
  /** Whether the cell is revealed */
  isRevealed: boolean
  /** Whether the cell is flagged */
  isFlagged: boolean
  /** Whether the cell is a mine */
  isMine: boolean
  /** Number of mines adjacent to the cell */
  adjacentMines: number
}

/** Representation of a Minesweeper game */
class Minesweeper {
  /** The current state of the game */
  public gameState: 'INITIALIZING' | 'PLAYING' | 'LOST' | 'WON' = 'INITIALIZING'

  /** The number of rows in the field */
  public readonly numberOfRows: number

  /** The number of columns in the field */
  public readonly numberOfCols: number

  /** The number of mines in the field */
  public readonly numberOfMines: number

  /** The field of the game */
  public readonly field: Cell[][] = []

  /** When the game state changed to "PLAYING" */
  private startTimestamp: number | null = null

  /** Last measured timestamp */
  private lastTimestamp: number | null = null

  /**
   * Returns the number of seconds that have elapsed since the game started.
   */
  get timeElapsed() {
    if (this.startTimestamp === null || this.lastTimestamp === null) return 0

    if (!this.isWon) this.lastTimestamp = Date.now()
    return this.lastTimestamp - this.startTimestamp
  }

  /**
   * It returns an array of all the cells in the field
   * @returns An array of all the cells in the field.
   */
  get cells() {
    return this.field.flat()
  }

  /**
   * It returns an array of all the cells in the field that are flagged
   * @returns An array of all the cells that are flagged.
   */
  get flaggedCells() {
    return this.field.flat().filter((cell) => cell.isFlagged)
  }

  /**
   * It returns an array of all the cells in the field that have been revealed
   * @returns An array of all the cells that are revealed.
   */
  get revealedCells() {
    return this.field.flat().filter((cell) => cell.isRevealed)
  }

  /**
   * It returns an array of all the cells in the field that are not yet revealed
   * @returns An array of all the cells that are not revealed.
   */
  get unrevealedCells() {
    return this.field.flat().filter((cell) => !cell.isRevealed)
  }

  /**
   * It returns an array of all the cells that are mines
   * @returns An array of all the cells that are mines.
   */
  get mines() {
    return this.field.flat().filter((cell) => cell.isMine)
  }

  /**
   * If all the mines are flagged and the number of mines is equal to the number of flagged cells, then
   * the game is won
   * @returns A boolean value.
   */
  get isWon() {
    return (
      this.mines.every((cell) => cell.isFlagged) &&
      this.mines.length === this.flaggedCells.length
    )
  }

  /**
   * The constructor function creates a new Minesweeper object with the specified number of rows,
   * columns, and mines
   * @param numberOfRows - The number of rows in the field.
   * @param numberOfCols - The number of columns in the field.
   * @param numberOfMines - The number of mines to be placed on the field.
   */
  constructor(
    numberOfRows: number,
    numberOfCols: number,
    numberOfMines: number
  ) {
    this.numberOfRows = numberOfRows
    this.numberOfCols = numberOfCols
    this.numberOfMines = numberOfMines

    this.createField()
  }

  /**
   * Creates the field with plain cells.
   */
  private createField() {
    // create plain field
    for (let rowIndex = 0; rowIndex < this.numberOfRows; rowIndex++) {
      this.field[rowIndex] = []
      for (let colIndex = 0; colIndex < this.numberOfCols; colIndex++) {
        // create plain cell
        this.field[rowIndex][colIndex] = {
          id: uuid(),
          isMine: false,
          isRevealed: false,
          isFlagged: false,
          adjacentMines: 0,
          row: rowIndex,
          col: colIndex,
          index: rowIndex * this.numberOfCols + colIndex,
        }
      }
    }
  }

  /**
   * Updates the gameState if it is the first click of the game.
   * @param cell The first cell that the player clicked on.
   */
  private onFirstClick(cell: Cell) {
    // update game state
    if (this.gameState === 'INITIALIZING') {
      this.gameState = 'PLAYING'
      this.startTimestamp = Date.now()
      this.lastTimestamp = Date.now()
      // place mines
      this.placeMines(cell)
    }
  }

  /**
   * Places mines at random cells in the field, ensuring that the starting cell, passed as an argument, is not filled.
   * @param startCell - The cell that the user clicked on.
   */
  private placeMines(startCell: Cell) {
    // Flatten the field and remove the starting cell
    const possibleCells = this.field.flat().filter((cell) => cell !== startCell)

    // Place mines at random cells
    for (let i = 0; i < this.numberOfMines; i++) {
      const randomIndex = Math.floor(Math.random() * possibleCells.length)
      const cell = possibleCells[randomIndex]
      cell.isMine = true

      // Update the number of mines around the cell
      this.getAdjacentCells(cell.row, cell.col).forEach(
        (cellAround) => cellAround.adjacentMines++
      )

      // Remove the cell from the possible cells
      possibleCells.splice(randomIndex, 1)
    }
  }

  /**
   * It takes an index and returns the cell at that index
   * @param index - The index of the cell you want to get.
   * @returns The cell at the given index.
   */
  getCellByIndex(index: number) {
    const row = Math.floor(index / this.numberOfCols)
    const col = index % this.numberOfCols
    return this.field[row][col]
  }

  /**
   * It returns an array of the cells around a given cell
   * @param row - the row of the cell we want to get the neighbors of
   * @param col - the column of the cell
   * @param [pattern=block] - the pattern of the cells we want to get the neighbors of
   * @returns An array of cells around the given cell.
   */
  public getAdjacentCells(
    row: number,
    col: number,
    pattern: 'block' | 'cross' = 'block'
  ) {
    // the cells that actually touch the given cell, including the given cell
    const crossPattern = [
      [row - 1, col],
      [row, col - 1],
      [row, col],
      [row, col + 1],
      [row + 1, col],
    ]

    // all the 8 cells around the given cell, even in the corners, including the given cell
    const blockPattern = [
      ...crossPattern,
      [row - 1, col - 1],
      [row - 1, col + 1],
      [row + 1, col - 1],
      [row + 1, col + 1],
    ]

    /**
     * It returns true if the given coordinates are within the bounds of the field
     */
    const positionInField = ([cRow, cCol]: number[]) =>
      cRow >= 0 &&
      cCol >= 0 &&
      cRow < this.numberOfRows &&
      cCol < this.numberOfCols

    // choose which pattern to use and filter all positions that are not in the field
    const positions = (
      pattern === 'block' ? blockPattern : crossPattern
    ).filter(positionInField)

    // return the cells at the given positions
    return positions.map(
      ([rowAround, colAround]) => this.field[rowAround][colAround]
    )
  }

  /** Reveals all cells that have zero mines in their surrounding and are directly connect.
   * @param cell - The cell that has zero mines in its surrounding.
   */
  private revealZeros(cell: Cell) {
    // reveals current cell
    cell.isRevealed = true

    // gets directly connected cells and reveals them if they have zero mines in their surrounding
    this.getAdjacentCells(cell.row, cell.col, 'cross').forEach((cellAround) => {
      if (
        cellAround.adjacentMines === 0 &&
        !cellAround.isRevealed &&
        !cellAround.isFlagged
      ) {
        this.revealZeros(cellAround)
      }
    })
  }

  /**
   * _won() sets the gameState to "WON"
   */
  private won() {
    this.gameState = 'WON'
  }

  /**
   * _gameOver() is a function that sets the gameState to "LOST" when the player loses the game
   */
  private gameOver() {
    this.gameState = 'LOST'
  }

  /**
   * If the game is not over, and the cell is not revealed or flagged, then reveal the cell
   * @param index - The index of the cell to reveal.
   */
  revealCell(index: number) {
    const cell = this.getCellByIndex(index)
    if (
      this.gameState === 'LOST' ||
      this.gameState === 'WON' ||
      cell.isRevealed ||
      cell.isFlagged
    )
      return

    this.onFirstClick(cell)

    // reveal field
    cell.isRevealed = true

    // check if the game is won
    if (cell.isMine) this.gameOver()
    // if the cell is empty, reveal all the cells around it
    else if (cell.adjacentMines === 0) this.revealZeros(cell)
  }

  /**
   * Toggles the flag on the cell.
   * @param index - The index of the cell to be flagged.
   */
  flagCell(index: number) {
    const cell = this.getCellByIndex(index)
    if (this.gameState !== 'PLAYING' || cell.isRevealed) return

    // flag cell
    cell.isFlagged = !cell.isFlagged

    // check if game is won
    if (this.isWon) this.won()
  }
}

export default Minesweeper
