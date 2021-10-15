import "./App.css";
import { Component } from "react";
import UsersApiService from "./apiService/fetchDummyapi";
import UserList from "./components/userList/UserList";

const newUsersApiService = new UsersApiService();

class App extends Component {
  state = {
    users: [],
    status: "idle",
  };

  componentDidMount() {
    newUsersApiService.searchUsers().then((result) => {
      this.setState({ users: result.data });
    });
  }

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
          <button type="button" onClick={this.handleClick} className="Button">
            Add new user
          </button>
          <ul className="ImageGallery">
            <UserList users={users} />
          </ul>
          <button type="button" onClick={this.handleClick} className="Button">
            Load more
          </button>
        </div>
      );
    }
  }
}

export default App;
