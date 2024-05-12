import { AxiosError } from "axios";
import { AuthUser } from "../types/AuthData";
import { axiosClient } from "./axios";

export default class LoginService {
  async login(user: AuthUser) {
    const url = "auth/login";
    const params = new URLSearchParams();
    params.append("username", user.username);
    params.append("password", user.password);

    try {
      const response = await axiosClient.post(url, params.toString(), {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      return { status: response.status, data: response.data };
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axiosError.response) {
        return {
          status: axiosError.response.status,
          data: axiosError.response.data,
        };
      } else {
        throw new Error(
          "Ocorreu um erro ao tentar fazer o login. Por favor, tente novamente.",
        );
      }
    }
  }
}
