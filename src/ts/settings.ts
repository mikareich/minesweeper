import '../scss/base.scss'
import {
  allDifficulties,
  defaultDifficulty,
  Difficulty,
  getDifficultyByLevel,
} from './difficulties'

const difficultyLevelSELECT = <HTMLSelectElement>(
  document.getElementById('difficultyLevel')
)
const numberOfRowsINPUT = <HTMLInputElement>(
  document.getElementById('numberOfRows')
)
const numberOfColsINPUT = <HTMLInputElement>(
  document.getElementById('numberOfCols')
)
const numberOfMinesINPUT = <HTMLInputElement>(
  document.getElementById('numberOfMines')
)
const createGameFORM = <HTMLFormElement>document.getElementById('createGame')

const difficulty: Difficulty = { ...defaultDifficulty } // remove shadow copy (i hate it :/)

/**
 * It updates the values of the inputs to match the values of the difficulty object
 */
const udpateInputs = () => {
  numberOfRowsINPUT.value = difficulty.numberOfRows.toString()
  numberOfColsINPUT.value = difficulty.numberOfCols.toString()
  numberOfMinesINPUT.value = difficulty.numberOfMines.toString()
}

udpateInputs()
difficultyLevelSELECT.value = difficulty.level

/**
 * It returns the level of the difficulty that matches the current difficulty
 * @returns The level of the difficulty.
 */
const getMatchingLevel = (): Difficulty['level'] => {
  const { level } = allDifficulties.find(
    // find the difficulty that matches the current difficulty
    ({ numberOfRows, numberOfCols, numberOfMines }) =>
      numberOfRows === difficulty.numberOfRows &&
      numberOfCols === difficulty.numberOfCols &&
      numberOfMines === difficulty.numberOfMines
    // if there is no match, return custom difficulty level
  ) || { level: 'custom' }

  return level
}

/**
 * It updates the difficulty object with the values from the input fields
 */
const inputChanged = () => {
  // update difficulty
  const numberOfRows = Number(numberOfRowsINPUT.value)
  const numberOfCols = Number(numberOfColsINPUT.value)
  const numberOfMines = Number(numberOfMinesINPUT.value)

  difficulty.numberOfCols = numberOfCols
  difficulty.numberOfRows = numberOfRows
  difficulty.numberOfMines = numberOfMines

  // update difficulty level
  const level = getMatchingLevel()
  difficulty.level = level
  difficultyLevelSELECT.value = level
}

/**
 * It updates the difficulty level and the inputs
 */
const selectChanged = () => {
  difficulty.level = difficultyLevelSELECT.value as Difficulty['level']

  // update difficulty
  const dedicatedDifficulty = getDifficultyByLevel(difficulty.level)

  if (dedicatedDifficulty) {
    difficulty.numberOfCols = dedicatedDifficulty.numberOfCols
    difficulty.numberOfRows = dedicatedDifficulty.numberOfRows
    difficulty.numberOfMines = dedicatedDifficulty.numberOfMines
  }

  udpateInputs()
}

difficultyLevelSELECT.addEventListener('change', selectChanged)
numberOfRowsINPUT.addEventListener('change', inputChanged)
numberOfColsINPUT.addEventListener('change', inputChanged)
numberOfMinesINPUT.addEventListener('change', inputChanged)

createGameFORM.addEventListener('submit', (event) => {
  event.preventDefault()

  const url = new URL(window.location.href)
  url.pathname = '/' // reset pathname to '/'

  // set search params
  url.searchParams.set('difficulty', difficulty.level)
  if (difficulty.level === 'custom') {
    url.searchParams.set('numberOfRows', difficulty.numberOfRows.toString())
    url.searchParams.set('numberOfCols', difficulty.numberOfCols.toString())
    url.searchParams.set('numberOfMines', difficulty.numberOfMines.toString())
  }

  // redirect to new url
  window.location.href = url.href
})
