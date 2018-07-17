export default function isGameOver(_stateObject) {   
    var returningValue = {};
    returningValue["gameOver"] = false;

    // Checking for Rows for X or O victory.
    if(returningValue.gameOver === false) returningValue = checkTriplets(_stateObject, 1, 2, 3);
    if(returningValue.gameOver === false) returningValue = checkTriplets(_stateObject, 4, 5, 6);
    if(returningValue.gameOver === false) returningValue = checkTriplets(_stateObject, 7, 8, 9);

    // Checking for Columns for X or O victory.
    if(returningValue.gameOver === false) returningValue = checkTriplets(_stateObject, 1, 4, 7);
    if(returningValue.gameOver === false) returningValue = checkTriplets(_stateObject, 2, 5, 8);
    if(returningValue.gameOver === false) returningValue = checkTriplets(_stateObject, 3, 6, 9);

    // Checking for Diagonals for X or O victory.
    if(returningValue.gameOver === false) returningValue = checkTriplets(_stateObject, 1, 5, 9);
    if(returningValue.gameOver === false) returningValue = checkTriplets(_stateObject, 3, 5, 7);

    return returningValue;
}

function checkTriplets(_stateObject, s1, s2, s3) {
    if(_stateObject[s1].value === _stateObject[s2].value && _stateObject[s2].value === _stateObject[s3].value && _stateObject[s1].value !== "") { 
        return {
            gameOver: true,
            winner: _stateObject[s1].owner + " wins!!!"
        } 
    } else {
        return {
            gameOver: false,
            winner: "Let's Play!!"
        };
    }
}


