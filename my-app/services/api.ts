import { useAuthStore } from "@/stores/userStore";
import axios from "axios";

export const api = axios.create({
  baseURL: "https://readjourney.b.goit.study/api",
});

api.interceptors.request.use((config) => {
  // Дістаємо токен зі сховища (наприклад, localStorage або Zustand)
  const token = useAuthStore.getState().token;

  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
