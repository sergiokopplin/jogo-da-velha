import { TicTacToe } from './app'

describe('TicTacToe', () => {
  test('Should construct ok', () => {
    const makeGame = new TicTacToe([[0, 1, 0], [2, 0, 2], [1, 2, 1]])
    expect(makeGame).toBeTruthy()
  })

  test('Should throw error if invalid constructor', () => {
    expect(() => new TicTacToe([])).toThrowError('Invalid Board')
    expect(() => new TicTacToe([[], [], []])).toThrowError('Invalid Board')
    expect(() => new TicTacToe([[1], [2], [3]])).toThrowError('Invalid Board')
    expect(() => new TicTacToe([[5, 5, 5], [3, 3, 3], [4, 4, 4]])).toThrowError('Invalid Board')
  })
})
