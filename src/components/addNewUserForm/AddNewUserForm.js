import { Component } from "react";
import style from "./addNewUserForm.module.css";
import PropTypes from "prop-types";

export default class Form extends Component {
  state = {
    title: "mr",
    firstName: "",
    lastName: "",
    email: "",
    picture: "",
    user: null,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { title, firstName, lastName, email, picture } = this.state;
    const user = {
      id: "",
      title,
      firstName,
      lastName,
      email,
      picture,
    };
    this.setState({ user });
    this.props.addNewUser(user);
    this.resetform();
    this.props.toggleModal();
  };

  handleChangeAllInputs = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  resetform = () => {
    this.setState({ ...this.state });
  };

  render() {
    const { title, firstName, lastName, email, picture } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <p className={style.title}>New User's Info</p>
        <label htmlFor={title} className={style.label}>
          Title
        </label>
        <select
          className={style.select}
          name="title"
          value={title}
          onChange={this.handleChangeAllInputs}
          // id={userTitle}
        >
          <option value="mr">mr</option>
          <option value="mrs">mrs</option>
          <option value="ms">ms</option>
          <option value="miss">miss</option>
          <option value="dr">dr</option>
        </select>
        <input
          className={style.input}
          type="text"
          // id={Idtitle}
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
          // id={Idtitle}
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
          // id={Idtitle}
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
          // id={Idtitle}
          name="picture"
          value={picture}
          autoComplete="off"
          placeholder="Avatar URL http(s)://example.com"
          aria-label="avatar url"
          pattern="http(s)?://.*"
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

Form.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  addNewUser: PropTypes.func.isRequired,
};
