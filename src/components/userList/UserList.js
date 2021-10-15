import { Component } from "react";
import style from "./userList.module.css";

export default class UserList extends Component {
  render() {
    return this.props.users.map((el) => (
      <li className={style.ImageGalleryItem} key={el.id}>
        <img
          src={el.picture}
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
