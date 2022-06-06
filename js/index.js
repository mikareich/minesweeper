import difficulties from "./difficulties.js";
import Minesweeper from "./Minesweeper.js";
import Renderer from "./Renderer.js";

const { rows, cols, mines } = difficulties.easyDifficulty;

const game = new Minesweeper(rows, cols, mines);

const gameContainer = document.getElementById("gameContainer");
const numberOfMinesSPAN = document.getElementById("numberOfMines");
const flagsSPAN = document.getElementById("flags");

const renderer = new Renderer(
  game,
  gameContainer,
  numberOfMinesSPAN,
  flagsSPAN
);
renderer.render();

renderer.cellsHTML.forEach((cell, index) => {
  cell.addEventListener("click", () => {
    // reveal cell and render the game
    game.revealCell(index);
    renderer.render();
  });

  cell.addEventListener("contextmenu", (e) => {
    // prevent context menu from opening
    e.preventDefault();

    // flag cell and render the game
    game.flagCell(index);
    renderer.render();
  });
});
