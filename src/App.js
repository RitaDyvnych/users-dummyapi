import "./App.css";
import { Component } from "react";
import UsersApiService from "./apiService/fetchDummyapi";
import UserList from "./components/userListItem/UserListItem";
import Modal from "./components/modal/Modal";
import Form from "./components/addNewUserForm/AddNewUserForm";
import AddUserBtn from "./components/addUserBtn/AddUserBtn";
import LoadMoreBtn from "./components/loadMoreBtn/LoadmoreBtn";

const newUsersApiService = new UsersApiService();

class App extends Component {
  state = {
    users: [],
    showModal: false,
  };

  componentDidMount() {
    newUsersApiService
      .getUsers()
      .then((result) => {
        this.setState({ users: result.data });
      })
      .catch((error) => {
        alert(`Ooops! Somethind went wrong \n${error.message}`);
      });
  }
  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  addNewUser = (obj) => {
    const addNewUsersApiService = new UsersApiService(obj);
    addNewUsersApiService
      .createUser()
      .then((result) => {
        this.setState((prevState) => ({ users: [...prevState.users, result] }));
        this.onPageScroll();
        alert("New user was added successfully!");
      })
      .catch((error) => {
        alert(`Ooops! Somethind went wrong \n${error.message}`);
      });
  };

  loadMore = (e) => {
    newUsersApiService.pages = 1;
    newUsersApiService
      .getUsers()
      .then((result) => {
        this.setState((prev) => ({
          users: [...prev.users, ...result.data],
        }));
        this.onPageScroll();
      })
      .catch((error) => {
        alert(`Ooops! Somethind went wrong \n${error.message}`);
      });
  };

  onPageScroll() {
    window.scrollTo({
      top: document.documentElement.offsetHeight,
      behavior: "smooth",
    });
  }

  render() {
    const { users } = this.state;
    return (
      <div className="App">
        <h1 className="title">Users from DummiApi</h1>
        <AddUserBtn toggleModal={this.toggleModal} />
        {this.state.showModal && (
          <Modal toggleModal={this.toggleModal}>
            <Form addNewUser={this.addNewUser} toggleModal={this.toggleModal} />
          </Modal>
        )}
        <ul className="imageGallery">
          <UserList users={users} />
        </ul>
        <LoadMoreBtn handleClick={this.loadMore} />
      </div>
    );
  }
}

export default App;
