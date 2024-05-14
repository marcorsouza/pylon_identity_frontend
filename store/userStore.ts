import { create } from "zustand";
import UserService from "../services/userService"; // Ajuste o caminho conforme necessário

interface UserState {
  users: any[] | null;
  message: string;
  token: string; // Presumindo que o token é gerenciado aqui
  setUsers: (users: any[] | null) => void;
  setMessage: (message: string) => void;
  setToken: (token: string) => void;
  getUsers: () => Promise<void>;
}

export const useUserStore = create<UserState>((set, get) => ({
  users: null,
  message: "",
  token: "",
  setUsers: (users) => set({ users }),
  setMessage: (message) => set({ message }),
  setToken: (token) => set({ token }),
  getUsers: async () => {
    const { token } = get(); // Obtenha o token do estado
    const userService = new UserService();
    const { status, data } = await userService.getUsers(token);
    if (status === 200) {
      set({ users: data.users, message: "Usuários carregados com sucesso!" });
    } else {
      set({ message: `Erro ${status}: ${data.message}` });
    }
  },
}));
