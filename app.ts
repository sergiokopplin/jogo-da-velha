type Board = number[]

export class TicTacToe {
  private readonly board: Board
  private readonly validValues: number[]

  constructor (board: Board) {
    this.board = board
    this.validValues = [0, 1, 2]

    if (!this.isValidBoard()) {
      throw new Error('Invalid Board')
    }
  }

  private hasEnoughItems (): boolean {
    return this.board.length === 9
  }

  private hasOnlyAllowedItems (): boolean {
    return this.board.some(item => this.validValues.includes(item))
  }

  private hasNotOnlyZeros (): boolean {
    return this.board.some(item => [1, 2].includes(item))
  }

  private hasOnlyValidMoves (): boolean {
    let countFirstPlayer = 0
    let countSecondPlayer = 0

    this.board.forEach(item => {
      if (item === 1) {
        countFirstPlayer++
      } else if (item === 2) {
        countSecondPlayer++
      }
    })

    return Math.abs(countFirstPlayer - countSecondPlayer) <= 1
  }

  private isValidBoard (): boolean {
    const validations = [
      this.hasEnoughItems(),
      this.hasOnlyAllowedItems(),
      this.hasNotOnlyZeros(),
      this.hasOnlyValidMoves()
    ]

    return validations.filter(item => item === true).length === validations.length
  }

  private calculateWinner (p1: number, p2: number, p3: number): number | null {
    if (this.board[p1] === 0 || this.board[p2] === 0 || this.board[p3] === 0) {
      return null
    }

    const winner = this.board[p1] === this.board[p2] && this.board[p2] === this.board[p3]

    if (winner) {
      return this.board[p1]
    }

    return null
  }

  public getWinner (): number | null {
    const winner =
      // rows
      this.calculateWinner(0, 1, 2) ||
      this.calculateWinner(3, 4, 5) ||
      this.calculateWinner(6, 7, 8) ||
      // columns
      this.calculateWinner(0, 3, 6) ||
      this.calculateWinner(1, 4, 7) ||
      this.calculateWinner(2, 5, 8) ||
      // diagonals
      this.calculateWinner(0, 4, 8) ||
      this.calculateWinner(2, 4, 6)

    return winner
  }
}
