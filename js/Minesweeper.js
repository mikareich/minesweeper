/** Representation of a Minesweeper game */
class Minesweeper {
  /**
   * The constructor function creates a new Minesweeper object with the specified number of rows,
   * columns, and mines
   * @param cols - The number of columns in the field.
   * @param rows - The number of rows in the field.
   * @param numberOfMines - The number of mines to be placed on the field.
   */
  constructor(cols, rows, numberOfMines) {
    this.gameState = "INITIALIZING";
    this.rows = rows;
    this.cols = cols;
    this.numberOfMines = numberOfMines;

    this.field = [];

    this._createField();
  }

  /**
   * It returns an array of all the cells in the field
   * @returns An array of all the cells in the field.
   */
  _getAllCells() {
    return this.field.flat();
  }

  /**
   * Creates the field with plain cells.
   */
  _createField() {
    // create plain field
    for (let rowIndex = 0; rowIndex < this.rows; rowIndex++) {
      this.field[rowIndex] = [];
      for (let colIndex = 0; colIndex < this.cols; colIndex++) {
        // create plain cell
        this.field[rowIndex][colIndex] = {
          isMine: false,
          isRevealed: false,
          isFlagged: false,
          numberOfMinesAround: 0,
          row: rowIndex,
          col: colIndex,
          index: rowIndex * this.cols + colIndex,
        };
      }
    }
  }

  /**
   * Updates the gameState if it is the first click of the game.
   * @param cell The first cell that the player clicked on.
   */
  _onFirstClick(cell) {
    // update game state
    if (this.gameState === "INITIALIZING") {
      this.gameState = "PLAYING";
      // place mines
      this._placeMines(cell);
    }
  }

  /**
   * Places mines at random cells in the field, ensuring that the starting cell, passed as an argument, is not filled.
   * @param startCell - The cell that the user clicked on.
   */
  _placeMines(startCell) {
    // Flatten the field and remove the starting cell
    const possibleCells = this.field
      .flat()
      .filter((cell) => cell !== startCell);

    // Place mines at random cells
    for (let i = 0; i < this.numberOfMines; i++) {
      const randomIndex = Math.floor(Math.random() * possibleCells.length);
      const cell = possibleCells[randomIndex];
      cell.isMine = true;

      // Update the number of mines around the cell
      this._getCellsAround(cell.row, cell.col).forEach(
        (cellAround) => cellAround.numberOfMinesAround++
      );

      // Remove the cell from the possible cells
      possibleCells.splice(randomIndex, 1);
    }
  }

  /**
   * It takes an index and returns the cell at that index
   * @param index - The index of the cell you want to get.
   * @returns The cell at the given index.
   */
  _getCellByIndex(index) {
    const row = Math.floor(index / this.cols);
    const col = index % this.cols;
    return this.field[row][col];
  }

  /**
   * It returns an array of the cells around a given cell
   * @param row - the row of the cell we want to get the neighbors of
   * @param col - the column of the cell
   * @param [pattern=block] - the pattern of the cells we want to get the neighbors of
   * @returns An array of cells around the given cell.
   */
  _getCellsAround(row, col, pattern = "block") {
    // the cells that actually touch the given cell, including the given cell
    const crossPattern = [
      [row - 1, col],
      [row, col - 1],
      [row, col],
      [row, col + 1],
      [row + 1, col],
    ];

    // all the 8 cells around the given cell, even in the corners, including the given cell
    const blockPattern = [
      ...crossPattern,
      [row - 1, col - 1],
      [row - 1, col + 1],
      [row + 1, col - 1],
      [row + 1, col + 1],
    ];

    /**
     * It returns true if the given coordinates are within the bounds of the field
     */
    const positionInField = ([cRow, cCol]) =>
      cRow >= 0 && cCol >= 0 && cRow < this.rows && cCol < this.cols;

    // choose which pattern to use and filter all positions that are not in the field
    const positions = (
      pattern === "block" ? blockPattern : crossPattern
    ).filter(positionInField);

    // return the cells at the given positions
    return positions.map(
      ([rowAround, colAround]) => this.field[rowAround][colAround]
    );
  }

  /**
   * It returns an array of all the cells in the field that are flagged
   * @returns An array of all the cells that are flagged.
   */
  _getFlaggedCells() {
    return this.field.flat().filter((cell) => cell.isFlagged);
  }

  /**
   * It returns an array of all the cells in the field that have been revealed
   * @returns An array of all the cells that are revealed.
   */
  _getRevealedCells() {
    return this.field.flat().filter((cell) => cell.isRevealed);
  }

  /**
   * It returns an array of all the cells in the field that are not yet revealed
   * @returns An array of all the cells that are not revealed.
   */
  _getUnrevealedCells() {
    return this.field.flat().filter((cell) => !cell.isRevealed);
  }

  /**
   * It returns an array of all the cells that are mines
   * @returns An array of all the cells that are mines.
   */
  _getMines() {
    return this.field.flat().filter((cell) => cell.isMine);
  }

  /**
   * If all the mines are flagged and the number of mines is equal to the number of flagged cells, then
   * the game is won
   * @returns A boolean value.
   */
  _isWon() {
    return (
      this._getMines().every((cell) => cell.isFlagged) &&
      this._getMines().length === this._getFlaggedCells().length
    );
  }

  /** Reveals all cells that have zero mines in their surrounding and are directly connect.
   * @param cell - The cell that has zero mines in its surrounding.
   */
  _revealZeros(cell) {
    // reveals current cell
    cell.isRevealed = true;

    // gets directly connected cells and reveals them if they have zero mines in their surrounding
    this._getCellsAround(cell.row, cell.col, "cross").forEach((cellAround) => {
      if (
        cellAround.numberOfMinesAround === 0 &&
        !cellAround.isRevealed &&
        !cellAround.isFlagged
      ) {
        this._revealZeros(cellAround);
      }
    });
  }

  /**
   * _won() sets the gameState to "WON"
   */
  _won() {
    this.gameState = "WON";
  }

  /**
   * _gameOver() is a function that sets the gameState to "LOST" when the player loses the game
   */
  _gameOver() {
    this.gameState = "LOST";
  }

  _;

  /**
   * If the game is not over, and the cell is not revealed or flagged, then reveal the cell
   * @param index - The index of the cell to reveal.
   */
  revealCell(index) {
    const cell = this._getCellByIndex(index);
    if (
      this.gameState === "LOST" ||
      this.gameState === "WON" ||
      cell.isRevealed ||
      cell.isFlagged
    )
      return;

    this._onFirstClick(cell);

    // reveal field
    cell.isRevealed = true;

    // check if the game is won
    if (cell.isMine) this._gameOver();
    // if the cell is empty, reveal all the cells around it
    else if (cell.numberOfMinesAround === 0) this._revealZeros(cell);
  }

  /**
   * Toggles the flag on the cell.
   * @param index - The index of the cell to be flagged.
   */
  flagCell(index) {
    const cell = this._getCellByIndex(index);
    if (this.gameState !== "PLAYING" || cell.isRevealed) return;

    // flag cell
    cell.isFlagged = !cell.isFlagged;

    // check if game is won
    if (this._isWon()) this._won();
  }
}

export default Minesweeper;
