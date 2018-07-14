import React from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import nextMove from "../logic/nextMove"
import resetGame from "../logic/resetGame"
import "./App.css";
import "./Reset.css"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
        winner: "Let's Play!!"
      }
    }
  }

  handleClick = (buttonName) => {
    this.setState(nextMove(this.state.gameState, buttonName));
  };

  handleReset = () => {
    this.setState(resetGame());
  }

  render() {
    return (

      <div className="flex-container">
          <div id="display-box" class="flex-item"> <Display value={this.state.gameStatus.winner} /></div>
          <div id="game-board" class="flex-item">
          <ButtonPanel clickHandler={this.handleClick} gameState={this.state.gameState} isGameOver={!this.state.gameStatus.gameOver}/>
          </div>
          <div id="controls" class="flex-item">
            <button className="reset-button" onClick={this.handleReset}>R E S E T</button>
          </div>
      </div> 

    );
  }
}
export default App;
