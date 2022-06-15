import { TicTacToe } from './app'

describe('TicTacToe', () => {
  test('Should construct ok', () => {
    const makeGame = new TicTacToe([[0, 0, 0], [1, 1, 1], [0, 0, 0]])
    expect(makeGame).toBeTruthy()
  })

  test('Should throw error if invalid constructor', () => {
    expect(() => new TicTacToe([])).toThrowError('Invalid Board')
    expect(() => new TicTacToe([[], [], []])).toThrowError('Invalid Board')
    expect(() => new TicTacToe([[1], [2], [3]])).toThrowError('Invalid Board')
  })
})
