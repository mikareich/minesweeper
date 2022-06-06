/* It renders the game based on the current game state */
class Renderer {
  /**
   * Initialize the renderer.
   * @param gameContainer - This is the HTML element that will contain the game.
   */
  constructor(game, gameContainer, numberOfMinesElement, flagsElement) {
    this.game = game;
    this.gameContainer = gameContainer;
    this.numberOfMinesElement = numberOfMinesElement;
    this.flagsElement = flagsElement;
    this.cellsHTML = [];

    this.mousePosition = {
      x: 0,
      y: 0,
    };

    window.addEventListener("mousemove", (e) => {
      this.mousePosition.x = e.clientX;
      this.mousePosition.y = e.clientY;
    });
  }

  /**
   * Renders the game based on the current game state.
   * @param game - The game object.
   */
  render() {
    this.numberOfMinesElement.innerHTML = this.game.numberOfMines;
    this.flagsElement.innerHTML = this.game._getFlaggedCells().length;

    switch (this.game.gameState) {
      case "INITIALIZING":
        if (this.cellsHTML.length === 0) this.renderInitializing();
        break;

      case "PLAYING":
        this.renderPlaying();
        break;

      case "LOST":
        this.renderLost();
        break;

      case "WON":
        this.renderWon();
        break;
    }
  }

  /**
   * Reveals all cells of the game and removes the flags.
   */
  revealAll() {
    this.game._getAllCells().forEach((cell) => {
      const cellHTML = this.cellsHTML[cell.index];

      cellHTML.classList.add("revealed");
      cellHTML.classList.remove("flagged");

      cellHTML.innerHTML = cell.numberOfMinesAround;
      if (cell.isMine) cellHTML.innerHTML = "💣";
    });
  }

  revealMines() {
    this.game._getMines().forEach((cell) => {
      const cellHTML = this.cellsHTML[cell.index];
      cellHTML.classList.add("revealed");
      cellHTML.classList.remove("flagged");

      cellHTML.innerHTML = "💣";
    });
  }

  /**
   * Generates the cells and adds them to the gameContainer.
   */
  renderInitializing() {
    this.gameContainer.style.setProperty("--cols", this.game.cols);
    this.gameContainer.style.setProperty("--rows", this.game.rows);

    this.game.field.flat().forEach((cell, index) => {
      const cellHTML = document.createElement("div");

      cellHTML.classList.add("cell");
      cellHTML.classList.toggle("mine", cell.isMine);

      this.gameContainer.appendChild(cellHTML);
      this.cellsHTML.push(cellHTML);
    });
  }

  /**
   * Renders all cells based on their properties.
   */
  renderPlaying() {
    this.game._getAllCells().forEach((cell) => {
      const cellHTML = this.cellsHTML[cell.index];

      if (cell.isRevealed) cellHTML.innerHTML = cell.numberOfMinesAround;
      else if (cell.isFlagged) cellHTML.innerHTML = "🚩";

      cellHTML.classList.toggle("revealed", cell.isRevealed);
      cellHTML.classList.toggle("flagged", cell.isFlagged);
    });
  }

  renderWon() {
    this.revealAll();
    var canvas = document.createElement("canvas");
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight;
    canvas.className = "confetti-canvas";
    document.body.appendChild(canvas);

    var myConfetti = confetti.create(canvas, {
      resize: true,
      useWorker: true,
    });

    myConfetti({
      origin: {
        x: this.mousePosition.x / document.body.clientWidth,
        y: this.mousePosition.y / document.body.clientHeight,
      },
    }).then(canvas.remove);
  }

  renderLost() {
    this.revealMines();
  }
}

export default Renderer;
