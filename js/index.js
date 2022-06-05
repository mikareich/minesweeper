import Game from "./Game.js";
import Renderer from "./Renderer.js";

const COLS = 9;
const ROWS = 9;
const MINES = 5;

const game = new Game(COLS, ROWS, MINES);
const gameContainer = document.querySelector(".game-container");
const renderer = new Renderer(gameContainer);
renderer.render(game);

console.log([true === false && "a"]);

renderer.cells.forEach((cell, index) => {
  cell.addEventListener("click", () => {
    game.revealCell(index);
    renderer.render(game);
  });

  cell.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    game.flagCell(index);
    renderer.render(game);
  });
});
