import api from "../api";

class UserService {
  constructor() {
    throw new Error("Esta classe não pode ser instanciada");
  }

  static getUsers(data) {
    return new Promise((resolve, reject) => {
      api
        .get(`/users`, data)
        .then((data) => {
          resolve(data);
        })
        .catch((data) => {
          reject(data);
        });
    });
  }
}

export default UserService;