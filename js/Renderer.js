/* It renders the game based on the current game state */
class Renderer {
  /**
   * Initialize the renderer.
   * @param gameContainer - This is the HTML element that will contain the game.
   */
  constructor(gameContainer) {
    this.gameContainer = gameContainer;
    this.cells = [];
    this._fieldCreated = false;
  }

  /**
   * Renders the game based on the current game state.
   * @param game - The game object.
   */
  render(game) {
    switch (game.gameState) {
      case "INITIALIZING":
        if (!this._fieldCreated) this.createField(game);
        this.renderPlaying(game);
        break;

      case "PLAYING":
        this.renderPlaying(game);
        break;

      case "LOST":
        this.revealAll();
        break;

      case "WON":
        this.revealAll();
        break;
    }
  }

  /**
   * Generates the cells and adds them to the gameContainer.
   * @param game - the game object
   */
  createField(game) {
    this.gameContainer.style.setProperty("--cols", game.cols);
    this.gameContainer.style.setProperty("--rows", game.rows);

    game.field.flat().forEach((field, index) => {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      this.gameContainer.appendChild(cell);
      this.cells.push(cell);
    });

    this._fieldCreated = true;
  }

  /**
   * Renders all cells based on their properties.
   * @param game - the current game state
   */
  renderPlaying(game) {
    this.cells.forEach((cell, index) => {
      const row = Math.floor(index / game.cols);
      const col = index % game.cols;
      console.log(game.field[row][col]);

      const { isRevealed, isFlagged, isMine, numberOfMinesAround } =
        game.field[row][col];
      cell.innerHTML = isMine ? "💣" : numberOfMinesAround;

      cell.classList.toggle("revealed", isRevealed);
      cell.classList.toggle("flagged", isFlagged);
      cell.classList.toggle("mine", isMine);
    });
  }

  /**
   * Reveals all cells of the game and removes the flags.
   */
  revealAll() {
    this.cells.forEach((cell) => {
      cell.classList.add("revealed");
      cell.classList.remove("flagged");
    });
  }
}

export default Renderer;
