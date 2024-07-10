
import Game from "./game.js";

// Execution

const args = process.argv.slice(2);

if (args.includes("help")) {
    Game.showHelp(args.filter((arg) => arg !== "help"));
    const game = new Game(args.filter((arg) => arg !== "help"));
    game.start();
} else if (
    args < 3 ||
    args.length % 2 === 0 ||
    new Set(args).size !== args.length
) {
    console.log(
        "Invalid arguments. Please provide an odd number (>= 3) of non-repeating moves."
    );
    console.log("Example: node index.js rock paper scissors");
} else {
    const game = new Game(args);
    game.start();
}
