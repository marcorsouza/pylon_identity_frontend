// store/authStore.ts
import { create } from "zustand";
import { signIn, signOut } from "next-auth/react";

interface AuthState {
  user: any | null;
  isAuthenticated: boolean;
  message: string;
  //loginAttempt: number;  // Identificador único para cada tentativa de login
  setUser: (user: any | null) => void;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  setMessage: (message: string) => void;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  message: "",
  loginAttempt: 0, // Inicializa o contador
  setUser: (user) => set({ user }),
  setIsAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
  setMessage: (message) => set({ message }),
  //setLoginAttempt: () => set((state) => ({ loginAttempt: state.loginAttempt + 1 })),  // Incrementa o contador
  login: async (username: string, password: string) => {
    //set((state) => ({ loginAttempt: state.loginAttempt + 1 }));  // Atualiza o contador a cada login
    const result = await signIn("credentials", {
      username,
      password,
      redirect: false,
    });
    if (result && !result.error) {
      set({
        isAuthenticated: true,
        user: { username },
        message: "Logged in successfully!",
      });
    } else {
      set({ isAuthenticated: false, message: result?.error || "Login failed" });
    }
  },
  logout: () => {
    signOut({ callbackUrl: "/" });
    set({
      isAuthenticated: false,
      user: null,
      message: "Logged out successfully!",
    });
  },
}));
