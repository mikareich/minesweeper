export interface Difficulty {
  /** Level of the difficulty */
  level: 'easy' | 'medium' | 'hard' | 'custom'
  /** Number of rows that make up the field */
  numberOfRows: number
  /** Number of cols that make up the field. */
  numberOfCols: number
  /** Number of mines hidden in the field */
  numberOfMines: number
}

export const easyDifficulty: Difficulty = {
  numberOfRows: 9,
  numberOfCols: 9,
  numberOfMines: 10,
  level: 'easy',
}

export const mediumDifficulty: Difficulty = {
  numberOfRows: 16,
  numberOfCols: 16,
  numberOfMines: 40,
  level: 'medium',
}

export const hardDifficulty: Difficulty = {
  numberOfRows: 16,
  numberOfCols: 16,
  numberOfMines: 99,
  level: 'hard',
}

export const allDifficulties: Difficulty[] = [
  easyDifficulty,
  mediumDifficulty,
  hardDifficulty,
]

export const getDifficultyByLevel = (level: string): Difficulty | undefined => {
  return allDifficulties.find((difficulty) => difficulty.level === level)
}

export default {
  easyDifficulty,
  mediumDifficulty,
  hardDifficulty,
}
