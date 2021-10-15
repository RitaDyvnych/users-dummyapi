import dummiapi from "../apiService/dummyapi.json";

export default class UsersApiService {
  constructor() {
    //this.searchQuery = "";
    this.page = 1;
    this.base_url = dummiapi.base_url;
    this.api_id = dummiapi.app_id;
    this.content = dummiapi.content_type;
    this.limit = dummiapi.limit;
  }
  get pages() {
    return this.page;
  }
  set pages(value) {
    this.page += value;
  }

  searchUsers() {
    const url = `${this.base_url}user?page=${this.page}&limit=${this.limit}`;
    console.log(url);
    return fetch(url, {
      headers: {
        "Content-Type": `${this.content}`,
        "app-id": `${this.api_id}`,
      },
    }).then((response) => response.json());
    // .then(result => console.log("result", result.data));
  }
}
