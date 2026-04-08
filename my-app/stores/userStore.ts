import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface User {
  email: string;
  password?: string;
  name?: string;
}

// Описуємо структуру всього сховища
interface AuthState {
  user: User | null;
  token: string | null;
  refreshToken: string | null;
  isLoggin: boolean;
  // Метод для входу/реєстрації
  setAuth: (data: {
    email: string;
    name?: string;
    password?: string;
    token: string;
    refreshToken: string;
  }) => void;
  // Метод для виходу (логаут)
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      refreshToken: null,
      isLoggin: false,

      setAuth: (data) => {
        set({
          user: { email: data.email, name: data.name, password: data.password },
          token: data.token,
          refreshToken: data.refreshToken,
          isLoggin: true,
        });
      },

      logout: () =>
        set({ user: null, token: null, refreshToken: null, isLoggin: false }),
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage), // Це безпечний спосіб для Next.js
    },
  ),
);
