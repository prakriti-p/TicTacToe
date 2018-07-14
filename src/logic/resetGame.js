
/**
 * Given the state of the game, return if game is over, if yes, also return the winner.
 * 
 * Game state object contains:
 *   total:String      the running total
 *   next:String       the next number to be operated on with the total
 *   operation:String  +, -, etc.
 */
export default function isGameOver() {  
    
    var resetGameObject = {
        gameState: {
            1: { value: "", owner: "" },
            2: { value: "", owner: "" },
            3: { value: "", owner: "" },
            4: { value: "", owner: "" },
            5: { value: "", owner: "" },
            6: { value: "", owner: "" },
            7: { value: "", owner: "" },
            8: { value: "", owner: "" },
            9: { value: "", owner: "" } 
        },
        gameStatus: {
            gameOver: false,
            winner: "Let's Play!!",
            winningSet: {
                element: "",
                index: null
            }
        }
    };

    return resetGameObject;
}
