import { Component } from "react";
import style from "./backToTopBtn.module.css";

export default class BackToTopBtn extends Component {
  state = {
    is_visible: false,
  };
  componentDidMount() {
    window.addEventListener("scroll", this.toggleVisibility);
  }
  toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      this.setState({
        is_visible: true,
      });
    } else {
      this.setState({
        is_visible: false,
      });
    }
  };
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  render() {
    const { is_visible } = this.state;
    return (
      <div>
        {is_visible && (
          <button
            type="button"
            onClick={this.scrollToTop}
            className={style.backToTop}
          >
            &#x25B2;
          </button>
        )}
      </div>
    );
  }
}
