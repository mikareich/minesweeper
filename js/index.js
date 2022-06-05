import Game from "./Game.js";
import Renderer from "./Renderer.js";

const COLS = 9;
const ROWS = 9;
const MINES = 5;

const game = new Game(COLS, ROWS, MINES);
const gameContainer = document.getElementById("gameContainer");
const renderer = new Renderer(gameContainer);
renderer.render(game);

renderer.cells.forEach((cell, index) => {
  cell.addEventListener("click", () => {
    // reveal cell and render the game
    game.revealCell(index);
    renderer.render(game);
  });

  cell.addEventListener("contextmenu", (e) => {
    // prevent context menu from opening
    e.preventDefault();

    // flag cell and render the game
    game.flagCell(index);
    renderer.render(game);
  });
});
