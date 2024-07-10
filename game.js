import  readlineSync  from "readline-sync";
import  GameRules  from "./gamerules.js";
import  KeyGenerator  from "./keygenerator.js";
import  HMACGenerator  from "./hmacgenerator.js";
import TableGenerator from "./tablegenerator.js";


class Game {
    constructor(moves) {
        this.moves = moves;
        this.rules = new GameRules(moves);
        this.key = KeyGenerator.generateKey();
        this.computerMove = this.moves[Math.floor(Math.random() * moves.length)];
        this.HMAC = HMACGenerator.generateHmac(this.key, this.computerMove);
    }

    start() {
        console.log("Moves:" + this.moves.join(" "));
        console.log("HMAC:" + this.HMAC);

        let playerMove;

        do {
            console.log("Make your move:");
            this.moves.forEach((move, Index) => {
                console.log(Index + 1 + " - " + move);
            });
            console.log("0 - Exit");
            console.log("? - Help");

            const choice = readlineSync.question("Enter Your move: ");

            if (choice === "0") {
                console.log("Game Exited");
                return;
            }
            if (choice === "?") {
                Game.showHelp(this.moves);
                continue; 
            }
            const playerMoveNum = parseInt(choice) - 1;
            if (playerMoveNum >= 0 && playerMoveNum < this.moves.length) {
                playerMove = this.moves[playerMoveNum];
                break;
            } else {
                console.log("Please Enter a Valid Input");
            }
        } while (true);
        const result = this.rules.winnerAssessor(playerMove, this.computerMove);

        console.log("Your Move : " + playerMove);
        console.log("Computer Move : " + this.computerMove);
        console.log("Result : " + result);
        console.log("HMAC Key : " + this.key);
    }

    static showHelp(moves) {
        const Table = new TableGenerator(moves);
        console.log(Table.generateHelpTable());
    }
}

export default Game; 