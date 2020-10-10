import api from "../api";

class PostService {
  constructor() {
    throw new Error("Esta classe não pode ser instanciada");
  }

  static getPosts(data) {
    return new Promise((resolve, reject) => {
      api
        .get(`/posts`, data)
        .then((data) => {
          resolve(data);
        })
        .catch((data) => {
          reject(data);
        });
    });
  }
}

export default PostService;