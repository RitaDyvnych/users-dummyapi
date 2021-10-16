import { Component } from "react";
import style from "./loadMoreBtn.module.css";
import PropTypes from "prop-types";

export default class LoadMoreBtn extends Component {
  render() {
    return (
      <button
        type="button"
        onClick={this.props.handleClick}
        className={style.button}
      >
        Load more
      </button>
    );
  }
}

LoadMoreBtn.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
