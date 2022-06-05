class Renderer {
  constructor(gameContainer) {
    this.gameContainer = gameContainer;
    this.cells = [];
  }

  render(game) {
    switch (game.gameState) {
      case "INITIALIZING":
        this.renderInitializing(game);
        break;
      case "PLAYING":
        this.renderPlaying(game);
        break;
      case "LOST":
        this.renderLost(game);
        break;
      case "WON":
        this.renderWon(game);
        break;
    }
  }

  renderInitializing(game) {
    this.gameContainer.style.setProperty("--cols", game.cols);
    this.gameContainer.style.setProperty("--rows", game.rows);

    game.field.flat().forEach((field, index) => {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      this.gameContainer.appendChild(cell);
      this.cells.push(cell);
    });

    this.renderPlaying(game);
  }

  renderPlaying(game) {
    this.cells.forEach((cell, index) => {
      const row = Math.floor(index / game.cols);
      const col = index % game.cols;
      const { isRevealed, isFlagged, isMine, numberOfMinesAround } =
        game.field[row][col];
      cell.innerHTML = isMine ? "💣" : numberOfMinesAround;

      cell.classList.toggle("revealed", isRevealed);
      cell.classList.toggle("flagged", isFlagged);
      cell.classList.toggle("mine", isMine);
    });
  }

  renderLost(game) {
    this.cells.forEach((cell) => {
      cell.classList.add("revealed");
      cell.classList.remove("flagged");
    });
  }

  renderWon(game) {
    this.cells.forEach((cell) => {
      cell.classList.add("revealed");
      cell.classList.remove("flagged");
    });
  }
}

export default Renderer;
