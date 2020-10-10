import api from "../api";

class CommentsService {
  constructor() {
    throw new Error("Esta classe não pode ser instanciada");
  }

  static getComments(data) {
    return new Promise((resolve, reject) => {
      api
        .get(`/comments`, data)
        .then((data) => {
          resolve(data);
        })
        .catch((data) => {
          reject(data);
        });
    });
  }
}

export default CommentsService;