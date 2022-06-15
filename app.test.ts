import { TicTacToe } from './app'

describe('TicTacToe', () => {
  test('Should construct ok', () => {
    const makeGame = new TicTacToe([0, 1, 0, 2, 0, 2, 1, 2, 1])
    expect(makeGame).toBeTruthy()
  })

  test.only('Should return Winner properly', () => {
    const games = {
      rows: [
        [1, 1, 1, 2, 2, 0, 0, 0, 0],
        [2, 2, 0, 1, 1, 1, 0, 0, 0],
        [2, 2, 0, 0, 0, 0, 1, 1, 1]
      ],
      columns: [
        [1, 2, 0, 1, 2, 0, 1, 0, 0],
        [2, 1, 0, 2, 1, 0, 0, 1, 0],
        [0, 0, 1, 0, 2, 1, 0, 2, 1]
      ],
      diagonals: [
        [1, 2, 0, 2, 1, 0, 2, 0, 1],
        [2, 0, 1, 2, 1, 0, 1, 2, 0]
      ]
    }

    games.rows.forEach(game => {
      expect(new TicTacToe(game).getWinner()).toBe(1)
    })
    games.columns.forEach(game => {
      expect(new TicTacToe(game).getWinner()).toBe(1)
    })
    games.diagonals.forEach(game => {
      expect(new TicTacToe(game).getWinner()).toBe(1)
    })
  })

  test('Should throw error when Empty arrays passed', () => {
    expect(() => new TicTacToe([])).toThrowError('Invalid Board')
  })

  test('Should throw error when Not Enough Numbers passed', () => {
    expect(() => new TicTacToe([1, 2, 3])).toThrowError('Invalid Board')
  })

  test('Should throw error when Not Valid Numbers passed', () => {
    expect(() => new TicTacToe([5, 5, 5, 3, 3, 3, 4, 4, 4])).toThrowError('Invalid Board')
  })

  test('Should throw error when Only Zeros passed', () => {
    expect(() => new TicTacToe([0, 0, 0, 0, 0, 0, 0, 0, 0])).toThrowError('Invalid Board')
  })

  test('Should throw error when Invalid Moves passed', () => {
    expect(() => new TicTacToe([1, 1, 0, 0, 0, 0, 0, 0, 0])).toThrowError('Invalid Board')
    expect(() => new TicTacToe([1, 1, 1, 2, 0, 0, 0, 0, 0])).toThrowError('Invalid Board')
    expect(() => new TicTacToe([1, 1, 1, 2, 2, 2, 1, 1, 1])).toThrowError('Invalid Board')
  })
})
