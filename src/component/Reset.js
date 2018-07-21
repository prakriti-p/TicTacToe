import React from "react";
import PropTypes from "prop-types";
import "./Reset.css";

class Reset extends React.Component {
    handleClickFunction = () => {
        this.props.resetFunction();
    }

    render() {
        return (
            <div id="controls" class="flex-item">
                <button className="reset-button" onClick={this.handleClickFunction}>R E S E T</button>
            </div>
        );
    }
}
Reset.propTypes = {
  resetFunction: PropTypes.func
};
export default Reset;
