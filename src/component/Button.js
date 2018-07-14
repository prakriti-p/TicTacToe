import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

class Button extends React.Component {
  handleClick = () => {
    this.props.clickHandler(this.props.name);
  };
  isSlotPlayed = (value) => {
    if(value === "") {
      return 'empty-slot';
    } else if(value === "X") {
      return "user-slot";
    } else if(value === "O") {
      return "pc-slot";
    }
  };
  render() {
    return (
      <div className="component-button">
        <button className={this.isSlotPlayed(this.props.value)} onClick={this.handleClick} disabled={!this.props.isGameOver || this.props.value!==""}>{this.props.value}</button>
      </div>
    );
  }
}
Button.propTypes = {
  name: PropTypes.string,
  clickHandler: PropTypes.func,
  value: PropTypes.string,
  isGameOver: PropTypes.bool
};
export default Button;
