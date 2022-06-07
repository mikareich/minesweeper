import {
  defaultDifficulty,
  Difficulty,
  getDifficultyByLevel,
} from './difficulties'

/**
 * It returns the difficulty level of the game, which is either the difficulty level specified in the
 * URL, or the default difficulty level
 * @returns The difficulty object is being returned.
 */
function getDifficulty() {
  const searchParams = new URLSearchParams(window.location.search)
  const level = searchParams.get('difficulty')

  const numberOfRows = Number(searchParams.get('numberOfRows'))
  const numberOfCols = Number(searchParams.get('numberOfCols'))
  const numberOfMines = Number(searchParams.get('numberOfMines'))

  const difficulty = <Difficulty>(
    getDifficultyByLevel(level || defaultDifficulty.level)
  )

  difficulty.numberOfCols = numberOfCols || difficulty.numberOfCols
  difficulty.numberOfRows = numberOfRows || difficulty.numberOfRows
  difficulty.numberOfMines = numberOfMines || difficulty.numberOfMines

  if (numberOfRows || numberOfCols || numberOfMines) difficulty.level = 'custom'

  return difficulty
}

export default getDifficulty
