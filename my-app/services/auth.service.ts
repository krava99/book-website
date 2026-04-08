import { AuthResponse } from "@/types/userSchema";
import { api } from "./api";

export const signUp = async (
  email: string,
  name: string,
  password: string,
): Promise<AuthResponse> => {
  const res = await api.post("/users/signup", { email, name, password });
  return res.data;
};

export const signIn = async (
  email: string,
  password: string,
): Promise<AuthResponse> => {
  const res = await api.post("/users/signin", { email, password });
  return res.data;
};
