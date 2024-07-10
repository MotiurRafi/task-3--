

class  GameRules {
    constructor(moves) {
        this.moves = moves;
        this.numMoves = moves.length;
    }

    winnerAssessor(playerMove, computerMove) {
        const playerIndex = this.moves.indexOf(playerMove);
        const computerIndex = this.moves.indexOf(computerMove);
        if (playerIndex === computerIndex) {
            return "Draw";
        }

        if (
            (playerIndex > computerIndex &&
                computerIndex >= playerIndex - Math.floor(this.numMoves / 2)) ||
            (playerIndex < computerIndex &&
                computerIndex >= (playerIndex + this.numMoves) - Math.floor(this.numMoves / 2))
        ) {
            return "You Win";
        } else {
            return "Computer Wins";
        }
        
    }
     
}

export default GameRules; 