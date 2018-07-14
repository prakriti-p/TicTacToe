
/**
 * Given the state of the game, return if game is over, if yes, also return the winner.
 * 
 * Game state object contains:
 *   value:String      the current value of the slot
 *   owner:String      owner can either be 'User' or 'PC'
 */
export default function isGameOver(_stateObject) {   
    // Checking for Rows for X or O victory.
    if(_stateObject[1].value === _stateObject[2].value && _stateObject[2].value === _stateObject[3].value && _stateObject[3].value !== "") { 
        return {
            gameOver: true,
            winner: _stateObject[1].owner + " wins!!!"
        } 
    } else if(_stateObject[4].value === _stateObject[5].value && _stateObject[5].value === _stateObject[6].value && _stateObject[6].value !== "") {
        return {
            gameOver: true,
            winner: _stateObject[4].owner + " wins!!!"
        } 
    } else if(_stateObject[7].value === _stateObject[8].value && _stateObject[8].value === _stateObject[9].value && _stateObject[9].value !== "") {
        return {
            gameOver: true,
            winner: _stateObject[7].owner + " wins!!!"
        } 
    }

    // Checking for Columns for X or O victory.
    if(_stateObject[1].value === _stateObject[4].value && _stateObject[4].value === _stateObject[7].value && _stateObject[7].value !== "") {
        return {
            gameOver: true,
            winner: _stateObject[1].owner + " wins!!!"
        } 
    } else if(_stateObject[2].value === _stateObject[5].value && _stateObject[5].value === _stateObject[8].value && _stateObject[8].value !== "") {
        return {
            gameOver: true,
            winner: _stateObject[2].owner + " wins!!!"
        } 
    } else if(_stateObject[3].value === _stateObject[6].value && _stateObject[6].value === _stateObject[9].value && _stateObject[9].value !== "") {
        return {
            gameOver: true,
            winner: _stateObject[3].owner + " wins!!!"
        } 
    }

    // Checking for Diagonals for X or O victory.
    if(_stateObject[1].value === _stateObject[5].value && _stateObject[5].value === _stateObject[9].value && _stateObject[9].value !== "") {
        return {
            gameOver: true,
            winner: _stateObject[1].owner + " wins!!!"
        } 
    } else if(_stateObject[3].value === _stateObject[5].value && _stateObject[5].value === _stateObject[7].value && _stateObject[7].value !== "") {
        return {
            gameOver: true,
            winner: _stateObject[3].owner + " wins!!!"
        } 
    }

    return {
        gameOver: false,
        winner: "Let's Play!!"
    }
}
