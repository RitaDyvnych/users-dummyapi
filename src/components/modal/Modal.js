import { Component } from "react";
import { createPortal } from "react-dom";
import style from "./modal.module.css";
import PropTypes from "prop-types";

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleEscape);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleEscape);
  }
  handleEscape = (e) => {
    let condition = e.code === "Escape";
    if (condition) {
      this.props.toggleModal();
    }
  };
  handleClose = (e) => {
    if (e.currentTarget === e.target) {
      this.props.toggleModal();
    }
  };
  render() {
    const { children } = this.props;
    return createPortal(
      <div className={style.backDrop} onClick={this.handleClose}>
        <div className={style.content}>{children}</div>
      </div>,
      document.getElementById("modalRoot")
    );
  }
}

Modal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};
