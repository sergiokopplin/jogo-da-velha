type Board = Number[][]

export class TicTacToe {
  private readonly board: Board;
  private readonly rows: Number;
  private readonly columns: Number;
  private readonly validValues: Number[]

  constructor (board: Board) {
    this.board = board
    this.columns = 3
    this.rows = 3
    this.validValues = [0, 1, 2]

    if (!this.isValidBoard()) {
      throw new Error('Invalid Board')
    }
  }

  private isValidBoard (): Boolean {
    if (this.board.length !== this.columns) {
      return false
    }

    const hasError = this.board.some(column => {
      const hasNotEnoughItems = column.length !== this.rows
      if (hasNotEnoughItems) return true

      const hasDifferentNumbers = column.some(item => !this.validValues.includes(item))
      if (hasDifferentNumbers) return true
    })

    return !hasError
  }

  // Status: empty | running | tie | winner
  // Winner: null | 1 | 2

  // getStatus(board): status
  // getWinner(board): Winner
}
