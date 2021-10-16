import { Component } from "react";
import style from "./addUserBtn.module.css";
import PropTypes from "prop-types";

export default class AddUserBtn extends Component {
  render() {
    return (
      <button
        type="button"
        onClick={this.props.toggleModal}
        className={style.button}
      >
        Add new user
      </button>
    );
  }
}

AddUserBtn.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};
