import isGameOver from "./isGameOver";

export default function nextMove(_stateObject, _currentMove) {
    var gameStateDenotingNextMove = _stateObject;
    gameStateDenotingNextMove[_currentMove].value = "X";
    gameStateDenotingNextMove[_currentMove].owner = "User";
    let gameStatusAfterUserPlayed = isGameOver(gameStateDenotingNextMove);
    if(gameStatusAfterUserPlayed.gameOver === false) {
        let leftOverSpots = [];
        var keys = Object.keys(gameStateDenotingNextMove);
        keys.forEach(element => {
            if(gameStateDenotingNextMove[element].value === "") {
                leftOverSpots.push(element);
            }
        });
        if(leftOverSpots.length > 0) {
            var random = leftOverSpots[Math.floor(Math.random() * leftOverSpots.length)];
            gameStateDenotingNextMove[random].value = "O";
            gameStateDenotingNextMove[random].owner = "PC";
            let gameStatusAfterPCPlayed = isGameOver(gameStateDenotingNextMove);
            if(gameStatusAfterPCPlayed.gameOver === false) {
                gameStateDenotingNextMove["gameStatus"] = gameStatusAfterPCPlayed;
                return gameStateDenotingNextMove;
            } else {
                gameStateDenotingNextMove["gameStatus"] = gameStatusAfterPCPlayed;
                return gameStateDenotingNextMove;
            }            
        } else {
            gameStatusAfterUserPlayed.winner = "Match Draw";
            gameStateDenotingNextMove["gameStatus"] = gameStatusAfterUserPlayed;
            return gameStateDenotingNextMove;
        }   
    } else {
        gameStateDenotingNextMove["gameStatus"] = gameStatusAfterUserPlayed;
        return gameStateDenotingNextMove;
    } 
}
