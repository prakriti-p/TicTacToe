import Button from "./Button";
import React from "react";
import PropTypes from "prop-types";
import "./ButtonPanel.css";

class ButtonPanel extends React.Component {
  handleClick = buttonName => {
    this.props.clickHandler(buttonName);
  };
  render() {
    return (
      <div id="game-board" class="flex-item">
        <div className="component-button-panel">
          <div>
            <Button name="1" clickHandler={this.handleClick} value={this.props.gameState[1].value} isGameOver={this.props.isGameOver} />
            <Button name="2" clickHandler={this.handleClick} value={this.props.gameState[2].value} isGameOver={this.props.isGameOver} />
            <Button name="3" clickHandler={this.handleClick} value={this.props.gameState[3].value} isGameOver={this.props.isGameOver} />
          </div>
          <div>
            <Button name="4" clickHandler={this.handleClick} value={this.props.gameState[4].value} isGameOver={this.props.isGameOver} />
            <Button name="5" clickHandler={this.handleClick} value={this.props.gameState[5].value} isGameOver={this.props.isGameOver} />
            <Button name="6" clickHandler={this.handleClick} value={this.props.gameState[6].value} isGameOver={this.props.isGameOver} />
          </div>
          <div>
            <Button name="7" clickHandler={this.handleClick} value={this.props.gameState[7].value} isGameOver={this.props.isGameOver} />
            <Button name="8" clickHandler={this.handleClick} value={this.props.gameState[8].value} isGameOver={this.props.isGameOver} />
            <Button name="9" clickHandler={this.handleClick} value={this.props.gameState[9].value} isGameOver={this.props.isGameOver} />
          </div>
        </div>
      </div>
    );
  }
}
ButtonPanel.propTypes = {
  clickHandler: PropTypes.func,
  gameState: PropTypes.object,
  isGameOver: PropTypes.bool
};
export default ButtonPanel;
