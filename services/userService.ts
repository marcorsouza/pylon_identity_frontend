import { axiosClient } from "./axios";
import { AxiosError } from "axios";

export default class LoginService {
  async getUsers(token: string) {
    const url = "http://127.0.0.1:8000/admin/users";
    try {
      const response = await axiosClient.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
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
          "Ocorreu um erro ao tentar buscar lista de usuarios. Por favor, tente novamente.",
        );
      }
    }
  }
}
