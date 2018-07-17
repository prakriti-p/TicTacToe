import isGameOver from "./isGameOver";
import checkWinningSpot from "./checkWinningSpot";

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
            var pcWinningSpot = checkWinningSpot(gameStateDenotingNextMove, "O");
            var userWinningSpot = checkWinningSpot(gameStateDenotingNextMove, "X");
            var spotForNextPCMove;
            if(pcWinningSpot !== 0) {
                spotForNextPCMove = pcWinningSpot;
            } else if(userWinningSpot !== 0) {
                spotForNextPCMove = userWinningSpot
            } else {
                spotForNextPCMove = leftOverSpots[Math.floor(Math.random() * leftOverSpots.length)];
            }
            
            gameStateDenotingNextMove[spotForNextPCMove].value = "O";
            gameStateDenotingNextMove[spotForNextPCMove].owner = "PC";
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
