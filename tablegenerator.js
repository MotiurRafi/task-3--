import AsciiTable from "ascii-table"
class TableGenerator {
    constructor(moves) {
        this.moves = moves;
        this.numMoves = moves.length;
    }
    generateHelpTable() {
        console.log("***Players moves are on the coloumn and computers are on the rows***")
        const table = new AsciiTable('Game Rules - Players View');
        table.setHeading('PC/User', ...this.moves);

        for (let i = 0; i < this.numMoves; i++) {
            const row = [this.moves[i]];
            for (let j = 0; j < this.numMoves; j++) {
                if (i === j) {
                    row.push('Draw');
                } else if ((i > j && j >= i - Math.floor(this.numMoves / 2)) ||
                    (i < j && j >= (i + this.numMoves) - Math.floor(this.numMoves / 2))) {
                    row.push('Win');
                } else {
                    row.push('Lose');
                }
            }
            table.addRow(...row);
        }

        return table.toString();
    }
}
export default TableGenerator