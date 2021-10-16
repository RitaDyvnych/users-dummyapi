import "./App.css";
import { Component } from "react";
import UsersApiService from "./apiService/fetchDummyapi";
import UserList from "./components/userList/UserList";
import Modal from "./components/modal/Modal";
import Form from "./components/addNewUserForm/AddNewUserForm";

const newUsersApiService = new UsersApiService();

class App extends Component {
  state = {
    users: [],
    status: "idle",
    showModal: false,
  };

  componentDidMount() {
    newUsersApiService.searchUsers().then((result) => {
      this.setState({ users: result.data });
    });
  }
  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  addNewUser = () => {};

  handleClick = (e) => {
    newUsersApiService.pages = 1;
    newUsersApiService.searchUsers().then((result) => {
      this.setState((prev) => ({
        users: [...prev.users, ...result.data],
      }));
      this.onPageScroll();
    });
  };

  onPageScroll() {
    window.scrollTo({
      top: document.documentElement.offsetHeight,
      behavior: "smooth",
    });
  }

  render() {
    const { users, status } = this.state;
    if (status === "idle") {
      return (
        <div className="App">
          <h1>Users from DummiApi</h1>
          <button type="button" onClick={this.toggleModal} className="Button">
            Add new user
          </button>
          <ul className="ImageGallery">
            <UserList users={users} />
          </ul>
          {this.state.showModal && (
            <Modal toggleModal={this.toggleModal}>
              <Form addNewUser={this.addNewUser} />
            </Modal>
          )}
          <button type="button" onClick={this.handleClick} className="Button">
            Load more
          </button>
        </div>
      );
    }
  }
}

export default App;
