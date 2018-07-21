export default function resetGame() {  
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
