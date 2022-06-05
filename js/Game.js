class Game {
  constructor(cols, rows, numberOfMines) {
    this.gameState = "INITIALIZING";
    this.rows = rows;
    this.cols = cols;
    this.numberOfMines = numberOfMines;

    this.field = [];

    this._createField();
  }

  _createField() {
    // create plain field
    for (let rowIndex = 0; rowIndex < this.rows; rowIndex++) {
      this.field[rowIndex] = [];
      for (let colIndex = 0; colIndex < this.cols; colIndex++) {
        this.field[rowIndex][colIndex] = {
          isMine: false,
          isRevealed: false,
          isFlagged: false,
          numberOfMinesAround: 0,
          row: rowIndex,
          col: colIndex,
        };
      }
    }
  }

  _onFirstClick(cell) {
    // update game state
    if (this.gameState === "INITIALIZING") {
      this.gameState = "PLAYING";
      // place mines
      this._placeMines(cell);
    }
  }

  _placeMines(startCell) {
    const possibleCells = this.field
      .flat()
      .filter((cell) => cell !== startCell);

    for (let i = 0; i < this.numberOfMines; i++) {
      const randomIndex = Math.floor(Math.random() * possibleCells.length);
      const cell = possibleCells[randomIndex];
      cell.isMine = true;

      this._getCellsAround(cell.row, cell.col).forEach(
        (cellAround) => cellAround.numberOfMinesAround++
      );

      possibleCells.splice(randomIndex, 1);
    }
  }

  _getCellByIndex(index) {
    const row = Math.floor(index / this.cols);
    const col = index % this.cols;
    return this.field[row][col];
  }

  _getCellsAround(row, col, pattern = "8") {
    const positionsAround = [
      pattern === "8" && [row - 1, col - 1],
      [row - 1, col],
      pattern === "8" && [row - 1, col + 1],
      [row, col - 1],
      [row, col + 1],
      pattern === "8" && [row + 1, col - 1],
      [row + 1, col],
      pattern === "8" && [row + 1, col + 1],
    ]
      .filter((n) => n)
      .filter(
        ([rowAround, colAround]) =>
          rowAround >= 0 &&
          colAround >= 0 &&
          rowAround < this.rows &&
          colAround < this.cols
      );

    return positionsAround.map(
      ([rowAround, colAround]) => this.field[rowAround][colAround]
    );
  }

  _getFlaggedCells() {
    return this.field.flat().filter((cell) => cell.isFlagged);
  }

  _getRevealedCells() {
    return this.field.flat().filter((cell) => cell.isRevealed);
  }

  _getUnrevealedCells() {
    return this.field.flat().filter((cell) => !cell.isRevealed);
  }

  _getMines() {
    return this.field.flat().filter((cell) => cell.isMine);
  }

  _allMinesFlagged() {
    return (
      this._getMines().every((cell) => cell.isFlagged) &&
      this._getMines().length === this.numberOfMines
    );
  }

  _reveal(cell) {
    cell.isRevealed = true;

    this._getCellsAround(cell.row, cell.col, "4").forEach((cellAround) => {
      if (
        cellAround.numberOfMinesAround === 0 &&
        !cellAround.isRevealed &&
        !cellAround.isFlagged
      ) {
        this._reveal(cellAround);
      }
    });
  }

  _won() {
    this.gameState = "WON";
  }

  _gameOver() {
    this.gameState = "LOST";
  }

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
    cell.isFlagged = false;

    if (cell.isMine) this._gameOver();
    else if (cell.numberOfMinesAround === 0) this._reveal(cell);
  }

  flagCell(index) {
    const cell = this._getCellByIndex(index);
    if (
      this.gameState === "LOST" ||
      this.gameState === "WON" ||
      cell.isRevealed
    )
      return;

    // flag cell
    cell.isFlagged = !cell.isFlagged;

    // check if game is won
    if (this._allMinesFlagged()) this._won();
  }
}

export default Game;
