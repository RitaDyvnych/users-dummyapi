import { Component } from "react";
import style from "./addNewUserForm.module.css";

export default class Form extends Component {
  state = {
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    avatar: "",
  };

  handleSubmit = () => {};
  handleChangeAllInputs = () => {};

  render() {
    const { title, firstName, lastName, email, avatar } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <p>New User's Info</p>
        <label htmlFor={title}>Title</label>
        <select
          name="title"
          value={title}
          onChange={this.handleChangeAllInputs}
          // id={userTitle}
        >
          <option value="" disabled>
            ...
          </option>
          <option value="mr">mr</option>
          <option value="mrs">mrs</option>
          <option value="ms">ms</option>
          <option value="miss">miss</option>
          <option value="dr">dr</option>
        </select>
        <input
          className={style.input}
          type="text"
          // id={prodIdtitle}
          name="firstName"
          value={firstName}
          autoComplete="off"
          placeholder="First Name"
          aria-label="users first name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Username must contain only letters, hyphen(-), space or apostrophe. Examples: Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan etc."
          required
          onChange={this.handleChangeAllInputs}
        />
        <input
          className={style.input}
          type="text"
          // id={prodIdtitle}
          name="lastName"
          value={lastName}
          autoComplete="off"
          placeholder="Last Name"
          aria-label="users last name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Username must contain only letters, hyphen(-), space or apostrophe. Examples: Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan etc."
          required
          onChange={this.handleChangeAllInputs}
        />
        <input
          className={style.input}
          type="email"
          // id={prodIdtitle}
          name="email"
          value={email}
          autoComplete="off"
          placeholder="Email"
          aria-label="users email"
          pattern="^[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          title="Please enter a valid email address"
          required
          onChange={this.handleChangeAllInputs}
        />
        <input
          className={style.input}
          type="url"
          // id={prodIdtitle}
          name="avatar"
          value={avatar}
          autoComplete="off"
          placeholder="Avatar URL http(s)://example.com"
          aria-label="avatar url"
          pattern="^(http|https)://\.(.*)"
          title="Please enter a valid url address"
          onChange={this.handleChangeAllInputs}
        />
        <button type="submit" className={style.addButton}>
          Add user
        </button>
      </form>
    );
  }
}
