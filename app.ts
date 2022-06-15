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
      if (column.length !== this.rows) {
        return true
      }
    })

    return !hasError
  }
}
