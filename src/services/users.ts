import { AxiosRequestConfig } from "axios";
import api from "../api";

class UserService {
  constructor() {
    throw new Error("Esta classe não pode ser instanciada");
  }

  static getUsers(data: any): Promise<any> {
    return new Promise((resolve, reject) => {
      api
        .get(`/users`, data)
        .then((data: any) => {
          resolve(data);
        })
        .catch((data) => {
          reject(data);
        });
    });
  }
}

export default UserService;