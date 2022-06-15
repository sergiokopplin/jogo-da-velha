type Board = Number[][]

export class TicTacToe {
  private readonly board: Board;
  private readonly rows: Number;
  private readonly columns: Number;

  constructor (board: Board) {
    this.board = board
    this.columns = 3
    this.rows = 3

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

      const hasDifferentNumbers = column.some(item => item !== 1 && item !== 0)
      if (hasDifferentNumbers) return true
    })

    return !hasError
  }
}
