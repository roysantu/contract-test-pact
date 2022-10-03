import axios from "axios";
import adapter from "axios/lib/adapters/http";

axios.defaults.adapter = adapter;

export class AppApi {
  constructor(url) {
    if (url === undefined || url === "") {
      url = process.env.REACT_APP_API_BASE_URL;
    }
    if (url.endsWith("/")) {
      url = url.substr(0, url.length - 1);
    }
    this.url = url;
  }

  withPath(path) {
    if (!path.startsWith("/")) {
      path = "/" + path;
    }
    return `${this.url}${path}`;
  }

  // TODO auth functions

  async getAllItems() {
    return axios
      .get(this.withPath("/movies"), {
        // TODO add headers
      })
      .then((r) => r.data);
  }
}

export default new AppApi(process.env.REACT_APP_API_BASE_URL);
