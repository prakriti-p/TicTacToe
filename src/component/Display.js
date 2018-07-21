import React from "react";
import PropTypes from "prop-types";
import "./Display.css";

class Display extends React.Component {
  render() {
    return (
      <div id="display-box" class="flex-item">
        <div className="component-display">
          <div>{this.props.value}</div>
        </div>
      </div>
    );
  }
}
Display.propTypes = {
  value: PropTypes.string,
};
export default Display;
