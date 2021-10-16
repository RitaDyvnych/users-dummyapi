import { Component } from "react";
import style from "./userListItem.module.css";
import PropTypes from "prop-types";
import img from "../../images/duck.jpeg";

export default class UserList extends Component {
  render() {
    return this.props.users.map((el) => (
      <li className={style.ImageGalleryItem} key={el.id}>
        <img
          src={el.picture ? el.picture : img}
          alt={`${el.firstName} ${el.lastName}`}
          className={style.ImageGalleryItem__image}
        />
        <p>
          {el.title}. {el.firstName} {el.lastName}
        </p>
      </li>
    ));
  }
}

UserList.propTypes = {
  users: PropTypes.array.isRequired,
};
