type Board = number[][]

export class TicTacToe {
  private readonly board: Board
  private readonly dimensions: number
  private readonly validValues: number[]

  constructor (board: Board) {
    this.board = board
    this.dimensions = 3
    this.validValues = [0, 1, 2]

    if (!this.isValidBoard()) {
      throw new Error('Invalid Board')
    }
  }

  private hasEnoughItems (): boolean {
    return this.board.some(column => column.length === this.dimensions)
  }

  private hasOnlyAllowedItems (): boolean {
    return this.board.some(column => column.some(item => this.validValues.includes(item)))
  }

  private hasNotOnlyZeros (): boolean {
    return this.board.some(column => column.some(item => [1, 2].includes(item)))
  }

  private hasOnlyValidMoves (): boolean {
    let countFirstPlayer = 0
    let countSecondPlayer = 0

    this.board.forEach(column => {
      column.forEach(item => {
        if (item === 1) {
          countFirstPlayer++
        } else if (item === 2) {
          countSecondPlayer++
        }
      })
    })

    return Math.abs(countFirstPlayer - countSecondPlayer) <= 1
  }

  private isValidBoard (): boolean {
    const validations = [this.hasEnoughItems(), this.hasOnlyAllowedItems(), this.hasNotOnlyZeros(), this.hasOnlyValidMoves()]

    return validations.filter(item => item === true).length === validations.length
  }

  // Status: running | tie | winner
  // Winner: null | 1 | 2

  // getStatus(board): status
  // getWinner(board): Winner
}
