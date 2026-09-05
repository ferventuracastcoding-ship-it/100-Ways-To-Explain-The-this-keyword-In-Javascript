class Sudoku {

    constructor() {

        this.board = [
            [5, 3, 0, 0, 7, 0, 0, 0, 0],
            [6, 0, 0, 1, 9, 5, 0, 0, 0],
            [0, 9, 8, 0, 0, 0, 0, 6, 0],

            [8, 0, 0, 0, 6, 0, 0, 0, 3],
            [4, 0, 0, 8, 0, 3, 0, 0, 1],
            [7, 0, 0, 0, 2, 0, 0, 0, 6],

            [0, 6, 0, 0, 0, 0, 2, 8, 0],
            [0, 0, 0, 4, 1, 9, 0, 0, 5],
            [0, 0, 0, 0, 8, 0, 0, 7, 9]
        ];

        this.size = 9;
        this.moves = 0;
    }


    // ==========================================
    // THIS + BOARD
    // ==========================================

    printBoard() {

        this.board.forEach(row => {
            console.log(row.join(" "));
        });

    }


    // ==========================================
    // THIS + CELL
    // ==========================================

    getCell(row, col) {

        return this.board[row][col];

    }


    // ==========================================
    // THIS + SET CELL
    // ==========================================

    setCell(row, col, value) {

        this.board[row][col] = value;
        this.moves++;

    }


    // ==========================================
    // CHECK ROW
    // ==========================================

    isValidRow(row, number) {

        return !this.board[row].includes(number);

    }


    // ==========================================
    // CHECK COLUMN
    // ==========================================

    isValidColumn(col, number) {

        for (let row = 0; row < this.size; row++) {

            if (this.board[row][col] === number) {
                return false;
            }

        }

        return true;
    }


    // ==========================================
    // CHECK 3x3 BOX
    // ==========================================

    isValidBox(row, col, number) {

        const startRow =
            Math.floor(row / 3) * 3;

        const startCol =
            Math.floor(col / 3) * 3;

        for (let r = startRow; r < startRow + 3; r++) {

            for (let c = startCol; c < startCol + 3; c++) {

                if (this.board[r][c] === number) {
                    return false;
                }

            }
        }

        return true;
    }


    // ==========================================
    // USE ALL THREE CHECKS
    // ==========================================

    isValidMove(row, col, number) {

        return (
            this.isValidRow(row, number) &&
            this.isValidColumn(col, number) &&
            this.isValidBox(row, col, number)
        );

    }


    // ==========================================
    // FIND EMPTY CELL
    // ==========================================

    findEmptyCell() {

        for (let row = 0; row < this.size; row++) {

            for (let col = 0; col < this.size; col++) {

                if (this.board[row][col] === 0) {

                    return {
                        row,
                        col
                    };

                }
            }
        }

        return null;
    }


    // ==========================================
    // SOLVE SUDOKU
    // ==========================================

    solve() {

        const empty =
            this.findEmptyCell();

        if (!empty) {
            return true;
        }

        const { row, col } = empty;

        for (let number = 1; number <= 9; number++) {

            if (
                this.isValidMove(
                    row,
                    col,
                    number
                )
            ) {

                this.setCell(
                    row,
                    col,
                    number
                );

                if (this.solve()) {
                    return true;
                }

                // BACKTRACK
                this.board[row][col] = 0;
            }
        }

        return false;
    }
}


// ==========================================
// CREATE SUDOKU OBJECT
// ==========================================

const game = new Sudoku();


// ==========================================
// THIS REFERS TO "game"
// ==========================================

game.printBoard();


// ==========================================
// SOLVE
// ==========================================

console.log("Solving...");

game.solve();


// ==========================================
// PRINT SOLVED BOARD
// ==========================================

console.log("Solved:");

game.printBoard();

console.log(
    "Moves:",
    game.moves
);
