import { z } from "zod";

export const registerSchema = z.object({
  name: z
    .string()
    .min(2, "Name must have at least 2 characters")
    .max(15, "Name must have at most 15 characters"),
  email: z.string().email("Invalid email"),
  password: z.string().min(5, "Password number must have at least 10 digits"),
});

export type RegisterSchemaType = z.infer<typeof registerSchema>;
