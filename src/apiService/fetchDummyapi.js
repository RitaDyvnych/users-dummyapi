import dummiapi from "../apiService/dummyapi.json";

export default class UsersApiService {
  constructor(user) {
    this.page = 1;
    this.base_url = dummiapi.base_url;
    this.api_id = dummiapi.app_id;
    this.content = dummiapi.content_type;
    this.limit = dummiapi.limit;
    this.user = user;
  }
  get pages() {
    return this.page;
  }
  set pages(value) {
    this.page += value;
  }

  getUsers() {
    const url = `${this.base_url}user?page=${this.page}&limit=${this.limit}`;
    const options = {
      headers: {
        "Content-Type": `${this.content}`,
        "app-id": `${this.api_id}`,
      },
    };
    return fetch(url, options).then((response) => response.json());
  }

  createUser() {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": `${this.content}`,
        "app-id": `${this.api_id}`,
      },
      body: JSON.stringify(this.user),
    };
    const url = `${this.base_url}user/create`;
    return fetch(url, options).then((response) => response.json());
  }
}
